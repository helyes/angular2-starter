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
var TodoItemComponent = (function () {
    function TodoItemComponent() {
        this.onDestroy = new core_1.EventEmitter(false);
        this.onSave = new core_1.EventEmitter(false);
        this.onChange = new core_1.EventEmitter(false);
        this.editing = false;
    }
    TodoItemComponent.prototype.handleSave = function (text) {
        this.onSave.emit({ id: this.todo.id, text: text });
        this.editing = false;
    };
    TodoItemComponent.prototype.handleChange = function () {
        this.onChange.emit(this.todo.id);
    };
    TodoItemComponent.prototype.handleDoubleClick = function () {
        this.editing = true;
    };
    TodoItemComponent.prototype.handleClick = function () {
        this.onDestroy.emit(this.todo.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoItemComponent.prototype, "todo");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], TodoItemComponent.prototype, "onDestroy");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], TodoItemComponent.prototype, "onSave");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_c = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _c) || Object)
    ], TodoItemComponent.prototype, "onChange");
    TodoItemComponent = __decorate([
        core_1.Component({
            selector: 'fountain-todo-item',
            moduleId: __moduleName,
            templateUrl: 'TodoItem.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemComponent);
    return TodoItemComponent;
    var _a, _b, _c;
}());
exports.TodoItemComponent = TodoItemComponent;
//# sourceMappingURL=TodoItem.js.map