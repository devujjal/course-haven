import { Outlet } from "react-router";
import Header from "../components/Shared/Header";

const Main = () => {
    return (
        <div>
            {/* Herder */}
            <Header />
            <main>
                <Outlet />
            </main>

            {/* Footer */}
        </div>
    );
};

export default Main;