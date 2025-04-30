// page.js
'use client'
import React from 'react';
import { SectionCard } from "@/components/Backstory/Backstory"
import { resumeData } from '@/app/data';
import { motion } from 'framer-motion';

export default function BackstoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br px-6 md:px-16 py-10 font-inter text-white relative">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-cyan-400 mb-10 border-b-2 border-cyan-400 pb-3"
      >
        👨‍💻 Avenger Backstory
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-purple-400 mb-6"
          >
            🎓 Education
          </motion.h2>
          <div className="space-y-5">
            {resumeData.education.map((edu, idx) => (
              <SectionCard key={idx} {...edu} />
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-purple-400 mb-6"
          >
            🧠 Work Experience
          </motion.h2>
          <div className="space-y-5">
            {resumeData.experience.map((exp, idx) => (
              <SectionCard
                key={idx}
                title={exp.title}
                institution={exp.company}
                year={exp.year}
                country={exp.country}
                logo={exp.logo}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:right-20 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)] transition"
      >
        📄 Download Resume
      </motion.a>
    </div>
  );
}
