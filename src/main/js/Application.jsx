import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import { Logo, LogoActionCreators }  from 'component/logo/Logo.jsx';
import UUID from 'utils/UUID';
import Style from 'index.scss';

const env = IS_DEV ? "DEV" : "PROD";
const hash = "" + __webpack_hash__;

class Application extends React.Component {

  static propTypes = {
    tickCount: PropTypes.number.isRequired,
    logoClickCount: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div><strong>Sample UUID: </strong>{UUID.random()}</div>
        <div><strong>Build env: </strong>{env}</div>
        <div><strong>Build hash: </strong>{hash}</div>
        <div><strong>Tick count: </strong>{this.props.tickCount}</div>
        <div><strong>Logo click count: </strong>{this.props.logoClickCount} (stop timer at 20 clicks)</div>
        <Logo onLogoClicked={this.props.actions.onLogoClicked}/>
      </div>
    );
  };

}

const mapStateToProps = state => {
  return {
    logoClickCount: state.logoClickCount,
    tickCount: state.tickCount
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LogoActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
