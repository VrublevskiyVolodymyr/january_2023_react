import React from 'react';

import css from './cat.module.css'

const Cat = ({cat,dispatch}) => {
   const {id, name}=cat
    return (
        <div className={css.cat}>
            {id}:{name}
            <button onClick={()=>dispatch({type:'DeleteCat', payload:id})}>delete</button>
        </div>
    );
};

export {Cat};
