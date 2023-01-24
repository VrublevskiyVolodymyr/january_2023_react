import {useState} from "react";

import {PostForm, UserForm, UserPosts, Users} from "./components";


const App = () => {

    const [userId, setUserId] = useState(null);

    return (
        <div>

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users*/}
            <UserForm/>

            <hr/>

            <Users setUserId={setUserId}/>

            <hr/>

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments*/}

            <PostForm/>

            <hr/>

            <UserPosts userId={userId}/>

        </div>
    );
};

export {App};

