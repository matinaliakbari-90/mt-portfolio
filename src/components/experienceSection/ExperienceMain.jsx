import ExperienceCard from "./ExperienceCard"
import ExperienceCardDash from "./ExperienceCardDash"
import ExperiencePic from "./ExperiencePic"
import ExperienceText from "./ExperienceText"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ExperienceMain = () => {
    return (
        <section id="experience" className="mx-auto px-4 max-w-[1200px] relative mt-24">
            <motion.h2 variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className="text-6xl text-center text-cyan">Experience</motion.h2>
            
            <motion.div variants={fadeIn('down', 0.6)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="items-center grid-cols-3 text-center lg:grid">
                    <ExperienceText />
                    <ExperiencePic />
                    <ExperienceCard />
                </div>
            </motion.div>
            
            <div className="w-full h-1 mt-5 mb-5 bg-lightBrown lg:block sm:hidden"></div>
            
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <div className="mt-14">
                    <ExperienceCardDash />
                </div>
            </motion.div>

        </section>
    )
}

export default ExperienceMain
