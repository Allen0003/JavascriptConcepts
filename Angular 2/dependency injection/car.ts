import {Engine} from './engine';
import {Doors} from './doors';


export class Car {

    //type 1 :

    // engine: Engine;
    // doors: Doors;
    //
    // // put the parametes in the constructor is Dependency injection
    // // it has more flexibility, testability, and maintainability
    // constructor(engine, doors) {
    //     this.engine = new Engine();
    //     this.doors = new Doors();
    // }

    // type 2

    constructor(private engine: Engine, private doors: Doors) {
        this.engine = new Engine();
        this.doors = new Doors();
    }

    startEngine() {
        this.engine.start();
    }

}
