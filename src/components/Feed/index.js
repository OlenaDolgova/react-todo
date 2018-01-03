import React, { Component } from 'react';

import Styles from './styles.scss';
import Relax from '../Relax/index';
import ListToDo from '../ListToDo/index';

export default class Feed extends Component {

    render () {

        return (
            <section className = { Styles.feed } >
                <Relax>
                </Relax>
                <ListToDo
                />
            </section>
        );
    }
}
