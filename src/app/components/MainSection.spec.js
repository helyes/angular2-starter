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
var forms_1 = require('@angular/forms');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var store_1 = require('@ngrx/store');
var todos_ts_1 = require('../reducers/todos.ts');
var MainSection_ts_1 = require('./MainSection.ts');
var TodoItem_ts_1 = require('./TodoItem.ts');
var TodoTextInput_ts_1 = require('./TodoTextInput.ts');
var Footer_ts_1 = require('./Footer.ts');
var actions = require('../actions/index.ts');
var TodoFilters_ts_1 = require('../constants/TodoFilters.ts');
var MockTodoItemComponent = (function () {
    function MockTodoItemComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockTodoItemComponent.prototype, "todo");
    MockTodoItemComponent = __decorate([
        core_1.Component({
            selector: 'fountain-todo-item',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], MockTodoItemComponent);
    return MockTodoItemComponent;
}());
var MockFooterComponent = (function () {
    function MockFooterComponent() {
        this.onClearCompleted = new core_1.EventEmitter(false);
        this.onShow = new core_1.EventEmitter(false);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockFooterComponent.prototype, "completedCount");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockFooterComponent.prototype, "activeCount");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MockFooterComponent.prototype, "filter");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], MockFooterComponent.prototype, "onClearCompleted");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_b = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _b) || Object)
    ], MockFooterComponent.prototype, "onShow");
    MockFooterComponent = __decorate([
        core_1.Component({
            selector: 'fountain-footer',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], MockFooterComponent);
    return MockFooterComponent;
    var _a, _b;
}());
var store = store_1.StoreModule.provideStore(store_1.combineReducers({ todos: todos_ts_1.todos, visibility: todos_ts_1.visibility }), {});
describe('MainSection component', function () {
    describe('mocked', function () {
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    store
                ],
                declarations: [
                    MainSection_ts_1.MainSectionComponent,
                    MockTodoItemComponent,
                    MockFooterComponent
                ]
            });
            testing_1.TestBed.compileComponents();
        }));
        it('should render container', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            fixture.detectChanges();
            var main = fixture.nativeElement;
            expect(main.querySelector('section')).not.toBeNull();
            expect(main.querySelector('section').className).toBe('main');
        });
        describe('toggle all input', function () {
            it('should render', function () {
                var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
                fixture.detectChanges();
                var main = fixture.nativeElement;
                var input = main.querySelector('input');
                expect(input).not.toBeNull();
                expect(input.type).toBe('checkbox');
                expect(input.checked).toBe(false);
            });
            it('should be checked if all todos completed', function () {
                var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
                var MainCmp = fixture.componentInstance;
                MainCmp.store.dispatch(actions.completeAll());
                fixture.detectChanges();
                var main = fixture.nativeElement;
                var input = main.querySelector('input');
                expect(input.checked).toBe(true);
            });
            it('should call completeAll on change', function () {
                var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
                fixture.detectChanges();
                var input = fixture.nativeElement.querySelector('input');
                spyOn(actions, 'completeAll').and.callThrough();
                var evt = new CustomEvent('click');
                input.dispatchEvent(evt);
                expect(actions.completeAll).toHaveBeenCalled();
            });
        });
    });
    describe('footer', function () {
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    store
                ],
                declarations: [
                    MainSection_ts_1.MainSectionComponent,
                    MockTodoItemComponent,
                    Footer_ts_1.FooterComponent
                ]
            });
            testing_1.TestBed.compileComponents();
        }));
        it('should render', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            fixture.detectChanges();
            var footer = fixture.nativeElement.querySelector('fountain-footer');
            expect(footer.querySelector('footer')).not.toBeNull();
            var FooterCmp = fixture.debugElement.query(platform_browser_1.By.css('fountain-footer')).componentInstance;
            expect(FooterCmp.completedCount).toBe(0);
            expect(FooterCmp.activeCount).toBe(1);
            expect(FooterCmp.filter.type).toBe(TodoFilters_ts_1.SHOW_ALL);
        });
        it('onShow should set the filter', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            fixture.detectChanges();
            var FooterCmp = fixture.debugElement.query(platform_browser_1.By.css('fountain-footer')).componentInstance;
            FooterCmp.onShow.emit(TodoFilters_ts_1.SHOW_COMPLETED);
            fixture.detectChanges();
            expect(FooterCmp.filter.type).toBe(TodoFilters_ts_1.SHOW_COMPLETED);
        });
        it('onClearCompleted should call clearCompleted', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            var MainCmp = fixture.componentInstance;
            MainCmp.store.dispatch(actions.completeAll());
            fixture.detectChanges();
            spyOn(actions, 'clearCompleted').and.callThrough();
            var FooterCmp = fixture.debugElement.query(platform_browser_1.By.css('fountain-footer')).componentInstance;
            FooterCmp.onClearCompleted.emit();
            fixture.detectChanges();
            expect(actions.clearCompleted).toHaveBeenCalled();
        });
    });
    describe('todo list', function () {
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [
                    forms_1.FormsModule,
                    store
                ],
                declarations: [
                    MainSection_ts_1.MainSectionComponent,
                    TodoItem_ts_1.TodoItemComponent,
                    TodoTextInput_ts_1.TodoTextInputComponent,
                    MockFooterComponent
                ]
            });
            testing_1.TestBed.compileComponents();
        }));
        it('should render', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            var MainCmp = fixture.componentInstance;
            MainCmp.store.dispatch(actions.addTodo('Run the test'));
            fixture.detectChanges();
            var ul = fixture.nativeElement.querySelector('ul');
            expect(ul).not.toBeNull();
            var todoitems = fixture.debugElement.queryAllNodes(platform_browser_1.By.css('fountain-todo-item'));
            expect(todoitems.length).toBe(2);
            var todos;
            MainCmp.todos.subscribe(function (_todos) {
                todos = _todos;
            });
            Array.prototype.forEach.call(todoitems, function (item, i) {
                expect(item.name).toBe('fountain-todo-item');
                expect(item.componentInstance.todo).toBe(todos[i]);
            });
        });
        it('should filter items', function () {
            var fixture = testing_1.TestBed.createComponent(MainSection_ts_1.MainSectionComponent);
            fixture.detectChanges();
            var MainCmp = fixture.componentInstance;
            MainCmp.store.dispatch(actions.addTodo('Run the test'));
            MainCmp.store.dispatch(actions.completeTodo('1'));
            var FooterCmp = fixture.debugElement.query(platform_browser_1.By.css('fountain-footer')).componentInstance;
            FooterCmp.onShow.emit(TodoFilters_ts_1.SHOW_COMPLETED);
            var updatedList = fixture.debugElement.queryAllNodes(platform_browser_1.By.css('fountain-todo-item'));
            var todos;
            MainCmp.todos.subscribe(function (_todos) {
                todos = _todos;
            });
            expect(updatedList.length).toBe(1);
            expect(updatedList[0].componentInstance.todo).toBe(todos[1]);
        });
    });
});
//# sourceMappingURL=MainSection.spec.js.map