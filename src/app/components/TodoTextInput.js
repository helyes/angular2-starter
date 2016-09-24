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
var TodoTextInputComponent = (function () {
    function TodoTextInputComponent(renderer) {
        this.renderer = renderer;
        this.placeholder = '';
        this.onSave = new core_1.EventEmitter(false);
        this.text = '';
    }
    TodoTextInputComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
    };
    TodoTextInputComponent.prototype.handleBlur = function () {
        if (!this.newTodo) {
            this.onSave.emit(this.text);
        }
    };
    TodoTextInputComponent.prototype.handleSubmit = function (e) {
        if (e.keyCode === 13) {
            this.onSave.emit(this.text);
            if (this.newTodo) {
                this.text = '';
            }
        }
    };
    __decorate([
        core_1.ViewChild('myInput'), 
        __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
    ], TodoTextInputComponent.prototype, "input");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TodoTextInputComponent.prototype, "newTodo");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TodoTextInputComponent.prototype, "editing");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TodoTextInputComponent.prototype, "placeholder");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], TodoTextInputComponent.prototype, "onSave");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TodoTextInputComponent.prototype, "text");
    TodoTextInputComponent = __decorate([
        core_1.Component({
            selector: 'fountain-todo-text-input',
            moduleId: __moduleName,
            templateUrl: 'TodoTextInput.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _c) || Object])
    ], TodoTextInputComponent);
    return TodoTextInputComponent;
    var _a, _b, _c;
}());
exports.TodoTextInputComponent = TodoTextInputComponent;
//# sourceMappingURL=TodoTextInput.js.map