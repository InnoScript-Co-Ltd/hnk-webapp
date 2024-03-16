import { Outlet } from "react-router-dom";

const AuthLayout = () => {

	return (
		<main>
			<div className="layout-container">
				<Outlet />
			</div>
		</main>
	);
};

export default AuthLayout;
