import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {

    const [posts, setPosts]=useState([]);

    useEffect(()=>{postsService.getAllByID(userId).then(({data})=>setPosts([...data]))
    },[userId])

    return (

        <div>

            <h1>Posts</h1>

            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};
