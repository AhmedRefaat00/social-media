import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import ProfileCard from "../../components/ProfileCard";
const Profile = () => {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-3 gap-10 pt-10">
                <Sidebar />
                <ProfileCard />

                <div className="col-start-2 col-end-5 row-start-2 row-end-4">
                    <Outlet />
                </div>

            </div>
        </>
    );
}

export default Profile;