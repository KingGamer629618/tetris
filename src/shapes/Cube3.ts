import { Shape, ShapeWeights } from '../Shape';

export class Cube3 extends Shape {
  shape = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = '#d0e667';
}
