import Landing from "./components/Landing";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Profile from "./components/profile/Profile";
import OnePic from "./components/profile/OnePic";

function getRoutes() {
  return [
    {
      id: "Landing",
      path: "/",
      exact: true,
      component: Landing,
    },
    {
      id: "Login",
      path: "/login",
      exact: true,
      component: Login,
    },
    {
      id: "Signup",
      path: "/signup",
      exact: true,
      component: Signup,
    },
    {
      id: "Dashboard",
      path: "/dashboard",
      exact: true,
      component: Dashboard,
      isProtected: true,
    },
    {
      id: "Profile",
      path: "/profile/:name",
      exact: true,
      component: Profile,
      isProtected: true,
    },
    {
      id: "OnePic",
      path: "/profile/:name/:picid",
      exact: true,
      component: OnePic,
      isProtected: true,
    },
    {
      id: "NotFound",
      path: "*",
      component: NotFound,
    },
  ];
}

export default getRoutes();
