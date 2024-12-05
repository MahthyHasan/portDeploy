import primg from "../assets/prj.jpg";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const prj = [
	{
		title: "UniMed - University Medical Center System",
		img: primg,
		description:
			"UniMed utilizes a modern tech stack, including React for the user interface, Spring Boot for the backend API, and MongoDB for database management. Blockchain technology is integrated for secure data storage and sharing, ensuring privacy and transparency of medical records.",
		stacks: ["React", "Spring Boot", "MongoDB", "Blockchain"],
		link: "https://unimed-link",
	},
	{
		title: "LockIT - Automatic Cycle Lock System",
		img: primg,
		description:
			"An embedded project integrating GPS tracking, alarm, vibration detection, and mobile app connectivity, showcasing hardware-software integration and innovative embedded system design.",
		stacks: ["Arduino IDE", "C programming", "Android Studio", "Kotlin"],
		link: "https://lockit-link",
	},
	{
		title: "PRM - Project Management Tool",
		img: primg,
		description:
			"A tool crafted with Django for backend, React for frontend, and NoSQL for data management, efficiently organizing projects, tasks, and collaborations.",
		stacks: ["Django", "Python", "React", "NoSQL"],
		link: "https://prm-link",
	},
	{
		title: "Good Cars Limousine Website",
		img: primg,
		description:
			"Designed and developed for a client, using React for a dynamic frontend, Tailwind CSS for styling, and MySQL for database management, providing a platform for efficient limousine services.",
		stacks: ["React", "Tailwind CSS", "MySQL"],
		link: "https://www.goodcarslimousine.com",
	},
	{
		title: "JourneyEase - Bus Ticket Booking System",
		img: primg,
		description:
			"Created for my degree project, utilizing PHP for backend, React for frontend, and MySQL for database management, handling ticket reservations, scheduling, and payments.",
		stacks: ["PHP", "React", "MySQL"],
		link: "https://journeyease-link",
	},
	{
		title: "ASCII.ai Website",
		img: primg,
		description:
			"Developed during my internship at ASCII, utilizing Next.js, showcasing innovative technologies and services offered by ASCII.",
		stacks: ["Next.js"],
		link: "https://www.ascii.ai",
	},
	{
		title: "Inventory Manager",
		img: primg,
		description:
			"An inventory management system with Java for backend functionality, React for frontend interface, and MySQL for database management.",
		stacks: ["Java", "React", "MySQL"],
		link: "https://inventorymanager-link",
	},
];

const Projects = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-center text-4xl">Projects</h1>
			<div>
				{prj.map((prs, index) => (
					<div
						className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-center"
						key={index}>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={cardVariants}
							className="w-full lg:w-1/4 flex items-center justify-center mb-4 lg:mb-0">
							<img
								src={prs.img}
								alt={prs.title}
								className="rounded-lg shadow-md w-[15rem] h-[10rem]"
							/>
						</motion.div>
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							className="w-full max-w-[90%] lg:w-[65%] lg:ml-4">
							<h6 className="mb-2 font-semibold text-lg">{prs.title}</h6>
							<p className="mb-4 text-neutral-400 text-justify">
								{prs.description}
							</p>
							{prs.stacks.map((stc, index) => (
								<span
									className="mr-2 mt-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
									key={index}>
									{stc}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
