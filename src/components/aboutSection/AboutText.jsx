import { Link } from "react-scroll"

const AboutText = () => {
    return (
        <div className="text-center md:text-left">
            <h2 className="text-6xl text-cyan">About Me</h2>
            <p className="mt-10 w-full md:w-[25rem] lg:w-[43rem] lg:text-justify">I’m Matin Aliakbari, a web developer instructor with a passion for teaching and coding. I specialize in React and front-end development, helping students build real-world projects and master modern web technologies. I also run a YouTube channel, CodeNest, where I create tutorials and courses to guide aspiring developers in their journey toward successful careers in tech. Outside of coding, I enjoy continuous learning and sharing knowledge to inspire others to achieve their goals.</p>
            <div className="mt-11">
                <Link to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                    <button type="button" className="border-[0.5px] border-orange rounded-full py-2 px-3 hover:bg-orange hover:text-cyan transition-all duration-500 text-[1.25rem]">My Projects</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutText