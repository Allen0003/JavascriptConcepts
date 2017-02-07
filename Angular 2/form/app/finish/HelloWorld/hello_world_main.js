System.register(["angular2/platform/browser", "./hello_world_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, hello_world_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hello_world_app_component_1_1) {
                hello_world_app_component_1 = hello_world_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(hello_world_app_component_1.MyHelloWorldClass);
        }
    }
});
//# sourceMappingURL=hello_world_main.js.map