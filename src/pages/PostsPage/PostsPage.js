import React from 'react';

import {Posts} from "../../components";
import css from './postPage.module.css'


const PostsPage = () => {
    return (
        <div className={css.posts}>
            <h1>Posts</h1>
            <Posts/>
        </div>
    );
};

export {PostsPage};
