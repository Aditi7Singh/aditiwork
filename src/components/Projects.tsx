
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration. Features include shopping cart, order tracking, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      githubUrl: "https://github.com/Aditi7Singh",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing daily tasks and productivity. Includes features like drag-and-drop, deadlines, categories, and progress tracking.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      githubUrl: "https://github.com/Aditi7Singh",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics using external APIs.",
      technologies: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/Aditi7Singh",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Student Portal System",
      description: "Complete student management system with features for course enrollment, grade tracking, attendance management, and communication tools.",
      technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/Aditi7Singh",
      liveUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${project.featured ? 'ring-2 ring-blue-200' : ''}`}>
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
                  Featured Project
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-2">
            <a href="https://github.com/Aditi7Singh" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
