
import { Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "janedoe@email.com",
    url: "mailto:janedoe@email.com"
  },
  {
    icon: LinkIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/janedoe",
    url: "https://www.linkedin.com/"
  }
];

const ContactSection = () => (
  <section id="contact" className="py-16 bg-white dark:bg-gray-950">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center mb-6 animate-fade-in">
        <Mail className="w-8 h-8 mr-2 text-purple-800" />
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">Contact</h2>
      </div>
      <p className="text-lg text-gray-700 mb-8 animate-fade-in">
        Interested in collaborating, hiring, or just want to say hello?<br />
        Reach out to me!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
        {CONTACTS.map((contact, idx) => (
          <a
            href={contact.url}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              variant="outline"
              className="w-full px-6 py-4 rounded-lg border border-purple-300 hover:bg-purple-100 hover-scale transition-colors flex items-center gap-3"
            >
              <contact.icon className="w-5 h-5 text-purple-700" />
              <span className="font-semibold text-purple-950 text-md">{contact.value}</span>
            </Button>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
