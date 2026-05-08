"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M20 17.5A4.5 4.5 0 0 0 18 9h-1.3A7 7 0 0 0 3 11a4 4 0 0 0 1 7.8h16" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitSuccess(true);
    setContactForm({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,140,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/40 flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Arvionixa Logo"
            className="h-14 w-auto object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]"
          />
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <button
            onClick={() => scrollToSection('hero')}
            className={`hover:text-white transition-colors ${activeSection === 'hero' ? 'text-white' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`hover:text-white transition-colors ${activeSection === 'services' ? 'text-white' : ''}`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`hover:text-white transition-colors ${activeSection === 'about' ? 'text-white' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('careers')}
            className={`hover:text-white transition-colors ${activeSection === 'careers' ? 'text-white' : ''}`}
          >
            Careers
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`hover:text-white transition-colors ${activeSection === 'contact' ? 'text-white' : ''}`}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-500 rounded-xl px-5">
            Get in Touch
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10"
        >
          <nav className="flex flex-col px-6 py-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="py-3 text-left text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="py-3 text-left text-white/80 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-3 text-left text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="py-3 text-left text-white/80 hover:text-white transition-colors"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-3 text-left text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-500 rounded-xl">
              Get in Touch
            </Button>
          </nav>
        </motion.div>
      )}

      <section className="relative overflow-hidden text-center py-44 px-6">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-40 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_45%)]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 mb-6"
        >
          Blockchain Student Records • Immutable Credentials • Campus Data Security
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight max-w-6xl mx-auto bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent"
        >
          Secure Student Data on Blockchain
        </motion.h1>

        <p className="mt-8 text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
          Arvionixa builds blockchain-native student information systems that deliver immutable academic records, secure credentials, and smarter campus operations.
        </p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          <Button
            onClick={() => window.location.href = '/services'}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-6 rounded-2xl text-base shadow-[0_0_40px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-300"
          >
            Explore Services <ArrowRightIcon />
          </Button>

          <Button
            onClick={() => window.location.href = '/careers'}
            variant="outline"
            className="border-white/20 bg-white/5 backdrop-blur-xl px-8 py-6 rounded-2xl hover:bg-white/10"
          >
            Join Our Team
          </Button>
        </div>
      </section>

      <section id="services" className="relative px-6 md:px-10 py-32" style={{
        backgroundImage: 'url(/services-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">What We Build</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            <Card className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <CardContent className="relative z-10 p-8">
                <div className="mb-5 h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                  <CpuIcon />
                </div>
                <h3 className="text-2xl font-bold">Blockchain Student Records</h3>
                <p className="text-white/70 mt-3 leading-relaxed">
                  Immutable student records, digital transcripts, and secure academic credentialing on blockchain.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <CardContent className="relative z-10 p-8">
                <div className="mb-5 h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-300">
                  <CloudIcon />
                </div>
                <h3 className="text-2xl font-bold">Campus Data Security</h3>
                <p className="text-white/70 mt-3 leading-relaxed">
                  Protect academic data with encrypted access controls, identity verification, and tamper-proof audit trails.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <CardContent className="relative z-10 p-8">
                <div className="mb-5 h-14 w-14 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-300">
                  <ShieldIcon />
                </div>
                <h3 className="text-2xl font-bold">Academic Analytics</h3>
                <p className="text-white/70 mt-3 leading-relaxed">
                  Generate actionable student insights, retention analytics, and campus reporting from secure data flows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6 md:px-10 py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">About Arvionixa SIS</h2>
            <p className="text-white/70 mt-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Arvionixa builds blockchain-powered student information systems that give institutions secure, verifiable academic records and seamless student lifecycle management.
              Our mission is to modernize education administration with trustless credentials, protected data flows, and better student outcomes.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Meet Our Developers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      MP
                    </div>
                    <h4 className="text-xl font-bold mb-2">Mia Patel</h4>
                    <p className="text-blue-400 mb-4">Blockchain Platform Lead</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Leads development of secure academic ledgers and smart contract workflows for student credentialing.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      ER
                    </div>
                    <h4 className="text-xl font-bold mb-2">Ethan Reed</h4>
                    <p className="text-blue-400 mb-4">Education UX Engineer</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Designs intuitive SIS experiences for students, faculty, and administrators using data-driven UI patterns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      NP
                    </div>
                    <h4 className="text-xl font-bold mb-2">Nina Park</h4>
                    <p className="text-blue-400 mb-4">DevOps Engineer</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Automates secure deployment workflows and ensures high availability for mission-critical student systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      LT
                    </div>
                    <h4 className="text-xl font-bold mb-2">Lina Torres</h4>
                    <p className="text-blue-400 mb-4">Full-Stack SIS Developer</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Builds secure student portals and administrative dashboards with modern web and blockchain tools.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      OA
                    </div>
                    <h4 className="text-xl font-bold mb-2">Omar Aziz</h4>
                    <p className="text-blue-400 mb-4">Data Governance Architect</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Designs data models and compliance frameworks for trusted student record management.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 hover:bg-white/10 transition-colors">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                      PS
                    </div>
                    <h4 className="text-xl font-bold mb-2">Priya Singh</h4>
                    <p className="text-blue-400 mb-4">Security & Compliance Lead</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Ensures student data privacy, blockchain credential integrity, and regulatory compliance across campus systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="relative px-6 md:px-10 py-32">
        <div className="text-center max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)]">
          <h2 className="text-4xl font-bold">Join Our Team</h2>
          <p className="text-white/70 mt-5 text-lg">
            We’re always looking for talented engineers, designers, and builders.
          </p>

          <Button
            onClick={() => window.location.href = '/careers'}
            className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 rounded-2xl text-base shadow-[0_0_40px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-300"
          >
            View Open Roles
          </Button>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-10 py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Let&apos;s Build the Future of Education</h2>
            <p className="text-white/70 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Partner with Arvionixa to create blockchain-backed student information systems and secure academic workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4 text-white/70">
                  <p>Ready to start your next project? We&apos;d love to hear from you.</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-3">
                      <span className="text-blue-400">📧</span>
                      hello@arvionixa.io
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-blue-400">🏢</span>
                      connect@arvionixa.io
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-2xl p-8">
              <CardContent className="p-0">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-white/70">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={contactForm.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-10 border-t border-white/10 text-center text-white/50 text-sm">
        <div className="mb-5 flex justify-center">
          <img
            src="/logo.png"
            alt="Arvionixa Logo"
            className="h-16 w-auto object-contain opacity-95"
          />
        </div>

        <div className="flex justify-center gap-6 mb-4 text-white/70 flex-wrap">
          <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('careers')} className="hover:text-white transition-colors">Careers</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>

        <p>Engineering the Future of Software Systems</p>
        <p className="mt-2">© {new Date().getFullYear()} Arvionixa. All rights reserved.</p>
      </footer>
    </div>
  );
}
