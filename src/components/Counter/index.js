//Core
import React from 'react';
import { number } from 'prop-types';

//Instruments
import Styles from './styles';

const Counter = () => (
    <section className = { Styles.counter }>Post count: 9
        <img className = { Styles.img } />
    </section>
);

// Counter.propTypes = {
//     count: number.isRequired
// };
//
// Counter:defaultProps = {
//     count: 0
// };

export default Counter;