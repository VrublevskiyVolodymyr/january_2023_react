import React from 'react';

import {useAppReducer} from "../../hooks";
import {userActions} from "../../redusers";
import css from './user.module.css'

const User = ({user}) => {
    const {id, name, surname, age} = user;

    const [,dispatch]=useAppReducer(value=>value.userReducer)

    return (
        <div className={css.user}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>age:{age}</div>
            <button onClick={()=>dispatch(userActions.DELETE_BY_ID(id))}>delete</button>
        </div>
    );
};

export {User};

