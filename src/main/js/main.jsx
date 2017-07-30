
// REACT
import React from 'react'
import { render } from 'react-dom'

// REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// MAIN APP
import App from './Application.jsx'

// REDUCERS
import logoClickCount from 'redux/reducer/Logo';
import tickCount from 'redux/reducer/Clock';

// MIDDLEWARES
import LoggerMiddleware from 'redux/middleware/Logger';
import CrashReporterMiddleware from 'redux/middleware/CrashReporter';
import ClockMiddleware from 'redux/middleware/Clock';

// SERVICES
import { ClockService } from 'service/clock/ClockService.js';

// Services instances
let clockService = new ClockService();

const store = createStore(
  combineReducers({
    logoClickCount,
    tickCount
  }),
  applyMiddleware(
    LoggerMiddleware,
    CrashReporterMiddleware,
    ClockMiddleware(clockService)
  )
);

clockService.setStore(store);
clockService.start();

render(
  <Provider store={store}>
    <App tickCount={0}/>
  </Provider>,
  document.getElementById('react-app')
);
