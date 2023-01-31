import {Navigate, Route, Routes} from "react-router-dom";

import {
    AboutPage,
    AlbumsPage,
    CommentsPage,
    HomePage, LoginPage,
    NotFoundPage,
    PostDetailsPage,
    TodosPage, UsersPage
} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./hooks/RequireAuth";



// реалізувати 3 маршрути
//todos - при переході на який тягнуться всі todos 'з https:jsonplaceholder.typicode.com/todos'
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.


// в </RequireAuth> передаєм children <CommentsPage/>
const App = () => {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={
                        <RequireAuth> <CommentsPage/> </RequireAuth>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>

    );
};

export {App};

