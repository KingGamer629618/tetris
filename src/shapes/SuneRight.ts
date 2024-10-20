import { Shape, ShapeWeights } from '../Shape';

export class SuneRight extends Shape {
  shape = [
    [0, 1, 1],
    [1, 1, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#FFE138';
}
