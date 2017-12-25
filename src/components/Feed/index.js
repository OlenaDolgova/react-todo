import React, { Component } from 'react';
import Composer from '../Composer/index';
import Spinner from '../Spinner/index';

import Styles from './styles.scss';
import Post from '../Post/index';
import Postman from '../Postman/index';
import Counter from '../Counter/index';

import { string } from 'prop-types';

export default class Feed extends Component {
    static contextTypes = {
        avatar:    string.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired
    };

    constructor () {
        super();

        this.deletePost = this._deletePost.bind(this);
    }

    state = {
        posts: []
    }

    createPost = (post) => {
        this.setState(({ posts }) => ({ posts: [post, ...posts]}));
    };

    _deletePost (postId) {
        this.setState(({ posts }) => ({
            posts: posts.filter(({ id }) => id !==postId)
        }));
    }

    render () {
        const { avatar, firstName } = this.context;
        const { posts } = this.state;

        const postList = posts.map(({ comment, id, created }) => (
            <Post
                comment = { comment }
                created = { created }
                deletePost = { this.deletePost }
                id = { id }
                key = { id }
            />
        ));

        return (
            <section className = { Styles.feed } >
                <Composer
                    avatar = { avatar }
                    createPost = { this.createPost }
                    firstName = { firstName }
                />
                <Counter counter = { posts.length } />
                {postList}
                <Spinner />
                <Postman
                    avatar = { avatar }
                    firstName = { firstName }
                />
            </section>
        );
    }
}
