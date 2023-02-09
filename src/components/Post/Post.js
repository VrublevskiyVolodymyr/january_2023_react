import React from 'react';
import {useDispatch} from "react-redux";

import css from './post.module.css'
import {postActions} from "../../redux";

const Post = ({post}) => {
    const {userId, id, title, body} = post
    const dispatch = useDispatch();


    return (
        <div className={css.post}>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>select</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {Post};
