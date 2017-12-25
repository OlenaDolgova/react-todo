//Core
import React from 'react';
import { number } from 'prop-types';

//Instruments
import Styles from './styles.scss';

const Counter = (props) => {
    const { counter } = props;

    return (<section className = { Styles.counter }>
        Post count: {counter}
    </section>);
};

Counter.propTypes = {
    count: number.isRequired
};

Counter.defaultProps = {
    count: 0
};

export default Counter;
