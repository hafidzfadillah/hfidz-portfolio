import { motion } from 'framer-motion';

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
                <SkillBadge key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
);

interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md"
  >
    <span className="text-2xl">{icon}</span>
    <span>{name}</span>
  </motion.div>
);