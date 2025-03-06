const HeroBar = () => {
    return (
        <div className="flex justify-around py-8 text-center border border-y-white/40 border-x-brown mt-14 bg-brown">
            <h2 className="hidden uppercase md:block md:text-2xl lg:text-4xl font-body opacity-40">Fast Learner</h2>
            <h2 className="hidden uppercase md:block md:text-2xl lg:text-4xl font-body opacity-40">Team Work</h2>
            <h2 className="text-4xl uppercase md:text-2xl lg:text-4xl font-body opacity-40">Details Master</h2>
        </div>
    )
}

export default HeroBar