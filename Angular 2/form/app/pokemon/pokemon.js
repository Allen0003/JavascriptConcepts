System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pokemon;
    return {
        setters:[],
        execute: function() {
            Pokemon = (function () {
                function Pokemon(number, name, type //,
                    ) {
                    this.number = number;
                    this.name = name;
                    this.type = type;
                }
                return Pokemon;
            }());
            exports_1("Pokemon", Pokemon);
        }
    }
});
//# sourceMappingURL=pokemon.js.map