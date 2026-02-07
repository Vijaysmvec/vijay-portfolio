"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🌌 Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,#000)] opacity-70" />
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-10" />

      <div className="relative z-10 px-6">

        {/* 🚀 HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {/* Avatar Placeholder */}
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold">
                VP
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vijay P A
            </h1>

            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Software Developer • Full Stack • AI Builder • Prompt Engineer
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="/Vijay_PA_Resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </section>

        {/* 🧠 ABOUT */}
        <section className="max-w-4xl mx-auto py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a Computer Science Engineering student who loves building
              intelligent systems, scalable web platforms, and AI-powered tools.
              I focus on clean architecture, modern UI, and solving real problems
              using Full Stack development, AI/ML, and Prompt Engineering.
            </p>
          </motion.div>
        </section>

        {/* 🧩 SKILLS */}
        <section className="max-w-6xl mx-auto py-32">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Java",
              "Python",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "FastAPI",
              "MongoDB",
              "MySQL",
              "AI / ML",
              "Prompt Engineering",
              "System Design",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl py-6 text-center font-semibold"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🚀 PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto py-32">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Online Voting Platform",
                desc: "Secure voting system with authentication, real-time tracking, and fraud prevention.",
                tech: "React • MySQL • Security",
              },
              {
                title: "AI Symptom Analyzer Bot",
                desc: "NLP-powered chatbot that analyzes symptoms and provides medical insights.",
                tech: "FastAPI • NLP • AI",
              },
              {
                title: "AI Mock Interview Platform",
                desc: "Voice-based AI interviews, aptitude training, and GD simulation.",
                tech: "Next.js • AI • Firebase",
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -10 }}
                className="rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.desc}</p>
                <p className="text-sm text-gray-400">{p.tech}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 📬 CONTACT */}
        <section className="py-32 text-center">
          <h2 className="text-4xl font-bold mb-8">Let’s Connect</h2>

          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://github.com/Vijaysmvec" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/mr-vijay-pa" target="_blank"><FaLinkedin /></a>
            <a href="mailto:vijayanandhan2005@gmail.com"><FaEnvelope /></a>
          </div>
        </section>

      </div>
    </main>
  );
}
