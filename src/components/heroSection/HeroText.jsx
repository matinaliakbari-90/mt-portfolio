import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const HeroText = () => {
    return (
        <div className="flex flex-col justify-center gap-4 sm:text-center md:text-left">
            <motion.h2 variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className="uppercase text-lightGrey lg:text-2xl sm:text-xl">Front-End Web Developer</motion.h2>
            <motion.h1 variants={fadeIn('right', 0.4)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className="sm:text-4xl md:text-[2.8rem] lg:text-6xl font-bold uppercase text-orange">Matin Aliakbari</motion.h1>
            <motion.p variants={fadeIn('up', 0.6)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className="mt-4 text-lg">Enthusiastic and creative web developer<br />
                with 2 years of programming experience.</motion.p>
        </div>
    )
}

export default HeroText