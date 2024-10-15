import { Shape, ShapeWeights } from '../Shape';

export class Line7 implements Shape {
  shape = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = '#9de055';
}
