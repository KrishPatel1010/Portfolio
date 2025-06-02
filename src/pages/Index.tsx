import { useState } from "react";
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Crypto-Tracker",
      image:
        "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
      description:
        "A real-time cryptocurrency tracker leveraging reusable React components, WebSocket-powered live updates, and a modern, responsive UI.",
      link: "https://krishpatel1010.github.io/Crypto-Tracker/",
    },
    {
      title: "Trivia Quiz App",
      description:
        "A customizable trivia quiz app built with React, featuring reusable components, category selection, and instant feedback with a clean, responsive UI",
      image:
        "https://uniquefacts.org/wp-content/uploads/2023/12/Trivia-Questions-and-Answers.jpg",
      link: "https://krishpatel1010.github.io/TriviaQuizApp/Project/index.html",
    },
    {
      title: "Weatherly",
      description:
        "A sleek and responsive weather app that displays real-time weather data using clean UI components and modern web technologies",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      link: "https://krishpatel1010.github.io/Simple-Weather-App/Weatherly/index.html",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Patel Krish
            <p className="text-gray-400" style={{ fontSize: "0.85rem" }}>
              📧 krishpatel8463@gmail.com | 📞 +91 7575095977
            </p>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#home"
                className="block hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
            Creating beautiful digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a frontend developer experienced in building responsive,
                real-time apps with React, Tailwind CSS, and Redux. I'm now
                learning backend development with Node.js to become a full-stack
                developer.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I specialize in React, Redux, and Tailwind CSS, while exploring
                TypeScript and Node.js to become a full-stack developer. I'm
                always eager to learn and push the limits of web development.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "Redux",
                  "Python",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:krishpatel8463@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://github.com/KrishPatel1010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patel-krish-72a625250/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Patel Krish. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
