import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { PrivateRoutes } from "./PrivateRoutes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path="/*" element={
                    <PrivateRoutes>
                        <PrivateRouter />
                    </PrivateRoutes>
                } />

            </Routes>
        </Router>
    );
}
