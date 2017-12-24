//Core
import React, { Component } from 'react';

//Insrtuments
import Styles from './styles';
import moment from 'moment';
import { string } from 'prop-types';

export default class Post extends Component {
    static propTypes = {
        avatar: string.isRequired
    };
    render () {
       // const avatar = this.props.avatar;
        const { avatar } = this.props;
        return (
            <section className = { Styles.post }>
                <span className = {Styles.cross} />
                <img className = { Styles.img } src = { avatar } />
                <a>Olena Dolgova</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Comment</p>

            </section>
        )
    }
}
