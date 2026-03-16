'use client';

import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard';
import skillsData from '@/data/skills.json';

export default function SkillsPage() {
  const { skillCategories } = skillsData;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across various technologies and tools.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h2>
                <div className="w-16 h-1 bg-primary-600 rounded-full" />
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technology is constantly evolving, and so am I. I&apos;m always exploring new tools,
            frameworks, and best practices to stay at the forefront of web development.
            Currently learning and expanding my skills in cloud architecture, DevOps, and
            advanced system design.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
