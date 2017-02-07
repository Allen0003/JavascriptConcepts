System.register(['angular2/platform/browser', "./data_binding_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, data_binding_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (data_binding_app_component_1_1) {
                data_binding_app_component_1 = data_binding_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(data_binding_app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=data_binding_main.js.map