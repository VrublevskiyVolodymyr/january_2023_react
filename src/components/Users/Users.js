

import {User} from "../User/User";



const Users = ({setUserId, users}) => {


    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};
