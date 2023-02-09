import React from 'react';

import {Users} from "../../components";
import css from './users.Page.module.css'

const UsersPage = () => {
    return (
        <div className={css.users}>
            <h1>Users</h1>
            <Users/>
        </div>
    );
};

export {UsersPage};
