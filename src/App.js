// В буквальному сенсі слова повторіть все що було на лекції
// наберіть це все руцями вдумуючись що ви повторюєте (не копіпастіть з мого репозиторію)
// після цього зробіть ще один слайс для постів і реалізуйте те саме що і для юзерсів
//
// Advance
// переробити першу таску с карами позбавившись стейтліфтингу в компонентах використовуючи redux-toolkit


import {Navigate, Route, Routes} from "react-router-dom";
import {PostsPage, UsersPage, CarsPage, LoginPage, RegisterPage} from "./pages";
import {AuthRequireLayout, MainLayout} from "./layouts";


const App = () => {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>

                    <Route  element={<AuthRequireLayout/>}>
                        <Route path={'cars'} element={<CarsPage/>}/>
                    </Route>

                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </div>

    );
};

export {App};

