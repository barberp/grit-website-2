"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "6:00 AM", name: "Morning Grind", coach: "Marcus", intensity: "High" },
      { time: "9:00 AM", name: "Strength Basics", coach: "James", intensity: "Medium" },
      { time: "12:00 PM", name: "Lunch HIIT", coach: "Sarah", intensity: "High" },
      { time: "5:30 PM", name: "Evening Power", coach: "Marcus", intensity: "High" },
      { time: "7:00 PM", name: "Recovery Flow", coach: "Alex", intensity: "Low" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "6:00 AM", name: "Rise & Grind", coach: "Sarah", intensity: "High" },
      { time: "10:00 AM", name: "Functional Movement", coach: "James", intensity: "Medium" },
      { time: "12:00 PM", name: "Boxing Basics", coach: "Mike", intensity: "High" },
      { time: "6:00 PM", name: "Strength & Conditioning", coach: "Marcus", intensity: "High" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "6:00 AM", name: "Morning Grind", coach: "Marcus", intensity: "High" },
      { time: "9:00 AM", name: "Yoga & Mobility", coach: "Alex", intensity: "Low" },
      { time: "12:00 PM", name: "Lunch HIIT", coach: "Sarah", intensity: "High" },
      { time: "5:30 PM", name: "Combat Conditioning", coach: "Mike", intensity: "High" },
      { time: "7:00 PM", name: "Evening Strength", coach: "Marcus", intensity: "Medium" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "6:00 AM", name: "Rise & Grind", coach: "Sarah", intensity: "High" },
      { time: "10:00 AM", name: "Functional Movement", coach: "James", intensity: "Medium" },
      { time: "12:00 PM", name: "Boxing Basics", coach: "Mike", intensity: "High" },
      { time: "6:00 PM", name: "Strength & Conditioning", coach: "Marcus", intensity: "High" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "6:00 AM", name: "Morning Grind", coach: "Marcus", intensity: "High" },
      { time: "9:00 AM", name: "Strength Basics", coach: "James", intensity: "Medium" },
      { time: "12:00 PM", name: "Lunch HIIT", coach: "Sarah", intensity: "High" },
      { time: "5:30 PM", name: "Friday Night Fight", coach: "Mike", intensity: "High" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "8:00 AM", name: "Weekend Warrior", coach: "Marcus", intensity: "High" },
      { time: "10:00 AM", name: "Family Fitness", coach: "Sarah", intensity: "Medium" },
      { time: "12:00 PM", name: "Recovery & Stretch", coach: "Alex", intensity: "Low" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "9:00 AM", name: "Sunday Strength", coach: "Marcus", intensity: "Medium" },
      { time: "11:00 AM", name: "Yoga & Meditation", coach: "Alex", intensity: "Low" },
    ],
  },
];

const intensityColors = {
  High: "bg-accent-red/20 text-accent-red border-accent-red",
  Medium: "bg-accent-orange/20 text-accent-orange border-accent-orange",
  Low: "bg-steel-600/20 text-steel-400 border-steel-600",
};

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const selectedSchedule = schedule.find((s) => s.day === selectedDay);

  return (
    <section
      id="schedule"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-accent-red">CLASS</span>{" "}
            <span className="text-steel-100">SCHEDULE</span>
          </h2>
          <p className="text-steel-300 text-lg md:text-xl max-w-3xl mx-auto">
            Find the perfect class for your schedule. Filter by day to see what's
            available.
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {days.map((day) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDay === day
                  ? "bg-accent-red text-white"
                  : "bg-charcoal-900 text-steel-300 hover:bg-charcoal-800 border border-charcoal-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day.slice(0, 3)}
            </motion.button>
          ))}
        </div>

        {/* Schedule Display */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-charcoal-900 rounded-lg border border-charcoal-800 p-6 md:p-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-accent-orange">
            {selectedDay}
          </h3>

          {selectedSchedule && selectedSchedule.classes.length > 0 ? (
            <div className="space-y-4">
              {selectedSchedule.classes.map((classItem, index) => (
                <motion.div
                  key={`${classItem.time}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-charcoal-950 p-5 rounded-lg border border-charcoal-800 hover:border-accent-red/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-accent-red font-bold text-lg">
                          {classItem.time}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${intensityColors[classItem.intensity as keyof typeof intensityColors]}`}
                        >
                          {classItem.intensity}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-steel-100 mb-1">
                        {classItem.name}
                      </h4>
                      <p className="text-steel-400">Coach: {classItem.coach}</p>
                    </div>
                    <motion.button
                      className="px-6 py-2 bg-accent-red text-white rounded-lg font-semibold hover:bg-accent-orange transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-steel-400 text-center py-8">
              No classes scheduled for this day.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

