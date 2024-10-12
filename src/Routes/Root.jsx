import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";


const Root = () => {
    return (
        <div>
            <Helmet>
                <title>FiestaFlavors | Maxican Tastes</title>
            </Helmet>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;