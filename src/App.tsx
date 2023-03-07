import React from 'react';
import '../src/assets/styles/global.sass';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
