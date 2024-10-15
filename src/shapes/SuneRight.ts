import { Shape, ShapeWeights } from '../Shape';

export class SuneRight implements Shape {
  shape = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = '#FFE138';
}
