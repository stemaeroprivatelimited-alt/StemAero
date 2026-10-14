# STEM AERO - Official Static Website
> **"Where Curiosity Takes Flight"**

A modern, responsive, premium static website built for **STEM AERO**, providing trained STEM & robotics trainers to schools, a 10-year progressive curriculum (Classes 3 to 12), and turnkey AI & ATL robotics lab setups.

Built with clean **HTML5, CSS3 (Vanilla CSS with CSS variables, Grid, Flexbox), and Vanilla JavaScript**.

---

## 🚀 Quick Start (Local Usage)
1. **No build step, no npm, no backend, no server needed.**
2. Double-click `index.html` in your file explorer to open the website directly in any web browser (`file:///...`).
3. You can also view it through any local static server (e.g. VS Code Live Server).

---

## 📁 File Structure
```
d:/stemaero web/
│
├── index.html           # Home page (Hero, What We Do, Timeline, Pedagogy Ratio, Why STEM AERO, CTA)
├── about.html           # About Us (Story, Mission, Vision, Safety Commitment, Values)
├── services.html        # Services (Trainers, Curriculum, Lab Setup, 5-Step Process)
├── syllabus.html        # Interactive Syllabus Browser (Class 3-12 tabs, locked chapter cards, modal)
├── contact.html         # Contact page (WhatsApp, Email, Service Area, Dynamic Enquiry Form)
│
├── css/
│   └── style.css        # Core stylesheet (CSS variables, glassmorphism, responsive grid/flexbox)
│
├── js/
│   ├── script.js        # Main logic (Navbar, mobile menu, animations, ratio bar, modal, form)
│   └── syllabus-data.js # Clean JSON data for Classes 3 to 12 (Chapters and <=12-word teasers)
│
├── assets/
│   └── img/
│       └── logo.svg     # Official STEM AERO vector logo (used in navbar, footer, and favicon)
│
├── robots.txt           # SEO crawler directions
├── sitemap.xml          # XML sitemap for search engines
└── README.md            # Documentation & deployment guide
```

---

## ✏️ How to Edit Website Configuration & Contact Details

### 1. Change WhatsApp Number, Email, and Service Area
Open [`js/script.js`](file:///d:/stemaero%20web/js/script.js) and edit the `CONFIG` object at the top of the file:

```javascript
const CONFIG = {
  companyName: "STEM AERO",
  tagline: "Where Curiosity Takes Flight",
  whatsappNumber: "918171695355", // India country code 91 + 10-digit number
  whatsappDisplay: "+91 81716 95355",
  email: "info@stemaero.online",
  defaultWhatsAppMessage: "Hello STEM AERO, I would like to know more about your STEM, Robotics and AI programs for schools.",
  serviceArea: "Delhi NCR, Uttar Pradesh & Expanding Pan-India"
};
```

### 2. Change Brand Colors
Open [`css/style.css`](file:///d:/stemaero%20web/css/style.css) and edit the CSS variables in the `:root` block at the top:

```css
:root {
  --navy-primary: #0F2850;   /* Deep Navy */
  --royal-blue: #2A6AD0;     /* Primary Blue */
  --bright-blue: #1F73E8;    /* Accent Blue */
  --orange: #FF7A2F;         /* CTA Highlight Orange */
  --bg-light-tint: #EEF4FF;  /* Light Blue Section Tint */
  ...
}
```

---

## 📚 How to Edit Syllabus Data
Open [`js/syllabus-data.js`](file:///d:/stemaero%20web/js/syllabus-data.js).

The entire syllabus is structured as a clean JavaScript object:
```javascript
const STEM_AERO_SYLLABUS = {
  classes: [
    {
      id: "class-3",
      classNumber: 3,
      className: "Class 3",
      level: "Beginner",
      coding: "Scratch",
      focus: "Hands-on discovery of everyday mechanisms, circuits, and visual coding blocks.",
      chapters: [
        {
          number: "01",
          name: "STEM Around Us",
          teaser: "Discover the wonders of science and engineering in everyday life."
        },
        ...
      ]
    },
    ...
  ]
};
```
- To update chapter names or teaser descriptions, edit the values in `syllabus-data.js`.
- The `syllabus.html` page dynamically renders cards and modals from this file.

---

## 🔒 Confidentiality Self-Check Notice
In accordance with STEM AERO guidelines:
- **NO detailed projects** appear anywhere on the public site.
- **NO component lists or bill of materials** appear on the public site.
- **NO lesson plans, theory outlines, or practical step-by-step activities** appear on the public site.
- Only the **12 chapter titles per class** and a **one-line teaser (under 12 words)** are visible.
- Clicking any chapter prompts visitors to request the full syllabus via WhatsApp or Email.

---

## 🌐 Free Static Deployment Options

### 1. Netlify (Recommended)
1. Go to [netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop the `stemaero web` folder onto the Netlify dashboard.
3. Your site is live in 10 seconds with a free SSL certificate!
4. (Optional) Connect your custom domain `stemaero.online` in Domain Settings.

### 2. GitHub Pages
1. Push the project files to a GitHub repository (e.g. `github.com/your-username/stemaero-web`).
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be published at `https://your-username.github.io/stemaero-web`.

### 3. Vercel
1. Install Vercel CLI or import your GitHub repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Other** / Static.
3. Click **Deploy**.

---

© 2026 STEM AERO. All rights reserved.
