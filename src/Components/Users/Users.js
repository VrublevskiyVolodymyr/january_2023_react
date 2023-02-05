import React from 'react';
import {useAppReducer} from "../../hooks";
import {User} from "../User/User";

const Users = () => {

   const [users]=useAppReducer((reducers)=>reducers.userReducer);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
