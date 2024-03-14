import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeComponent from "./modules/home/HomeComponent";
import AgeGate from "./modules/auth/AgeGate";
import Register from "./modules/auth/Register";
import Cover from "./modules/cover/Cover";
import PlayerComponent from "./modules/player/PlayerComponent";

const App = () => {
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
            ],
        },
      ],
    },
    {
      path: "/cover",
      element: <Cover />,
    },
    {
      path: "/verifyage",
      element: <AgeGate />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
