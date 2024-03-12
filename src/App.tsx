import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeComponent from "./modules/home/HomeComponent";

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
	]);
	return <RouterProvider router={router} />;
};

export default App;
