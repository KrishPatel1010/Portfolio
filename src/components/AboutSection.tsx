
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-16 bg-white dark:bg-gray-950">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center mb-6 animate-fade-in">
        <User className="w-8 h-8 mr-2 text-purple-800" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
        Hello! I'm Jane, a passionate frontend developer with 5+ years of experience building responsive and user-centric web applications.
        <br /><br />
        My craft blends code and creativity to deliver interfaces that delight users and solve real-world problems. Whether prototyping a landing page, refining a dashboard, or collaborating with product teams, I bring energy and curiosity to every project.
      </p>
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm shadow">React</span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm shadow">TypeScript</span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm shadow">Tailwind CSS</span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm shadow">UI/UX Design</span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm shadow">Figma</span>
      </div>
    </div>
  </section>
);

export default AboutSection;
