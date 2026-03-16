'use client';

import Link from 'next/link';
import profileData from '@/data/profile.json';

export default function Footer() {
  const { personalInfo, socialLinks } = profileData;
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: 'GitHub', url: socialLinks.github, icon: '💻' },
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: '💼' },
    { name: 'Instagram', url: socialLinks.instagram, icon: '📷' },
    { name: 'Coursera', url: socialLinks.coursera, icon: '🎓' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              <span className="text-primary-600 dark:text-primary-400">&lt;</span>
              Portfolio
              <span className="text-primary-600 dark:text-primary-400">/&gt;</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {personalInfo.tagline}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📍 {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:dark:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white transition-colors text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              ✉️ {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
