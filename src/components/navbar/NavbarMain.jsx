import { useDispatch, useSelector } from "react-redux";
import NavbarBrand from "./NavbarBrand"
import NavbarBtn from "./NavbarBtn"
import NavbarLinks from "./NavbarLinks"
import { GiHamburgerMenu } from "react-icons/gi";
import { toogleMenu } from "../redux/menuSlice";

const NavbarMain = () => {

    const menuOpen = useSelector(state => state.menu.menuOpen)
    const dispatch = useDispatch()

    const setToogleMenu = () => {
        dispatch(toogleMenu())
    }

    return (
        <nav className="max-w-[1300px] mx-auto w-full sm:px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
                <div className="flex items-center justify-between w-full">
                    <NavbarBrand />
                    <div className={`${menuOpen ? 'sm:opacity-100 sm:visible' : 'sm:opacity-0 sm:invisible'}
                                    sm:transition-all sm:duration-300
                                    lg:opacity-100 lg:visible`}>
                        <NavbarLinks />
                    </div>
                    <NavbarBtn />
                </div>
            </div>
            <div className="flex lg:hidden sm:flex p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
                <button onClick={setToogleMenu} className="border-[0.5px] border-orange rounded-full p-3 text-2xl text-white hover:scale-110 transition-transform">
                    <GiHamburgerMenu />
                </button>
            </div>
        </nav>
    )
}

export default NavbarMain

