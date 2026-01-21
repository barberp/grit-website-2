"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const coaches = [
  {
    name: "Marcus Stone",
    specialty: "Strength & Conditioning",
    bio: "15 years of experience transforming athletes and fitness enthusiasts. Specializes in powerlifting and functional strength.",
    image: "👨‍💼",
  },
  {
    name: "Sarah Martinez",
    specialty: "HIIT & Cardio",
    bio: "Former competitive athlete turned coach. Known for high-energy classes that push limits and deliver results.",
    image: "👩‍💼",
  },
  {
    name: "James Chen",
    specialty: "Functional Movement",
    bio: "Movement specialist focused on injury prevention and mobility. Helps members move better and train smarter.",
    image: "👨‍💼",
  },
  {
    name: "Elena Rodriguez",
    specialty: "Nutrition & Wellness",
    bio: "Holistic approach to fitness combining training with nutrition guidance. Believes in sustainable lifestyle changes.",
    image: "👩‍💼",
  },
  {
    name: "Mike Johnson",
    specialty: "Boxing & Combat",
    bio: "Professional boxing coach with 20+ years experience. Teaches technique, conditioning, and mental toughness.",
    image: "👨‍💼",
  },
  {
    name: "Alex Taylor",
    specialty: "Yoga & Recovery",
    bio: "Certified yoga instructor specializing in recovery and flexibility. Helps members balance intensity with restoration.",
    image: "👩‍💼",
  },
];

export default function Coaches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="coaches"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-accent-red">MEET</span>{" "}
            <span className="text-steel-100">THE COACHES</span>
          </h2>
          <p className="text-steel-300 text-lg md:text-xl max-w-3xl mx-auto">
            Our expert team is here to guide, motivate, and push you to achieve
            your goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-charcoal-950 rounded-lg border border-charcoal-800 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center text-8xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">{coach.image}</div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-accent-red">
                  {coach.name}
                </h3>
                <p className="text-accent-orange font-semibold mb-3">
                  {coach.specialty}
                </p>
                <motion.p
                  className="text-steel-300 text-sm leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {coach.bio}
                </motion.p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent-red"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

