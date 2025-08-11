import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ExperienceCardDash = () => {
    return (
        <div className="space-y-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:space-y-0 md:gap-x-2 lg:gap-x-0">
            
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Front-End Developer</h3>
                    <h4 className="text-orange">Alex Apps</h4>
                    <h5 className="mb-3 text-lightGrey">2023 - Present</h5>
                    <ul className="pl-4 list-disc">
                        <li>Implementing reusable components.</li>
                        <li>Participating in large scale application.</li>
                        <li>Working on the performance of web applications.</li>
                        <li>Generating new ideas for better user experience.</li>
                    </ul>
                </div>
            </motion.div>


            <div className="flex items-center justify-center lg:flex sm:hidden">
                <FaArrowRightLong className="text-6xl text-orange" />
            </div>

            <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Course Instructor</h3>
                    <h4 className="text-orange">Nucamp</h4>
                    <h5 className="mb-3 text-lightGrey">2024 - Present</h5>
                    <ul className="pl-4 list-disc">
                        <li>Explaining and facilitating web development concepts.</li>
                        <li>Help students with their assignments and grade them weekly.</li>
                        <li>Provide support for students through their learning journey.</li>
                    </ul>
                </div>
            </motion.div>

            <div className="flex items-center justify-center lg:flex sm:hidden">
                <FaArrowRightLong className="text-6xl text-orange" />
            </div>

            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Course Instructor</h3>
                    <h4 className="text-orange">Sprints</h4>
                    <h5 className="mb-3 text-lightGrey">2025 - Present</h5>
                    <ul className="pl-4 list-disc">
                        <li>Teaching JavaScript, React and TailwindCSS.</li>
                        <li>Participating in preparing course materials.</li>
                        <li>Helping students through their way in learning web development technologies.</li>
                    </ul>
                </div>
            </motion.div>

        </div>
    )
}

export default ExperienceCardDash