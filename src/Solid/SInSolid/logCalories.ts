let instance: LogCalories;
class LogCalories {
  constructor() {}

  getInstance() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  public logCalories() {
    console.log("Max Calories exceeded");
  }
}

const logCalories = Object.freeze(new LogCalories().getInstance());

export default logCalories;
