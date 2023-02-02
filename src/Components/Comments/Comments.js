import React, {Component} from 'react';

import {Comment} from "../Comment/Comment";
import {commentsRequests} from "../../api";


class Comments extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state={comments:null}

    }

    componentDidMount(){commentsRequests.getAll().then(({data})=>this.setState({comments:[...data]}))};

    render(){
        return (
            <div>
                {this.state.comments && this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}
export {Comments};
