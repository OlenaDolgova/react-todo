//Core
import React, { Component } from 'react';

//Insrtuments
import Styles from './styles.scss';
import moment from 'moment';
import { string, number, func } from 'prop-types';
import Likes from '../Likes/index';

export default class Post extends Component {
    static contextTypes = {
        avatar: string.isRequired
    };

    static propTypes = {
        created:    number.isRequired,
        comment:    string.isRequired,
        deletePost: func.isRequired,
        id:         string.isRequired
    };

    deletePost = () => {
        const { deletePost, id } = this.props;

        deletePost(id);
    };

    render () {
        const { avatar } = this.context;
        const { created, comment } = this.props;


        return (
            <section className = { Styles.post }>
                <span className = { Styles.cross } onClick = { this.deletePost } />
                <img className = { Styles.img } src = { avatar } />
                <a>Olena Dolgova</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Likes />


            </section>
        );
    }
}