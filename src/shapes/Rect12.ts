import { Shape, ShapeWeights } from '../Shape';

export class Rect12 extends Shape {
  shape = [
    [1, 1],
    [0, 0],
  ];

  weight = ShapeWeights.VERY_COMMON;

  color = '#701170';
}
