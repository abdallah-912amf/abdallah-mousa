"use client"; 

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; 

export default function ProjectCard({ project }: { project: { id: number; title: string; description: string[] } }) {
  const [isExpanded, setIsExpanded] = useState(false); 

  return (
    <motion.div
      key={project.id}
      
      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white/5 border border-white/10 hover:border-teal-400 transition p-4 rounded-lg shadow-md cursor-pointer relative overflow-hidden text-left"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ height: 100 }} 
      animate={{ height: isExpanded ? "auto" : 100 }} 
      transition={{ duration: 0.3 }} 
    >
      <h4 className="text-lg font-semibold mb-2 flex items-center justify-between">
        {project.title}
        
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }} 
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </h4>
      <motion.div
        initial={{ opacity: 0, height: 0 }} 
        animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }} 
        transition={{ duration: 0.3 }}
      >
      
        <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1 mt-2">
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}