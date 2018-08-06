import { expect } from 'chai';
import { serialize } from 'lance-gg';
import * as Matter from 'matter-js';

import { Player } from './Player';

describe('Player Game Object', function () {

    it('constructs', function () {
        const playerId = String(1);
        const body = Matter.Bodies.rectangle(0, 0, 50, 50);
        const player = new Player(playerId, body);
        expect(player).to.not.be.undefined;
        expect(player.body).to.not.be.undefined;
        expect(player.class).to.not.be.undefined;
        console.log(player.class.netScheme);
        
    });

});
