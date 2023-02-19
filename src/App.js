// В буквальному сенсі слова повторіть все що було на лекції
// наберіть це все руцями вдумуючись що ви повторюєте (не копіпастіть з мого репозиторію)
// після цього зробіть ще один слайс для постів і реалізуйте те саме що і для юзерсів
//
// Advance
// переробити першу таску с карами позбавившись стейтліфтингу в компонентах використовуючи redux-toolkit


import {Navigate, Route, Routes} from "react-router-dom";
import {MoviesListCardPage, MoviesListPage, SearchPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesListPage/>}/>
                    <Route path={'movies_card'} element={<MoviesListCardPage/>}/>
                    <Route path={'search_movie'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>

    );
};

export {App};

