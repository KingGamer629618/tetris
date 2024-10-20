import { Shape, ShapeWeights } from '../Shape';

export class SuneLeft extends Shape {
  shape = [
    [1, 1, 0],
    [0, 1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = '#3877FF';
}
