import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Layout = () => {
    return (
        <div className="pt-5 px-10">
            <Navbar />

            <Outlet />


        </div>
    );
}

export default Layout;