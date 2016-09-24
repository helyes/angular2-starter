/// <reference path="../../../typings/index.d.ts"/>
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
var Header_ts_1 = require('./Header.ts');
var platform_browser_1 = require('@angular/platform-browser');
var testing_1 = require('@angular/core/testing');
var MockTodoTextInputComponent = (function () {
    function MockTodoTextInputComponent() {
        this.onSave = new core_1.EventEmitter(false);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockTodoTextInputComponent.prototype, "newTodo");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockTodoTextInputComponent.prototype, "editing");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockTodoTextInputComponent.prototype, "placeholder");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockTodoTextInputComponent.prototype, "text");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], MockTodoTextInputComponent.prototype, "onSave");
    MockTodoTextInputComponent = __decorate([
        core_1.Component({
            selector: 'fountain-todo-text-input',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], MockTodoTextInputComponent);
    return MockTodoTextInputComponent;
    var _a;
}());
describe('Header component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                store_1.StoreModule.provideStore({}, {})
            ],
            declarations: [
                Header_ts_1.HeaderComponent,
                MockTodoTextInputComponent
            ]
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should render correctly', function () {
        var fixture = testing_1.TestBed.createComponent(Header_ts_1.HeaderComponent);
        fixture.detectChanges();
        var header = fixture.nativeElement;
        expect(header.querySelector('header')).not.toBeNull();
        expect(header.querySelector('header').className).toBe('header');
        var h1 = header.querySelector('h1');
        expect(h1).not.toBeNull();
        expect(h1.textContent.trim()).toBe('todos');
        var todoTextInput = fixture.debugElement.query(platform_browser_1.By.css('fountain-todo-text-input')).componentInstance;
        expect(todoTextInput.newTodo).toBe(true);
        expect(todoTextInput.placeholder).toBe('What needs to be done?');
    });
    it('should call addTodo if length of text is greater than 0', function () {
        var fixture = testing_1.TestBed.createComponent(Header_ts_1.HeaderComponent);
        fixture.detectChanges();
        var HeaderCmp = fixture.componentInstance;
        var todoTextInput = fixture.debugElement.query(platform_browser_1.By.css('fountain-todo-text-input')).componentInstance;
        var dispatchSpy = spyOn(HeaderCmp.store, 'dispatch');
        todoTextInput.onSave.emit('');
        expect(dispatchSpy.calls.count()).toBe(0);
        todoTextInput.onSave.emit('Use ngrx/store');
        expect(dispatchSpy.calls.count()).toBe(1);
    });
});
//# sourceMappingURL=Header.spec.js.map