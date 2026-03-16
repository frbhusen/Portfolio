'use client';

import { motion } from 'framer-motion';
import TimelineItem from '@/components/TimelineItem';
import profileData from '@/data/profile.json';

export default function AboutPage() {
  const { personalInfo, about, education, experience } = profileData;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-9xl shadow-2xl">
                👨‍💻
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.name}
              </h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-6 font-semibold">
                {personalInfo.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {about.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={personalInfo.resume}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  📄 Download Resume
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  ✉️ Email Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {about.focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            💼 Experience
          </h2>
          <div className="space-y-0">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                index={index}
                type="experience"
              />
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            🎓 Education
          </h2>
          <div className="space-y-0">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={index}
                type="education"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
