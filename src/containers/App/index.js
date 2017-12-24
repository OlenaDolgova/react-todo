
import React, { Component } from 'react';
import Feed from '../../components/Feed';
import avatar from '../../theme/assets/homer.png';

const options = {
    avatar,
    firstName: 'Olena',
    lastName:  'Dolgova'
};

export default class App extends Component {


    render () {
        return (
            <Feed { ...options } />
        );
    }
}