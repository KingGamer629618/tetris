import { Shape, ShapeWeights } from '../Shape';

export class SmallT extends Shape {
  shape = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#FF0D72';
}
