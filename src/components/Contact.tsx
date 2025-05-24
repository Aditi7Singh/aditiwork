
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Let's discuss opportunities",
      action: "Send Email",
      href: "mailto:your.email@example.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "Connect",
      href: "https://www.linkedin.com/in/aditi-singh-802751258/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my repositories",
      action: "Follow",
      href: "https://github.com/Aditi7Singh",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <Button asChild className={`bg-gradient-to-r ${method.color} hover:opacity-90 text-white w-full`}>
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-600 mb-6">
              Whether you have a project in mind or just want to chat about technology, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <a href="mailto:your.email@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
