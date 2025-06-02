
import { Book, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Crypto-Tracker",
    image: "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
    description: "A real-time cryptocurrency tracker leveraging reusable React components, WebSocket-powered live updates, and a modern, responsive UI.",
    link: "https://krishpatel1010.github.io/Crypto-Tracker/",
  },
  {
    title: "Personal Blog",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    description: "My space to share insights on modern frontend development, design systems, and productivity.",
    link: "https://medium.com/",
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    description: "This site! Built with React, TypeScript & Tailwind CSS to showcase my work and skills.",
    link: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 bg-gradient-to-b from-white via-purple-50 to-purple-200 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8 animate-fade-in">
        <Book className="w-8 h-8 mr-2 text-purple-800" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 animate-slide-in">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-950 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
              <p className="flex-1 text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="w-full gap-2">
                  <LinkIcon className="w-4 h-4" /><span>View Project</span>
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
