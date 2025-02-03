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
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hafidz Fadillah - Mobile Developer Portfolio</title>
        <meta name="description" content="Portfolio of Hafidz Fadillah, Mobile Application Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Hafidz Fadillah</h1>
            <div className="flex space-x-4">
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

        <section id="about" className="p-8 mb-8">
          <About />
        </section>

        <section id="experience" className="p-8 mb-8">
          <Experiences />
        </section>

        <section id="projects" className="p-8 mb-8">
          <Projects />
        </section>

        <section id="skills" className="p-8 mb-8">
          <Skills />
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Hafidz Fadillah. All rights reserved.
        </p>
      </footer>
    </div>
  );
}