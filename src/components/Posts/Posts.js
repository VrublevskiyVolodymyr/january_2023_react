import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";
import css from './posts.module.css'

const Posts = () => {
    const dispatch = useDispatch()
    const {posts,selectedPost } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, []);

    return (
        <div>
            <div className={css.title}>{selectedPost && selectedPost.title}</div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
