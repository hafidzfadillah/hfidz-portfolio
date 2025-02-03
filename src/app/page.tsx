// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  User, 
  Briefcase, 
  Award, 
  Code, 
  Link as LinkIcon, 
  Mail, 
  Linkedin, 
  Github 
} from 'lucide-react';
import { NavButton } from '@/components/NavButton';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experiences } from '@/components/Experience';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Hafidz Fadillah - Mobile Developer Portfolio</title>
        <meta name="description" content="Portfolio of Hafidz Fadillah, Mobile Application Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Hafidz Fadillah</h1>
            <div className="flex items-center space-x-4">
              {/* <ThemeToggle /> */}
              <a 
                href="mailto:hafidzfadillah23@gmail.com" 
                className="hover:text-blue-500 flex items-center space-x-2"
                title="Email"
              >
                <Mail />
              </a>
              <a 
                href="https://linkedin.com/in/hfidzfadillah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 flex items-center space-x-2"
                title="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/hafidzfadillah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 flex items-center space-x-2"
                title="GitHub"
              >
                <Github />
              </a>
            </div>
          </div>
        </header>

        <nav className="sticky top-0 z-50 py-4 bg-gray-50 -mx-4 px-4 mb-8">
          <div className="flex justify-center space-x-4">
            <NavButton 
              icon={User} 
              label="About" 
              section="about"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <NavButton 
              icon={Award} 
              label="Experience" 
              section="experience"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <NavButton 
              icon={Briefcase} 
              label="Portfolio" 
              section="projects"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <NavButton 
              icon={Code} 
              label="Skills" 
              section="skills"
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </nav>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="about"
          className="bg-white dark:bg- shadow-md rounded-lg p-8 mb-8"
        >
          <About />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          id="experience" 
          className="p-8 mb-8">
          <Experiences />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="projects" 
          className="p-8 mb-8">
          <Projects />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="skills" 
          className="p-8 mb-8">
          <Skills />
        </motion.section>
      </main>

      <footer className="text-center py-6 bg-gray-100">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Hafidz Fadillah. All rights reserved.
        </p>
      </footer>

      <ScrollProgress />
    </div>
  );
}

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScroll((current / height) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <motion.div
        className="h-full bg-blue-500"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};