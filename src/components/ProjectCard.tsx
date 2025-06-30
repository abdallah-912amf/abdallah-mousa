"use client"; // لازم السطر ده هنا كمان عشان useState و motion

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // أيقونة السهم لازم تكون هنا

export default function ProjectCard({ project }: { project: { id: number; title: string; description: string[] } }) {
  const [isExpanded, setIsExpanded] = useState(false); // الـuseState هنا عشان كل كارد ليه حالته

  return (
    <motion.div
      key={project.id}
      // هنا هنضيف text-left للكارد كله، عشان أي نص جواه يبدأ من الشمال
      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-white/5 border border-white/10 hover:border-teal-400 transition p-4 rounded-lg shadow-md cursor-pointer relative overflow-hidden text-left"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ height: 100 }} // ارتفاع مبدئي لما يكون مقفول
      animate={{ height: isExpanded ? "auto" : 100 }} // الارتفاع يتغير حسب حالة الفتح/القفل
      transition={{ duration: 0.3 }} // سرعة الانيميشن
    >
      <h4 className="text-lg font-semibold mb-2 flex items-center justify-between">
        {project.title}
        {/* أيقونة السهم اللي هتلف لما المشروع يتفتح أو يتقفل */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }} // تلف 180 درجة لما يتفتح
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </h4>
      {/* جزء الوصف اللي بيظهر ويختفي بالانيميشن */}
      <motion.div
        initial={{ opacity: 0, height: 0 }} // بيبدأ من غير شفافية وارتفاع صفر
        animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }} // بيظهر تدريجيا مع الارتفاع
        transition={{ duration: 0.3 }}
      >
        {/* هنا بنعرض الـdescription كـ bullet points */}
        <ul className="text-gray-400 text-sm list-disc pl-5 space-y-1 mt-2">
          {project.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}