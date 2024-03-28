import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomeComponent from "./modules/home/HomeComponent";
import AgeGate from "./modules/ageGate/AgeGate";
// import Register from "./modules/auth/Register";
// import Cover from "./modules/cover/Cover";
// import PlayerComponent from "./modules/player/PlayerComponent";
import { Provider } from "react-redux";
import store from "./store/store";
// import RandRComponent from "./modules/randr/RandRComponent";
// import EpisodeOne from "./modules/episodes/epsode_one/EpisodeOne";
// import Invite from "./modules/invite/Invite";
// import DefaultLayout from "./layouts/DefaultLayout";
// import HomeComponent from "./modules/home/HomeComponent";
// import PlayerComponent from "./modules/player/PlayerComponent";
import { Register } from "./modules/register/Register";
// import PartyReader from "./modules/partyReader/PartyReader";
import { Termsandconditions } from "./modules/tc/Termsandconditions";
import "./index.css";

const App = () => {
  const router = createBrowserRouter([
    // {

    //   path: "/",
    //   element: <DefaultLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <HomeComponent />,
    //     },
    //     {
    //       path: "player",
    //       element: <PlayerComponent />,
    //     },

    //     {
    //       path: "/randr",
    //       element: <RandRComponent />
    //     },
    //     {
    //       path: '/randr/episode-1',
    //       element: <EpisodeOne />
    //     },
    //     {
    //       path: '/invite',
    //       element: <Invite />
    //     },
    //     {
    //       path: "party-reader",
    //       element: <PartyReader />
    //     },

    //   ],
    // },
    {
      path: "register",
      element: <Register />
    },

    {
      path: "term-and-condition",
      element: <Termsandconditions />
    },

    {
      path: "/",
      element: <AgeGate />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>)
};
export default App;
