import React, {useContext} from 'react';
import {Mycontext} from "../../index";

const UsersPage = () => {
    const context=useContext(Mycontext);         // look comments on PageAbout
    return (
        <div>
            <div>name: {context.name}</div>
            <div>age: {context.age}</div>
            <div>context: {JSON.stringify(context)}</div>
        </div>
    );
};

export {UsersPage};
