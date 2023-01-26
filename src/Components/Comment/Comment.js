import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Comment.module.css'

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id, postId, name, email, body} = comment

    return (
        <div className={css.Comment}>
            <div>id: {id} </div>
            <div>postId: {postId} </div>
            <div>name: {name} </div>
            <div>email: {email} </div>
            <div>body: {body} </div>
            <button onClick={()=>navigate(postId.toString())}>Details</button>
        </div>
    );
};

export {Comment};
