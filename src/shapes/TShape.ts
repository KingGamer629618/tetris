import { Shape, ShapeWeights } from '../Shape';

export class TShape extends Shape {
  shape = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = '#B603FC';
}
