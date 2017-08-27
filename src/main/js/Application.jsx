import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import { Logo, LogoActionCreator }  from 'component/logo/Logo.jsx';
import UUID from 'utils/UUID';

const env = IS_DEV ? "DEV" : "PROD";
const hash = "" + __webpack_hash__;

class Application extends React.Component {

  static propTypes = {
    tickCount: PropTypes.number.isRequired,
    logoClickCount: PropTypes.number.isRequired,
    jenkinsMonitoring: PropTypes.object.isRequired,
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
        <div><strong>Logo click count: </strong>{this.props.logoClickCount} (stop timer at 10 clicks)</div>
        <div><strong>JenkinsMonitoring HTTP response: </strong></div>
        <div>{JSON.stringify(this.props.jenkinsMonitoring)}</div>
        <Logo onLogoClicked={this.props.actions.onLogoClicked}/>
      </div>
    );
  };

}

const mapStateToProps = state => {
  return {
    logoClickCount: state.logoClickCount,
    tickCount: state.tickCount,
    jenkinsMonitoring: state.jenkinsMonitoring
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(LogoActionCreator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application)
