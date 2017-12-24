//Core
import React from 'react';
import { string } from 'prop-types';

//instruments
import Styles from './styles';

const Postman = ( { avatar, firstName } ) => (
    <section className = { Styles.postman }>
        <img src = { avatar } />
        <span>Welcome online, { firstName }!</span>
    </section>
);

Postman.propTypes = {
    avatar:  string.isRequired,
    firstName: string.isRequired,
};

export default Postman;
