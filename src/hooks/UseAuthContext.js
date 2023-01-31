// тут створюєм кастумний hook(свій власний); любий hook можна викликати тільки в компоненті або в іншому хуку(при створенні) але не в файлі;
//кастумні хуки це хуки які використали інші хуки і скомбінували те що нам потрібною Це зменшую к-ть імпортів
import {useContext} from "react";

import {AuthContext} from "../hoc";

const useAuthContext=()=>useContext(AuthContext);    //створюємо свій хук-це ф-ія яка повертає результат виконання useContext тобто Context нашого AuthContext(сам обєкт)

export {useAuthContext}
