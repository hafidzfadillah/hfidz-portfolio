import Image from 'next/image';

export const About = () => (
    
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
              <Image 
                src="/images/with ka aidil.png" 
                alt="Hafidz Fadillah" 
                width={200} 
                height={200} 
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold">Hello, I&apos;m Hafidz Fadillah</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            A dynamic mobile application developer with 3+ years of experience in creating innovative and user-centric mobile solutions. 
            Proficient in Java and Kotlin, with expertise in the Flutter/Dart framework for cross-platform development. 
            Adept at collaborating with cross-functional teams to deliver high-quality applications that enhance user engagement and drive business growth.
          </p>
        </div>
      
)