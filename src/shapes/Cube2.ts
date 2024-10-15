import { Shape, ShapeWeights } from '../Shape';

export class Cube2 implements Shape {
  shape = [
    [1, 1],
    [1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = '#0DC2FF';
}
