import { Link, Outlet } from "react-router";

const Settings = () => {
    return (
        <div className="flex flex-col justify-between  bg-white rounded-lg shadow-md p-4 w-full">
            <h1 className="text-2xl font-bold border-b border-gray-200 pb-4">Settings</h1>
            <div className="flex flex-row justify-between pt-4 gap-5">
                <div className="flex flex-col gap-3">

                    <Link to="">General</Link>
                    <Link to="account">Account</Link>
                    <Link to="logout">Logout</Link>
                </div>
                <div className="flex flex-col grow-1">
                    <Outlet />



                </div>

            </div>
        </div>
    );
}

export default Settings;