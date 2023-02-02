import {Component} from "react";

import css from './comment.module.css'

class Comment extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={css.comment}>
                <div>id: {this.props.comment.id}</div>
                <div>name: {this.props.comment.name}</div>
                <div>body: {this.props.comment.body}</div>
            </div>
        )
    }
}

export {Comment};
