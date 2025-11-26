import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Cloud,
  Code,
  Rocket,
  Shield,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Brain,
      title: "AI Application Development",
      description: "Custom AI-powered solutions tailored to your business needs with machine learning integration.",
    },
    {
      icon: Cloud,
      title: "Custom SaaS Solutions",
      description: "Scalable multi-tenant platforms with robust user management and payment integration.",
    },
    {
      icon: Code,
      title: "Website & Web Applications",
      description: "Modern, responsive applications built with cutting-edge frameworks and technologies.",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end process digitization and legacy system modernization for organizations.",
    },
    {
      icon: Shield,
      title: "Government Solutions",
      description: "Revenue collection systems, public service platforms, and compliance tools.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Intelligent workflow automation and system integration to boost efficiency.",
    },
  ];

  const projects = [
    {
      title: "Revenue Integrity Shield",
      category: "Government",
      description: "Comprehensive tax collection digitization system improving revenue transparency and efficiency for government agencies.",
      results: "Streamlined revenue collection across multiple channels",
    },
    {
      title: "AgriTech Platform",
      category: "Agriculture",
      description: "Advanced farm management application enabling data-driven agricultural decisions and resource optimization.",
      results: "Enhanced farm productivity and resource management",
    },
    {
      title: "Church Management System",
      category: "Religious Organizations",
      description: "Complete platform for managing congregations, events, donations, and communications.",
      results: "Simplified administrative processes and member engagement",
    },
    {
      title: "AI Phone Assistant",
      category: "Multi-Industry",
      description: "Intelligent voice-powered system serving multiple industries with natural language processing.",
      results: "24/7 automated customer service capabilities",
    },
  ];

  const whyChoose = [
    "Proven expertise in AI and software development",
    "Tailored solutions for African markets",
    "End-to-end project delivery",
    "Cutting-edge technology stack",
    "Local expertise with global standards",
    "Continuous support and maintenance",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(37, 45, 87, 0.95) 0%, rgba(37, 45, 87, 0.8) 50%, rgba(27, 167, 195, 0.6) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              Transform Your Business with{" "}
              <span className="text-gradient">Intelligent AI Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl"
            >
              Custom software development and AI-powered applications that drive efficiency and growth for African businesses
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-secondary text-white hover:opacity-90 shadow-glow">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our Solutions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to digitize and transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border hover:border-secondary/50">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg" className="bg-gradient-primary">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={featuresRef} className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">LawOne Cloud</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine local market expertise with international quality standards to deliver exceptional results.
              </p>
              
              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="rounded-full bg-secondary/10 p-1 mt-1">
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-glow">
                <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-2">Industries Served</h4>
                    <p className="text-white/80">Government, Agriculture, Religious Organizations, Financial Services, Healthcare, Professional Services</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-2">Technology Stack</h4>
                    <p className="text-white/80">Next.js, React, AI/ML, Supabase, PostgreSQL, Cloud Solutions</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="text-white font-semibold mb-2">Market Focus</h4>
                    <p className="text-white/80">Nigeria and Pan-African market with international standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real solutions delivering tangible results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-all border-border hover:border-secondary/50">
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-accent">{project.results}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-primary">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our AI solutions and custom development services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Request Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
