"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const DollarSignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const jobOpenings = [
  {
    id: 1,
    title: "Blockchain Application Engineer",
    department: "Blockchain Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Build the core blockchain ledger and smart contract infrastructure that powers secure student records and credential verification.",
    requirements: [
      "5+ years of software engineering experience",
      "Strong experience with blockchain platforms and smart contracts",
      "Knowledge of distributed ledger architecture",
      "Experience with Node.js, TypeScript, or Go",
      "Familiarity with data security and encryption"
    ]
  },
  {
    id: 2,
    title: "Student Data Architect",
    department: "Data & Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Design data models and secure information flows for student lifecycle management, academic records, and identity verification.",
    requirements: [
      "3+ years of data architecture experience",
      "Experience with education technology or student information systems",
      "Strong knowledge of data modeling and privacy",
      "Familiarity with API integration and middleware",
      "Experience with relational and distributed databases"
    ]
  },
  {
    id: 3,
    title: "Frontend Engineer, Education Platform",
    department: "Product Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Build intuitive, responsive interfaces for students, educators, and administrators in our blockchain-enabled SIS platform.",
    requirements: [
      "3+ years of frontend development experience",
      "Expert knowledge of React and TypeScript",
      "Experience with design systems and accessibility",
      "Familiarity with complex data dashboards",
      "Strong communication and collaboration skills"
    ]
  },
  {
    id: 4,
    title: "Product Manager, Academic Systems",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Lead product strategy for blockchain student services, academic workflows, and secure credential management.",
    requirements: [
      "4+ years of product management experience",
      "Experience in education technology or SaaS products",
      "Strong analytical and stakeholder communication skills",
      "Background in student systems, blockchain, or security",
      "Ability to translate education needs into product outcomes"
    ]
  }
];

