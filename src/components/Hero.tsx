
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-800">AS</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Aditi Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Software Developer & Technology Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative solutions and building amazing user experiences. 
            I love exploring new technologies and turning ideas into reality through code.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
            <MapPin className="w-4 h-4" />
            <span>India</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <a href="https://github.com/Aditi7Singh" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="border-2 hover:bg-blue-50">
            <a href="https://www.linkedin.com/in/aditi-singh-802751258/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="border-2 hover:bg-purple-50">
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
        </div>

        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
