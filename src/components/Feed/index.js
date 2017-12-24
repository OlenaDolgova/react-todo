import React, { Component } from 'react';
import Composer from '../Composer/index';
import Spinner from '../Spinner/index';

import Styles from './styles.scss';
import Post from "../Post/index";
import Postman from "../Postman/index";
import Counter from '../Counter/index';
import { string } from 'prop-types';


export default class Feed extends Component {
    static propTypes = {
    avatar:  string.isRequired,
    firstName: string.isRequired,
    lastName: string.isRequired,
}
    render () {
        const { avatar, firstName, lastName} = this.props;
        return (
            <section className = { Styles.feed } >
                <Composer
                    firstName = { firstName }
                    avatar = { avatar }
                />
                <Counter />
                <Post
                    avatar = { avatar }
                />
                <Spinner />
                <Postman
                    avatar = { avatar }
                    firstName = { firstName }
                />
            </section>
        );
    }
}
