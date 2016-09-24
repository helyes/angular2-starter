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
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var TodoItem_ts_1 = require('./TodoItem.ts');
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
describe('TodoItem component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                TodoItem_ts_1.TodoItemComponent,
                MockTodoTextInputComponent
            ]
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should render the correct elements', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        fixture.detectChanges();
        var todoItem = fixture.nativeElement;
        var li = todoItem.querySelector('li');
        expect(li).not.toBeNull();
        expect(li.className).toBe('');
        var div = todoItem.querySelector('div');
        expect(div).not.toBeNull();
        expect(div.className).toBe('view');
        var input = todoItem.querySelector('input');
        expect(input).not.toBeNull();
        expect(input.checked).toBe(false);
        var label = todoItem.querySelector('label');
        expect(label).not.toBeNull();
        expect(label.textContent.trim()).toBe('Use ngrx/store');
        var button = todoItem.querySelector('button');
        expect(button).not.toBeNull();
        expect(button.className).toBe('destroy');
    });
    it('should call onChange when click on input', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        fixture.detectChanges();
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        var input = fixture.nativeElement.querySelector('input');
        spyOn(TodoItemCmp.onChange, 'emit');
        var evt = new CustomEvent('click');
        input.dispatchEvent(evt);
        expect(TodoItemCmp.onChange.emit).toHaveBeenCalledWith(0);
    });
    it('should call onDestroy when click on button', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        fixture.detectChanges();
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        var button = fixture.nativeElement.querySelector('button');
        spyOn(TodoItemCmp.onDestroy, 'emit').and.callThrough();
        var evt = new CustomEvent('click');
        button.dispatchEvent(evt);
        expect(TodoItemCmp.onDestroy.emit).toHaveBeenCalledWith(0);
    });
    it("should change class names to 'editing' when double click on label", function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        fixture.detectChanges();
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        var label = fixture.nativeElement.querySelector('label');
        spyOn(TodoItemCmp.onDestroy, 'emit').and.callThrough();
        var evt = new CustomEvent('dblclick');
        label.dispatchEvent(evt);
        fixture.detectChanges();
        var li = fixture.nativeElement.querySelector('li');
        expect(li.className).toBe('editing');
    });
    it('should render the correct input when editing is true', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.editing = true;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        fixture.detectChanges();
        var todoTextInput = fixture.debugElement.query(platform_browser_1.By.css('fountain-todo-text-input')).componentInstance;
        expect(todoTextInput).not.toBeNull();
        expect(todoTextInput.text).toBe('Use ngrx/store');
        expect(todoTextInput.editing).toBe(true);
    });
    it('should call handleSave when onSave event is emitted', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.todo = {
            id: 0,
            text: 'Use ngrx/store',
            completed: false
        };
        TodoItemCmp.editing = true;
        fixture.detectChanges();
        spyOn(TodoItemCmp.onSave, 'emit');
        var todoTextInput = fixture.debugElement.query(platform_browser_1.By.css('fountain-todo-text-input')).componentInstance;
        spyOn(todoTextInput.onSave, 'emit').and.callThrough();
        spyOn(TodoItemCmp, 'handleSave');
        fixture.detectChanges();
        todoTextInput.onSave.emit('Edit todo');
        expect(TodoItemCmp.handleSave).toHaveBeenCalledWith('Edit todo');
    });
    it('should remove class name when onSave event is emitted', function () {
        var fixture = testing_1.TestBed.createComponent(TodoItem_ts_1.TodoItemComponent);
        var TodoItemCmp = fixture.componentInstance;
        TodoItemCmp.editing = true;
        fixture.detectChanges();
        spyOn(TodoItemCmp.onSave, 'emit');
        var todoTextInput = fixture.debugElement.query(platform_browser_1.By.css('fountain-todo-text-input')).componentInstance;
        spyOn(todoTextInput.onSave, 'emit').and.callThrough();
        spyOn(TodoItemCmp, 'handleSave').and.callFake(function () {
            TodoItemCmp.editing = false;
        });
        todoTextInput.onSave.emit('Use ngrx/store');
        fixture.detectChanges();
        var li = fixture.nativeElement.querySelector('li');
        expect(li.className).toBe('');
    });
});
//# sourceMappingURL=TodoItem.spec.js.map