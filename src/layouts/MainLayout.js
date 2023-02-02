import React from 'react';
import {Outlet} from "react-router-dom";

import {SideBar} from "../components";
import css from './mainloyaut.module.css'

const MainLayout = () => {
    return (
        <div className={css.mainlayout}>
           <SideBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
