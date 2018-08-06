import { serialize } from 'lance-gg';
import * as _ from 'lodash';
import * as Matter from 'matter-js';

interface IPlayerScheme extends serialize.IINetScheme {
    body: any;
}

export class Player extends serialize.DynamicObject<IPlayerScheme> {

    class: typeof Player;
    body: Matter.Body;

    constructor(id: string, body: Matter.Body) {
        super(id);
        this.class = Player;
        this.body = body;
    }

    update() {
        this.position.x = this.body.position.x;
        this.position.y = this.body.position.y;
    }

}
