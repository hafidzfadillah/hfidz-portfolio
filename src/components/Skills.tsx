export const Skills = () => (
    <div>
            <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Android Native', icon: '📱' },
                { name: 'Kotlin', icon: '🔷' },
                { name: 'Java', icon: '☕' },
                { name: 'Flutter/Dart', icon: '💙' },
                { name: 'Firebase', icon: '🔥' },
                { name: 'MySQL', icon: '🗃️' },
                { name: 'Python', icon: '🐍' },
                { name: 'Laravel', icon: '🚀' }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg px-4 py-2 flex items-center space-x-2 hover:shadow-lg transition-shadow"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
);