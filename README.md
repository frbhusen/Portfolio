# Professional Portfolio Website

A modern, fast, and highly polished portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Perfect for developers, students, and tech professionals looking to showcase their work.

![Portfolio Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Your+Portfolio+Website)

## 🌟 Features

- **Modern Design**: Clean, minimal, and professional interface
- **Dark/Light Mode**: Automatic theme detection with manual toggle and persistence
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **Project Filtering**: Filter projects by technology/category
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Easy Content Management**: JSON-based content structure for easy editing
- **Fast Performance**: Optimized build with Next.js for lightning-fast load times
- **Type Safe**: Built with TypeScript for better code quality and maintainability

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Personal Information

Edit **`src/data/profile.json`** to update your personal information:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "role": "Your Role",
    "tagline": "Your tagline",
    "bio": "Your bio",
    "email": "your.email@example.com",
    "location": "Your Location"
  },
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "instagram": "https://instagram.com/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

### 2. Projects

Edit **`src/data/projects.json`** to add/edit your projects:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Short description",
      "longDescription": "Detailed description",
      "image": "/projects/image.jpg",
      "technologies": ["React", "Node.js", "MongoDB"],
      "github": "https://github.com/yourusername/project",
      "demo": "https://project-demo.com",
      "featured": true,
      "category": "Full Stack"
    }
  ]
}
```

### 3. Skills

Edit **`src/data/skills.json`** to update your skills:

```json
{
  "skillCategories": [
    {
      "name": "Languages",
      "skills": [
        { "name": "JavaScript", "level": 95, "icon": "javascript" },
        { "name": "Python", "level": 85, "icon": "python" }
      ]
    }
  ]
}
```

### 4. Education & Experience

Update education and experience in **`src/data/profile.json`**:

```json
{
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University Name",
      "period": "2021 - 2025",
      "description": "Relevant coursework",
      "gpa": "3.8/4.0"
    }
  ],
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2023 - Present",
      "description": "Job description",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

### 5. Colors & Styling

Customize colors in **`tailwind.config.ts`**:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... customize your primary color shades
        900: '#0c4a6e',
      },
    },
  },
},
```

### 6. Images

Place your images in the **`public`** folder:

- `/public/avatar.jpg` - Your profile picture
- `/public/resume.pdf` - Your resume
- `/public/projects/` - Project screenshots

## 📂 Project Structure

```
portfolio/
├── public/                 # Static files (images, resume, etc.)
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects page
│   │   ├── skills/         # Skills page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── TimelineItem.tsx
│   └── data/               # JSON data files
│       ├── profile.json    # Personal info, education, experience
│       ├── projects.json   # Projects data
│       └── skills.json     # Skills data
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 🎨 Adding New Sections

### Create a New Page

1. Create a new file in `src/app/[page-name]/page.tsx`
2. Add the page to the navigation in `src/components/Navbar.tsx`
3. Create corresponding data file in `src/data/` if needed

### Create a New Component

1. Create a new file in `src/components/ComponentName.tsx`
2. Use TypeScript for props typing
3. Apply Tailwind classes for styling
4. Use Framer Motion for animations (optional)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Theme System

The portfolio includes a dark/light theme system:

- Automatically detects system preference
- Manual toggle via navbar
- Persists selection in localStorage
- Smooth transitions between themes

## 🚀 Performance Optimization

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic route-based splitting
- **Optimized Fonts**: Using Next.js font optimization
- **Minimal Dependencies**: Only essential packages included
- **Production Build**: Minified and optimized

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Theme Not Working

Make sure:
1. ThemeProvider wraps your app in `layout.tsx`
2. `suppressHydrationWarning` is on the `<html>` tag
3. Browser localStorage is enabled

### Animations Not Smooth

- Ensure you're using a modern browser
- Check if hardware acceleration is enabled
- Reduce animation complexity if needed

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 💡 Tips for Success

1. **Keep It Updated**: Regularly add new projects and skills
2. **Use Real Content**: Replace all placeholder text with your actual information
3. **Optimize Images**: Compress images before adding them
4. **Test Thoroughly**: Test on multiple devices and browsers
5. **Get Feedback**: Ask peers to review your portfolio
6. **SEO Matters**: Update meta tags with relevant information
7. **Keep It Professional**: Maintain a clean, professional tone

## 📞 Support

If you need help:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Explore [Framer Motion Docs](https://www.framer.com/motion/)

## 🎯 Next Steps

After setting up your portfolio:

1. ✅ Update all JSON files with your information
2. ✅ Add your project screenshots
3. ✅ Upload your resume PDF
4. ✅ Test on multiple devices
5. ✅ Deploy to Vercel or your preferred platform
6. ✅ Share with potential employers/clients
7. ✅ Keep it updated regularly

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion**
