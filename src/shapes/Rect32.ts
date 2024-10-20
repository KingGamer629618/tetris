import { Shape, ShapeWeights } from '../Shape';

export class Rect32 extends Shape {
  shape = [
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  weight = ShapeWeights.RARE;

  color = '#e69c67';
}
