import logo from "../assets/react.svg";
import { User, Search } from 'lucide-react';


const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <img src={logo} alt="logo" />
            <div className="flex items-center ">
                <Search  />
                <input className="outline-none border-gray bg-gray-100 p-1 rounded-md w-full " type="text" placeholder="Search" />
            </div>
            <div className="flex gap-4">
                <button className="">Logout</button>
                <User />
            </div>


        </div>
    );
}

export default Navbar;