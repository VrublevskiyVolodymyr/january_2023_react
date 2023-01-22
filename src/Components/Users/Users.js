import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({setUserId}) => {

    const [users,setUsers]=useState([]);

    useEffect(()=>{userService.getAll().then(value =>value.data).then(value => setUsers([...value]))
    },[])

    return (

        <div>

            <h1>Users</h1>

            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}

        </div>
    );
};

export {Users};
