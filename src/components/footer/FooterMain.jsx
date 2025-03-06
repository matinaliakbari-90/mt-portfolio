import { Link } from "react-scroll";

const FooterMain = () => {

    const footerLinks = [
        { href: 'about', text: 'About Me', offset: -100 },
        { href: 'skills', text: 'Skills', offset: -60 },
        { href: 'experience', text: 'Experience', offset: -120 },
        { href: 'projects', text: 'Projects', offset: -120 }
    ]

    const currentYear = new Date().getFullYear();

    
    return (
        <footer className="px-4 mt-24 max-w-[1200px] relative mx-auto pb-10">
            <div className="h-[0.5px] bg-lightGrey w-full"></div>

            <div className="mt-4 sm:hidden md:block">
                <div className="flex items-center justify-between text-lightGrey">
                    <h2 className="text-3xl font-special">Matin Aliakbari</h2>
                    <ul className="flex gap-x-5">
                        {footerLinks.map((footerLink, index) => (
                            <li key={index}>
                                <Link to={footerLink.href} spy={true} smooth={true} offset={footerLink.offset} duration={500} className="text-xl transition duration-500 cursor-pointer hover:text-white">{footerLink.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-2 text-right">
                <p className="text-sm text-lightBrown">&copy; {currentYear} MatinAliakbari | All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default FooterMain