const developers = [
  {
    id: 1,
    name: "Mia Patel",
    role: "Blockchain Platform Lead",
    image: "/developer-1.jpg",
    bio: "Leads blockchain and smart contract engineering for secure student record systems.",
    skills: ["Solidity", "Ethereum", "Hyperledger", "Node.js", "Security"],
    linkedin: "#",
    github: "#"
  },
  {
    id: 2,
    name: "Ethan Reed",
    role: "Education UX Engineer",
    image: "/developer-2.jpg",
    bio: "Designs intuitive student and faculty experiences for blockchain-powered education platforms.",
    skills: ["React", "TypeScript", "Figma", "Accessibility", "SIS"],
    linkedin: "#",
    github: "#"
  },
  {
    id: 3,
    name: "Nina Park",
    role: "DevOps Engineer",
    image: "/developer-3.jpg",
    bio: "Automates secure deployment workflows for education systems and blockchain infrastructure.",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS"],
    linkedin: "#",
    github: "#"
  },
  {
    id: 4,
    name: "Lina Torres",
    role: "Full-Stack SIS Developer",
    image: "/developer-4.jpg",
    bio: "Builds end-to-end student portals and administrative dashboards for modern schools.",
    skills: ["Next.js", "GraphQL", "PostgreSQL", "Node.js", "Tailwind CSS"],
    linkedin: "#",
    github: "#"
  },
  {
    id: 5,
    name: "Omar Aziz",
    role: "Data Governance Architect",
    image: "/developer-5.jpg",
    bio: "Creates secure student data pipelines and helps institutions meet privacy and compliance needs.",
    skills: ["Data Modeling", "Privacy", "SQL", "Tableau", "Governance"],
    linkedin: "#",
    github: "#"
  },
  {
    id: 6,
    name: "Priya Singh",
    role: "Security & Compliance Lead",
    image: "/developer-6.jpg",
    bio: "Ensures blockchain credentials and student records remain secure, private, and trustworthy.",
    skills: ["Security", "Encryption", "Privacy", "Audit", "Identity"],
    linkedin: "#",
    github: "#"
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [developerIndex, setDeveloperIndex] = useState(0);

  // Auto-play functionality for jobs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === jobOpenings.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto-play functionality for developers
  useEffect(() => {
    const interval = setInterval(() => {
      setDeveloperIndex((prevIndex) =>
        prevIndex === developers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jobOpenings.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobOpenings.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextDeveloper = () => {
    setDeveloperIndex((prevIndex) =>
      prevIndex === developers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDeveloper = () => {
    setDeveloperIndex((prevIndex) =>
      prevIndex === 0 ? developers.length - 1 : prevIndex - 1
    );
  };

  const goToDeveloper = (index: number) => {
    setDeveloperIndex(index);
  };

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
            Join Our Team
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re building the future of software engineering. Join a team of talented engineers, designers, and innovators who are passionate about creating scalable, secure systems.
          </p>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>

          <div className="relative">
            {/* Job Counter */}
            <div className="text-center mb-6">
              <p className="text-white/60 text-sm">
                {currentIndex + 1} of {jobOpenings.length} positions
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative rounded-[24px] min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 120, opacity: 0, scale: 0.98 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -120, opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute w-full max-w-2xl"
                >
                  <Card className="bg-white/5 border border-white/10 rounded-[24px] backdrop-blur-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer group mx-auto max-w-2xl">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                            {jobOpenings[currentIndex].title}
                          </h3>
                          <p className="text-blue-400 text-sm">{jobOpenings[currentIndex].department}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                          {jobOpenings[currentIndex].type}
                        </span>
                      </div>

                      <p className="text-white/70 mb-6 leading-relaxed">
                        {jobOpenings[currentIndex].description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPinIcon />
                          {jobOpenings[currentIndex].location}
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <ClockIcon />
                          {jobOpenings[currentIndex].type}
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <DollarSignIcon />
                          {jobOpenings[currentIndex].salary}
                        </div>
                      </div>

                      <Button
                        onClick={() => setSelectedJob(jobOpenings[currentIndex])}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>


          </div>
        </div>
      </section>

      {/* Meet Our Developers */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
              Meet Our Developers
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover the team building the blockchain student information system that secures student records, credentials, and campus workflows.
            </p>
          </div>

          <div className="relative">
            {/* Developer Counter */}
            <div className="text-center mb-6">
              <p className="text-white/60 text-sm">
                Developer {developerIndex + 1} of {developers.length}
              </p>
            </div>

            {/* Developer Carousel */}
            <div className="relative rounded-[32px] min-h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={developerIndex}
                  initial={{ x: 120, opacity: 0, scale: 0.98 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -120, opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="absolute w-full max-w-4xl"
                >
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Developer Image */}
                        <div className="relative">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-blue-400">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
                              <path d="M22 2L11 13" />
                              <path d="M22 2L15 22 11 13 2 9 22 2Z" />
                            </svg>
                          </div>
                        </div>

                        {/* Developer Info */}
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                            {developers[developerIndex].name}
                          </h3>
                          <p className="text-blue-400 text-lg mb-4">{developers[developerIndex].role}</p>
                          <p className="text-white/80 mb-6 leading-relaxed">
                            {developers[developerIndex].bio}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                            {developers[developerIndex].skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Social Links */}
                          <div className="flex gap-4 justify-center md:justify-start">
                            <Button
                              variant="outline"
                              className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-4 py-2"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              LinkedIn
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white px-4 py-2"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Developer Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={prevDeveloper}
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 rounded-full w-12 h-12 p-0"
              >
                <ChevronLeftIcon />
              </Button>

              {/* Developer Dots */}
              <div className="flex gap-2">
                {developers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToDeveloper(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === developerIndex
                        ? "bg-cyan-500 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextDeveloper}
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 rounded-full w-12 h-12 p-0"
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 border border-white/10 rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                  <p className="text-blue-400">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white/60 hover:text-white p-2"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPinIcon />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <ClockIcon />
                    {selectedJob.type}
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <DollarSignIcon />
                    {selectedJob.salary}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Role</h3>
                  <p className="text-white/70 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/70">
                        <span className="text-blue-400 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl text-base font-medium">
                    Apply for This Position
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t See the Right Fit?</h2>
          <p className="text-white/70 mb-8 text-lg">
            We&apos;re always interested in meeting talented people. Send us your resume and let&apos;s talk.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl text-base font-medium">
            Send Us Your Resume
          </Button>
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