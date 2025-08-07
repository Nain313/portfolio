import { Suspense } from 'react'
import AnimatedBackground from '@/components/3d/AnimatedBackground'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import SolutionsSection from '@/components/SolutionsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import LoadingSpinner from '@/components/LoadingSpinner'
import InteractiveCursor from '@/components/InteractiveCursor'
import ScrollProgress from '@/components/ScrollProgress'
import ThemeToggle from '@/components/ThemeToggle'
import CursorToggle from '@/components/CursorToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Loading Spinner */}
      <Suspense fallback={<LoadingSpinner />}>
        {/* 3D Animated Background */}
        <AnimatedBackground />
        
        {/* Interactive Cursor */}
        <InteractiveCursor />
        
        {/* Scroll Progress */}
        <ScrollProgress />
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Cursor Toggle */}
        <CursorToggle />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Solutions Section */}
        <SolutionsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </Suspense>
    </main>
  )
} 