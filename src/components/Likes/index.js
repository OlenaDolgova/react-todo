//Core
import React, { Component } from 'react';

//Insrtuments
import Styles from './styles.scss';
import { string } from 'prop-types';

export default class Likes extends Component {
    static contextTypes = {
        lastName:  string.isRequired,
        firstName: string.isRequired
    };

    prinName = (context) => {
        const { lastName, firstName } = context;

        return (<span className = { Styles.likerName }>
            { lastName } { firstName }
        </span>);
    };

    render () {
        // const { firstName, lastName } = this.context;


        return (
            <section className = { Styles.likes }>
                <span className = { Styles.fingerLiks } onClick = { this.prinName } > Like </span>
                <div>
                    <span
                    printName = { this.prinName }
                    />
                </div>
            </section>
        );
    }
}
