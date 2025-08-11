import { Link } from "react-scroll"

const AboutText = () => {
    return (
        <div className="text-center md:text-left">
            <h2 className="text-6xl text-cyan">About Me</h2>
            <p className="mt-10 w-full md:w-[25rem] lg:w-[43rem] lg:text-justify">I’m Matin Aliakbari, a passionate web developer with a strong enthusiasm for both coding and teaching. I specialize in React and modern front-end development, with a focus on building real-world, high-quality projects and mastering cutting-edge web technologies.
                My goal is to grow professionally, strengthen my portfolio, and elevate my career to higher levels by creating impactful, market-ready applications that solve real problems. I am driven by a commitment to excellence, consistently delivering my best work, and have successfully developed innovative, practical, and production-ready solutions that meet industry demands.
                With a mindset of continuous learning and improvement, I thrive on challenges and aim to bring both creativity and precision into every project I work on.
            </p>
            <div className="mt-11">
                <Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                    <button type="button" className="border-[0.5px] border-orange rounded-full py-2 px-3 hover:bg-orange hover:text-cyan transition-all duration-500 text-[1.25rem]">My Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutText