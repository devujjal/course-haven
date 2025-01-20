import { Outlet } from "react-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const Main = () => {
    return (
        <div>
            {/* Herder */}
            <Header />
            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;