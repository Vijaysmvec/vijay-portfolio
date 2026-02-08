"use client";
import { useState } from "react";

const responses: Record<string, string> = {
  skills:
    "I specialize in Full Stack Development, AI/ML, and Prompt Engineering — designing structured prompts to extract precise, reliable intelligence from large language models.",
  projects:
    "My projects focus on real-world impact: secure systems, AI-driven analysis, and scalable interview platforms.",
  prompt:
    "Prompt Engineering means designing inputs that guide AI reasoning — improving accuracy, reducing hallucinations, and enabling multi-step thinking.",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Hi 👋 I’m Vijay’s AI assistant. Ask me about skills, projects, or prompt engineering.");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-72 p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl text-sm">
          {msg}
          <div className="mt-3 flex gap-2 flex-wrap">
            {["skills", "projects", "prompt"].map((k) => (
              <button
                key={k}
                onClick={() => setMsg(responses[k])}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-purple-500 transition"
              >
                {k}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg hover:scale-110 transition"
      >
        🤖
      </button>
    </div>
  );
}
