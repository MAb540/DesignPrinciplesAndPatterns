// class Triangle {
//   base: number;
//   height: number;
//   constructor(base: number, height: number) {
//     this.base = base;
//     this.height = height;
//   }
// }

// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }

// class Circle {
//   radius: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }
// }

// type shapeTypes = Array<Triangle | Rectangle | Circle>;

/**
 * this function violates O in solid, because when
 * we will add a new shape class, we will have to modify
 * this function to calculate area of that class as well,
 * we can prevent this by assigning the responsibility of
 * calculating area to the classes themselves,
 * we can make a interfce ShapeAreaInterface that each shape class will need
 * to implement.
 */

// export function computeAreasOfShapes(shapes: shapeTypes) {
//   return shapes.reduce((totalArea, shape) => {
//     if (shape instanceof Rectangle) {
//       return totalArea + shape.width * shape.height;
//     }
//     if (shape instanceof Triangle) {
//       return totalArea + shape.base * shape.height * 0.5;
//     }
//     if (shape instanceof Circle) {
//       return totalArea + shape.radius * Math.PI;
//     } else {
//       return totalArea;
//     }
//   }, 0);
// }

type shapeTypes = Array<Triangle | Rectangle | Circle>;

interface ShapeAreaInterface {
  getArea(): number;
}

class Triangle implements ShapeAreaInterface {
  base: number;
  height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  getArea() {
    return this.base * this.height * 0.5;
  }
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height * 0.5;
  }
}

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * Math.PI;
  }
}

export function computeAreasOfShapes(shapes: shapeTypes) {
  return shapes.reduce((totalArea, shape) => {
    return totalArea + shape.getArea();
  }, 0);
}

export const shapes = [
  new Rectangle(10, 10),
  new Triangle(20, 10),
  new Circle(10),
];
