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
var store_1 = require('@ngrx/store');
var actions = require('../actions/index.ts');
var HeaderComponent = (function () {
    function HeaderComponent(store) {
        this.store = store;
    }
    HeaderComponent.prototype.handleSave = function (text) {
        if (text.length !== 0) {
            this.store.dispatch(actions.addTodo(text));
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'fountain-header',
            moduleId: __moduleName,
            templateUrl: 'Header.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=Header.js.map