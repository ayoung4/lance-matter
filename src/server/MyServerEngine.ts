import { ServerEngine } from 'lance-gg';
import * as Matter from 'matter-js';
import { MyGameEngine } from 'Common/MyGameEngine';
import { Player } from 'Common/Player';

export class MyServerEngine extends ServerEngine {

    gameEngine: MyGameEngine;

    constructor(io, gameEngine, inputOptions) {
        super(io, gameEngine, inputOptions);
        this.serializer.registerClass(Player);
    }

    start() {
        super.start();
    }
    
    onPlayerConnected(socket) {
        super.onPlayerConnected(socket);
        this.gameEngine.addPlayer(socket.playerId);
    }

    onPlayerDisconnected(socketId, playerId) {
        super.onPlayerDisconnected(socketId, playerId);
        delete this.gameEngine.world.objects[playerId];
    }

}
