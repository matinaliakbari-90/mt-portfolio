import HeroImg from "./HeroImg"
import HeroText from "./HeroText"
import HeroGradiant from "./HeroGradiant"
import HeroBar from "./HeroBar"

const HeroMain = () => {
    return (
        <>
            <header className="pt-40 pb-16 md:pt-[5.5rem]">
                <div className="flex items-center justify-between px-4 mx-auto max-w-[1250px] sm:flex-col md:flex-row relative">
                    <HeroText />
                    <HeroImg />
                </div>
                <div>
                    <HeroGradiant />
                </div>
                <div>
                    <HeroBar />
                </div>
            </header>
        </>
    )
}

export default HeroMain