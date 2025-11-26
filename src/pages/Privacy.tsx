import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you fill out a contact form, request information about our services, or communicate with us. This may include your name, email address, phone number, company name, and project details.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to respond to your inquiries, provide our services, send you updates and marketing communications (with your consent), improve our website and services, and comply with legal obligations.",
    },
    {
      title: "Information Sharing and Disclosure",
      content:
        "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.",
    },
    {
      title: "Cookies and Tracking",
      content:
        "Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
                    At LawOne Cloud Limited, we are committed to protecting your privacy and
                    ensuring the security of your personal information. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when
                    you visit our website or use our services.
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
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices,
                    please contact us at:
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

export default Privacy;
