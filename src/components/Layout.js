import { Route, Routes } from "react-router";
import Header from "./Header/Header";

function Layout({ handlePinsSearchTermChange }){

    return(
        <div id="layout">
            <Header handlePinsSearchTermChange={handlePinsSearchTermChange} />

            <Routes>
                <Route path="/" element={null} />
            </Routes>
        </div>
    );
}

export default Layout;