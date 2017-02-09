System.register(['./engine', './doors', "./car"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var engine_1, doors_1, car_1;
    function main() {
        var engine = new engine_1.Engine();
        var doors = new doors_1.Doors();
        var car = new car_1.Car(engine, doors);
        car.startEngine();
    }
    return {
        setters:[
            function (engine_1_1) {
                engine_1 = engine_1_1;
            },
            function (doors_1_1) {
                doors_1 = doors_1_1;
            },
            function (car_1_1) {
                car_1 = car_1_1;
            }],
        execute: function() {
            main();
        }
    }
});
//# sourceMappingURL=main.js.map