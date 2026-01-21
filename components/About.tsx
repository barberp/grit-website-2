"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Hard Work",
    description:
      "We believe in pushing limits and breaking barriers. Every session is designed to challenge you and help you discover what you're truly capable of.",
    icon: "💪",
  },
  {
    title: "Community",
    description:
      "You're not alone in this journey. Our tight-knit community supports, motivates, and celebrates each other's victories, big and small.",
    icon: "🤝",
  },
  {
    title: "Health",
    description:
      "True strength comes from holistic health. We focus on building not just physical power, but mental resilience and overall well-being.",
    icon: "❤️",
  },
];

const features = [
  {
    title: "Expert Coaching",
    description: "Certified trainers with years of experience",
  },
  {
    title: "Proven Methods",
    description: "Science-backed training protocols",
  },
  {
    title: "Flexible Schedule",
    description: "Classes throughout the day to fit your life",
  },
  {
    title: "Results Driven",
    description: "Track your progress and see real transformation",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-accent-red">ABOUT</span>{" "}
            <span className="text-steel-100">GRIT</span>
          </h2>
          <p className="text-steel-300 text-lg md:text-xl max-w-3xl mx-auto">
            We're more than a gym. We're a movement dedicated to transforming
            lives through discipline, dedication, and determination.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-800 hover:border-accent-red/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-accent-red">
                {pillar.title}
              </h3>
              <p className="text-steel-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 p-8 md:p-12 rounded-lg border border-charcoal-700">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-accent-orange">
              Our Philosophy
            </h3>
            <p className="text-steel-200 text-lg md:text-xl leading-relaxed mb-6">
              At Grit Training Co., we believe that transformation happens when
              you commit to the process, not just the outcome. Our training
              methodology combines high-intensity workouts with functional
              movement patterns, ensuring you build strength that translates to
              real-world performance.
            </p>
            <p className="text-steel-300 text-base md:text-lg leading-relaxed">
              We create an environment where pushing your limits is encouraged,
              failure is seen as growth, and every member is part of a family
              that celebrates progress over perfection.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-steel-100">
            Why Choose Grit?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-charcoal-900 p-6 rounded-lg border border-charcoal-800 hover:border-accent-orange/50 transition-all duration-300 text-center"
              >
                <h4 className="text-xl font-bold mb-2 text-accent-orange">
                  {feature.title}
                </h4>
                <p className="text-steel-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

