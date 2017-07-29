import React from 'react';

export default class Hello extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img className="logo" width='200px' src={'./img/logo.png'} />
        );
    }
}
