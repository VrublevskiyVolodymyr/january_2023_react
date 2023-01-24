import {useEffect, useState} from "react";

import {PostForm, UserForm, UserPosts, Users} from "./components";
import {postService, userService} from "./services";


const App = () => {

    const [userId, setUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllByID(`${userId}`).then(value => value.data).then(value => setPosts([...value]))
    }, [userId]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users*/}
            <UserForm setUsers={setUsers}/>

            <hr/>

            <Users setUserId={setUserId}  users={users}/>

            <hr/>

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий пост постовим запитом на http://jsonplaceholder.typicode.com/comments*/}

            <PostForm setPosts={setPosts}/>

            <hr/>

            <UserPosts userId={userId} posts={posts}/>

        </div>
    );
};

export {App};

