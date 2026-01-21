"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <section
      id="contact"
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
            <span className="text-accent-red">CONTACT</span>{" "}
            <span className="text-steel-100">US</span>
          </h2>
          <p className="text-steel-300 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to start your journey? Get in touch or visit us in person.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-800">
              <h3 className="text-2xl font-bold mb-6 text-accent-orange">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-steel-200 font-semibold mb-2">
                    Location
                  </h4>
                  <p className="text-steel-400 mb-2">
                    123 Strength Street
                    <br />
                    Fitness City, FC 12345
                  </p>
                  <motion.button
                    onClick={() => copyToClipboard("123 Strength Street, Fitness City, FC 12345")}
                    className="text-accent-red hover:text-accent-orange text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Copy Address
                  </motion.button>
                </div>

                <div>
                  <h4 className="text-steel-200 font-semibold mb-2">Hours</h4>
                  <div className="text-steel-400 space-y-1 text-sm">
                    <p>Monday - Friday: 5:30 AM - 9:00 PM</p>
                    <p>Saturday: 7:00 AM - 7:00 PM</p>
                    <p>Sunday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-steel-200 font-semibold mb-2">Phone</h4>
                  <motion.button
                    onClick={() => copyToClipboard("(555) 123-4567")}
                    className="text-accent-red hover:text-accent-orange"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    (555) 123-4567
                  </motion.button>
                </div>

                <div>
                  <h4 className="text-steel-200 font-semibold mb-2">Email</h4>
                  <motion.button
                    onClick={() => copyToClipboard("info@grittrainingco.com")}
                    className="text-accent-red hover:text-accent-orange"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    info@grittrainingco.com
                  </motion.button>
                </div>

                <div>
                  <h4 className="text-steel-200 font-semibold mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    {["Instagram", "Facebook", "Twitter"].map((social) => (
                      <motion.button
                        key={social}
                        className="w-10 h-10 bg-charcoal-800 rounded-lg flex items-center justify-center text-steel-300 hover:text-accent-red hover:bg-charcoal-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-sm font-bold">{social[0]}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-charcoal-900 p-8 rounded-lg border border-charcoal-800">
              <h3 className="text-2xl font-bold mb-6 text-accent-orange">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-steel-200 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-lg text-steel-100 focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-steel-200 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-lg text-steel-100 focus:outline-none focus:border-accent-red transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-steel-200 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-charcoal-950 border border-charcoal-800 rounded-lg text-steel-100 focus:outline-none focus:border-accent-red transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-accent-red text-white rounded-lg font-bold hover:bg-accent-orange transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold mb-4 text-steel-100">
            Ready to Build Your Grit?
          </p>
          <p className="text-steel-400 text-lg max-w-2xl mx-auto">
            Join us today and become part of a community that doesn't just train
            bodies—we build character, resilience, and unbreakable spirit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

