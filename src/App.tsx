import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomeComponent from "./modules/home/HomeComponent";
import AgeGate from "./modules/ageGate/AgeGate";
// import Register from "./modules/auth/Register";
// import Cover from "./modules/cover/Cover";
// import PlayerComponent from "./modules/player/PlayerComponent";
import { Provider } from "react-redux";
import store from "./store/store";
<<<<<<< HEAD
import { Register } from "./modules/register/Register";
import { Termsandconditions } from "./modules/tc/Termsandconditions";
import PartyReader from "./modules/partyReader/PartyReader";
// import Termsandconditions from "./modules/termsandconditions/Termsandconditions";
=======
import Termsandconditions from "./modules/termsandconditions/Termsandconditions";
import RandRComponent from "./modules/randr/RandRComponent";
import EpisodeOne from "./modules/episodes/epsode_one/EpisodeOne";
import Invite from "./modules/invite/Invite";
>>>>>>> fa17e737c154cc2147286fd7c29d64f34f385c00

const App = () => {
  const router = createBrowserRouter([
    {
      
      path: "/",
<<<<<<< HEAD
      element: <AgeGate />,
      // children: [
      //   {
      //     path: "",
      //     element: <HomeComponent />,
      //   },
      //   {
      //     path: "player",
      //     element: <PlayerComponent />,
      //   },
      //   {
      //     path: "/verifyage",
      //     element: <AgeGate />,
      //   },
      //   {
      //     path: "/register",
      //     element: <Register />,
      //   },
      //   {
      //     path: "/termsandconditions",
      //     element: <Termsandconditions />,
      //   },
      // ],
=======
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
>>>>>>> fa17e737c154cc2147286fd7c29d64f34f385c00
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "term-and-condition",
      element: <Termsandconditions />
    },
    {
      path: "party-reader",
      element: <PartyReader />
    }

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
