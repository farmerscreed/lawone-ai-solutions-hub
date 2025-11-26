import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Lock,
  Zap,
  GitBranch,
  TestTube,
  Server,
  Layers,
} from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      category: "Frontend Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "Next.js", description: "React framework for production" },
        { name: "React", description: "Modern UI library" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Framer Motion", description: "Animation library" },
      ],
    },
    {
      category: "Backend & Database",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "Supabase", description: "Backend-as-a-Service platform" },
        { name: "PostgreSQL", description: "Relational database" },
        { name: "Prisma", description: "Database ORM" },
        { name: "REST APIs", description: "API architecture" },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Google AI Studio", description: "AI model development" },
        { name: "Gemini API", description: "Google's AI models" },
        { name: "Claude API", description: "Anthropic's AI assistant" },
        { name: "OpenAI", description: "GPT models and APIs" },
        { name: "TensorFlow", description: "Machine learning framework" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      gradient: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS", description: "Amazon Web Services" },
        { name: "Google Cloud", description: "GCP infrastructure" },
        { name: "Vercel", description: "Deployment platform" },
        { name: "Docker", description: "Containerization" },
        { name: "CDN", description: "Content delivery" },
      ],
    },
  ];

  const methodology = [
    {
      icon: GitBranch,
      title: "Agile Development",
      description: "Iterative approach with regular feedback loops and adaptive planning for optimal results.",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Comprehensive testing strategies including unit, integration, and end-to-end testing.",
    },
    {
      icon: Lock,
      title: "Security Best Practices",
      description: "Implementation of industry-standard security measures and compliance protocols.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Designing systems that grow with your business needs and handle increasing loads.",
    },
    {
      icon: Server,
      title: "CI/CD Pipeline",
      description: "Automated deployment workflows for faster releases and reduced deployment errors.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive solutions optimized for all devices and screen sizes from the start.",
    },
  ];

  const features = [
    {
      title: "Progressive Web Apps",
      description: "Building web applications that work offline and provide native app-like experiences.",
    },
    {
      title: "Real-time Updates",
      description: "Implementing live data synchronization for collaborative and dynamic applications.",
    },
    {
      title: "API Integration",
      description: "Seamless connectivity with third-party services and existing business systems.",
    },
    {
      title: "Performance Optimization",
      description: "Code splitting, lazy loading, and caching strategies for lightning-fast applications.",
    },
    {
      title: "Multi-tenancy",
      description: "Secure, isolated environments for multiple clients within a single application.",
    },
    {
      title: "Analytics & Monitoring",
      description: "Real-time insights into application performance and user behavior.",
    },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Technology Stack</h1>
            <p className="text-xl text-white/90">
              Leveraging cutting-edge technologies to build robust, scalable solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technologies We <span className="text-gradient">Master</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans the full technology stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${stack.gradient} p-6 text-white`}>
                    <div className="flex items-center space-x-3">
                      <stack.icon className="w-8 h-8" />
                      <h3 className="text-2xl font-bold">{stack.category}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {stack.technologies.map((tech) => (
                        <div key={tech.name} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">{tech.name}</h4>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Methodology */}
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
              Development <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our approach to building exceptional software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features we implement in our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-secondary/50">
                  <CardContent className="p-6">
                    <div className="h-2 w-12 bg-gradient-secondary rounded-full mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Code className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our technical expertise is ready to transform your ideas into reality
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
