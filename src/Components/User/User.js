import React from 'react';

const User = ({user,setUserId}) => {
    const {id, name} = user

    return (

        <div className={'user'}>

            <div>
                Id: {id}
            </div>

            <div>
               name: {name}
            </div>

            <button onClick={()=> setUserId(id)}>User Posts</button>

        </div>
    );
};

export {User};
