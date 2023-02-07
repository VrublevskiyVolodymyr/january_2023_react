// В буквальному сенсі слова повторіть все що було на лекції
// наберіть це все руцями вдумуючись що ви повторюєте (не копіпастіть з мого репозиторію)
// після цього зробіть ще один слайс для постів і реалізуйте те саме що і для юзерсів
//
// Advance
// переробити першу таску с карами позбавившись стейтліфтингу в компонентах використовуючи redux-toolkit


import {Navigate, Route, Routes} from "react-router-dom";
import {PostsPage, UsersPage,CarsPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (

    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
            </Route>
        </Routes>
</div>

    );
};

export {App};

