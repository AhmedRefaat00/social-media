import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Layout from './layouts/Layout';
import Profile from './pages/profile/Profile';
import MyPostsAndSuggested from './components/MyPostsAndSuggested';
import Settings from './components/Settings';
import General from './components/General';
import Account from './components/Account';
import Logout from './components/Logout';


const ProtectedLayout = () => {
  const isAuth = !!localStorage.getItem("userToken");
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,

      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <MyPostsAndSuggested />
          },
          {
            path: "settings",
            element: <Settings />,
            children: [
              {
                index: true,
                element: <General />
              },
              {
                path: "account",
                element: <Account />
              },
              {
                path: "logout",
                element: <Logout />
              }
            ]
          },

        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;