import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"


const skillsNav = [
    { icon: <FaHtml5 />, text: 'HTML' },
    { icon: <FaCss3Alt />, text: 'CSS' },
    { icon: <DiJavascript1 />, text: 'JavaScript' },
    { icon: <SiTypescript />, text: 'TypeScript' },
    { icon: <FaReact />, text: 'React' },
    { icon: <SiRedux />, text: 'Redux' },
    { icon: <RiNextjsFill />, text: 'Next' },
    { icon: <RiTailwindCssFill />, text: 'TailwindCss' },
]


const SkillsPic = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 mt-10 sm:mb-8 lg:mb-0 md:grid-cols-4 justify-items-center lg:hidden">
                {skillsNav.map((skill, index) => (
                    <motion.div variants={fadeIn('up', `0.${index}`)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} key={index}>
                        <div className="text-center" >
                            <span className="block mb-3 text-7xl text-orange" >
                                {skill.icon}
                            </span>
                            {skill.text}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-[50px] left-[50%] -translate-x-[50%] sm:hidden lg:block">
                <div className="flex items-center justify-center gap-2 max-w-[1200px] mx-auto">
                    {skillsNav.map((skill, index) => (
                        <motion.div variants={fadeIn('up', `0.${index}`)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} key={index} >
                            <div className="transition-all duration-500 hover:-translate-y-10">
                                <div className="relative flex flex-col items-center justify-center gap-2">
                                    <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transition-all duration-500 text-6xl border-4 border-orange">
                                        {skill.icon}
                                    </div>
                                    <p className="font-bold text-white">{skill.text}</p>
                                </div>
                                <div className="w-[100px] h-[200px] absolute bg-orange top-[50px] -z-10"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </>
    )
}


export default SkillsPic
