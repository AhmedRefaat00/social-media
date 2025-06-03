import { Link } from "react-router";
import profilePicture from "../assets/react.svg"

const ProfileCard = () => {
    return (
        <div className="col-span-3 row-start-1 row-end-2 h-48">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow-md p-4">
                {/* Profile Info Section */}
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-3">
                        <img src={profilePicture} alt="avatar" className="w-12 h-12 rounded-full" />
                        <div className="flex flex-col">
                            <h5 className="font-semibold text-gray-800">John Doe</h5>
                            <p className="text-gray-500 text-sm">Software Engineer</p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex flex-row justify-around items-center py-2 gap-4">
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800">12</h3>
                            <p className="text-gray-500 text-xs">posts</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800">12</h3>
                            <p className="text-gray-500 text-xs">followers</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-800">12</h3>
                            <p className="text-gray-500 text-xs">following</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-row justify-start gap-6 pt-2 border-t border-gray-200">
                    <Link
                        to="/profile"
                        className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                    >
                        Profile
                    </Link>
                    <Link
                        to="settings"
                        className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                    >
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;