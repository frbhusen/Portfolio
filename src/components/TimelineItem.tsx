'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

interface TimelineItemProps {
  item: Experience | Education;
  index: number;
  type: 'experience' | 'education';
}

export default function TimelineItem({ item, index, type }: TimelineItemProps) {
  const isExperience = type === 'experience';
  const experienceItem = item as Experience;
  const educationItem = item as Education;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 pb-12 border-l-2 border-primary-200 dark:border-primary-800"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-gray-900" />

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {isExperience ? experienceItem.title : educationItem.degree}
          </h3>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1 sm:mt-0">
            {item.period}
          </span>
        </div>

        <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
          {isExperience ? experienceItem.company : educationItem.institution}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {item.description}
        </p>

        {isExperience && experienceItem.achievements && experienceItem.achievements.length > 0 && (
          <ul className="space-y-2">
            {experienceItem.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {!isExperience && educationItem.gpa && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">GPA:</span> {educationItem.gpa}
          </p>
        )}
      </div>
    </motion.div>
  );
}
