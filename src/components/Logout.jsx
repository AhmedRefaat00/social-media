const Logout = () => {
    return (

        <div className="flex flex-col justify-end items-center gap-3 h-30 ">
            <p className="text-gray-700">Are you sure you want to logout?</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300 cursor-pointer">Logout</button>
        </div>
    );
}

export default Logout;