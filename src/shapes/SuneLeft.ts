import { Shape, ShapeWeights } from '../Shape';

export class SuneLeft implements Shape {
  shape = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#3877FF';
}
