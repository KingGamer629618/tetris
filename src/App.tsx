import RestartImage from './assets/restart.png';
import PauseImage from './assets/pause.png';
import { ShapeRegistry } from './Shape';
import { Cube1 } from './shapes/Cube1';
import { ShapeOfDeath } from './shapes/ShapeOfDeath';
import { SmallT } from './shapes/SmallT';
import { SuneLeft } from './shapes/SuneLeft';
import { SuneRight } from './shapes/SuneRight';
import { ThickLine } from './shapes/ThickLine';
import { TShape } from './shapes/TShape';
import { TwinTowers } from './shapes/TwinTowers';
import { TwinTowersThick } from './shapes/TwinTowersThick';
import { RightL } from './shapes/RightL';
import { Rect32 } from './shapes/Rect32';
import { Rect12 } from './shapes/Rect12';
import { Line7 } from './shapes/Line7';
import { Line5 } from './shapes/Line5';
import { Line4 } from './shapes/Line4';
import { Line10 } from './shapes/Line10';
import { LeftL } from './shapes/LeftL';
import { Cube3 } from './shapes/Cube3';
import { Cube2 } from './shapes/Cube2';
import { KeyboardHandler } from './KeyboardHandler';
import { Game } from './Game';

function App() {
  ShapeRegistry.register(new Cube1());
  ShapeRegistry.register(new Cube2());
  ShapeRegistry.register(new Cube3());
  ShapeRegistry.register(new LeftL());
  ShapeRegistry.register(new Line10());
  ShapeRegistry.register(new Line4());
  ShapeRegistry.register(new Line5());
  ShapeRegistry.register(new Line7());
  ShapeRegistry.register(new Rect12());
  ShapeRegistry.register(new Rect32());
  ShapeRegistry.register(new RightL());
  ShapeRegistry.register(new ShapeOfDeath());
  ShapeRegistry.register(new SmallT());
  ShapeRegistry.register(new SuneLeft());
  ShapeRegistry.register(new SuneRight());
  ShapeRegistry.register(new ThickLine());
  ShapeRegistry.register(new TShape());
  ShapeRegistry.register(new TwinTowers());
  ShapeRegistry.register(new TwinTowersThick());

  ShapeRegistry.closeRegistry();

  KeyboardHandler.init();

  window.requestAnimationFrame((timestamp) => {})

  return (
    <main>
      <canvas id="canvas" width="675" height="1215"></canvas>

      <button id="restart">
        <img src={RestartImage} alt="Restart" />
      </button>
      <button id="pause">
        <img src={PauseImage} alt="pause" />
      </button>

      <div className="controls" hidden>
        <div className="row">
          <kbd>&uparrow;</kbd>
          <div className="spacer"></div>
          <kbd>W</kbd>
        </div>

        <p>&circlearrowright; Rotate</p>

        <div className="row">
          <kbd>&leftarrow;</kbd>
          <kbd>&rightarrow;</kbd>
          <div className="spacer"></div>
          <kbd>A</kbd>
          <kbd>D</kbd>
        </div>

        <p>&leftarrow; Left/Right &rightarrow;</p>

        <div className="row">
          <kbd>&downarrow;</kbd>
          <div className="spacer"></div>
          <kbd>S</kbd>
        </div>

        <p>&downarrow; Drop down &downarrow;</p>

        <kbd className="space">Space</kbd>

        <p>&dArr; Hard drop &dArr;</p>

        <kbd>Esc</kbd>

        <p>Close popup &times;</p>
      </div>
    </main>
  );
}

export default App;
