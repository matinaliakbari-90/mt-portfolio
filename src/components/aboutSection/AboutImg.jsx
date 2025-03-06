const AboutImg = () => {
    return (
        <div className="relative">
            <img src="/images/about-me.jpg" alt="about me" className="object-cover w-[300px] h-[500px] mx-auto md:mx-0 rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px]" />
            <div className="absolute -z-10 top-9 bottom-0 -left-7 md:-left-8 h-[490px] w-[250px] bg-orange rounded-tl-3xl rounded-br-2xl rounded-bl-[120px]"></div>
        </div>
    )
}

export default AboutImg