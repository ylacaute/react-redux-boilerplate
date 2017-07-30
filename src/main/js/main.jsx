
// REACT
import React from 'react'
import { render } from 'react-dom'

// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// MAIN APP
import Application from './Application.jsx'

// REDUCERS
import logoClickCount from 'redux/reducer/Logo';
import tickCount from 'redux/reducer/Clock';
import jenkinsMonitoring from 'redux/reducer/JenkinsMonitoring';

// MIDDLEWARES
import LoggerMiddleware from 'redux/middleware/Logger';
import CrashReporterMiddleware from 'redux/middleware/CrashReporter';
import ClockMiddleware from 'redux/middleware/Clock';
import JenkinsMonitoringMiddleware from 'redux/middleware/JenkinsMonitoring';

// SERVICES
import { ClockService } from 'service/clock/ClockService.js';
import { JenkinsMonitoringService } from 'service/jenkins/JenkinsMonitoringService.js';

// Service instances
let clockService = new ClockService();
let jenkinsMonitoringService = new JenkinsMonitoringService();

// Redux Store instance
const store = createStore(
  combineReducers({
    logoClickCount,
    tickCount,
    jenkinsMonitoring
  }),
  applyMiddleware(
    LoggerMiddleware,
    CrashReporterMiddleware,
    ClockMiddleware(clockService),
    JenkinsMonitoringMiddleware(jenkinsMonitoringService)
  )
);

jenkinsMonitoringService.setStore(store);

clockService.setStore(store);
clockService.start();

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('react-app')
);
