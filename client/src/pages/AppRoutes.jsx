import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import CreateForm from "./Monkey/CreateForm/CreateForm";
import UpdateForm from "./Monkey/UpdateForm";
import ViewAll from "./Monkey/ViewAll";
import View from "./Monkey/View";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/monkey/create" element={<CreateForm/>}/>
                    <Route path="/monkey/update" element={<UpdateForm/>}/>
                    <Route path="/monkey/viewAll" element={<ViewAll/>}/>
                    <Route path="/monkey/view" element={<View/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
