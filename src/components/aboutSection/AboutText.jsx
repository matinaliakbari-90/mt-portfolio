import { Link } from "react-scroll"

const AboutText = () => {
    return (
        <div className="text-center md:text-left">
            <h2 className="text-6xl text-cyan">About Me</h2>
            <p className="mt-10 w-full md:w-[25rem] lg:w-[43rem] lg:text-justify">I am Matin AliAkbari, a passionate web developer with a passion for coding and learning.
                I specialize in React and modern front-end development, with a focus on building high-quality, real-world projects and mastering cutting-edge web technologies.
                My goal is to grow professionally, strengthen my portfolio, and advance my career to the next level by creating impactful, market-ready applications that solve real-world problems. I am committed to excellence, consistently delivering my best work, and have successfully developed innovative, functional, and production-ready solutions that meet industry needs. With a mindset of continuous learning and improvement, I thrive on challenges and aim to apply creativity and precision to every project I work on.
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