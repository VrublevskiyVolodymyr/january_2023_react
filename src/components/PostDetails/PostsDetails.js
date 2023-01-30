import {useEffect, useState} from "react";

import {postService} from "../../services";
import css from './PostDetails.module.css'


const PostsDetails = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data}) => {
            setPost(data)})
    }, [postId])

    return (
        <div className={css.PostDetails}>
            {post &&
                <>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    );
};

export {PostsDetails};
