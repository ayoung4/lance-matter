import * as _ from 'lodash';
import {
    Engine as MatterEngine,
    Bodies,
    World,
} from 'matter-js';

import { serialize, GameEngine } from 'lance-gg';
import { Player } from './Player';

export class MyGameEngine extends GameEngine {

    private physics: MatterEngine;

    constructor(options) {
        super(options);
    }

    start() {

        super.start();

        this.worldSettings = {
            width: 600,
            height: 600,
        };

        this.physics = MatterEngine.create();
        MatterEngine.update(this.physics, 1000 / 60);

    }

    step() {
        _.forEach(this.world.objects, (obj) => {
            obj.update();
        });
    }

    addObjectToWorld(obj) {
        World.addBody(this.physics.world, obj.body);
        return super.addObjectToWorld(obj);
    }

    addPlayer(playerId: number) {

        const x = _.random(this.worldSettings.width);
        const y = _.random(this.worldSettings.height);
        const body = Bodies.rectangle(x, y, 50, 50);

        const player = new Player(String(++this.world.idCount), body);
        // player.playerId = playerId;

        this.addObjectToWorld(player);
        console.log(`player added: ${player.toString()}`);

        return player;
    }

    processInput(inputData, playerId) {

        super.processInput(inputData, playerId);

        const player = this.world.getPlayerObject<Player>(playerId);

        if (player) {

            if (inputData.input === 'up') {
                // player.position.y -= 1;
            } else if (inputData.input === 'down') {
                // player.position.y += 1;
            } else if (inputData.input === 'right') {
                // player.position.x += 1;
            } else if (inputData.input === 'left') {
                // player.position.x -= 1;
            }

        }
    }
};

