import RestClient from 'client/RestClient';

/**
 * path : path of Jenkins URL
 * refresh : time in seconds (make http call every refresh)
 */
const DEFAULT_PROPS = {
  path: '/api/jenkins/monitoring',
  refresh: 2
};

export const ActionType = {
  DataReceived: 'JENKINS_DATA_RECEIVED'
};

export const ActionCreator = {
  jenkinsDataReceived : (data) => {
    return {
      type: ActionType.DataReceived,
      data: data
    }
  }
};

export class JenkinsMonitoringService {

  constructor(props = DEFAULT_PROPS) {
    this.props = Object.assign({}, DEFAULT_PROPS, props);
  };

  setStore(store) {
    this.store = store;
  }

  onTick(tickCount) {
    if (tickCount % this.props.refresh === 0) {
      RestClient.get(this.props.path, (jsonResponse) => {
        this.store.dispatch(ActionCreator.jenkinsDataReceived(jsonResponse));
      }, (exception) => {
        console.log("Error during JenkinsMonitoring HTTP request, details: ", exception);
      });
    }
  };

}


