const baseURL='https://api.themoviedb.org/3'
const auth='/auth'
const access='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTJmOGFmYWRkNWFmMmY1M2ViNjg2NjFjYzc3MjdjOSIsInN1YiI6IjYzZWU3N2VhODhiMTQ4MDBhYjVjYWI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMyk0SWJO4OX7ncdSZTSOdA9YJZKfUUJvbiu-K9cRLo'
const imagePath = 'https://image.tmdb.org/t/p/w500/';
const urls= {
        movies: `/discover/movie?`
}




// const urls = {
//     cars: {
//         cars,
//         byId: (id) => `${cars}/${id}`
//     },
//     auth:{
//         login:auth,
//         refresh:`${auth}/refresh`,
//         me:`${auth}/me`
//     },
//     users:'/users'
// }

export {baseURL,urls,access}
