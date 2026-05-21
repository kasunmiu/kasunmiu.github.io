# Kasun Miuranga — Portfolio Website

Next.js 15 App Router | CSS Modules | Font Awesome

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  app/
    layout.jsx        # Root layout, imports globals.css
    page.jsx          # Home page (assembles all sections)
    globals.css       # Design tokens (CSS variables), reset, fonts
  components/
    Header/           # Sticky nav with mobile drawer
    Hero/             # Full-height intro with photo + stats
    Projects/         # 3-column project cards grid
    Testimonials/     # Review card with star rating
    Contact/          # Two-column email + socials card
    Footer/           # Dark footer with brand + link columns
public/
  images/
    kasunmiu.png      # Your portrait photo
    miusoft.png       # Project thumbnail
    godotsensei.png   # Project thumbnail
    yoogameart.png    # Project thumbnail
    clients/
      LisaMac.jpg     # Testimonial avatar
  logo.svg            # Optional — currently using text "K" mark
```

## Image Setup

Add your images to `public/images/`. The site will work without them
(placeholder styles are in place) but looks best with real photos.

## Color Theme

Edit CSS variables in `src/app/globals.css`:

```css
--color-blue: #2563eb;       /* Primary accent */
--color-blue-mid: #3b82f6;   /* Hover states */
--color-ink: #0f172a;        /* Main text */
```

## Fonts

Uses Google Fonts:
- **Playfair Display** — headings (display, serif)
- **DM Sans** — body text (clean, modern)

Both are loaded via `@import` in `globals.css`. No additional setup needed.

## Font Awesome

Already installed. Import icons in components:

```js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
```

## Build for Production

```bash
npm run build
npm start
```
