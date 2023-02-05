import React from 'react';
import {Posts} from "../../components";

import css from './post.module.css'

const PostsPage = () => {
    return (
        <div className={css.post}>
            <h1>Posts</h1>
            <Posts/>
        </div>
    );
};

export {PostsPage};
