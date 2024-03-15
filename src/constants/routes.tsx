import DefaultLayout from "@/layouts/DefaultLayout";
import AgeGate from "@/modules/auth/AgeGate";
import Register from "@/modules/auth/Register";
import { selectToken } from "@/modules/auth/authSlice";
import HomeComponent from "@/modules/home/HomeComponent";
import PlayerComponent from "@/modules/player/PlayerComponent";
import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";

const RouterConfig = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: "",
            element: <HomeComponent />,
          },
          {
            path: "player",
            element: <PlayerComponent />,
          },
          {
            path: "/verifyage",
            element: <AgeGate />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ]);
  
    return router;
  }
  
  export default RouterConfig;