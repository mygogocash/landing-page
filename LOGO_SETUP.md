# Logo Setup Guide

This document explains how to add official logos to the GoGoCash landing page.

## 📁 Directory Structure

```
public/
├── logos/
│   ├── gogocash-logo.svg          # Main GoGoCash logo
│   └── social/
│       ├── facebook.svg            # Facebook logo
│       ├── line.svg                # Line Official logo
│       ├── instagram.svg           # Instagram logo
│       ├── twitter.svg             # Twitter/X logo
│       └── youtube.svg             # YouTube logo
└── stores/
    ├── shopee.svg                  # Shopee logo
    ├── lazada.svg                  # Lazada logo
    ├── agoda.svg                   # Agoda logo
    └── ...                         # Other store logos
```

## 🎯 What Was Updated

### 1. **Header Logo** (`components/header.tsx`)
- ✅ Replaced text "GoGoCash" with `<Logo>` component
- ✅ Automatically loads `/public/logos/gogocash-logo.svg`
- ✅ Falls back to text if logo not found
- ✅ Responsive sizing for header variant

### 2. **Footer Logo** (`components/footer.tsx`)
- ✅ Replaced text "GoGoCash" with `<Logo>` component
- ✅ Uses footer variant with appropriate sizing
- ✅ Falls back to text if logo not found

### 3. **Store Logos** (`app/page.tsx`)
- ✅ Replaced placeholder icons with `<StoreLogo>` component
- ✅ Uses store data from `/data/stores.ts`
- ✅ Automatically loads logos from `/public/stores/`
- ✅ Falls back to generic store icon if logo not found
- ✅ Displays actual store names and cashback rates

### 4. **Social Media Icons** (`components/footer.tsx`)
- ✅ Replaced Lucide icons with `<SocialIcon>` component
- ✅ Automatically loads logos from `/public/logos/social/`
- ✅ Falls back to Lucide icons if logos not found

## 📝 How to Add Official Logos

### Step 1: Add GoGoCash Logo

1. Place your official GoGoCash logo in:
   ```
   public/logos/gogocash-logo.svg
   ```
   Or PNG format:
   ```
   public/logos/gogocash-logo.png
   ```

2. Recommended specifications:
   - **Format**: SVG (preferred) or PNG
   - **Header size**: 140x45px (or maintain aspect ratio)
   - **Footer size**: 120x40px (or maintain aspect ratio)
   - **Background**: Transparent

### Step 2: Add Store Logos

1. For each store in `/data/stores.ts`, add the logo file:
   ```
   public/stores/{store-slug}.svg
   ```

2. Example store slugs:
   - `shopee.svg`
   - `lazada.svg`
   - `agoda.svg`
   - `trip-com.svg`
   - `central.svg`
   - etc.

3. Recommended specifications:
   - **Format**: SVG (preferred) or PNG
   - **Size**: 64x64px to 128x128px
   - **Aspect Ratio**: Square or maintain brand guidelines
   - **Background**: Transparent

### Step 3: Add Social Media Logos

1. Place social media logos in:
   ```
   public/logos/social/{platform}.svg
   ```

2. Supported platforms:
   - `facebook.svg`
   - `line.svg`
   - `instagram.svg`
   - `twitter.svg`
   - `youtube.svg`

3. Recommended specifications:
   - **Format**: SVG (preferred) or PNG
   - **Size**: 20x20px to 24x24px
   - **Aspect Ratio**: Square (1:1)
   - **Background**: Transparent

## 🔄 Fallback Behavior

All logo components have intelligent fallback behavior:

- **GoGoCash Logo**: Falls back to text "GoGoCash" if image not found
- **Store Logos**: Falls back to generic store icon if logo not found
- **Social Icons**: Falls back to Lucide React icons if logos not found

This ensures the site always displays something, even if logos are missing.

## ✅ Current Status

- ✅ Logo component structure created
- ✅ Store logo component created
- ✅ Social icon component created
- ✅ Header updated to use Logo component
- ✅ Footer updated to use Logo component
- ✅ Partner Stores section updated to use StoreLogo component
- ✅ Social media buttons updated to use SocialIcon component
- ✅ Store data structure created (`/data/stores.ts`)
- ✅ README files created in logo directories

## 🚀 Next Steps

1. Add your official GoGoCash logo to `public/logos/gogocash-logo.svg`
2. Add store logos to `public/stores/` directory
3. Add social media logos to `public/logos/social/` directory
4. Test the site to ensure all logos display correctly
5. Adjust store data in `/data/stores.ts` if needed

## 📚 Component Documentation

### `<Logo>` Component
- **Props**: `variant` ("default" | "footer" | "header"), `width`, `height`, `className`
- **Location**: `components/logo.tsx`
- **Usage**: `<Logo variant="header" />`

### `<StoreLogo>` Component
- **Props**: `storeName`, `logoUrl`, `size` ("sm" | "md" | "lg"), `className`
- **Location**: `components/store-logo.tsx`
- **Usage**: `<StoreLogo storeName="Shopee" logoUrl="/stores/shopee.svg" />`

### `<SocialIcon>` Component
- **Props**: `platform`, `size`, `className`
- **Location**: `components/social-icon.tsx`
- **Usage**: `<SocialIcon platform="facebook" size={20} />`
