import {useEffect, useState} from "react";

import {postService} from "../../services";
import css from './PostDetails.module.css'
import {useNavigate} from "react-router-dom";


const PostsDetails = ({postId}) => {

    const [post, setPost] = useState(null);
    const navigate=useNavigate();

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
                    <button onClick={()=>navigate(`/comments`)}> Back to comments</button>
                </>
            }
        </div>
    );
};

export {PostsDetails};
