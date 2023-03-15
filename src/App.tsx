import React from 'react';
import '../src/assets/styles/global.sass';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/signin" element={<SignIn/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
