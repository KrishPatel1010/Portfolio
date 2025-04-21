
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 px-4"
    style={{
      background: "linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)"
    }}
  >
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <div className="inline-flex items-center bg-white/30 px-4 py-2 rounded-full mb-4 shadow-lg">
        <Briefcase className="w-6 h-6 mr-2 text-purple-800" />
        <span className="text-md font-semibold text-purple-900">Portfolio</span>
      </div>
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow">
        Jane Doe
      </h1>
      <h2 className="text-2xl md:text-3xl text-purple-900 font-semibold mb-6">Frontend Developer &amp; UI/UX Enthusiast</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Crafting beautiful user experiences with clean code and creative design.
      </p>
      <a href="#projects">
        <Button className="rounded-full px-8 py-3 text-lg font-bold bg-primary text-white shadow-lg hover:scale-105 transition-transform">
          See My Work
        </Button>
      </a>
    </div>
  </section>
);

export default HeroSection;
