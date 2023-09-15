import { ToastContainer } from "react-toastify";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
        <>
            			<ToastContainer />
            <Header />
            <div className="mb-[5rem]">
                {children}
            </div>
		</>
	);
};

export default Layout;
