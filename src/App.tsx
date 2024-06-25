/** 
Component Name              - Entry Point & App Routing
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import DefaultLayout from "./layouts/DefaultLayout";
import LoadingComponent from "./components/LoadingComponent.tsx";
import { lazy, ReactElement, Suspense } from "react";
import { Toaster } from "./components/ui/toaster.tsx";

const HomeComponent = lazy(() => import("./modules/home/HomeComponent.tsx"));
const PlayerComponent = lazy(() => import("./modules/player/PlayerComponent"));
const Episode = lazy(() => import("./modules/episode/Episode.tsx"));
const Termsandconditions = lazy(() => import("./modules/tc/Termsandconditions.tsx"));
const Register = lazy(() => import("./modules/register/Register"));
const AgeGate = lazy(() => import("./modules/ageGate/AgeGate"));
const Invite = lazy(() => import("./modules/invite/Invite"));
const RandRComponent = lazy(() => import("./modules/randr/RandRComponent"));
const Invitation = lazy(() => import("./modules/invitation/Invitation.tsx"));
const CampignInfo = lazy(() => import("./modules/campignInfo/index.tsx"));
const Moft = lazy(() => import("@/modules/moft/Moft.tsx"));
const EmployeeRegister = lazy(() => import("@/modules/employee/EmployeeRegister.tsx"));
const PartyRadar = lazy(() => import("@/modules/partyReader/PartyRadar.tsx"));
const EventDetail = lazy(() => import("@/modules/event/EventDetail.tsx"));
const Refreshseries = lazy(() => import("@/modules/singerDetail/Refreshseries.tsx"));
const AmeraInvite = lazy(() => import("@/modules/invite/AmeraInvite.tsx"));

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
                    path: "/invite/:episode",
                    element: lazyLoad(<Invite />),
                },
                {
                    path: "/invitation",
                    element: lazyLoad(<Invitation />),
                },
                {
                    path: "/party-radar",
                    element: lazyLoad(<PartyRadar />)
                },
                {
                    path: "/party-radar",
                    element: lazyLoad(<PartyRadar />),
                },
                {
                    path: "/home",
                    element: lazyLoad(<HomeComponent />),
                },
                {
                    path: "/play/:id",
                    element: lazyLoad(<PlayerComponent />),
                },
                {
                    path: "/randr",
                    element: lazyLoad(<RandRComponent />),
                },
                {
                    path: "/randr/:id",
                    element: lazyLoad(<Episode />),
                },
                {
                    path: "/employee",
                    element: lazyLoad(<EmployeeRegister />)
                },
                {
                    path: "/term-and-condition/:vote/:type",
                    element: lazyLoad(<Termsandconditions />),
                },
                {
                    path: "/moft",
                    element: lazyLoad(<Moft />),
                },
                {
                    path: "/campaign-info",
                    element: lazyLoad(<CampignInfo />),
                },
                {
                    path: "/event-detail/:id",
                    element: lazyLoad(<EventDetail />),
                },
                {
                    path: "/register/:episode/:vote/:type",
                    element: lazyLoad(<Register />),
                },
                {
                    path: "/refresh-series",
                    element: lazyLoad(<Refreshseries />)
                },
                {
                    path: "/amera-invite",
                    element: lazyLoad(<AmeraInvite />)
                }
            ],
        },
    ]);
    return (
        <Provider store={store}>
                <RouterProvider router={router} />
                <Toaster />
        </Provider>
    );
};
export default App;
