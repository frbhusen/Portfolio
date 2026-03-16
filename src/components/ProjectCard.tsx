'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
  featured: boolean;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
          🚀
        </div>
        <div className="absolute inset-0 bg-black/20 transition-colors" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <div className="relative group/tech">
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full cursor-help hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                +{project.technologies.length - 4}
              </span>
              {/* Tooltip - Vertical List */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover/tech:block bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 text-xs rounded-lg px-4 py-3 z-50 pointer-events-none shadow-2xl border border-gray-700 dark:border-gray-300">
                <div className="flex flex-col gap-2">
                  {project.technologies.slice(4).map((tech) => (
                    <div key={tech} className="font-medium flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-400 dark:bg-primary-600 rounded-full mr-2"></span>
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
              </div>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span>💻</span>
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span>🔗</span>
              <span>Website</span>
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
          ⭐ Featured
        </div>
      )}
    </motion.div>
  );
}
