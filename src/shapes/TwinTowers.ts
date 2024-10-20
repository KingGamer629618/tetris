import { Shape, ShapeWeights } from '../Shape';

export class TwinTowers extends Shape {
  shape = [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ];

  weight = ShapeWeights.SUPER_RARE;

  color = '#e3cf5d';
}
