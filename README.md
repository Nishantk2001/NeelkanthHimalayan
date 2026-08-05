# NeelKanth Himalayan Travels

A single-page tours & taxi service website for Himachal Pradesh — built with React and SCSS (via Vite).

## Sections (in order)

- **Navbar** — Logo, Home / About / Tours / Taxi / Contact (anchor links), "Book Tour" CTA
- **Hero** — full 100vh height, auto-changing background slider, "Book Tour" + "WhatsApp" buttons
- **Why Choose Us** (`#about`) — Local Experts, Best Price, 24/7 Support, Safe Travel
- **Popular Packages** (`#tours`) — Shimla–Manali, Spiti Valley, Kinnaur, Dharamshala, Dalhousie, Chamba
- **Taxi Services** (`#taxi`) — Sedan, SUV, Tempo Traveller, Luxury Cars
- **Gallery** — mountain photos, adventure activities, happy travellers
- **Customer Reviews** — star-rated testimonials
- **Contact** (`#contact`) — Call / WhatsApp / Email quick links, embedded Google Map, contact form
- **Footer**
- **Floating WhatsApp button** — fixed bottom-right on every section

## Run it locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Before you launch

- Replace the WhatsApp number (`918628918266`) in `Hero.jsx`, `WhatsappButton.jsx`, `TaxiServices.jsx`, `Contact.jsx` and `Footer.jsx` with your real business number.
- Swap the Unsplash placeholder images (hero slider, package cards, gallery) for your own photography.
- Update the Google Maps embed URL in `Contact.jsx` with your exact office location.
- The contact form validates client-side only — wire `handleSubmit` in `Contact.jsx` to an email/CRM endpoint to make it functional.
- All copy (packages, taxi pricing, reviews) is placeholder content — replace with your real offerings before launch.
