import { GuiGraphics } from "./GuiGraphics";
import { Shape } from "../Shape";

export enum ShapeRotation {
    NORMAL,
    CW_90,
    CW_180,
    CCW_90
}

export class ShapeRenderer {
    public static renderShape(graphics: GuiGraphics, shape: Shape, x: number, y: number, rotation = ShapeRotation.NORMAL) {
        var shapeDefinition;
        switch (rotation) {
            case ShapeRotation.NORMAL: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }
        
        for (var row = 0; row < shapeDefinition.length; row++) {
            for (var col = 0; col < shapeDefinition[0].length; col++) {
                if (shapeDefinition[row][col] > 0) {
                    var cellValue = shapeDefinition[row][col];

                    if (cellValue != 0) {
                        graphics.drawRect(
                            shape.color,
                            (x + col),
                            (y + row),
                            1,
                            1
                        );
                    }
                }
            }
        }
    }
}