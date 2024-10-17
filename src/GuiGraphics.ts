import { Game } from './Game';
import { Shape } from './Shape';

export class GuiGraphics {
    public static FONT = {
        FAMILY: 'Arial, Helvetica, sans-serif',
        COLOR: 'white',
    };
    
    private context: CanvasRenderingContext2D;
    
    public constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    public renderShape(
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
                        this.context.fillStyle = shape.color;
                        this.context.fillRect(
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

    public resizePix(p: number): number {
        return p * Game.scale;
    }

    public drawRect(color: string, x: number, y: number, width: number, height: number, sized = true) {
        this.context.fillStyle = color;

        var rx = sized? this.resizePix(x) : x;
        var ry = sized? this.resizePix(y) : y;
        var rw = sized? this.resizePix(width) : width;
        var rh = sized? this.resizePix(height) : height;
        this.context.fillRect(rx, ry, rw, rh);
    }

    public drawString(text: string, color: string, x: number, y: number, sized = true) {
        var rx = sized? this.resizePix(x) : x;
        var ry = sized? this.resizePix(y) : y;
        
        this.context.font = GuiGraphics.FONT.FAMILY;
        this.context.fillStyle = color;
        this.context.fillText(text, rx, ry);
    }
}
