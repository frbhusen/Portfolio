'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h4>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
        />
      </div>
    </motion.div>
  );
}
