export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-bold">Vijay P A</h1>
        <p className="mt-6 text-xl text-gray-400">
          Software Developer | Java | Full Stack | AI Projects
        </p>

        <a
          href="/Vijay_PA_Resume.pdf"
          target="_blank"
          className="inline-block mt-8 px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          I am a Computer Science Engineering student with strong foundations in
          Java, full-stack web development, and AI-based applications. I enjoy
          building real-world projects that focus on clean code, scalability,
          and user experience. I have hands-on experience in developing web
          platforms, intelligent chatbots, and AI-powered interview systems
          through academic projects and hackathons.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "MySQL",
            "MongoDB",
            "HTML",
            "CSS",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 rounded-xl py-4 hover:border-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Online Voting Platform</h3>
            <p className="text-gray-400 mb-4">
              Secure voting system with authentication, real-time vote tracking,
              and backend validation to prevent fraud.
            </p>
            <p className="text-sm text-gray-500">
              HTML, CSS, JavaScript, React, MySQL
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">AI Symptom Analyzer Bot</h3>
            <p className="text-gray-400 mb-4">
              AI chatbot using NLP and ML to analyze user symptoms and suggest
              potential conditions.
            </p>
            <p className="text-sm text-gray-500">
              FastAPI, NLP, JavaScript
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              AI Powered Mock Interview Platform
            </h3>
            <p className="text-gray-400 mb-4">
              AI interview simulator with voice interaction, aptitude training,
              and GD practice.
            </p>
            <p className="text-sm text-gray-500">
              Next.js, TypeScript, Firebase, AI/ML
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-2">📧 vijayanandhan2005@gmail.com</p>
        <p className="text-gray-400 mb-2">
          🔗 linkedin.com/in/mr-vijay-pa
        </p>
        <p className="text-gray-400">
          💻 github.com/Vijaysmvec
        </p>
      </section>

    </main>
  );
}
