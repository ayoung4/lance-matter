import { ClientEngine } from 'lance-gg';
import * as _ from 'lodash';

import { MyRenderer } from 'Client/MyRenderer';
import { Controller } from 'Client/Controller';
import { Player } from 'Common/Player';

export class MyClientEngine extends ClientEngine {

    renderer: MyRenderer;

    private controller: Controller;

    constructor(gameEngine, options) {

        super(gameEngine, options, MyRenderer);
        
        this.serializer.registerClass(Player);
        
        this.gameEngine.on('client__preStep', this.preStep.bind(this));
        
        this.controller = new Controller();

    }

    connect() {
        return super.connect().then(() => {
            _.delay(() => {
                this.renderer.setReady();
                const keys = _.keys(this.gameEngine.world.objects);
                console.log(this.gameEngine.world.objects[keys[0]]);
            }, 500);
        });
    }

    preStep() {

        if (this.controller.keyStates.up.isDown) {
            this.sendInput('up', { movement: true });
        }

        if (this.controller.keyStates.down.isDown) {
            this.sendInput('down', { movement: true });
        }

        if (this.controller.keyStates.left.isDown) {
            this.sendInput('left', { movement: true });
        }

        if (this.controller.keyStates.right.isDown) {
            this.sendInput('right', { movement: true });
        }

        if (this.controller.keyStates.space.isDown) {
            this.sendInput('space', { movement: true });
        }
    }

}