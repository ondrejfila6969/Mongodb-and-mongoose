import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import CreateForm from "./Monkey/CreateForm/CreateForm";
import UpdateForm  from "./Monkey/UpdateForm/UpdateForm";
import View from "./Monkey/View/View";
import ViewAll from "./Monkey/ViewAll/ViewAll";
import Created from "./Monkey/Created/Created";

import CreateSportForm from "./Sport/CreateForm/CreateSportForm";
import UpdateSportForm from "./Sport/UpdateForm/UpdateSportForm";
import ViewSport from "./Sport/View/ViewSport";
import ViewAllSports from "./Sport/ViewAll/ViewAllSports";
import CreatedSport from "./Sport/Created/CreatedSport";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Home page */}
                    <Route path="/" element={<Home/>}/>

                    {/* Monkee */}
                    <Route path="/create-monkey" element={<CreateForm/>}/>
                    <Route path="/update-monkey/:id" element={<UpdateForm/>}/>
                    <Route path="/created-monkey/:id" element={<Created/>}/>
                    <Route path="/viewAllMonkeys" element={<ViewAll/>}/>
                    <Route path="/view-monkey/:id" element={<View/>}/>

                    {/* Sportz*/}
                    <Route path="/create-sport" element={<CreateSportForm/>}/>
                    <Route path="/update-sport/:id" element={<UpdateSportForm/>}/>
                    <Route path="/created-sport/:id" element={<CreatedSport/>}/>
                    <Route path="/viewAllSports" element={<ViewAllSports/>}/>
                    <Route path="/view-sport/:id" element={<ViewSport/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
