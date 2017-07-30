
import { LogoActionTypes }  from 'component/logo/Logo.jsx';

const clockMiddleware = clockService => store => next => action => {

  if (action.type === LogoActionTypes.LogoClicked) {
    clockService.onLogoClicked(action.clickCount);
  }

  return next(action);
};

export default clockMiddleware;


