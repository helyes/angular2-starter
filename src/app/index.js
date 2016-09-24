"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var routes_ts_1 = require('./routes.ts');
var index_ts_1 = require('./reducers/index.ts');
var App_ts_1 = require('./containers/App.ts');
var Footer_ts_1 = require('./components/Footer.ts');
var Header_ts_1 = require('./components/Header.ts');
var MainSection_ts_1 = require('./components/MainSection.ts');
var TodoItem_ts_1 = require('./components/TodoItem.ts');
var TodoTextInput_ts_1 = require('./components/TodoTextInput.ts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                routes_ts_1.routing,
                index_ts_1.store
            ],
            declarations: [
                routes_ts_1.RootComponent,
                App_ts_1.AppComponent,
                Footer_ts_1.FooterComponent,
                Header_ts_1.HeaderComponent,
                MainSection_ts_1.MainSectionComponent,
                TodoItem_ts_1.TodoItemComponent,
                TodoTextInput_ts_1.TodoTextInputComponent
            ],
            bootstrap: [routes_ts_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=index.js.map