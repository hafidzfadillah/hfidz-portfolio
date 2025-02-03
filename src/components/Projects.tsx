// import Image from 'next/image';
import { ProjectCard } from './ProjectCard';

const projects = [
    {
        image: '/images/binbol.png',
      name: 'BinaBola',
      description: 'A platform that supports improvement of Indonesian youth football.',
      features: [
        'Licensed Training Module',
        'Running Tracker',
        'Integration with SSB evaluation reporting',
        'Live Local Football Competition Update'
      ],
    //   achievements: [
    //     'Best Entrepreneur Track Project at Bangkit Academy',
    //     'Top Project among 30 entries'
    //   ],
      technologies: ['Flutter', 'Go']
    },
    {
        image: '/images/fitlife.png',
      name: 'FitLife',
      description: 'A healthy lifestyle app that tracks diet and workout progress with an AI trainer-bot, Pandan.',
      features: [
        'Personal information questionnaire',
        'Personalized program generation',
        'Daily login rewards',
        'Multiple mission tracking',
        'Food nutrition detection',
        'AI pose correction',
        'Chatbot integration',
        'Reward shop system'
      ],
    //   achievements: [
    //     '2nd Place in Mobile App Category at IIT Competition',
    //     'Finalist at FindIT Hackathon 2023',
    //     'Winner at Silogy Expo 2023'
    //   ],
      technologies: ['Flutter', 'TFLite', 'Laravel']
    },
    {
        image: '/images/ksp.png',
      name: 'KSPay Mobile',
      description: 'An all-in-one solution for payments and financial transactions.',
      features: [
        'Topup services (Pulsa/Data, E-money, Game Vouchers)',
        'Payment Point Online Banking',
        'Ticket booking (KAI, Flights, Travel)',
        'Package sending integration'
      ],
      technologies: ['Flutter', 'Firebase', 'PHP']
    },
    {
        image: '/images/ib.png',
      name: 'InginBelajar',
      description: 'An online video-based course app that focusing in culinary and marketing learning materials',
      features: [
        'Online video-based courses, support multi-resolution',
        'Membership subscription',
        'Implementing firebase dynamic link'
      ],
      technologies: ['Java Android', 'Firebase', 'PHP']
    },{
        image: '/images/sentimen.png',
      name: 'YT Videos Sentimen Analysis',
      description: 'Sentimen analysis of Youtube videos based on its comment section',
      features: [
      ],
      technologies: ['Python', 'Flask']
    },
    
  ];

export const Projects = () => (
    <div>
            <h2 className="text-3xl font-bold text-center mb-8">Latest Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </div>
);