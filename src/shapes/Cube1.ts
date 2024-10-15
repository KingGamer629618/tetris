import { Shape, ShapeWeights } from '../Shape';

export class Cube1 implements Shape {
  shape: number[][] = [[1]];
  weight: number = ShapeWeights.VERY_COMMON;
  color: string = '#55e096';
}
