import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Sprout,
  Church,
  Phone,
  CheckCircle,
  Code,
  Database,
  Smartphone,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: Building2,
      title: "Revenue Integrity Shield",
      category: "Government & Public Sector",
      challenge:
        "Government agencies faced challenges with manual tax collection processes, leading to inefficiencies, revenue leakage, and lack of transparency in financial operations.",
      solution:
        "Developed a comprehensive digital tax collection and revenue management system with real-time tracking, automated workflows, multi-channel payment integration, and detailed analytics dashboards.",
      technologies: ["Next.js", "PostgreSQL", "Payment APIs", "Analytics", "Reporting"],
      results: [
        "Streamlined revenue collection across multiple channels",
        "Improved transparency and accountability",
        "Reduced manual processing time by 70%",
        "Enhanced compliance and audit capabilities",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sprout,
      title: "AgriTech Management Platform",
      category: "Agriculture & Technology",
      challenge:
        "Farmers and agricultural organizations lacked modern tools for farm management, crop monitoring, resource allocation, and data-driven decision making.",
      solution:
        "Created an intelligent farm management application with crop tracking, weather integration, resource planning, yield prediction, and marketplace connectivity for agricultural producers.",
      technologies: ["React", "Supabase", "Weather APIs", "Data Analytics", "Mobile PWA"],
      results: [
        "Enhanced farm productivity through data insights",
        "Improved resource management and cost reduction",
        "Better crop yield predictions using historical data",
        "Increased farmer income through marketplace access",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Church,
      title: "Faith Connect Management System",
      category: "Religious Organizations",
      challenge:
        "Religious organizations struggled with member management, event coordination, donation tracking, and communication across their congregation using disparate systems.",
      solution:
        "Built an all-in-one church management platform with member directory, event management, online giving, attendance tracking, communication tools, and volunteer coordination.",
      technologies: ["Next.js", "Supabase", "Payment Gateway", "SMS/Email APIs", "Calendar"],
      results: [
        "Centralized member information and engagement",
        "Increased online donations and giving transparency",
        "Streamlined event and service management",
        "Improved congregation communication and outreach",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "AI Voice Assistant Suite",
      category: "Multi-Industry AI Solution",
      challenge:
        "Businesses across sectors needed 24/7 customer service capabilities but faced high costs and staffing challenges for round-the-clock support operations.",
      solution:
        "Developed an intelligent AI-powered voice assistant system with natural language understanding, multi-language support, context awareness, and integration with existing business systems.",
      technologies: ["AI/ML", "NLP", "Voice APIs", "Cloud Functions", "Integration APIs"],
      results: [
        "24/7 automated customer service availability",
        "Reduced support costs by 60%",
        "Improved customer satisfaction scores",
        "Seamless handoff to human agents when needed",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const techStack = [
    { name: "Next.js", icon: Code },
    { name: "React", icon: Code },
    { name: "Supabase", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "AI/ML", icon: Code },
    { name: "Mobile PWA", icon: Smartphone },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/90">
              Real solutions delivering tangible results for businesses and organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    {/* Project Header */}
                    <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                          <project.icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 bg-white/20 hover:bg-white/30">
                            {project.category}
                          </Badge>
                          <h3 className="text-3xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-destructive">
                            The Challenge
                          </h4>
                          <p className="text-muted-foreground">{project.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-xl font-semibold mb-3 text-secondary">
                            Our Solution
                          </h4>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-4">Results & Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.results.map((result) => (
                            <div key={result} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technologies We <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging modern tech stacks to build robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <tech.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-medium text-sm">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Satisfied Clients" },
              { value: "10+", label: "Industries Served" },
              { value: "100%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
