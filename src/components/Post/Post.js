import {Component} from "react";

import css from './post.module.css'

class Post extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={css.post}>
                <div>id: {this.props.post.id}</div>
                <div>title: {this.props.post.title}</div>
                <div>body: {this.props.post.body}</div>
            </div>
        )
    }
}

export {Post};


