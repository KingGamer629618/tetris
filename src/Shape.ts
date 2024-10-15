export interface Shape {
  shape: number[][];

  weight: number;

  color: string;
}

export class ShapeWeights {
  public static SUPER_RARE = 1;
  public static RARE = 5;
  public static UNCOMMON = 8;
  public static COMMON = 10;
  public static VERY_COMMON = 15;
}

export class ShapeRegistry {
  private static registered: Shape[] = [];
  private static weighted: Shape[] = [];

  public static register(shape: Shape) {
    this.registered.push(shape);
  }

  public static closeRegistry() {
    this.registered.forEach((shape) => {
      for (let i = 0; i < shape.weight; i++) {
        this.weighted.push(shape);
      }
    });
  }

  public static selectRandom(): Shape {
    const i = Math.floor(Math.random() * this.weighted.length);

    return this.weighted[i];
  }
}
