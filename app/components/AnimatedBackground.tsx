"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%,#7c3aed,transparent_40%)]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%,#2563eb,transparent_40%)]"
      />
    </div>
  );
}

