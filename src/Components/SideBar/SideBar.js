import React from 'react';
import {NavLink} from "react-router-dom";

import css from './sideBar.module.css'

const SideBar = () => {
    return (
        <div className={css.sideBar}>
            <NavLink to={'home'}>home</NavLink>
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'cars'}>cars</NavLink>
            <NavLink to={'posts'}>posts</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
            <NavLink to={'pets'}>pets</NavLink>
            <NavLink to={'about'}>about</NavLink>
        </div>
    );
};

export {SideBar};
