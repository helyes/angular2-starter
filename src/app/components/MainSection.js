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
var Rx_1 = require('rxjs/Rx');
var actions = require('../actions/index.ts');
var MainSectionComponent = (function () {
    function MainSectionComponent(store) {
        this.store = store;
        this.filteredTodos = Rx_1.Observable.combineLatest(store.select('todos'), store.select('visibility'), function (todos, visibilityFilter) { return todos.filter(visibilityFilter.filter); });
        this.todos = store.select('todos');
        this.visibilityFilter = store.select('visibility');
        this.completedCount = this.todos.map(function (todos) { return todos.reduce(function (count, todo) { return todo.completed ? count + 1 : count; }, 0); });
        this.activeCount = this.todos.map(function (todos) { return todos.length - (todos.reduce(function (count, todo) { return todo.completed ? count + 1 : count; }, 0)); });
    }
    MainSectionComponent.prototype.handleClearCompleted = function () {
        this.store.dispatch(actions.clearCompleted());
    };
    MainSectionComponent.prototype.handleCompleteAll = function () {
        this.store.dispatch(actions.completeAll());
    };
    MainSectionComponent.prototype.handleShow = function (filter) {
        this.store.dispatch(actions.changeVisibility(filter));
    };
    MainSectionComponent.prototype.handleChange = function (id) {
        this.store.dispatch(actions.completeTodo(id));
    };
    MainSectionComponent.prototype.handleSave = function (e) {
        console.log('Handlesave1...');
        if (e.text.length === 0) {
            this.store.dispatch(actions.deleteTodo(e.id));
        }
        else {
            console.log('Handlesave...');
            this.store.dispatch(actions.editTodo(e.id, e.text));
        }
    };
    MainSectionComponent.prototype.handleDestroy = function (e) {
        this.store.dispatch(actions.deleteTodo(e));
    };
    MainSectionComponent = __decorate([
        core_1.Component({
            selector: 'fountain-main-section',
            moduleId: __moduleName,
            templateUrl: 'MainSection.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], MainSectionComponent);
    return MainSectionComponent;
    var _a;
}());
exports.MainSectionComponent = MainSectionComponent;
//# sourceMappingURL=MainSection.js.map