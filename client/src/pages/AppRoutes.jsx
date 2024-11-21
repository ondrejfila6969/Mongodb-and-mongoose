import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import CreateForm from "./Monkey/CreateForm/CreateForm";
import UpdateForm  from "./Monkey/UpdateForm/UpdateForm";
import View from "./Monkey/View/View";
import ViewAll from "./Monkey/ViewAll/ViewAll";
import Created from "./Monkey/Created/Created";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-monkey" element={<CreateForm/>}/>
                    <Route path="/update-monkey/:id" element={<UpdateForm/>}/>
                    <Route path="/created-monkey/:id" element={<Created/>}/>
                    <Route path="/viewAllMonkeys" element={<ViewAll/>}/>
                    <Route path="/view-monkey/:id" element={<View/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
