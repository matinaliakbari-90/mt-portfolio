import { motion } from "motion/react"
import { fadeIn } from "../../framerMotion/variants"

const ProjectsPic = () => {

    const projects = [
        {
            id: 1,
            title: "Vacation of Africa",
            date: "Mar2022",
            image: "website-img-1.jpg",
            align: "left",
        },
        {
            id: 2,
            title: "Moola App",
            date: "Sept2022",
            image: "website-img-2.webp",
            align: "right",
        },
        {
            id: 3,
            title: "Tourzania",
            date: "Jan2023",
            image: "website-img-3.jpg",
            align: "left",
        },
        {
            id: 4,
            title: "Bank of Luck",
            date: "May2024",
            image: "website-img-4.jpg",
            align: "right",
        },
    ];


    const ViewIcon = () => (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path>
        </svg>
    );


    return (
        <div className="mt-12 max-w-[900px] mx-auto">
            {projects.map(project => (
                <motion.div variants={fadeIn('opacity', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} key={project.id}>
                    <div className={`items-center mb-20 md:flex gap-x-10 ${project.align === "right" ? "justify-end" : ""}`}>
                        {/* Image Container */}
                        <div className={`transition-all duration-500 ${project.align === "right" ? "md:order-1" : ""} md:relative md:hover:scale-110`}>
                            <div className="md:absolute md:inset-0 md:border-[0.25px] md:border-white md:bg-cyan/40 md:backdrop-blur-[0.25px] md:rounded-xl hover:bg-cyan/0 transition-all duration-500" />
                            <img className="w-[400px] rounded-xl mx-auto border-[0.25px] border-white hover:scale-110 transition-all duration-500" src={`/images/${project.image}`} alt={`project ${project.id}`} />
                        </div>

                        {/* Text Content */}
                        <div className={`sm:text-center ${project.align === "right" ? "md:text-right" : "md:text-left"} sm:mt-8 sm:mb-16 md:mt-0 md:mb-0`}>
                            <h3 className="text-2xl text-orange md:text-3xl">{project.title}</h3>
                            <h4 className="text-xl font-light">{project.date}</h4>
                            <a className={`flex items-center justify-center gap-2 text-lg transition-all duration-500 cursor-pointer ${project.align === "right" ? "md:justify-end" : "md:justify-start"} text-cyan hover:text-orange`}>
                                View
                                <ViewIcon />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}


// return (
//     <div className="mt-12 max-w-[900px] mx-auto">

//         <div className="items-center mb-20 md:flex gap-x-10">
//             <div className="transition-all duration-500 md:relative md:hover:scale-110">
//                 <div className="md:absolute md:inset-0 md:border-[0.25px] md:border-white md:bg-cyan/40 md:backdrop-blur-[0.25px] md:rounded-xl hover:bg-cyan/0 transition-all duration-500" />
//                 <img className="w-[400px] rounded-xl mx-auto border-[0.25px] border-white hover:scale-110 transition-all duration-500" src="../../../public/images/website-img-1.jpg" alt="project 1" />
//             </div>
//             <div className="sm:text-center md:text-left sm:mt-8 sm:mb-16 md:mt-0 md:mb-0">
//                 <h3 className="text-2xl text-orange md:text-3xl">Vacation of Africa</h3>
//                 <h4 className="text-xl font-light">Mar2022</h4>
//                 <a className="flex items-center justify-center gap-2 text-lg transition-all duration-500 cursor-pointer md:justify-start text-cyan hover:text-orange">
//                     View
//                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
//                 </a>
//             </div>
//         </div>

//         <div className="items-center justify-end mb-20 md:flex gap-x-10">
//             <div className="transition-all duration-500 md:order-1 md:relative md:hover:scale-110">
//                 <div className="md:absolute md:inset-0 md:border-[0.25px] md:border-white md:bg-cyan/40 md:backdrop-blur-[0.25px] md:rounded-xl hover:bg-cyan/0 transition-all duration-500" />
//                 <img className="w-[400px] rounded-xl mx-auto border-[0.25px] border-white hover:scale-110 transition-all duration-500" src="../../../public/images/website-img-2.webp" alt="project 2" />
//             </div>
//             <div className="sm:text-center md:text-right sm:mt-8 sm:mb-16 md:mt-0 md:mb-0">
//                 <h3 className="text-2xl text-orange md:text-3xl">Moola App</h3>
//                 <h4 className="text-xl font-light">Sept2022</h4>
//                 <a className="flex items-center justify-center gap-2 text-lg transition-all duration-500 cursor-pointer md:justify-end text-cyan hover:text-orange">
//                     View
//                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
//                 </a>
//             </div>
//         </div>

//         <div className="items-center mb-20 md:flex gap-x-10">
//             <div className="transition-all duration-500 md:relative md:hover:scale-110">
//                 <div className="md:absolute md:inset-0 md:border-[0.25px] md:border-white md:bg-cyan/40 md:backdrop-blur-[0.25px] md:rounded-xl hover:bg-cyan/0 transition-all duration-500" />
//                 <img className="w-[400px] rounded-xl mx-auto border-[0.25px] border-white hover:scale-110 transition-all duration-500" src="../../../public/images/website-img-3.jpg" alt="project 3" />
//             </div>
//             <div className="sm:text-center md:text-left sm:mt-8 sm:mb-16 md:mt-0 md:mb-0">
//                 <h3 className="text-2xl text-orange md:text-3xl">Tourzania</h3>
//                 <h4 className="text-xl font-light">Jan2023</h4>
//                 <a className="flex items-center justify-center gap-2 text-lg transition-all duration-500 cursor-pointer md:justify-start text-cyan hover:text-orange">
//                     View
//                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
//                 </a>
//             </div>
//         </div>

//         <div className="items-center justify-end mb-20 md:flex gap-x-10">
//             <div className="transition-all duration-500 md:order-1 md:relative md:hover:scale-110">
//                 <div className="md:absolute md:inset-0 md:border-[0.25px] md:border-white md:bg-cyan/40 md:backdrop-blur-[0.25px] md:rounded-xl hover:bg-cyan/0 transition-all duration-500" />
//                 <img className="w-[400px] rounded-xl mx-auto border-[0.25px] border-white hover:scale-110 transition-all duration-500" src="../../../public/images/website-img-4.jpg" alt="project 4" />
//             </div>
//             <div className="sm:text-center md:text-right sm:mt-8 sm:mb-16 md:mt-0 md:mb-0">
//                 <h3 className="text-2xl text-orange md:text-3xl">Bank of Luck</h3>
//                 <h4 className="text-xl font-light">May2024</h4>
//                 <a className="flex items-center justify-center gap-2 text-lg transition-all duration-500 cursor-pointer md:justify-end text-cyan hover:text-orange">
//                     View
//                     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"></path></svg>
//                 </a>
//             </div>
//         </div>

//     </div>
// )


export default ProjectsPic