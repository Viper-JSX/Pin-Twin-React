import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch } from 'react-redux';
import { changePinsSearchTerm, login } from "./redux/action_creators";

function App(){
    const dispatch = useDispatch();
    dispatch(changePinsSearchTerm());

    function handlePinsSearchTermChange(event){
        dispatch(changePinsSearchTerm({term: event.target.value}));
    }

    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}
            />
        </div>
    );
}

export default App;