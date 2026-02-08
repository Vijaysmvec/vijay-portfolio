"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileOrbitalCard() {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">

      {/* Glow Card */}
      <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.25)]" />

      {/* Saturn Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-[-20%] rounded-full border border-purple-400/40"
      />

      {/* Profile Image Placeholder */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
        <Image
          src="/profile-orbital.png" // placeholder for now
          alt="Vijay Portrait"
          fill
          className="object-cover"
        />
      </div>

      {/* Hover Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl
        bg-black/70 backdrop-blur text-sm border border-white/20"
      >
        Hi, I’m Vijay. Hope you’re doing well.
      </motion.div>
    </div>
  );
}
