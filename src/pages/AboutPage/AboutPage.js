import {useContext} from "react";

import css from './AboutPage.module.css'
import {Button} from "../../components";
import {Mycontext} from "../../index";



const AboutPage = () => {

const context = useContext(Mycontext);            //обєкт який вказаний у value в index.js line 13; useContext-hook;
                                                  //в useContext можна передати будь-який Context який ми маєм і хочем використовувати.
                                                   //context: {JSON.stringify(context)} виводим наш обєкт в JSON форматі.
   context.gender='male';                           // add new field and value to object;  тобто при переході на цю стор. буде додаватись це нове поле
   Object.assign(context, {status:true});    //також можна додавати поле ч/з  Object.assign() не змінюючи посилання на обєкт.
    delete context.age;                            //також можна видаляти поля

    // нашу копоненту </Button> будемо передавати в подвійному тегу і все що буду всередині це наші children які ми передаєм в нашу компоненту Вutton і виводим в div
    //це може бути ціла купа компонентів це буде просто обгортка над ними.
    // в нас є пропертя click в яку ми можем передати coolback ф-ію(див <Button/>),
    // також в якості проперті, яку потім деструктуризуєм в компоненті Button можна передати наприклад style для швидкої заміни кольору
    return (
        <div className={css.AboutPage}>
            <h1>AboutPage</h1>
            <div>context: {JSON.stringify(context)}</div>
            <Button click={()=> console.log('Onclick work coolback function')} style={{backgroundColor:'green'}}> click </Button>
        </div>
    );
};

export {AboutPage};
