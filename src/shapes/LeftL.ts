import { Shape, ShapeWeights } from '../Shape';

export class LeftL implements Shape {
  shape = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#FF8E0D';
}
