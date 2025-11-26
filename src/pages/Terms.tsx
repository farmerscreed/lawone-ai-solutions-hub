import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using the LawOne Cloud Limited website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "Services Description",
      content:
        "LawOne Cloud Limited provides AI development, custom software solutions, SaaS platforms, web development, and digital transformation services. The specific scope and deliverables of services will be outlined in individual project agreements.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content, features, and functionality on our website are owned by LawOne Cloud Limited and are protected by international copyright, trademark, and other intellectual property laws. Project deliverables and intellectual property ownership will be specified in project agreements.",
    },
    {
      title: "User Responsibilities",
      content:
        "You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.",
    },
    {
      title: "Project Agreements",
      content:
        "Specific project terms, deliverables, timelines, and payment terms will be outlined in separate project agreements or statements of work. These agreements will govern the provision of specific services.",
    },
    {
      title: "Payment Terms",
      content:
        "Payment terms, schedules, and conditions will be specified in project agreements. Generally, we require deposits before commencing work and milestone payments throughout the project lifecycle.",
    },
    {
      title: "Confidentiality",
      content:
        "We agree to maintain the confidentiality of any proprietary or sensitive information shared during our engagement. Confidentiality terms will be detailed in project agreements or separate non-disclosure agreements.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, LawOne Cloud Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.",
    },
    {
      title: "Warranty Disclaimer",
      content:
        "Our services are provided 'as is' and 'as available.' While we strive for excellence, we make no warranties or representations about the accuracy or completeness of our services except as specified in project agreements.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate service agreements according to the terms specified in project agreements. We reserve the right to refuse service or terminate accounts that violate these terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of Nigerian courts.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will notify users of any material changes. Continued use of our services after changes constitutes acceptance of the new terms.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground">
                    These Terms of Service govern your use of the LawOne Cloud Limited website
                    and services. Please read these terms carefully before using our services or
                    entering into any agreements with us.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-muted">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Email:</strong> info@lawonecloud.com
                    </p>
                    <p>
                      <strong>Address:</strong> Port Harcourt, Rivers State, Nigeria
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
