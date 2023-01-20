import './styleUser.css'
const User = ({user,setPostsId }) => {

    const {id, name} = user
    return (
        <div className='user'>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>setPostsId(id)}>User Posts</button>
        </div>
    );
};

export {User};
