import { Link } from 'react-scroll'

const NavbarLinks = () => {

    const links = [
        { text: "About Me", section: "about", offset: -100 },
        { text: "Skills", section: "skills", offset: -60 },
        { text: "Experience", section: "experience", offset: -120 },
        { text: "Projects", section: "projects", offset: -120 },
        { text: "Contact", section: "contact", offset: -120},
    ];

    return (
        <ul className="flex items-center gap-6 text-xl lg:flex-row sm:flex-col text-white/80 font-body sm:absolute lg:relative lg:bg-transparent lg:hover:bg-transparent top-[120%] left-[50%] -translate-x-[50%] sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full sm:py-4 lg:py-0">
            {links.map((link, index) => (
                <li key={index} className="relative text-center group sm:w-full lg:w-auto">
                    <Link to={link.section} spy={true} smooth={true} offset={link.offset} duration={500} className="block transition-all duration-500 cursor-pointer hover:text-cyan sm:w-full">
                        {link.text}
                    </Link>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-cyan scale-x-0 transition-all duration-500 group-hover:scale-x-100"></div>
                </li>
            ))}
        </ul>
    )
}

export default NavbarLinks
