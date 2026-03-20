'use client';

import { useState } from 'react';
import { color, motion } from 'framer-motion';
import profileData from '@/data/profile.json';

export default function ContactPage() {
  const { personalInfo, socialLinks } = profileData;

  const socialIcons = [
    { name: 'GitHub', url: socialLinks.github, icon: '💻', color: 'hover:bg-gray-700'},
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: '💼', color: 'hover:bg-blue-700' },
    { name: 'Instagram', url: socialLinks.instagram, icon: '📷', color: 'hover:bg-pink-700' },
    { name: 'Coursera', url: socialLinks.coursera, icon: '🎓', color: 'hover:bg-blue-500'},
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid gap-12 justify-items-center">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 w-full max-w-2xl"
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
                    <p className="text-gray-600 dark:text-gray-400">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-200 ${social.color} hover:text-white transition-all duration-300 group`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                💡 Quick Note
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I&apos;m currently available for freelance projects and full-time opportunities.
                Whether you have a project in mind or just want to connect, don&apos;t hesitate to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
