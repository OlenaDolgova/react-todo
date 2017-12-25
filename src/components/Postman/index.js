//Core
import React from 'react';
import { string } from 'prop-types';

//instruments
import Styles from './styles.scss';

const Postman = ({ avatar, firstName }) => (
    <section className = { Styles.postman }>
        <img src = { avatar } />
        <span>Welcome online, { firstName }!</span>
    </section>
);

Postman.contextTypes = {
    avatar:    string.isRequired,
    firstName: string.isRequired
};

export default Postman;
