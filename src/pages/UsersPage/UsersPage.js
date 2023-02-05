import React from 'react';

import {UserForm, Users} from "../../components";
import css from './user.module.css';

const UsersPage = () => {
    return (
        <div className={css.userPage}>
            <h1>Users</h1>
            <UserForm/>
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};
