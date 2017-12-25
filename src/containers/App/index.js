
import React, { Component } from 'react';
import Feed from '../../components/Feed';
import avatar from '../../theme/assets/homer.png';
import { string } from 'prop-types';

const options = {
    firstName: 'Olena',
    lastName:  'Dolgova',
    avatar
};

export default class App extends Component {
    static childContextTypes = {
        avatar:    string.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired
    }

    static getChildContext (){
        return options;
    }

    render () {
        return (
            <Feed />
        );
    }
}
