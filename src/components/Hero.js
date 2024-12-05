import Hasan from "../assets/Hasan.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5, delay: delay} 
  }
})
const Hero = () => {
	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0)}
              initial="hidden"
              animate="visible"

							className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
							Mahthy Hasan
						</motion.h1>
						<motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 1.1 }}
							drag="x"
							dragConstraints={{ left: 8, right: 8 }}
							className="mb-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent">
							Software Engineer
						</motion.span>
						<motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-justify">
							I'm Hasan, a driven Software Engineer with a keen eye for detail
							and a passion for crafting seamless, user-focused applications. My
							approach balances technical expertise with creativity, enabling me
							to develop solutions that are both efficient and engaging. I
							thrive in collaborative environments, bringing strong
							communication skills, adaptability, and a dedication to continuous
							learning. My experiences in diverse projects have honed my
							problem-solving abilities, allowing me to quickly navigate
							challenges and deliver impactful results.
						</motion.p>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="hidden lg:block lg:ml-[8rem] justify-center">
						<motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}

							className="size-40 mt-2 lg:h-[21rem] lg:w-[19rem]"
							src={Hasan}
							alt="Mahthy Hasan"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
