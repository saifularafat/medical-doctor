import { Outlet } from "react-router-dom";
import Footer from "../page/Shares/Footer/Footer";
import NavBer from "../page/Shares/NavBer/NavBer";

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className="min-h-[calc(100vh-330px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;