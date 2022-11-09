import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch } from 'react-redux';
import { changePinsSearchTerm, login } from "./redux/action_creators";

function App(){
    const dispatch = useDispatch();

    return(
        <div className="App">
            <Layout />
        </div>
    );
}

export default App;