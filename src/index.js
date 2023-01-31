import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';
import {createContext} from "react";
import {AuthProvider} from "./hoc";


const Mycontext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

// <AuthProvider> це обгортка (компонента) для AuthContext щоб винести його з index.js; по суті це те саме що і
//Mycontext тільки в обгортці; Тепер все що всередині <AuthProvider> є його children; i потім вони попадають в AuthConrext;

root.render(
    <AuthProvider>
        <Mycontext.Provider value={{name: 'Max', age: 20}}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Mycontext.Provider>
    </AuthProvider>
);

export {Mycontext}
