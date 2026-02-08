"use client";
import { useState } from "react";

const modes = {
  frontend: ["React", "Next.js", "Tailwind", "Framer Motion"],
  backend: ["Node.js", "FastAPI", "MongoDB", "MySQL"],
  ai: ["AI / ML", "Prompt Engineering", "NLP", "Model Tuning"],
};

export default function SkillsSwitcher() {
  const [mode, setMode] = useState<keyof typeof modes>("frontend");

  return (
    <div className="text-center">
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(modes).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`px-4 py-2 rounded-full border ${
              mode === m ? "bg-white text-black" : "border-white/30"
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {modes[mode].map((skill) => (
          <div
            key={skill}
            className="py-6 rounded-xl bg-white/5 backdrop-blur border border-white/10"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
