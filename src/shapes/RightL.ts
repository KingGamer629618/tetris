import { Shape, ShapeWeights } from '../Shape';

export class RightL extends Shape {
  shape = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = '#F538FF';
}
