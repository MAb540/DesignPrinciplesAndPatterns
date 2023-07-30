import { executeProxy } from "./DesignPatterns/ProxyPattern";
import { DependencyInversionExample } from "./Solid/DInSolid/DepedencyInversionExample";
import { DependencyInversion } from "./Solid/DInSolid/DependencyInversionPrinciple";
import { Segregation } from "./Solid/IinSolid/InterfaceSegregationPrinciple";
import { LisKov } from "./Solid/LinSolid/liskovSubstitution";
import {
  printQuiz,
  printQuizes,
  questions,
  questionsTypes,
} from "./Solid/OInSolid/questions";
import { computeAreasOfShapes, shapes } from "./Solid/OInSolid/triangle";
import { CalorieTracker } from "./Solid/SInSolid/CalorieTracker";
import { caslCaller } from "./casl/casltry";

// import server from "./RawTcp/tcpServer";

console.log("ts node has been printeed\n");

/**
 * S example in solid
 */
// const caloriesTracker = new CalorieTracker(2);
// caloriesTracker.trackCalories(1);
// caloriesTracker.trackCalories(1);
// caloriesTracker.trackCalories(1);

/**
 * O example in solid
 */
// printQuiz(questions);
// printQuizes(questionsTypes);

// const computedArea = computeAreasOfShapes(shapes);
// console.log("computedArea: ", computedArea);

/**
 * L example in solid
 */

// LisKov();

/**
 * I example in solid
 */
// Segregation();

/**
 * D example in solid
 */
// DependencyInversion();
// DependencyInversionExample();

/**
 * proxy pattern
 */
executeProxy();
