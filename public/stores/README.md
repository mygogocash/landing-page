# Store Logos

## Adding Official Store Logos

Place your official store logo files in this directory. The logos should be named according to the store slug defined in `/data/stores.ts`.

### File Naming Convention

- Use the store `slug` from the stores data file
- Format: `{store-slug}.svg` or `{store-slug}.png`
- Examples:
  - `shopee.svg`
  - `lazada.svg`
  - `agoda.svg`
  - `trip-com.svg`

### Recommended Specifications

- **Format**: SVG (preferred) or PNG with transparent background
- **Size**: 64x64px minimum, up to 128x128px
- **Aspect Ratio**: Square or maintain brand guidelines
- **Background**: Transparent
- **Color**: Full color logos preferred

### Current Store List

The following stores are configured in `/data/stores.ts`:

1. Shopee - `shopee.svg`
2. Lazada - `lazada.svg`
3. Agoda - `agoda.svg`
4. Trip.com - `trip-com.svg`
5. Central - `central.svg`
6. The Mall - `the-mall.svg`
7. Big C - `big-c.svg`
8. 7-Eleven - `7-eleven.svg`
9. Tesco Lotus - `tesco-lotus.svg`
10. Makro - `makro.svg`
11. Booking.com - `booking-com.svg`
12. Expedia - `expedia.svg`

### Fallback Behavior

If a store logo is not found:
- The component will display a generic store icon
- The store name will still be displayed
- The card will function normally

### Adding New Stores

1. Add the store data to `/data/stores.ts`
2. Place the logo file in this directory with the matching slug name
3. The logo will automatically appear in the Partner Stores section
