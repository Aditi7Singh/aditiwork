
import { Github, Linkedin, Mail, MapPin, Twitter, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">Software Developer</p>
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
                Hi, I'm <span className="font-medium">Aditi Singh</span>
              </h1>
              <div className="w-12 h-px bg-gray-900"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              I specialize in building innovative AI applications, machine learning solutions, 
              and modern web applications. Currently exploring the intersection of technology 
              and user experience.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Based in India</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" className="bg-gray-900 hover:bg-gray-800 text-white">
                <a href="#projects">
                  View Work
                  <ArrowDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-gray-300 hover:bg-gray-50">
                <a href="mailto:aditisakshisingh@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Aditi7Singh" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aditi-singh-802751258/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/AditiSingh38187" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:aditisakshisingh@gmail.com"
                 className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/d1a4de89-2cf0-4e99-8320-a5e5d428e7da.png" 
                  alt="Aditi Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
