import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

import logo from "../../images/logo.png";   

// functional component for items in the navbar
const NavBarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}> 
      {title} 
    </li>
  )
};

const Navbar = () => {
  //  const [toggleMenu, setToggleMenu] = React.useState(false);


    return (
       <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <ul className="text-yellow-400 md:flex hidden list-none flex-row justify-between items-center flex-initial">
            {["Market", "Exchange", "Wallets"].map((item, index) => (
               <NavBarItem key={item + index} title={item} />
            ))}
            <li className="text-yellow-900 bg-[#d69e2e] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#b7791f] hover:text-yellow-500">
               Login
            </li>
        </ul>

        {/* responsiveness...mobile screens */}
        <div className="flex relative">
           
        </div>
       </nav>
    ); 
}

export default Navbar;


