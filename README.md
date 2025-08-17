# Muhammad Hasnain - AI Solutions Portfolio

A modern, interactive portfolio website showcasing AI-powered web development solutions with stunning 3D animations and effects.

## 🚀 Features

- **3D Animated Background** - Interactive Three.js animations with floating cubes and spheres
- **Modern Design** - Dark theme with pink/purple gradients and glass morphism effects
- **Responsive Layout** - Fully responsive design that works on all devices
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Interactive Elements** - Hover effects, scroll animations, and interactive components
- **AI-Focused Content** - Showcases AI solutions, chatbot automation, and intelligent applications

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## 📋 Sections

1. **Hero Section** - Introduction with animated name and call-to-action buttons
2. **About Section** - Personal information, education, and experience
3. **Skills Section** - Technical and soft skills with progress bars
4. **Solutions Section** - AI-powered services and solutions
5. **Projects Section** - Portfolio projects (Coming Soon)
6. **Contact Section** - Contact form and information

## 🎨 Design Features

- **Dark Theme** - Professional dark background with vibrant accents
- **Glass Morphism** - Semi-transparent glass effects
- **Gradient Text** - Animated gradient text effects
- **3D Elements** - Floating geometric shapes in the background
- **Interactive Buttons** - Hover animations and micro-interactions
- **Social Media Integration** - Profile picture with social interaction buttons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── 3d/                  # 3D components
│   │   ├── AnimatedBackground.tsx
│   │   ├── FloatingCube.tsx
│   │   └── FloatingSphere.tsx
│   ├── Navigation.tsx       # Navigation component
│   ├── HeroSection.tsx      # Hero section
│   ├── AboutSection.tsx     # About section
│   ├── SkillsSection.tsx    # Skills section
│   ├── SolutionsSection.tsx # Solutions section
│   ├── ProjectsSection.tsx  # Projects section
│   └── ContactSection.tsx   # Contact section
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: `#FF1493` (Pink)
- Secondary: `#8A2BE2` (Purple)
- Dark: `#0A0A0A`

### Content
Update the content in each component file to match your information:
- Personal details in `AboutSection.tsx`
- Skills and percentages in `SkillsSection.tsx`
- Projects in `ProjectsSection.tsx`
- Contact information in `ContactSection.tsx`

### 3D Elements
Modify the 3D background by editing:
- `components/3d/AnimatedBackground.tsx` - Main 3D scene
- `components/3d/FloatingCube.tsx` - Cube animations
- `components/3d/FloatingSphere.tsx` - Sphere animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📱 Performance

- **Optimized 3D Rendering** - Efficient Three.js animations
- **Lazy Loading** - Components load as needed
- **Responsive Images** - Optimized for all screen sizes
- **Smooth Scrolling** - Native smooth scroll behavior

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Muhammad Hasnain
- **Email**: codewithfarhad@gmail.com
- **Location**: Faisalabad, Pakistan
- **Specialization**: AI Solutions & Web Development

---

Built with ❤️ using Next.js, Three.js, and modern web technologies. 