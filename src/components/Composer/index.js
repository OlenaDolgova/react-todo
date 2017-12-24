import React, { Component } from 'react';

import Styles from './styles.scss';
import { string } from 'prop-types';

export default class Composer extends Component {
    static propTypes = {
        avatar: string.isRequired
    };
    render () {
        const { avatar } = this.props;
        return (
            <section className = { Styles.composer }>
                <img className = { Styles.img } src = { avatar } />
                <form>
                    <textarea className = { Styles.text } placeholder = {`What's on your mind, ${ this.props.firstName }?`}/>
                    <input className = { Styles.btn } type = 'submit' value = 'Post'/>
                </form>
            </section>
        );
    }
}