import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {


    return (
        <div className={css.header}>
            <NavLink to={'movies'}>movies</NavLink>
            <NavLink to={'movies_card'}>movies_card</NavLink>
        </div>
    );
};

export {Header};
