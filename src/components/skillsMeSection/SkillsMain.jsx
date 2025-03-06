import SkillsNav from "./SkillsNav"
import SkillsPic from "./SkillsPic"
import SkillsText from "./SkillsText"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const SkillsMain = () => {
    return (
        <>
            <section id="skills" className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
                <motion.div className="mt-28" variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                    <SkillsText />
                </motion.div>
                
                <div>
                    <SkillsPic />
                </div>
            </section>

            <SkillsNav />
        </>
    )
}

export default SkillsMain