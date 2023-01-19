import {useEffect, useState} from "react";

import {postsService, userService} from "../../Services";
import {User} from "../User/User";
import {UserPost} from "../UserPost/UserPost";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postsId, setPostsId] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, []);

    useEffect(() => {
        postsService.getAllByID(`${postsId}`).then(value => value.data).then(value => setPosts([...value]))
    }, [postsId]);

    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => <User key={user.id} user={user} setPostsId={setPostsId}/>)}

            <hr/>

            <h1>UserPosts:</h1>
            {postsId && posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {Users};
