import { CgArrowBottomRight } from "react-icons/cg";
import MyResume from "../../../public/resume/MatinAliakbari-Resume.pdf";

const NavbarBtn = () => {
    return (
        <div className="border-[0.5px] border-cyan px-4 py-2 rounded-full font-body text-white text-xl font-bold cursor-pointer bg-gradient-to-r from-cyan bg-orange hover:shadow-cyanShadow hover:scale-110 transition-all duration-500">
            <a href={MyResume} download="MatinAliakbari-Resume.pdf" className="flex items-center gap-1">
                My Resume 
                <CgArrowBottomRight className="sm:hidden md:block" />
            </a>
        </div>
    )
}

export default NavbarBtn
