import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"
import AboutImg from "./AboutImg"
import AboutText from "./AboutText"

const AboutMain = () => {
    return (
        <section id="about" className="max-w-[1200px] px-4 mx-auto mt-6">
            <div className="flex items-center justify-between gap-12 sm:flex-col md:flex-row">
                <motion.div variants={fadeIn('right', 0)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
                    <AboutText />
                </motion.div>
                
                <motion.div variants={fadeIn('left', 0)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}>
                    <AboutImg />
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMain