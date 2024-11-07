import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import {CreateForm as CreateMonkeyForm} from "./Monkey/CreateForm/CreateForm";
import {UpdateForm as UpdateMonkeyForm} from "./Monkey/UpdateForm";
import {ViewAll as ViewAllMonkeys} from "./Monkey/ViewAll";
import {View as ViewMonkey} from "./Monkey/View";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/monkey/create" element={<CreateMonkeyForm/>}/>
                    <Route path="/monkey/update/:id" element={<UpdateMonkeyForm/>}/>
                    <Route path="/monkey/viewAll" element={<ViewAllMonkeys/>}/>
                    <Route path="/monkey/view/:id" element={<ViewMonkey/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
