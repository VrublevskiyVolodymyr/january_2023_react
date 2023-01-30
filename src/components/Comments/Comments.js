import React, {useEffect, useState} from 'react';

import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from '../Comment/Comment.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div className={css.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
