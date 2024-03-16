import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeComponent from "./modules/home/HomeComponent";
import AgeGate from "./modules/auth/AgeGate";
import Register from "./modules/auth/Register";
// import Cover from "./modules/cover/Cover";
import PlayerComponent from "./modules/player/PlayerComponent";
import { Provider } from "react-redux";
import store from "./store/store";
import Termsandconditions from "./modules/termsandconditions/Termsandconditions";
import RandRComponent from "./modules/randr/RandRComponent";
import EpisodeOne from "./modules/episodes/epsode_one/EpisodeOne";
import Invite from "./modules/invite/Invite";

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
        {
          path: "/verifyage",
          element: <AgeGate />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/termsandconditions",
          element: <Termsandconditions />,
        },
        {
          path: "/randr",
          element: <RandRComponent />
        },
        {
          path: '/randr/episode-1',
          element: <EpisodeOne />
        },
        {
          path: '/invite',
          element: <Invite />
        }
      ],
    },

    // {
    //   path: "/cover",
    //   element: <Cover />,
    // },
  ]);
  return(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>)
};
export default App;
