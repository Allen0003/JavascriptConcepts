System.register(["angular2/platform/browser", "./datadisplay_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, datadisplay_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (datadisplay_app_component_1_1) {
                datadisplay_app_component_1 = datadisplay_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(datadisplay_app_component_1.MyTemplate);
        }
    }
});
//# sourceMappingURL=datadisplay_main.js.map