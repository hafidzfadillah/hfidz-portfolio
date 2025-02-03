import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const NavButton = ({ icon: Icon, label, section, activeSection, setActiveSection }: NavButtonProps) => (
  <button 
    className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-full transition-colors shadow-sm ${
      activeSection === section 
        ? 'bg-blue-500 text-white' 
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
    onClick={() => {
      setActiveSection(section);
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);