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
var TodoFilters_ts_1 = require('../constants/TodoFilters.ts');
var FooterComponent = (function () {
    function FooterComponent() {
        this.onClearCompleted = new core_1.EventEmitter(false);
        this.onShow = new core_1.EventEmitter(false);
        this.filters = [TodoFilters_ts_1.SHOW_ALL, TodoFilters_ts_1.SHOW_ACTIVE, TodoFilters_ts_1.SHOW_COMPLETED];
        this.filterTitles = (_a = {},
            _a[TodoFilters_ts_1.SHOW_ALL] = 'All',
            _a[TodoFilters_ts_1.SHOW_ACTIVE] = 'Active',
            _a[TodoFilters_ts_1.SHOW_COMPLETED] = 'Completed',
            _a
        );
        var _a;
    }
    FooterComponent.prototype.handleClear = function (e) {
        this.onClearCompleted.emit(e);
    };
    FooterComponent.prototype.handleChange = function (filter) {
        console.log('Filter update:', filter);
        this.onShow.emit(filter);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "completedCount");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "activeCount");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterComponent.prototype, "filter");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], FooterComponent.prototype, "onClearCompleted");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], FooterComponent.prototype, "onShow");
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'fountain-footer',
            moduleId: __moduleName,
            templateUrl: 'Footer.html',
            styles: ["\n    a {\n      cursor: pointer\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
    var _a, _b;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=Footer.js.map