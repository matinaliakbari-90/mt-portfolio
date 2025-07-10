import ProjectsPic from "./ProjectsPic"
import ProjectsText from "./ProjectsText"
import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ProjectsMain = () => {
    return (
        <section id="projects" className="mx-auto px-4 max-w-[1200px] relative mt-28">
            <motion.h2 variants={fadeIn('opacity', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className="text-6xl text-center text-cyan">Projects</motion.h2>
            
            <motion.div variants={fadeIn('opacity', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <ProjectsText />
            </motion.div>

            <div>
                <ProjectsPic />
            </div>
        </section>
    )
}

export default ProjectsMain