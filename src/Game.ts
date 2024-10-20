import { Color } from "./renderer/Color";
import { GuiGraphics } from "./renderer/GuiGraphics";
import { ShapeRenderer, ShapeRotation } from "./renderer/ShapeRenderer";
import { SuneLeft } from "./shapes/SuneLeft";
import { SuneRight } from "./shapes/SuneRight";
import { TShape } from "./shapes/TShape";

export class Game {
    public static arenaWidth = 15;
    public static arenaHeight = 27;
    public static screenWidth = 675;
    public static screenHeight = 1215;

    public static scale = 45;
    public static dropInterval = 350;
    public static dropKeyInterval = 44;
    public static lockDelay = 450;
    public static horizontalMovementInterval = 76;

    public static async render(delta: number, canvas: HTMLCanvasElement) {
        var graphics = new GuiGraphics(canvas.getContext("2d") as CanvasRenderingContext2D, delta);

        graphics.drawRect(Color.hex(0x00), 0, 0, this.screenWidth, this.screenHeight, false);

        ShapeRenderer.renderShape(graphics, new TShape(), 5, 15, ShapeRotation.CW_180);
        ShapeRenderer.renderShape(graphics, new SuneLeft(), 2, 4, ShapeRotation.CCW_90);
        ShapeRenderer.renderShape(graphics, new SuneRight(), 5, 4, ShapeRotation.NORMAL);

        window.requestAnimationFrame((d) => this.render(d, canvas));
    }
}
