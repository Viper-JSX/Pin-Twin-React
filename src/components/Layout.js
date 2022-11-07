import { Route, Routes } from "react-router";
import Header from "./Header/Header";

function Layout(){
    return(
        <div id="layout">
            <Header />

            <Routes>
                <Route path="/" element={null} />
            </Routes>
        </div>
    );
}

export default Layout;