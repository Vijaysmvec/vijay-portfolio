"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import CursorGlow from "./components/CursorGlow";
import AIAssistant from "./components/AIAssistant";
import TiltCard from "./components/TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,#000)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#7c3aed,#000)] opacity-40" />

      <CursorGlow />

      <div className="relative z-10 px-6">

        {/* 🚀 HERO */}
        <section className="min-h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl"
          >
            {/* TEXT */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Vijay P A
              </h1>

              <p className="mt-6 text-xl text-gray-300">
                Software Developer • Full Stack • AI Builder • Prompt Engineer
              </p>

              <p className="mt-6 text-gray-400 max-w-xl">
                I design and build intelligent, scalable, and visually powerful
                applications using modern full-stack technologies, AI/ML, and
                advanced prompt engineering.
              </p>

              <div className="mt-8 flex gap-4">
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
            </div>

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden
              border border-white/20 shadow-[0_0_60px_rgba(124,58,237,0.4)]"
            >
              <Image
                src="/profile.png"
                alt="Vijay P A"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </section>

        {/* 🧠 ABOUT */}
        <motion.section
          className="max-w-4xl mx-auto py-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Computer Science Engineering student passionate about building
            real-world software products. I specialize in Full Stack Development,
            AI-powered systems, and Prompt Engineering to extract high-quality
            intelligence from modern LLMs.
          </p>
        </motion.section>

        {/* 🧩 SKILLS */}
        <motion.section
          className="max-w-6xl mx-auto py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <TiltCard key={skill}>
                <div className="rounded-2xl py-6 text-center font-semibold
                  backdrop-blur-xl bg-white/5 border border-white/10
                  hover:border-purple-500 transition">
                  {skill}
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.section>

        {/* 🚀 PROJECTS */}
        <motion.section
          id="projects"
          className="max-w-6xl mx-auto py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
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
                desc: "AI-driven interview simulation with voice interaction and aptitude analysis.",
                tech: "Next.js • AI • Firebase",
              },
            ].map((p) => (
              <TiltCard key={p.title}>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5
                  border border-white/10 backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.desc}</p>
                  <p className="text-sm text-gray-400">{p.tech}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.section>

        {/* 📬 CONTACT */}
        <section className="py-32 text-center">
          <h2 className="text-4xl font-bold mb-8">Let’s Connect</h2>

          <div className="flex justify-center gap-8 text-3xl">
            <a href="https://github.com/Vijaysmvec" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/mr-vijay-pa" target="_blank"><FaLinkedin /></a>
            <a href="mailto:vijayanandhan2005@gmail.com"><FaEnvelope /></a>
          </div>
        </section>

      </div>

      <AIAssistant />
    </main>
  );
}
