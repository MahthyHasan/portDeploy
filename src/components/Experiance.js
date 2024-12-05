import React from 'react';
import { motion } from 'framer-motion';


const container = (delay) => ({
  hidden: {x: 100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay: delay} 
  }
});

const Experience = () => {
  const exp = [
    {
      year: "May 2022 - May 2023",
      role: "Intern Front-End Developer",
      company: "ASCII Corp",
      description:
        "During my year-long internship at ASCII Corp, I developed and launched dynamic and efficient web solutions using React, Next.js, and Tailwind CSS. Key projects included the ASCII Corporate Website, Talent Tracking Management System (TTMS), Nuera Chat, and more, showcasing my skills in responsive and high-performance design.",
      stack: ["React", "NextJs", "Tailwind CSS"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-3xl">Experiences</h1>
      <div>
        {exp.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
              initial={{x:0, opacity:0}}
              animate={{x:100, opacity:1}}
              transition={{duration:1, delay:1.2}}
              className="mb-2 text-sm text-neutral-400">{item.year}</motion.p>
            </div>
            <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {item.role} - <span className="text-sm text-purple-300">{item.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">{item.description}</p>
              <div>
                {item.stack.map((stack, idx) => (
                  <span key={idx} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                    {stack}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
