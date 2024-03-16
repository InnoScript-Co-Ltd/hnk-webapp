import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomeComponent from "./modules/home/HomeComponent";
import AgeGate from "./modules/ageGate/AgeGate";
// import Register from "./modules/auth/Register";
// import Cover from "./modules/cover/Cover";
// import PlayerComponent from "./modules/player/PlayerComponent";
import { Provider } from "react-redux";
import store from "./store/store";
import { Register } from "./modules/register/Register";
// import Termsandconditions from "./modules/termsandconditions/Termsandconditions";

const App = () => {
  const router = createBrowserRouter([
    {
      
      path: "/",
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
    },
    {
      path: "register",
      element: <Register />
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
