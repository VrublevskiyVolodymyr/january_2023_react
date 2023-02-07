import React, {Component} from 'react';

import {postsRequests} from "../../api/request/postsRequests";
import {Post} from "../Post/Post";



class Posts extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state={posts:null}

    }

    componentDidMount(){postsRequests.getAll().then(({data})=>this.setState({posts:[...data]}))};

    render(){
    return (
        <div>
            {this.state.posts && this.state.posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
}
}
export {Posts};


