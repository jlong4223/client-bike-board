import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashnoard from "./components/Dashboard";
import NotFound from "./components/NotFound";

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
      component: Dashnoard,
    },
    {
      id: "NotFound",
      path: "*",
      component: NotFound,
    },
  ];
}

export default getRoutes();
