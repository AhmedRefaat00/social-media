import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const posts = useLoaderData();
  console.log(posts);
  console.log(navigation);

  return (
    <div className="flex gap-10 pt-10">
      <Sidebar />
      <div className="basis-1/2 text-center border border-gray-300">posts </div>
      <div className="basis-1/4 text-center border border-gray-300">suggestions friends</div>
      



    </div>
  );
};

export default Home;
