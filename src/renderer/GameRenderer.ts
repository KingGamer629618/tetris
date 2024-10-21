import { Game } from "../Game";
import { SuneLeft } from "../shapes/SuneLeft";
import { SuneRight } from "../shapes/SuneRight";
import { TShape } from "../shapes/TShape";
import { Color } from "./Color";
import { GuiGraphics } from "./GuiGraphics";
import { ShapeRenderer, ShapeRotation } from "./ShapeRenderer";

export class GameRenderer {
    public static deathLineColor = Color.RED;
    public static deathLineSize = 3 / Game.scale;

    public static render(graphics: GuiGraphics) {
        graphics.drawRect(Color.BLACK, 0, 0, Game.screenWidth, Game.screenHeight, false);
        
        this.renderDeathLine(graphics);

        ShapeRenderer.renderShape(graphics, new TShape(), 5, 15, ShapeRotation.CW_180);
        ShapeRenderer.renderShape(graphics, new SuneLeft(), 2, 4, ShapeRotation.CCW_90);
        ShapeRenderer.renderShape(graphics, new SuneRight(), 5, 4, ShapeRotation.NORMAL);

    }

    static renderDeathLine(graphics: GuiGraphics) {
        var translatedY = Game.arenaHeight - Game.deathHeight;

        graphics.drawRect(this.deathLineColor, 0, translatedY, Game.arenaWidth, this.deathLineSize);
    }
}