import React from 'react';
import Logo from 'component/Logo.jsx';
import Style from '../../sass/index.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const env = IS_DEV ? "DEV" : "PROD";
    const hash = "" + __webpack_hash__;
    return (
      <div>
        <div><strong>Build env: </strong>{env}</div>
        <div><strong>Build hash: </strong>{hash}</div>
        <Logo/>
      </div>
    );
  }

}

