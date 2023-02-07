import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './myinlayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.layout} >
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
