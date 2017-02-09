System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Engine;
    return {
        setters:[],
        execute: function() {
            Engine = (function () {
                function Engine() {
                }
                Engine.prototype.start = function () {
                    console.log('Qooooooooooooooooooooo');
                };
                return Engine;
            }());
            exports_1("Engine", Engine);
        }
    }
});
//# sourceMappingURL=engine.js.map