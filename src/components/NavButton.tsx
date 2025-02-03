import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const NavButton = ({ icon: Icon, label, section, activeSection, setActiveSection }: NavButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveSection(section);
  };

  return (
    <button 
      className={`flex items-center justify-center p-2 md:px-4 md:py-2 rounded-full transition-colors shadow-sm ${
        activeSection === section 
          ? 'bg-blue-500 text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
      onClick={scrollToSection}
      title={label}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline-block md:ml-2">{label}</span>
    </button>
  );
};