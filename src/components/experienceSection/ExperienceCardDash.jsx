import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ExperienceCardDash = () => {
    return (
        <div className="space-y-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:space-y-0 md:gap-x-2 lg:gap-x-0">

            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Front-End Developer</h3>
                    <h4 className="text-orange">Code Tutor</h4>
                    <h5 className="mb-3 text-lightGrey">2024 - Present</h5>
                    <ul className="pl-4 list-disc h-fit">
                        <li>Implementing reusable components.</li>
                        <li>Designed a clean and engaging UI with a strong focus
                            on readability and visual hierarchy.</li>
                        <li>Fully responsive layout ensuring a seamless
                            experience across desktop, tablet, and mobile
                            devices.</li>
                        <li>Generating new ideas for better user experience.</li>
                    </ul>
                </div>
            </motion.div>


            <div className="flex items-center justify-center lg:flex sm:hidden">
                <FaArrowRightLong className="text-6xl text-orange" />
            </div>

            <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Front-End Developer</h3>
                    <h4 className="text-orange">Blue Berry Ecommerce</h4>
                    <h5 className="mb-3 text-lightGrey">2024 - Present</h5>
                    <ul className="pl-4 list-disc md:h-fit xl:h-[320px]">
                        <li>Optimized loading speed and API performance for a
                            better user experience.</li>
                        <li>Designed and developed a fully responsive, modern
                            UI with smooth animations using Framer Motion.</li>
                        <li>Utilized TypeScript for type safety and improved
                            code maintainability across the application.</li>
                    </ul>
                </div>
            </motion.div>

            <div className="flex items-center justify-center lg:flex sm:hidden">
                <FaArrowRightLong className="text-6xl text-orange" />
            </div>

            <motion.div variants={fadeIn('right', 0.6)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="p-4 text-left border-[2px] border-dashed border-orange rounded-xl">
                    <h3 className="font-bold text-cyan">Front-End Developer</h3>
                    <h4 className="text-orange">Weather App</h4>
                    <h5 className="mb-3 text-lightGrey">2025 - Present</h5>
                    <ul className="pl-4 list-disc md:h-fit xl:h-[320px]">
                        <li>Implemented real-time API integration for accurate
                            weather updates globally.</li>
                        <li>Focused on performance optimization and smooth
                            user experience.</li>
                        <li>Created interactive and visually appealing charts to
                            display temperature, humidity, and other key
                            metrics.</li>
                    </ul>
                </div>
            </motion.div>

        </div>
    )
}

export default ExperienceCardDash