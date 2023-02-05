import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AboutPage, CarsPage, CommentsPage, HomePage, PetsPage, PostsPage, UsersPage} from "./pages";


// отримати пости та вивести їх використовуючи класові компоненти
// отримати коментарі та вивести їх використовуючи класові компоненти
//
// Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
// Реалізувати збереження окремо нового кота, та окремо собаку (приклад на зображенні)
//
// Advance
// реалізувати видалення для кожного при натисканні на кнопку delete

const App = () => {
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'home'}/>}/>
                  <Route path={'home'} element={<HomePage/>}/>
                  <Route path={'users'} element={<UsersPage/>}/>
                  <Route path={'cars'} element={<CarsPage/>}/>
                  <Route path={'posts'} element={<PostsPage/>}/>
                  <Route path={'comments'} element={<CommentsPage/>}/>
                  <Route path={'pets'} element={<PetsPage/>}/>
                  <Route path={'about'} element={<AboutPage/>}/>
              </Route>
          </Routes>
        </div>
    );
};

export {App};


