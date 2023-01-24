import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services";


const Users = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, []);


    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};
