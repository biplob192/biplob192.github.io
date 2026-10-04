# MD. Biplob Mia — Portfolio

Personal portfolio website for **MD. Biplob Mia**, a full-stack software engineer. It highlights professional experience, services, technical skills, selected projects, education, and contact information.

**Live site:** [biplob192.github.io](https://biplob192.github.io/)

## Features

- Responsive single-page layout with Home, About, Services, Skills, Experience, Projects, Education, and Contact sections
- Mobile navigation, smooth section scrolling, scroll reveal effects, active navigation states, and a back-to-top button
- Resume download and links to GitHub, LinkedIn, email, and WhatsApp
- Search and social sharing metadata, including Open Graph, Twitter card, and Person structured data

## Built with

- HTML5, CSS, and vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/) via its CDN
- [Font Awesome](https://fontawesome.com/) via CDN

There is no build step or package manager configuration; the site is served as static files.

## Run locally

Open `index.html` in a browser, or serve the project root with a local static server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). The CDN-hosted Tailwind CSS and Font Awesome assets require an internet connection.

## Project structure

```text
.
├── index.html                 # Page content and metadata
├── assets/
│   ├── styles.css             # Custom styling and animations
│   ├── script.js              # Navigation and scroll interactions
│   ├── MD_BIPLOB_MIA.pdf      # Downloadable resume
│   ├── portfolio-preview.png  # Social sharing preview image
│   └── favicon.svg            # Browser icon
└── README.md
```

## Deployment

The site is configured for GitHub Pages at `https://biplob192.github.io/`. Publish the repository's root directory through GitHub Pages. The canonical URL and social metadata in `index.html` also point to this domain.

## Contact

- Email: [biplob.net2@gmail.com](mailto:biplob.net2@gmail.com)
- GitHub: [github.com/biplob192](https://github.com/biplob192)
- LinkedIn: [linkedin.com/in/biplob192](https://linkedin.com/in/biplob192)
