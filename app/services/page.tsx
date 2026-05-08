"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M20 17.5A4.5 4.5 0 0 0 18 9h-1.3A7 7 0 0 0 3 11a4 4 0 0 0 1 7.8h16" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const services = [
  {
    icon: CpuIcon,
    title: "Blockchain Student Records",
    description: "Immutable student records, credential verification, and academic history stored securely on blockchain.",
    features: [
      "Digital Transcripts & Certificates",
      "Tamper-proof Academic Records",
      "Instant Verification",
      "Student Identity Management",
      "Audit-ready Recordkeeping"
    ],
    technologies: ["Hyperledger", "Ethereum", "Solidity", "IPFS", "Node.js", "PostgreSQL"]
  },
  {
    icon: CloudIcon,
    title: "Campus Data Security",
    description: "Protect student and institutional data with secure encryption, access controls, and blockchain trust models.",
    features: [
      "Encrypted Student Records",
      "Role-based Access Control",
      "Identity Verification",
      "Privacy Compliance",
      "Secure Audit Trails"
    ],
    technologies: ["Zero Trust", "OAuth", "JWT", "TLS", "Kubernetes", "Terraform"]
  },
  {
    icon: ShieldIcon,
    title: "Academic Analytics",
    description: "Actionable insights from student performance, enrollment, and retention data across educational institutions.",
    features: [
      "Student Success Dashboards",
      "Retention Forecasting",
      "Learning Outcome Analytics",
      "Enrollment Reporting",
      "Data-Driven Decision Support"
    ],
    technologies: ["PostgreSQL", "Apache Kafka", "Elasticsearch", "Tableau", "Python", "ML Models"]
  },
  {
    icon: DatabaseIcon,
    title: "Student Lifecycle Platform",
    description: "End-to-end solutions for admissions, registration, grade management, and alumni credentialing.",
    features: [
      "Admissions & Enrollment Workflows",
      "Grade & Attendance Tracking",
      "Alumni Credential Management",
      "Multi-campus Support",
      "Mobile Student Portals"
    ],
    technologies: ["React", "Next.js", "GraphQL", "MongoDB", "TypeScript", "Node.js"]
  },
  {
    icon: CodeIcon,
    title: "Integration & Onboarding",
    description: "Seamless SIS integration, legacy data migration, and a smooth adoption path for educational institutions.",
    features: [
      "API Integration",
      "Data Migration",
      "SIS Onboarding",
      "Mobile Access",
      "Support & Training"
    ],
    technologies: ["REST", "GraphQL", "API-First", "Terraform", "CI/CD", "Docker"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Arvionixa Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10"
            >
              <ArrowLeftIcon />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-10 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
            SIS Services
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We help education institutions launch blockchain student information systems with secure records, modern workflows, and data-driven operations.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-4">
                        <service.icon />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-white/70">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-10 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We follow a proven methodology to deliver high-quality software solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your business needs, goals, and technical requirements through comprehensive analysis."
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates detailed technical specifications and architecture designs for your solution."
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using modern technologies, best practices, and agile methodologies."
              },
              {
                step: "04",
                title: "Deployment",
                description: "We ensure smooth deployment, testing, and ongoing support for your production environment."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-white/70 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Let&apos;s discuss how we can help transform your business with modern software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl text-base font-medium">
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-xl hover:bg-white/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-10 border-t border-white/10 text-center text-white/50 text-sm">
        <div className="mb-5 flex justify-center">
          <img
            src="/logo.png"
            alt="Arvionixa Logo"
            className="h-16 w-auto object-contain opacity-95"
          />
        </div>
        <p>Engineering the Future of Software Systems</p>
        <p className="mt-2">© {new Date().getFullYear()} Arvionixa. All rights reserved.</p>
      </footer>
    </div>
  );
}