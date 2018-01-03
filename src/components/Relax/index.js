import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Styles from './styles.scss';

export default class Relax extends Component {

    state = {
        show: true
    };

    componentDidMount () {
        setInterval(() => {
            this.setState(({ show }) => ({
                show: !show
            }));
        }, 5000);
    }

    render () {
        const { show } = this.state;

        return (
            <section className = { Styles.relax }>
                <CSSTransition
                    appear
                    classNames = { {
                        appear:       Styles.initialAppearStart,
                        appearActive: Styles.initialAppearEnd,
                        enter:        Styles.inStart,
                        enterActive:  Styles.inEnd,
                        exit:         Styles.outStart,
                        exitActive:   Styles.outEnd
                    } }
                    in = { show }
                    timeout = { 5000 }>
                    <div className = { Styles.ball }>
                    </div>
                </CSSTransition>
            </section>
        );
    }
}
