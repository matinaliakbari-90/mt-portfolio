import ContactForm from "./ContactForm"
import ContactSocial from "./ContactSocial"

const ContactMain = () => {
    return (
        <section id="contact" className="mx-auto px-4 max-w-[1200px] relative mt-10">
            <h2 className="text-6xl text-center text-cyan">Contact Me</h2>
            <div className="mt-10 p-7 bg-brown rounded-2xl">
                <div className="inline-block">
                    <h3 className="mb-3 text-3xl text-orange">Get In Touch</h3>
                    <p>Feel free to reach out if you’d like to collaborate <br /> you are just a few clicks away!</p>
                </div>

                <div className="lg:grid grid-cols-[2fr_1fr] gap-x-20">
                    <div className="mt-8">
                        <ContactForm />
                    </div>

                    <div className="lg:relative">
                        <ContactSocial />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMain