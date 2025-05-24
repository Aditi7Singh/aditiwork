
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Web Development",
      skills: ["React", "HTML5", "CSS3", "Node.js", "Express", "REST APIs"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Postman"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Bootstrap", "Tailwind CSS", "jQuery"],
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
