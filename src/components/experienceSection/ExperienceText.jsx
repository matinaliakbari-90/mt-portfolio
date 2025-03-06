const ExperienceText = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold uppercase mt-11 font-special text-orange">Since 2022</h3>
            <div className="mt-6 space-x-7">
                <span className="text-6xl font-bold text-cyan">3</span>
                <span className="text-6xl font-bold text-lightBrown">-</span>
                <span className="text-6xl font-bold text-cyan">23</span>
            </div>
            <div className="relative space-x-10 bottom-4">
                <span className="text-xl font-bold uppercase text-lightGrey">Years</span>
                <span className="text-xl font-bold uppercase text-lightGrey">Websites</span>
            </div>
            <p className="w-[60%] mx-auto mt-2 lg:w-[67%]">With 3 years of experience building dynamic and user-friendly web applications.</p>
            <h3 className="mt-5 text-6xl font-bold text-cyan">$100k</h3>
            <div className="relative bottom-4">
                <span className="text-xl font-bold uppercase text-lightGrey">Max Budget</span>
            </div>
        </div>
    )
}

export default ExperienceText