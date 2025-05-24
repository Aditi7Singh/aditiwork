
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding elegant solutions through code."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying updated with industry trends."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that meet user needs."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication and teamwork skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Developer with a Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated software developer with a strong foundation in computer science and a passion for creating 
              innovative solutions. My journey in technology started with curiosity and has evolved into a commitment 
              to building applications that make a difference.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing my studies while actively working on various projects, I believe in the power of 
              technology to solve real-world problems. I'm always eager to learn new technologies and collaborate 
              with like-minded individuals to create something amazing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, 
              or brainstorming ideas for my next big project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
