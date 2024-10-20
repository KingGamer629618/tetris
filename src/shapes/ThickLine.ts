import { Shape, ShapeWeights } from '../Shape';

export class ThickLine extends Shape {
  shape = [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ];

  weight = ShapeWeights.RARE;

  color = '#e66787';
}
