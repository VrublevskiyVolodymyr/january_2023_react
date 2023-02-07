import React from 'react';

import css from './dog.module.css'

const Dog= ({dog,dispatch}) => {
    const {id, name}=dog
    return (
        <div className={css.dog}>
            {id}:{name}
            <button onClick={()=>dispatch({type:'DeleteDog', payload:id})}>delete</button>
        </div>
    );
};

export {Dog};
