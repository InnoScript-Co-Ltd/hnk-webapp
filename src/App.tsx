import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeComponent from "./modules/home/HomeComponent";
import Cover from "./modules/cover/Cover";

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
            ],
        },
        {
            path: "/cover",
            element: <Cover />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
