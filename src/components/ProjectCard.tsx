import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
}

export const ProjectCard = ({ image, name, description, features, technologies }: ProjectProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!showModal) return;
    if (e.key === 'Escape') setShowModal(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal]);

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="group relative rounded-lg overflow-hidden">
          <Image 
            src={image} 
            alt={name} 
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-t-lg" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {name}
              </h3>
              <p className="text-gray-100">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <Image 
                src={image} 
                alt={name} 
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4" 
              />
              
              <p className="text-gray-600 mb-4">{description}</p>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 