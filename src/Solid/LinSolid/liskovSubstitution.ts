class Rectangle {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  private sides: number;

  constructor(width: number, height: number, sides: number) {
    super(width, height);
    this.sides = sides;
  }

  setHeight(height: number) {
    this.height = height;
    this.width = height;
  }

  getSides() {
    return this.sides;
  }
}

export function LisKov() {
  const r1 = new Rectangle(2, 3);
  const r2 = new Rectangle(4, 3);
  console.log(r1.getArea());
  console.log(r2.getArea());

  r1.setWidth(r1.getWidth() + 1);
  r2.setWidth(r2.getWidth() + 1);

  console.log("---------");

  console.log(r1.getArea());
  console.log(r2.getArea());

  //   const s = new Square(2, 3, 3);
  //   console.log(s.getArea());
}
