import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import DefaultLayout from "./layouts/DefaultLayout";
import LoadingComponent from "./components/LoadingComponent.tsx";
import { lazy, ReactElement, Suspense } from "react";

const HomeComponent = lazy(() => import("./modules/home/HomeComponent.tsx"));
const PlayerComponent = lazy(() => import("./modules/player/PlayerComponent"));
const PartyRadar = lazy(() => import("./modules/partyReader/PartyReader"));
const Episode = lazy(() => import("./modules/episodes/epsode_one/EpisodeOne"));
const Termsandconditions = lazy(
    () => import("./modules/tc/Termsandconditions.tsx")
);
const Register = lazy(() => import("./modules/register/Register"));
const AgeGate = lazy(() => import("./modules/ageGate/AgeGate"));
const Invite = lazy(() => import("./modules/invite/Invite"));
const RandRComponent = lazy(() => import("./modules/randr/RandRComponent"));

const lazyLoad = (element: ReactElement) => {
    return <Suspense fallback={<LoadingComponent />}>{element}</Suspense>;
};

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultLayout />,
            children: [
                {
                    path: "/",
                    element: lazyLoad(<AgeGate />),
                },
                {
                    path: "/player",
                    element: lazyLoad(<PlayerComponent />),
                },
                {
                    path: "/randr",
                    element: lazyLoad(<RandRComponent />),
                },
                {
                    path: "/randr/episode-1",
                    element: lazyLoad(<Episode />),
                },
            ],
        },
        {
            path: "/register",
            element: lazyLoad(<Register />),
        },
        {
            path: "/term-and-condition",
            element: lazyLoad(<Termsandconditions />),
        },
        {
            path: "/invite",
            element: lazyLoad(<Invite />),
        },
        {
            path: "/party-radar",
            element: lazyLoad(<PartyRadar />),
        },
        {
            path: "/home",
            element: lazyLoad(<HomeComponent />),
        },
    ]);
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
export default App;
