import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router";
import {store} from "../store/store.ts";

type Props = {
    children: React.JSX.Element;
}

export default function AppProvider({children}: Props): React.JSX.Element {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
}
