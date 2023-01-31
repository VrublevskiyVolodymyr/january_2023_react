import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

//вся логінація буде полягати в тому щоб в input ввести якесь імя щоб засетати в user (useState) в AuthProvider
//oскільки нам потрібен один input то немає необхідності викор. useForm, тому будем викор. hook useRef

const LoginPage = () => {
   const username=useRef();                     //цей хук робить референс на будь-який html елемент; просто так в ньому немає сенсу, але його можна кріпити до якихось input,div...
                                                 //в input в спеціальний атрибут ref можна передати Reference  username; це схоже як в js ми input давали id і потім шукали за getElementById і отримували по суті
                                                //елемент input. Те саме робить і Ref але тут замість id кажем який useRef() буде відповідати за цей input;

    const {logIn}=useAuthContext();                //викликаєм useAuthContext() і витягуєм ф-ію logIn  щоб засетати ч/з неї в useState нашого user - (username.current.value);
    const navigate=useNavigate();                 //викликаєм navigate щоб зробити навігацію
    const {state}=useLocation();                 //викликаєм useLocation і витягуєм з нього state щоб передати state.pathname ч/з navigate;

    const login=()=>{                                     //ф-ія повертає значення поля input через Ref username і його поле current
        console.log('ref_input:',username.current.value);        //виведе нашого user;
        logIn(username.current.value);                     // передаєм значення поля input в user в useState ч/з ф-ію logIn і ми зможем подивитись чи є він там з будь-якої точки аплікації
        navigate(state.pathname, {replace:true});  //після того як засетали в useState нашого user робим navigate на сторінку куди він хотів зайти;
                                                  //також при навігації вказуєм додатковий параметр replace:true (він також є і в Link. NavLink),
                                                  // який стирає з історії те що ми були на цьому Route (він забуде що ми були на login);
    }


                                             // створюєм кнопку де на onClick будем викликати ф-ію login яка повертає значення поля input
    return (
        <div>
<input type={'text'} placeholder={'username'} ref={username} />
            <button onClick={()=>login()}>Login</button>
        </div>
    );
};

export {LoginPage};
