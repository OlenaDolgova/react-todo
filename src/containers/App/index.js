
import React, { Component } from 'react';
import Feed from '../../components/Feed';
import image from '../../theme/assets/lisa.png';
import { string } from 'prop-types';


const options = {
    image
};

export default class App extends Component {

    static childContextTypes = {
        image: string.isRequired
    };

    getChildContext () {
        return options;
    }

    render () {
        return (
            <Feed />
        );
    }
}
