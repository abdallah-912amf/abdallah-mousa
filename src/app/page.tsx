"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu, X, Linkedin, Github, Mail, Phone, 
  CircuitBoard, GitFork, Cloud, Settings, FileText, Database, Paintbrush, Braces, 
  Binary, Boxes, Waypoints 
} from "lucide-react";
import { FaLinux, FaExchangeAlt, FaPython, FaHtml5,FaSitemap  } from "react-icons/fa"; 
import { SiCplusplus } from "react-icons/si"; 
import ProjectCard from "@/components/ProjectCard";
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"]; 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-widest">MyPortfolio</h1>
        <nav className="hidden md:flex gap-8 text-sm">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-400 transition">{item}</a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-black text-white px-6 py-4 space-y-4"
        >
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm hover:text-teal-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-extrabold mb-4">
          Hello, I&apos;m <span className="text-teal-400">Abdallah Mousa</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl max-w-xl text-gray-300">
          A Mechatronics Engineering student passionate about crafting innovative software solutions and impactful digital experiences.
        </motion.p>
        <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-base"
          >
            Explore My Work
          </a>
        </motion.div>
      </section>

      <section id="about" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-teal-400">About Me</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
I&apos;m Abdallah Mousa, an enthusiastic Software Engineer in training and a Mechatronics Engineering student from October 6 University. My passion lies in building efficient systems and engaging web experiences, leveraging hands-on experience in C/C++ development, embedded systems, and Linux environments. I&apos;m dedicated to writing optimized, high-quality code and applying modern software development practices to real-world challenges. My goal is to gain industry experience through meaningful collaboration and make a tangible impact.        </p>
      </section>

      <section id="projects" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-teal-400">Projects</h3>
        <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto">
          {[
            {
              id: 1,
              title: "Autonomous Robot",
              description: [
                "Engineered a robot capable of autonomous path tracking using IR sensors and Bluetooth remote control.",
                "Implemented PID control algorithm to enhance motor response and ensure accurate line tracking.",
                "Developed embedded system logic using Arduino C/C++, achieving stable real-time performance."
              ]
            },
            {
              id: 2,
              title: "Weather Forecast Application",
              description: [
                "Designed and implemented a Python-based desktop application using Tkinter to display real-time weather data fetched from the OpenWeatherMap API.",
                "Parsed and processed JSON responses to dynamically render temperature, humidity, wind, and condition data in a user-friendly interface.",
                "Enhanced user experience with a visually adaptive GUI, including temperature-based color themes and icon integration using Pillow for intuitive weather representation.",
                "Automated data logging by exporting weather records to CSV files, enabling historical tracking and basic analytical capabilities."
              ]
            }
            
          ].map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

  <section id="skills" className="px-6 py-20 text-center">
  <h3 className="text-3xl font-semibold mb-10 text-teal-400">Skills</h3>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
    {/* Category 1: Programming Languages*/}
    <div className="bg-white/5 p-6 rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-xl font-bold text-teal-400 mb-4">Programming Languages</h4>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full place-items-center">
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <SiCplusplus size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">C/C++</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Database size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">SQL</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FaPython size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Python</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Braces size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">JavaScript</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FaHtml5 size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">HTML</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Paintbrush size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">CSS</span>
        </div>
      </div>
    </div>

    {/* Category 2: Technologies & Tools */}
    <div className="bg-white/5 p-6 rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-xl font-bold text-teal-400 mb-4">Technologies & Tools</h4>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full place-items-center">
        {/*Arduino و Git */}
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <CircuitBoard size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Arduino</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <GitFork size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Git</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FaLinux size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Linux</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Database size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">MySQL</span>
        </div>
     
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FaExchangeAlt size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">API Integration</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FileText size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">JSON/CSV</span>
        </div>
      </div>
    </div>

    {/* Category 3: Concepts */}
    <div className="bg-white/5 p-6 rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <h4 className="text-xl font-bold text-teal-400 mb-4">Concepts</h4>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 w-full place-items-center">
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Binary size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Embedded Systems</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Boxes size={32} className="text-teal-400" /> 
          <span className="text-sm font-medium text-center">OOP</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <FaSitemap size={32} className="text-teal-400" /> 
          <span className="text-sm font-medium text-center">Data Structures</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Waypoints size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Algorithms</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Settings size={32} className="text-teal-400" /> 
          <span className="text-sm font-medium text-center">PID Control</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-200">
          <Cloud size={32} className="text-teal-400" />
          <span className="text-sm font-medium text-center">Cloud Fundamentals</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="contact" className="px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-teal-400">Contact</h3>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
          Feel free to connect with me for new opportunities or collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <a href="mailto:23013075@o6u.edu.eg" className="block p-5 bg-white/5 rounded-lg shadow-md hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-center gap-4">
              <Mail size={28} className="text-teal-400 group-hover:text-white transition-colors" />
              <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                Email
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">23013075@o6u.edu.eg</p>
          </a>

          {/* Phone Card */}
          <a href="tel:+201151428704" className="block p-5 bg-white/5 rounded-lg shadow-md hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-center gap-4">
              <Phone size={28} className="text-teal-400 group-hover:text-white transition-colors" />
              <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                Phone
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">+20 115 142 8704</p>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/abdallah-m-mousa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="block p-5 bg-white/5 rounded-lg shadow-md hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-center gap-4">
              <Linkedin size={28} className="text-teal-400 group-hover:text-white transition-colors" />
              <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                LinkedIn
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2"></p>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/abdallah-912amf" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="block p-5 bg-white/5 rounded-lg shadow-md hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-center gap-4">
              <Github size={28} className="text-teal-400 group-hover:text-white transition-colors" />
              <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                GitHub
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2"></p>
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Abdallah Mousa. All rights reserved.
      </footer>
    </div>
  );
}