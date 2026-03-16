
## DEPLOYED:
 
https://intellitoggleassignment.onrender.com

## TO Run locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

## Architecture & Tech Stack
- **Framework:** Nuxt 3 (Vue 3 Composition API) for SSR and optimized performance.
- **Styling:** TailwindCSS for utility-first, consistent design implementation.
- **Components:** Modular structure with auto-imported components for clean, maintainable code.

## Tradeoffs & Implementation Notes
* **Styling:** Sometimes Tailwind's normal sizes didn't fit the design exactly, so I had to type in my own exact pixel numbers to make it match the screenshots perfectly.
* **Icons:** I put the icon code directly into the files instead of linking to images. This makes them show up right away so the page doesn't glitch or jump around while loading.
* **Making it work:** To make the buttons and toggles work, I just used the basic tools that come with Nuxt. I didn't want to overcomplicate things by downloading extra packages just for one page.


## Project Structure
- `/components`: Reusable UI sections (Hero, Features, Pricing, etc.)
- `/pixelay`: Screenshots and design comparison evidence.
- `/assets`: Global CSS and Tailwind theme configurations.
- `/pages`: Main entry point (`index.vue`).
- `/public`: Optimized images and static assets.