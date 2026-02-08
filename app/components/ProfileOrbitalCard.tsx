"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileOrbitalCard() {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">

      {/* 🌟 GLOW CARD */}
      <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl
        border border-white/20
        shadow-[0_0_80px_rgba(255,255,255,0.25)]" />

      {/* 🪐 SATURN RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
        className="absolute w-[130%] h-[130%] rounded-full z-0"
        style={{
          transform: "rotateX(65deg) rotateZ(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            borderTop: "6px solid rgba(255,255,255,0.8)",
            borderBottom: "6px solid rgba(255,255,255,0.8)",
            borderLeft: "4px solid rgba(168,85,247,0.6)",
            borderRight: "4px solid rgba(239,68,68,0.6)",
            filter: "blur(0.3px)",
            boxShadow: "0 0 20px rgba(168,85,247,0.6)",
          }}
        />
      </motion.div>

      {/* 👤 PROFILE IMAGE */}
      <div className="relative w-[85%] h-[85%] rounded-3xl overflow-hidden z-10
        border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.4)]">
        <Image
          src="/profile-orbital.png" // placeholder for now
          alt="Vijay Portrait"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 💬 HOVER MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-6 px-5 py-2 rounded-xl
        bg-black/70 backdrop-blur text-sm
        border border-white/20 z-20"
      >
        Hi, I’m Vijay. Hope you’re doing well.
      </motion.div>

    </div>
  );
}
