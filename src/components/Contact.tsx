
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter, PenTool, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      platform: "Email",
      handle: "aditisakshisingh@gmail.com",
      href: "mailto:aditisakshisingh@gmail.com",
      icon: Mail
    },
    {
      platform: "LinkedIn",
      handle: "/in/aditi-singh-802751258",
      href: "https://www.linkedin.com/in/aditi-singh-802751258/",
      icon: Linkedin
    },
    {
      platform: "GitHub",
      handle: "@Aditi7Singh",
      href: "https://github.com/Aditi7Singh",
      icon: Github
    },
    {
      platform: "Twitter",
      handle: "@AditiSingh38187",
      href: "https://x.com/AditiSingh38187",
      icon: Twitter
    }
  ];

  const blogPlatforms = [
    {
      platform: "Substack",
      handle: "@aditisingh195537",
      href: "https://substack.com/@aditisingh195537?utm_source=user-menu",
      icon: PenTool
    },
    {
      platform: "Hashnode",
      handle: "@aditi564",
      href: "https://hashnode.com/@aditi564",
      icon: PenTool
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Let's Work Together
            </h2>
            <div className="w-12 h-px bg-gray-900 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Connect</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{link.platform}</p>
                          <p className="text-sm text-gray-500">{link.handle}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-6">Writing</h3>
                <div className="space-y-4">
                  {blogPlatforms.map((platform, index) => (
                    <a key={index} href={platform.href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-center gap-3">
                        <platform.icon className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{platform.platform}</p>
                          <p className="text-sm text-gray-500">{platform.handle}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-none bg-white">
                <CardContent className="p-6 text-center space-y-4">
                  <h4 className="font-medium text-gray-900">Start a Project</h4>
                  <p className="text-sm text-gray-600">
                    Have an idea? Let's discuss how we can bring it to life.
                  </p>
                  <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white w-full">
                    <a href="mailto:aditisakshisingh@gmail.com">
                      Send Message
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
