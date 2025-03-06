import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {

    const contactItems = [
        {
            icon: <MdOutlineEmail />,
            text: "matin54843590@gmail.com",
        },
        {
            icon: <LuPhone />,
            text: "+98 913 423 0685",
        },
        {
            icon: <IoLocationOutline />,
            text: "Kashan, Isfahan, Iran",
        },
    ];

    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            url: "#",
        },
        {
            icon: <RiGithubLine />,
            url: "#",
        },
        {
            icon: <FaInstagram />,
            url: "#",
        },
    ];

    return (
        <div className="lg:absolute bottom-2">
            <div className="mt-20 lg:mt-0">
                <img className="w-[300px] mx-auto" src="/images/email-image.png" alt="email image" />
            </div>
            <div className="mt-14 lg:mt-9 sm:max-w-[70%] md:max-w-[40%] lg:max-w-none lg:ml-5 mx-auto space-y-3">
                {contactItems.map((contact, index) => (
                    <div className="flex items-center gap-x-4" key={index}>
                        <span className="text-3xl">
                            {contact.icon}
                        </span>
                        <h4>{contact.text}</h4>
                    </div>
                ))}
            </div>

            <div className="mt-14 lg:mt-12">
                <div className="flex gap-x-5 max-w-[50%] md:max-w-[40%] lg:max-w-none lg:ml-5 mx-auto">
                    {socialLinks.map((socialLink, index) => (
                        <a key={index} className="p-3 text-2xl border rounded-full cursor-pointer border-orange text-orange">
                            {socialLink.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactSocial