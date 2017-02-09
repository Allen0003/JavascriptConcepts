System.register(['./engine', './doors'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var engine_1, doors_1;
    var Car;
    return {
        setters:[
            function (engine_1_1) {
                engine_1 = engine_1_1;
            },
            function (doors_1_1) {
                doors_1 = doors_1_1;
            }],
        execute: function() {
            Car = (function () {
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
                function Car(engine, doors) {
                    this.engine = engine;
                    this.doors = doors;
                    this.engine = new engine_1.Engine();
                    this.doors = new doors_1.Doors();
                }
                Car.prototype.startEngine = function () {
                    this.engine.start();
                };
                return Car;
            }());
            exports_1("Car", Car);
        }
    }
});
//# sourceMappingURL=car.js.map