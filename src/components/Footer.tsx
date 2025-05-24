
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aditi Singh</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Software Developer passionate about creating innovative solutions and building amazing user experiences.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/Aditi7Singh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditi-singh-802751258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Aditi Singh
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
