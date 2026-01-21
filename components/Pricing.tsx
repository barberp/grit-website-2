"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Drop-In",
    price: "$25",
    period: "per class",
    description: "Perfect for trying us out",
    features: [
      "Single class access",
      "No commitment",
      "All class types",
      "Gym facilities access",
    ],
    popular: false,
  },
  {
    name: "Monthly",
    price: "$150",
    period: "per month",
    description: "Best for regular training",
    features: [
      "Unlimited classes",
      "All class types",
      "Gym facilities access",
      "Progress tracking",
      "Community events",
    ],
    popular: true,
  },
  {
    name: "Quarterly",
    price: "$400",
    period: "per quarter",
    description: "Save with 3-month commitment",
    features: [
      "Unlimited classes",
      "All class types",
      "Gym facilities access",
      "Progress tracking",
      "Community events",
      "1 free personal training session",
      "Save $50 vs monthly",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "$1,400",
    period: "per year",
    description: "Maximum value and commitment",
    features: [
      "Unlimited classes",
      "All class types",
      "Gym facilities access",
      "Progress tracking",
      "Community events",
      "4 free personal training sessions",
      "Nutrition consultation",
      "Save $400 vs monthly",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="pricing"
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
            <span className="text-accent-red">PRICING</span>{" "}
            <span className="text-steel-100">& MEMBERSHIP</span>
          </h2>
          <p className="text-steel-300 text-lg md:text-xl max-w-3xl mx-auto">
            Choose the plan that fits your goals and commitment level. All
            memberships include access to our full facility.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-charcoal-950 rounded-lg border-2 p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-accent-red scale-105 lg:scale-110"
                  : "border-charcoal-800 hover:border-accent-orange"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-accent-red">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-steel-100">
                    {plan.price}
                  </span>
                  <span className="text-steel-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-steel-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-steel-300"
                  >
                    <svg
                      className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? "bg-accent-red text-white hover:bg-accent-orange"
                    : "bg-charcoal-800 text-steel-100 hover:bg-charcoal-700 border border-charcoal-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-steel-400 mb-4">
            All memberships include a free trial class. No credit card required
            for first visit.
          </p>
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-accent-red text-accent-red rounded-lg font-bold hover:bg-accent-red hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

