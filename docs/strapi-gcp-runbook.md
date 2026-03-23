# Strapi on GCP (`gogocash-cms`) — runbook

Strapi source repo: **[github.com/mygogocash/strapi-learn-cms](https://github.com/mygogocash/strapi-learn-cms)**. This doc wires it to **project `gogocash-cms`**, **Cloud SQL (PostgreSQL)**, **Artifact Registry**, and **Cloud Run**.

## Prerequisites

- `gcloud` CLI installed and authenticated  
- Billing enabled on `gogocash-cms`  
- Cloud SQL **PostgreSQL** instance created; note **connection name**:  
  `gogocash-cms:REGION:INSTANCE_ID`  
- Database and user created for Strapi (e.g. database `strapi`, user `strapi`)

## 1. Enable APIs

```bash
gcloud config set project gogocash-cms
gcloud services enable run.googleapis.com sqladmin.googleapis.com \
  artifactregistry.googleapis.com cloudbuild.googleapis.com secretmanager.googleapis.com
```

## 2. Artifact Registry

```bash
export REGION=asia-southeast1   # adjust
gcloud artifacts repositories create strapi \
  --repository-format=docker \
  --location=$REGION \
  --description="GoGoCash Strapi CMS"
gcloud auth configure-docker ${REGION}-docker.pkg.dev
```

## 3. Secrets (Secret Manager)

Create secrets **once**; use the same Strapi secrets on every deploy (rotating changes sessions/tokens).

| Secret name (example) | Purpose |
|----------------------|---------|
| `DATABASE_PASSWORD` | Cloud SQL user password |
| `APP_KEYS` | Comma-separated keys (e.g. four `openssl rand -base64 32` values, comma-only separator) |
| `API_TOKEN_SALT` | Random string |
| `ADMIN_JWT_SECRET` | Random string |
| `TRANSFER_TOKEN_SALT` | Random string |
| `JWT_SECRET` | Random string |
| `ENCRYPTION_KEY` | Random string |

```bash
echo -n 'your-db-password' | gcloud secrets create DATABASE_PASSWORD --data-file=-
# Repeat for other secrets; use console or --data-file for multiline APP_KEYS
```

Grant the **Cloud Run service account** (default: `PROJECT_NUMBER-compute@developer.gserviceaccount.com`):

- **Secret Manager Secret Accessor** on each secret  
- **Cloud SQL Client** on the project (for the Cloud SQL instance)

## 4. Build and push the image

From the **strapi-learn-cms** directory:

```bash
gcloud builds submit --config=cloudbuild.yaml --project=gogocash-cms
```

This produces `REGION-docker.pkg.dev/gogocash-cms/strapi/strapi:latest` (and a `BUILD_ID` tag).

## 5. Deploy Cloud Run

Set `SQL_CONN` to your instance connection name, e.g. `gogocash-cms:asia-southeast1:my-db`.

```bash
export REGION=asia-southeast1
export SQL_CONN=gogocash-cms:asia-southeast1:YOUR_INSTANCE
export IMAGE=${REGION}-docker.pkg.dev/gogocash-cms/strapi/strapi:latest

gcloud run deploy strapi \
  --project=gogocash-cms \
  --region=$REGION \
  --image=$IMAGE \
  --platform=managed \
  --allow-unauthenticated \
  --add-cloudsql-instances=$SQL_CONN \
  --set-env-vars=NODE_ENV=production,DATABASE_CLIENT=postgres,CLOUDSQL_CONNECTION_NAME=$SQL_CONN,DATABASE_NAME=strapi,DATABASE_USERNAME=strapi \
  --set-secrets=DATABASE_PASSWORD=DATABASE_PASSWORD:latest,APP_KEYS=APP_KEYS:latest,API_TOKEN_SALT=API_TOKEN_SALT:latest,ADMIN_JWT_SECRET=ADMIN_JWT_SECRET:latest,TRANSFER_TOKEN_SALT=TRANSFER_TOKEN_SALT:latest,JWT_SECRET=JWT_SECRET:latest,ENCRYPTION_KEY=ENCRYPTION_KEY:latest \
  --memory=2Gi \
  --cpu=1 \
  --min-instances=0 \
  --timeout=300 \
  --port=1337
```

Adjust `--allow-unauthenticated` if you front the service with IAP or a load balancer.

First boot runs Strapi migrations; open **`/admin`** on the Cloud Run URL and create the admin user.

## 6. Permissions & content

1. **Settings → Users & Permissions → Public** — enable **find** and **findOne** for **Learn Article**, *or* keep the API private and use a read-only **API token** on the landing build.  
2. Create/publish articles, or seed from the landing repo: `npm run learn:strapi-push` with `STRAPI_PUSH_TOKEN`.

## 7. Landing site (this repo)

1. Set `STRAPI_URL` to the Cloud Run URL (HTTPS, no trailing slash).  
2. Set `STRAPI_API_TOKEN` if the API is not public.  
3. Run `npm run build` and deploy Firebase (or set GitHub Actions secrets — see [strapi-deployment.md](./strapi-deployment.md)).

## Troubleshooting

- **DB connection errors:** Confirm `--add-cloudsql-instances` matches `CLOUDSQL_CONNECTION_NAME`, and the Cloud Run SA has **Cloud SQL Client**.  
- **Admin not loading:** Increase **memory** (e.g. 2 GiB) and check logs: `gcloud run services logs read strapi --region=$REGION`.  
- **Secrets:** `gcloud run deploy` secret names must exist in Secret Manager; version `:latest` or a numeric version.

## Related

- [strapi-deployment.md](./strapi-deployment.md) — env vars and Firebase/CI  
- [strapi-learn-plan.md](./strapi-learn-plan.md) — content model checklist  
- `strapi-learn-cms/config/database.ts` — `CLOUDSQL_CONNECTION_NAME` socket path  
- `strapi-learn-cms/Dockerfile` — production image  
