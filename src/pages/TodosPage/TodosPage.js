import {Outlet} from "react-router-dom";

import {Todos} from "../../components/Todos/Todos";


const TodosPage = () => {
    return (
        <div>
            <h1 >Todos</h1>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};
