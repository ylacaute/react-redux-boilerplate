
export const ActionType = {
  Tick: 'TICK'
};

export const ActionCreator = {
  onTick : (tickCount) => {
    return {
      type: ActionType.Tick,
      tickCount: tickCount
    }
  }
};

const DEFAULT_PROPS = {
  milliseconds: 1000,
  tickCount: 0,
  onTick: () => {}
};

export class ClockService {

  constructor(props = DEFAULT_PROPS) {
    this.props = Object.assign({}, DEFAULT_PROPS, props);
  };

  setStore(store) {
    this.store = store;
  }

  onLogoClicked(clickCount) {
    if (clickCount === 10) {
      this.stop();
    }
  };

  start() {
    this.timer = setInterval(this.tick.bind(this), this.props.milliseconds);
  };

  tick() {
    this.store.dispatch(ActionCreator.onTick(++this.props.tickCount));
  };

  stop() {
    clearInterval(this.timer);
  };

}




