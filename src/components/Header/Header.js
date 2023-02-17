import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {


    return (
        <div className={css.header}>
            <NavLink to={'movies'}>movies</NavLink>
            <NavLink to={'cars'}>cars</NavLink>
            <NavLink to={'posts'}>posts</NavLink>
        </div>
    );
};

export {Header};
