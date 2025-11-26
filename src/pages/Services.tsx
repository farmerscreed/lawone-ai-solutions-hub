import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Brain,
  Cloud,
  Code,
  Rocket,
  Shield,
  Zap,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Application Development",
      description: "Custom AI solutions tailored to your business needs with cutting-edge machine learning integration.",
      features: [
        "Machine learning model development",
        "Natural language processing",
        "Computer vision applications",
        "Intelligent automation systems",
        "Predictive analytics",
        "AI-powered chatbots and assistants",
      ],
      technologies: ["Google AI Studio", "Gemini API", "Claude API", "OpenAI", "TensorFlow"],
    },
    {
      icon: Cloud,
      title: "Custom SaaS Solutions",
      description: "Scalable, multi-tenant platforms designed to grow with your business.",
      features: [
        "Multi-tenant architecture",
        "User management systems",
        "Subscription and payment integration",
        "Analytics and reporting dashboards",
        "API development and integration",
        "Cloud-based scalability",
      ],
      technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Stripe"],
    },
    {
      icon: Code,
      title: "Website & Web Application Development",
      description: "Modern, responsive websites and applications that deliver exceptional user experiences.",
      features: [
        "Responsive web design",
        "Progressive web apps (PWA)",
        "E-commerce solutions",
        "Content management systems",
        "Custom web applications",
        "Performance optimization",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Comprehensive digitization strategies to modernize your business operations.",
      features: [
        "Process digitization and automation",
        "Legacy system modernization",
        "Workflow automation",
        "Data migration and integration",
        "Change management support",
        "Staff training and adoption",
      ],
      technologies: ["Custom Solutions", "API Integration", "Cloud Migration", "Data Analytics"],
    },
    {
      icon: Shield,
      title: "Government Solutions",
      description: "Specialized systems for public sector digitization and citizen services.",
      features: [
        "Revenue collection systems",
        "Public service digitization",
        "Citizen engagement platforms",
        "Compliance and reporting tools",
        "Data security and privacy",
        "Multi-channel access",
      ],
      technologies: ["Secure Infrastructure", "PostgreSQL", "Audit Logging", "Encryption"],
    },
    {
      icon: Database,
      title: "Industry-Specific Solutions",
      description: "Tailored software for agriculture, healthcare, education, and religious organizations.",
      features: [
        "Agricultural technology (farm management)",
        "Church management systems",
        "Healthcare platforms",
        "Educational software",
        "Membership management",
        "Donation and payment processing",
      ],
      technologies: ["Custom Development", "Mobile-First Design", "Supabase", "Real-time Updates"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your needs and create a detailed project roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating intuitive user experiences and visual designs.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building robust solutions with rigorous quality assurance.",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Launching your solution with ongoing maintenance and support.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive AI and software development solutions to transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-border">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-3">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-gradient-primary">
                            <service.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-lg text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start space-x-2">
                              <Zap className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
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
              Our Development <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-secondary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our services can help transform your business and achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
