/// <reference path="../typings/index.d.ts"/>
"use strict";
require('core-js/client/shim');
require('zone.js/dist/zone');
require('@angular/common');
require('rxjs');
require('todomvc-app-css/index.css!');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var index_ts_1 = require('./app/index.ts');
var _system_env_1 = require('@system-env');
if (_system_env_1.production) {
    core_1.enableProdMode();
}
else {
    Error['stackTraceLimit'] = Infinity; // tslint:disable-line:no-string-literal
    System.import('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(index_ts_1.AppModule);
//# sourceMappingURL=index.js.map