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

            <div className="my-20 text-[19px] font-bold text-center md:text-2xl">
                <a className="transition-colors border-b-2 hover:text-cyan" href="https://github.com/matinaliakbari-90">All Projects</a>
            </div>
        </section>
    )
}

export default ProjectsMain