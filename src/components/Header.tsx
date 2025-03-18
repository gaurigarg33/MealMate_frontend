import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo.jpg";

const Header = () => {
  return(
    <div className="border-b-2 border-b-orange-500 py-1">
        <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="MealMate Logo" className="h-20 w-auto " />
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
            MealMate.com
            </Link>
            <div className="md:hidden">
                <MobileNav/>
            </div>
            <div className="hidden md:block">
                <MainNav/>
            </div>
        </div>
    </div>
  )
  
}

export default Header;