import { UploadIcon } from "lucide-react";

const General = () => {
    return (
        <div className="flex flex-col gap-3 ">

            <form className="flex flex-col gap-3">
                <div className="relative">
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-400 rounded-lg bg-white hover:bg-gray-50 hover:border-gray-600 focus:border-blue-500 focus:bg-blue-50 transition-all duration-300 cursor-pointer file:hidden"
                    />
                    <UploadIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>

                <input type="text" id="fullname" name="fullname" placeholder="Full name" className="outline outline-gray-500 px-4 py-2 rounded-md  " />
                <input type="text" id="username" name="username" placeholder="username" className="outline outline-gray-500 px-4 py-2 rounded-md  " />
                <input type="text" id="bio" name="bio" placeholder="bio" className="outline outline-gray-500 px-4 py-2 rounded-md  " />
                <button type="submit" className="  px-4 mt-5 py-2 rounded-md  w-100 mx-auto cursor-pointer bg-gray-500 text-white transition-all duration-300">
                    save
                </button>
            </form>


        </div>
    );
}

export default General;