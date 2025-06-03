const Account = () => {
    return (
        <div className="flex flex-col gap-3 h-60 pl-10">
            <h3 className="text-2xl font-bold text-gray-700"> Delete Account</h3>
            <p>This action is irreversible and will permanently delete all your data associated with the account.</p>
            <button className="outline outline-red-500 text-red-500 px-4 py-2 mt-10 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer">Delete Account</button>

        </div>
    );
}

export default Account;