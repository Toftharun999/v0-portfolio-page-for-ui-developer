"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Code2, Users, Shield, Zap, Lightbulb, BookOpen, MapPin, Mail, Phone, Clock } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Campaigns to Code",
      description:
        "Translating brand goals and creative concepts into high-converting ad campaigns and pixel-perfect landing pages using HTML/CSS/JS and React/Next.js.",
      icon: <Code2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Collaboration & Ownership",
      description:
        "Working closely with designers, founders, and sales teams to align marketing strategy, web development, and on-ground business needs, ensuring consistent communication and timely delivery.",
      icon: <Users size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Analytics & Tracking First",
      description: "Implementing GA4, pixel tracking, and event-based analytics to measure the full funnel accurately and make data-driven optimisation decisions across search, social, and web.",
      icon: <Shield size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Performance Optimisation",
      description: "Improving campaign ROI and website performance by optimising bids, targeting, and creatives, and enhancing page speed, UX, and technical SEO for better engagement and conversions.",
      icon: <Zap size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Creative Problem Solving",
      description: "Solving complex marketing and UX challenges with innovative campaign ideas, A/B tests, and UI changes that align user behaviour with business outcomes.",
      icon: <Lightbulb size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with the latest ad platforms, SEO practices, JavaScript frameworks, and CRO techniques, and applying new learnings quickly to real campaigns and products.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Digital Marketing Executive & Web developer with{" "}
              <span className="font-semibold text-foreground">1.5+ years</span> of experience in Versatile Digital Marketing Executive & Web Developer skilled in full-funnel optimisation, combining Google Ads, GA4 tracking, and Meta Ads campaigns with custom front-end development using HTML/CSS/JS, React, and Next.js. Experienced in A/B testing landing pages, conversion rate optimisation, and integrating analytics for real-time performance insights that improve lead quality and sales for high-end B2C brands. Eager to bring end-to-end digital expertise to innovative teams in India or abroad. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At <span className="font-semibold text-foreground">Urbane Home & Garden</span>, I am leading a UI/frontend team of 5, delivering high-quality interactive interfaces and advancing web accessibility standards. I'm
              committed to performance optimization, execute Google Ads, SEO, and social media strategies while also building and improving landing pages using modern web technologies to turn traffic into qualified leads, modern web standards, and creating inclusive digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond code, I'm passionate about{" "}
              <span className="font-semibold text-foreground">cricket, photography, editing, snapchat filter and gaming(BGMI)</span>. I believe in
              continuous learning and staying updated with the latest technologies and design trends.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Hyderabad, India", icon: <MapPin size={24} strokeWidth={1.5} /> },
                {
                  label: "Email",
                  value: "tharunjamparapu@gmail.com",
                  link: "mailto:tharunjamparapu@gmail.com",
                  icon: <Mail size={24} strokeWidth={1.5} />,
                },
                {
                  label: "Phone",
                  value: "+91 7997788621",
                  link: "tel:+917997788621",
                  icon: <Phone size={24} strokeWidth={1.5} />,
                },
                { label: "Experience", value: "1.5+ Years", icon: <Clock size={24} strokeWidth={1.5} /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-primary hover:underline text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
