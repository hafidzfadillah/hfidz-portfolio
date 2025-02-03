import Image from 'next/image';

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
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow group"
                >
                    <Image 
                        src={project.image} 
                        alt="Hafidz Fadillah" 
                        width={500}
                        height={300}
                        className="object-cover w-full h-48 rounded-lg" 
                    />
                  <div className='p-6'>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
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
              ))}
            </div>
          </div>
);