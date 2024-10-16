import { Shape } from './Shape';

export class Game {
  static shapes: Shape[] = [];

  public static arenaWidth = 15;
  public static arenaHeight = 27;
  public static scale = 45;
  public static dropInterval = 350;
  public static dropKeyInterval = 44;
  public static lockDelay = 450;
  public static horizontalMovementInterval = 76;

  public static font = {
    FAMILY: 'Arial, Helvetica, sans-serif',
    COLOR: 'white',
  };

  public static render(delta: number, canvas: HTMLCanvasElement) {
      var context = canvas.getContext("2d");

      window.requestAnimationFrame((d) => this.render(d, canvas));
  }
}
