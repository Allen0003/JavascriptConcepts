import {bootstrap} from 'angular2/platform/browser';//importing bootstrap function
import {Engine} from './engine';
import {Doors} from './doors';
import {Car} from "./car";    //importing component function

function main() {
    let engine = new Engine();
    let doors = new Doors();
    let car = new Car(engine, doors);

    car.startEngine();
}
main();
