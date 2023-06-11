import logCalories from "./logCalories";

export class CalorieTracker {
  private maxCalories;
  private currentCalories;

  constructor(calories: number) {
    this.maxCalories = calories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount: number) {
    this.currentCalories += caloriesCount;
    if (this.currentCalories > this.maxCalories) {
      // this.logCalories();
      logCalories.logCalories();
    }
  }
  /**
   * this method should not be part of this class, because this class will
   * have two reasons to change, 1. calories tracking logic  2. logging logic
   * logCalories should be in it's own class/module
   */
  // public logCalories() {
  //   console.log("Max Calories exceeded");
  // }
}
