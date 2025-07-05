# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a beautiful design with smooth animations, dark mode support, and a comprehensive showcase of your skills and projects.

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for optimal performance

## 🚀 Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **Vite** - Fast build tool

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the greeting and description
   - Modify the call-to-action buttons

2. **About Section** (`src/components/About.jsx`):
   - Update personal information (name, location, email, phone)
   - Modify your story and experience
   - Add your education and work history

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Add or remove skills based on your expertise
   - Modify the technology stack

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data with your actual projects
   - Update project images, descriptions, and links
   - Add your GitHub and live project URLs

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Add your social media links
   - Configure the contact form

### Styling

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Fonts**: Update font families in the Tailwind config
3. **Animations**: Customize animations in the CSS file

### Images

1. Replace project images with your own screenshots
2. Add a profile picture in the About section
3. Update the favicon in the `public` folder

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar with dark mode toggle
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About section with personal info
│   ├── Skills.jsx      # Skills and technologies
│   ├── Projects.jsx    # Project showcase
│   ├── Contact.jsx     # Contact form and information
│   └── Footer.jsx      # Footer with social links
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue on GitHub.

---

Made with ❤️ using React & Tailwind CSS
