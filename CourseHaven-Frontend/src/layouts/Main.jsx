import { Outlet, useNavigation } from "react-router";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import PrimarySpinner from "../components/LoadingSpinner/PrimarySpinner";

const Main = () => {

    const navigation = useNavigation()

    if (navigation.state === 'loading') return <PrimarySpinner />



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