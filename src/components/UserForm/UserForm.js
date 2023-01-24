import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {userService} from "../../services";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const submit = async (user) => {
        const {data} = await userService.create(user);
        setUsers(prev=>[...prev, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <input type="text" plaseholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" plaseholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" plaseholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export {UserForm};
