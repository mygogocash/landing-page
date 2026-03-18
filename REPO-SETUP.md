# Create GitHub repo under mygogocash

Create this landing page as a new repository under the [mygogocash](https://github.com/orgs/mygogocash/repositories) organization.

---

## Option 1: GitHub CLI (after re-auth)

1. Re-authenticate:
   ```bash
   gh auth login -h github.com
   ```

2. From this folder (`Landing page`), create the repo and push:
   ```bash
   cd "/Users/kunanonjarat/Desktop/GoGoCash/App Development/Landing page"

   git init
   git add .
   git commit -m "Initial commit: GoGoCash landing page with Coins.co.th UX reference"

   gh repo create mygogocash/landing-page --public \
     --description "GoGoCash landing page: save cash on every spend, Coins.co.th UX/UI reference, splash, trust strip, value cards, app block, FAQ" \
     --source=. --remote=origin --push
   ```

   If the repo name `landing-page` is taken, use e.g. `gogocash-landing` or `gogocash-website`.

---

## Option 2: GitHub website

1. Go to [github.com/organizations/mygogocash/repositories/new](https://github.com/organizations/mygogocash/repositories/new) (or **New** from [mygogocash repos](https://github.com/orgs/mygogocash/repositories)).

2. Set:
   - **Repository name:** `landing-page` (or `gogocash-landing`)
   - **Description:**  
     `GoGoCash landing page: save cash on every spend, Coins.co.th UX/UI reference, splash, trust strip, value cards, app block, FAQ`
   - **Visibility:** Public
   - Leave “Add a README” unchecked (you already have one).

3. Click **Create repository**.

4. In this folder, run:
   ```bash
   cd "/Users/kunanonjarat/Desktop/GoGoCash/App Development/Landing page"

   git init
   git add .
   git commit -m "Initial commit: GoGoCash landing page with Coins.co.th UX reference"
   git branch -M main
   git remote add origin https://github.com/mygogocash/landing-page.git
   git push -u origin main
   ```
   (Replace `landing-page` with your actual repo name if different.)

---

## Suggested repo description (for GitHub)

Use this as the **Repository description** on GitHub:

**Short (≤350 chars):**
> GoGoCash landing page: save cash on every spend. Static site with splash, hero, trust strip, value cards, how-it-works, app download, features, insights, community, FAQ. Coins.co.th UX/UI reference. HTML, CSS, JS.

**One-liner:**
> GoGoCash marketing landing page — save cash on every spend; Coins.co.th UX/UI reference; splash, trust strip, value cards, app block, FAQ.
