import { Route, Routes } from "react-router";
import Header from "./Header/Header";

function Layout({ handlePinsSearchTermChange }){

    return(
        <div id="layout">
            <Header handlePinsSearchTermChange={handlePinsSearchTermChange} />

            <Routes>
                <Route path="/" element={null} />
                <Route path="/profile" element={null}>
                    <Route path="authorization">
                        <Route path="login" />
                        <Route path="register" />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default Layout;