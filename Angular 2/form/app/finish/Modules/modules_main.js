System.register(["angular2/platform/browser", "./modules_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, modules_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (modules_app_component_1_1) {
                modules_app_component_1 = modules_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(modules_app_component_1.MyModulesClass);
        }
    }
});
//# sourceMappingURL=modules_main.js.map