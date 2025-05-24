
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FastAPI-based ASR Application Using NVIDIA",
      description: "An Automatic Speech Recognition application built with FastAPI and powered by NVIDIA technologies, demonstrating real-time speech-to-text capabilities.",
      technologies: ["FastAPI", "Python", "NVIDIA", "ASR", "ML"],
      githubUrl: "https://github.com/Aditi7Singh/-FastAPI-based-ASR-Application-Using-NVIDIA-",
      featured: true
    },
    {
      title: "Research Paper Repository",
      description: "A comprehensive collection of research papers and academic resources serving as a centralized hub for academic work.",
      technologies: ["Research", "Documentation", "Analysis"],
      githubUrl: "https://github.com/Aditi7Singh/Research-Paper-Repository",
      featured: true
    },
    {
      title: "Multilanguage Translator and Summariser",
      description: "An intelligent application with advanced NLP capabilities for accurate translation between multiple languages and text summarization.",
      technologies: ["Python", "NLP", "Translation API", "ML"],
      githubUrl: "https://github.com/Aditi7Singh/Multilanguage-Translator-and-Summariser",
      featured: false
    },
    {
      title: "Scheduling Algorithm",
      description: "Implementation of various CPU scheduling algorithms including FCFS, SJF, Round Robin, and Priority scheduling with visual representations.",
      technologies: ["Algorithms", "OS", "Data Structures"],
      githubUrl: "https://github.com/Aditi7Singh/Schedueling-Algorithm",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-500 tracking-wider uppercase">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Featured Projects
            </h2>
            <div className="w-12 h-px bg-gray-900"></div>
            <p className="text-gray-600 max-w-2xl">
              A collection of recent projects showcasing my expertise in AI, machine learning, and software development.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="group border-0 shadow-none hover:shadow-lg transition-all duration-500 bg-gray-50 hover:bg-white">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge variant="secondary" className="bg-gray-200 text-gray-700 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 lg:justify-end">
                      <Button asChild size="sm" variant="outline" className="border-gray-300 hover:bg-gray-50">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          View
                          <ArrowUpRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50">
              <a href="https://github.com/Aditi7Singh" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
