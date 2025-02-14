import React from 'react';
import {Route, Routes} from "react-router";
import MainPage from '../../pages/ui/MainPage.tsx';
import HelloPage from '../../pages/HelloPage/HelloPage.tsx';
import NotFaundPage from '../../pages/NotFaundPages/NotFaundPage.tsx';
import SignUpPage from '../../pages/SignUpPage/SignUpPage.tsx';
import LoginPage from '../../pages/LoginPage/LoginPage.tsx';
import Layout from '../Layout.tsx';

export default function RouterProvider(): React.JSX.Element {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HelloPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="*" element={<NotFaundPage/>}/>
            </Route>
        </Routes>
    );
}
