"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  tech: string;
  image: string;
}

export default function ProjectCard({ title, desc, tech, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
    >
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{desc}</p>
        <p className="text-sm text-gray-400">{tech}</p>
      </div>

      {/* Hover UI Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80"
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

