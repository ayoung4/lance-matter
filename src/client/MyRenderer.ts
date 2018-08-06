import { render } from 'lance-gg';
import * as p5 from 'p5';

export class MyRenderer extends render.Renderer {

    renderer: p5Sketch;
    ready: boolean

    sprites: {
        [key: string]: string;
    };

    constructor(gameEngine, clientEngine) {
        super(gameEngine, clientEngine);
        this.ready = false;
    }

    setReady() {
        this.renderer = new p5((sketch) => {
            this.renderer = sketch;
            sketch.setup = () => {
                const { width, height } = this.gameEngine.worldSettings;
                sketch.createCanvas(width, height);
            };
        });
        this.ready = true;
    }

    draw() {
        super.draw();
        if (this.ready) {
            this.renderer.background(200, 200, 255);
            this.gameEngine.world.forEachObject((id, obj: any) => {
                // console.log(obj);
                
                // this.renderer.ellipse(obj.body.position.x, obj.body.position.y, 50, 50);
            });
        }
    }

}