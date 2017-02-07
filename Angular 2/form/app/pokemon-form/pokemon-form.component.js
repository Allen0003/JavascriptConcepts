System.register(['angular2/core', '../pokemon/pokemon'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pokemon_1;
    var PokemonFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pokemon_1_1) {
                pokemon_1 = pokemon_1_1;
            }],
        execute: function() {
            PokemonFormComponent = (function () {
                function PokemonFormComponent() {
                    this.model = new pokemon_1.Pokemon(141, 'Snowlax', 'lazy');
                    this.submitted = false;
                }
                PokemonFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(PokemonFormComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                PokemonFormComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'app-hero-form',
                        templateUrl: 'app/pokemon-form/pokemon-form.component.html',
                        styleUrls: ['app/pokemon-form/pokemon-form.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PokemonFormComponent);
                return PokemonFormComponent;
            }());
            exports_1("PokemonFormComponent", PokemonFormComponent);
        }
    }
});
//# sourceMappingURL=pokemon-form.component.js.map