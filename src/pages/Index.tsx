
// Modern animated portfolio landing page!

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Main Container */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="text-gray-400 text-sm text-center py-6">
        &copy; {new Date().getFullYear()} Jane Doe. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
