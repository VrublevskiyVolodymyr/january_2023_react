import React, {useEffect, useState} from 'react';
import {postService} from "../../services";

import {UserPost} from "../UserPost/UserPost";

const UserPosts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllByID(`${userId}`).then(value => value.data).then(value => setPosts([...value]))
    }, [userId]);

    return (
        <div>

            <h1>UserPosts:</h1>

            {userId && posts.map(post => <UserPost key={post.id} post={post}/>)}

        </div>
    );
};

export {UserPosts};
