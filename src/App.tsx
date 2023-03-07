import React from 'react';
import '../src/assets/styles/global.sass';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
