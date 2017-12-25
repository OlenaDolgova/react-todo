import React, { Component } from 'react';

import Styles from './styles.scss';
import { string, func } from 'prop-types';
import moment from 'moment';
import { getUniqueID } from '../../helpers';

export default class Composer extends Component {

    static contextTypes = {
        avatar: string.isRequired
    };

     static propTypes = {
         createPost: func.isRequired
     };

     constructor () {
         super();

         this.handleTextAreaChange = this._handleTextAreaChange.bind(this);
     }

    state = {
        comment: ''
    };


    _handleTextAreaChange (event) {
        event.persist();
        this.setState(() => ({
            comment: event.target.value
        }));
    }

   /* postByKeyPress = (event) => {
        event.preventDefault();
        if (event.keyCode === 'Enter') {
            this.props.createPost({
                comment,
                id:      getUniqueID(),
                created: moment().unix()
            });
            this.setState({ comment: '' });
        }
    } */

    handleSubmit = (event) => {
        event.preventDefault();
        const { comment } = this.state;

        if (!comment) {
            return;
        }

        this.props.createPost({
            comment,
            id:      getUniqueID(),
            created: moment().unix()
        });
        this.setState({ comment: '' });
    };

    render () {
        const { avatar } = this.context;
        const { createPost } = this.props;
        const { comment } = this.state;

        return (
            <section className = { Styles.composer }>
                <img className = { Styles.img } src = { avatar } />
                <form onSubmit = { this.handleSubmit }>
                    <textarea
                        className = { Styles.text }
                        placeholder = { `What's on your mind, ${this.context.firstName}?` }
                        value = { comment }
                        onChange = { this.handleTextAreaChange }
                        onKeyPress = { this.postByKeyPress }
                    />
                    <input className = { Styles.btn } type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}
