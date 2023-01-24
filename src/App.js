import {useState} from "react";

import {PostForm, UserForm, UserPosts, Users} from "./components";


const App = () => {

    const [userId, setUserId] = useState(null);


    return (
        <div>


            <UserForm/>

            <hr/>

            <Users setUserId={setUserId}/>




        </div>
    );
};

export {App};

