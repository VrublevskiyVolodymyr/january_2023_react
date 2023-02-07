import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import css from './user.module.css'

const User = ({user}) => {

    const {id, name,username} = user
    const dispatch = useDispatch();

    return (
        <div className={css.user} >
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {User};