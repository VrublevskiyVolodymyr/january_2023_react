
import {UserPost} from "../UserPost/UserPost";

const UserPosts = ({userId,posts }) => {

    return (
        <div>

            <h1>UserPosts:</h1>

            {userId && posts.map(post => <UserPost key={post.id} post={post}/>)}

        </div>
    );
};

export {UserPosts};
