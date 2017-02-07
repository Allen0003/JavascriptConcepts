System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var MyTemplate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // framework recognizes @Component annotation and knows that we are trying to
            // create a new component
            MyTemplate = (function () {
                function MyTemplate() {
                }
                MyTemplate = __decorate([
                    core_1.Component({
                        selector: 'my-app' // specifies selector for HTML element named 'app'
                    }),
                    core_1.View({
                        // template property holds component's companion template that tells Angular
                        // how to render a view
                        template: '<h2>Welcome to the world of {{val}}</h2>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyTemplate);
                return MyTemplate;
            }());
            exports_1("MyTemplate", MyTemplate);
        }
    }
});
//# sourceMappingURL=template_app.component.js.map