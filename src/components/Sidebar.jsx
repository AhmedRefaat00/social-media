import { Link } from "react-router";
import profileCover from "../assets/profileCover.jpg"
import { User } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="basis-1/4 border-r border-gray-300  bg-gray-50 flex flex-col items-start justify-start row-start-1 row-end-4">
            <div className="w-full h-15">
                <img src={profileCover} alt="avatar" className="w-full h-15 object-cover" />
                <User className="w-10 h-10 relative bottom-12 left-1 bg-white rounded-full p-1" />
            </div>
            <div className=" px-2">
                <h5>John Doe</h5>
                <p className="text-gray-500 text-sm">Software Engineer</p>
            </div>
            <ul className="flex flex-col gap-2 pt-2 px-10">
                <li className="text-gray-900 text-sm cursor-pointer hover:bg-gray-100  w-full">
                    <Link to="/" className="w-full active:bg-gray-100" >Home</Link>
                </li>
                <li className="text-gray-900 text-sm cursor-pointer hover:bg-gray-100  w-full">
                    <Link to="/profile" className="w-full active:bg-gray-100" >Profile</Link>
                </li>


            </ul>

        </div>
    );
}

export default Sidebar;