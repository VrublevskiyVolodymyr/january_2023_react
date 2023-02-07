import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './header.module.css'


const Header = () => {

    const{selectedUser}=useSelector(state => state.users)


    return (
        <div className={css.header} >
            <NavLink to={'users'}>users</NavLink>
            <NavLink to={'cars'}>cars</NavLink>
            <NavLink to={'posts'}>posts</NavLink>
            <div>{selectedUser && selectedUser.name}</div>
        </div>
    );
};

export {Header};
