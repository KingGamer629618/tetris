import { Shape, ShapeWeights } from '../Shape';

export class TwinTowersThick implements Shape {
  shape = [
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
  ];

  weight = ShapeWeights.SUPER_RARE;

  color = '#297f87';
}
