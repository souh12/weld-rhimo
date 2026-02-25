# Voitures Premium - Blueprint

## Overview

Voitures Premium is a modern, responsive WordPress theme for a luxury car dealership. It is designed to be a premium and user-friendly experience for browsing and purchasing high-end vehicles.

## Project Documentation

### Initial Version

*   **Project Setup:** Basic HTML, CSS, and JavaScript files.
*   **Design:**
    *   **Color Palette:** Dark theme with gold accents. Primary: `#1a1a1a`, Secondary: `#2c2c2c`, Accent: `#d4af37`, Text: `#ffffff`.
    *   **Typography:** 'Poppins' for headings and 'Roboto' for body text.
    *   **Layout:** Clean, modern layout with a container width of 1200px.
*   **Pages:**
    *   Home (`index.html`)
    *   Catalogue (`catalog.html`)
    *   Équipe (`equipe.html`)
    *   Contact (`contact.html`)
    *   Vendez Votre Voiture (`sell-your-car.html`)
    *   Car Details (`car-details.html`)
*   **Features:**
    *   Responsive navigation bar.
    *   Hero section with a background image and slogan.
    *   Car filtering section.
    *   "Top Deals" and "Latest Cars" sections on the home page.
    *   CTA section.
    *   Detailed footer with business information and social media links.
    *   Floating WhatsApp button.
    *   Contact form.
    *   Sell car form.

### WordPress Theme Conversion

*   **File Conversion:** All `.html` files were converted to `.php` files.
*   **WordPress Integration:**
    *   Added `wp_head()` and `wp_footer()` to all `.php` files.
    *   Created `functions.php` to enqueue stylesheets and scripts.
    *   Created `style.css` with the required WordPress theme headers.

## Current Plan

**Objective:** Populate the website with dynamic content using JavaScript.

**Steps:**

1.  **Home Page (`index.php`):**
    *   Create dummy data for cars in `main.js`.
    *   Dynamically generate "Top Deals" and "Latest Cars" car cards using JavaScript.
    *   Inject the generated car cards into the `index.php` file.
2.  **Catalogue Page (`catalog.php`):**
    *   Dynamically generate the car catalog using the dummy data.
    *   Implement filtering functionality.
3.  **Équipe Page (`equipe.php`):**
    *   Create dummy data for team members.
    *   Dynamically generate team member cards.
4.  **Car Details Page (`car-details.php`):**
    *   Dynamically populate the car details page based on the selected car.
