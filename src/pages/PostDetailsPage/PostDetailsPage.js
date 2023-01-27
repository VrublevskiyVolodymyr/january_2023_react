import {PostsDetails} from "../../components";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();

    return (
        <div>
            <PostsDetails postId={postId} />
        </div>
    );
};

export {PostDetailsPage};
