import { Shape } from './Shape';

export class RenderUtils {
  public static renderShape(
    context: CanvasRenderingContext2D,
    shape: Shape,
    offsetX: number,
    offsetY: number,
    cellSize: number
  ) {
    for (var row = 0; row < shape.shape.length; row++) {
      for (var col = 0; col < shape.shape[0].length; col++) {
        if (shape.shape[row][col] > 0) {
          var cellValue = shape.shape[row][col];

          if (cellValue != 0) {
            context.fillStyle = shape.color;
            context.fillRect(
              (offsetX + col) * cellSize,
              (offsetY + row) * cellSize,
              cellSize,
              cellSize
            );
          }
        }
      }
    }
  }
}
