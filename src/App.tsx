import React from 'react';
import '../src/assets/styles/global.sass';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
