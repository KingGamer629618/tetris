import { Shape, ShapeWeights } from '../Shape';

export class Line5 extends Shape {
  shape = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#0dffcb';
}
