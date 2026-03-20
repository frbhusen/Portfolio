'use client';

import { motion } from 'framer-motion';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skills: string[];
  credentialUrl: string;
  certificateImage: string | null;
  featured: boolean;
  category: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export default function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-40 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-5xl">
          📜
        </div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {certificate.title}
        </h3>
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
          {certificate.issuer}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          Issued: {certificate.issueDate}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {certificate.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              +{certificate.skills.length - 4}
            </span>
          )}
        </div>

        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <span>✅</span>
          <span>View Credential</span>
        </a>
      </div>

      {certificate.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
          ⭐ Featured
        </div>
      )}
    </motion.div>
  );
}
