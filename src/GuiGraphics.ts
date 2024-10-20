import { Game } from './Game';
import { Shape } from './Shape';

export class GuiGraphics {
    public static FONT = {
        FAMILY: 'Arial, Helvetica, sans-serif',
        COLOR: 'white',
    };
    
    private context: CanvasRenderingContext2D;
    private delta: number;
    
    public constructor(context: CanvasRenderingContext2D, delta: number) {
        this.context = context;
        this.delta = delta;
    }

    public getDelta() {
        return this.delta;
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

    public drawLine(color: string, x: number, y: number, z: number, sized = true) {

    }
}
