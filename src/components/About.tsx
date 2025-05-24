
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
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">About</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Passionate Developer with a Vision
              </h2>
              <div className="w-12 h-px bg-gray-900"></div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I'm a dedicated software developer with a strong foundation in computer science and a passion for creating 
                innovative solutions. My journey in technology started with curiosity and has evolved into a commitment 
                to building applications that make a difference.
              </p>
              <p>
                Currently pursuing my studies while actively working on various projects, I believe in the power of 
                technology to solve real-world problems. I'm always eager to learn new technologies and collaborate 
                with like-minded individuals to create something amazing.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, 
                or brainstorming ideas for my next big project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
