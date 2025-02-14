import React from 'react';
import {Route, Routes} from "react-router";
import MainPage from "../../pages/ui/MainPage.tsx";

export default function RouterProvider(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    );
}
