# 🚀 3D Portfolio - Hariprasath R

A modern, interactive 3D portfolio website showcasing my skills as a Full Stack Developer with stunning animations, 3D elements, and responsive design.

## 🌐 Live Demo

**Deployed Site:** [https://inspiring-cannoli-542e1b.netlify.app](https://inspiring-cannoli-542e1b.netlify.app)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 About

This portfolio website represents my journey as a Full Stack Developer, featuring:
- **Interactive 3D Elements** using Three.js and React Three Fiber
- **Smooth Animations** powered by Framer Motion
- **Modern UI/UX Design** with Tailwind CSS
- **Responsive Design** optimized for all devices
- **Professional Sections** including About, Experience, Certifications, Skills, Projects, and Contact

## ✨ Features

### 🎨 Visual Excellence
- **3D Hero Section** with floating elements and interactive animations
- **Particle Systems** and dynamic background effects
- **Smooth Scrolling** with section-based navigation
- **Hover Effects** and micro-interactions throughout

### 📱 Responsive Design
- **Mobile-First Approach** ensuring optimal experience on all devices
- **Adaptive Layouts** that scale beautifully from mobile to desktop
- **Touch-Friendly** interactions for mobile users

### 🔧 Technical Features
- **Performance Optimized** with lazy loading and efficient rendering
- **SEO Friendly** with proper meta tags and semantic HTML
- **Accessibility** considerations with proper contrast and navigation
- **Contact Form** with EmailJS integration

### 📊 Content Sections
- **Hero Section** - Interactive 3D introduction
- **About** - Personal introduction with animated statistics
- **Experience** - Professional work history with timeline
- **Certifications** - Professional achievements and training
- **Skills** - Floating technology cards with animations
- **Projects** - Portfolio showcase with live demos
- **Contact** - Interactive form with 3D Earth model

## 🛠️ Technologies Used

### Frontend Framework
- **React.js** (v18.3.1) - Component-based UI library
- **Vite** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js** (v0.169.0) - 3D graphics library
- **@react-three/fiber** (v8.0.0) - React renderer for Three.js
- **@react-three/drei** (v9.114.0) - Useful helpers for React Three Fiber
- **Framer Motion** (v12.9.2) - Production-ready motion library

### Styling & UI
- **Tailwind CSS** (v3.4.13) - Utility-first CSS framework
- **PostCSS** (v8.4.47) - CSS post-processor
- **Autoprefixer** (v10.4.20) - CSS vendor prefixing

### Additional Libraries
- **React Router DOM** (v6.26.2) - Client-side routing
- **React Icons** (v5.5.0) - Popular icon library
- **React Vertical Timeline** (v3.6.0) - Timeline component
- **React Parallax Tilt** (v1.7.245) - Tilt effect component
- **EmailJS Browser** (v4.4.1) - Email service integration
- **Maath** (v0.10.8) - Math utilities for 3D

### Development Tools
- **ESLint** (v9.11.1) - Code linting
- **TypeScript Types** - Type definitions for React

## 🚀 Installation

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hariprasath2030/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 💻 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Customization

1. **Personal Information**
   - Update `src/constants/index.js` with your personal details
   - Replace images in `src/assets/` with your own

2. **Projects**
   - Modify the `projects` array in `src/constants/index.js`
   - Add your project images to `src/assets/`

3. **Experience & Certifications**
   - Update `experiences` and add certifications in `src/constants/index.js`

4. **Contact Form**
   - Configure EmailJS in `src/components/Contact.jsx`
   - Update the service, template, and public key

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── desktop_pc/          # 3D model assets
│   ├── planet/              # 3D planet model
│   └── HARIPRASATH_R.pdf    # Resume file
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # React components
│   │   ├── canvas/          # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/           # Data and configuration
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 Deployment

### Netlify Deployment (Current)

The site is currently deployed on Netlify with automatic deployments from the main branch.

**Live URL:** [https://inspiring-cannoli-542e1b.netlify.app](https://inspiring-cannoli-542e1b.netlify.app)

### Manual Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Alternative Platforms**
   - **Vercel:** Connect GitHub repo and deploy
   - **GitHub Pages:** Use GitHub Actions for deployment
   - **Firebase Hosting:** Use Firebase CLI

### Environment Variables for Production

Make sure to set up the following environment variables in your deployment platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 🎨 Key Features Breakdown

### 3D Elements
- **Hero Section:** Floating geometric shapes with physics-based animations
- **Skills Section:** Interactive floating technology cards
- **Contact Section:** Rotating 3D Earth model
- **Background:** Animated particle systems and star fields

### Animations
- **Page Transitions:** Smooth fade-in effects using Framer Motion
- **Scroll Animations:** Elements animate as they come into view
- **Hover Effects:** Interactive responses on cards and buttons
- **Loading States:** Smooth loading animations for 3D models

### Performance Optimizations
- **Lazy Loading:** 3D models load on demand
- **Frame Rate Control:** Optimized rendering for smooth performance
- **Responsive Images:** Optimized assets for different screen sizes
- **Code Splitting:** Efficient bundle loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Hariprasath R**
- **Email:** officialhari2030@gmail.com
- **LinkedIn:** [Connect with me](https://linkedin.com/in/hariprasath-r)
- **GitHub:** [Hariprasath2030](https://github.com/Hariprasath2030)
- **Portfolio:** [https://inspiring-cannoli-542e1b.netlify.app](https://inspiring-cannoli-542e1b.netlify.app)

## 🙏 Acknowledgments

- **Three.js Community** for the amazing 3D library
- **React Three Fiber** for the excellent React integration
- **Framer Motion** for smooth animations
- **Tailwind CSS** for the utility-first styling approach
- **Netlify** for reliable hosting and deployment

---

⭐ **Star this repository if you found it helpful!**

**Built with ❤️ by Hariprasath R**