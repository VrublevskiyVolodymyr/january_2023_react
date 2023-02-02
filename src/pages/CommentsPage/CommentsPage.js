import React from 'react';

import {Comments} from "../../components";
import css from './commentsPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.comments}>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
};

export {CommentsPage};
