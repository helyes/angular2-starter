/// <reference path="../../../typings/index.d.ts"/>
"use strict";
var TodoTextInput_ts_1 = require('./TodoTextInput.ts');
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
describe('TodoTextInput component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [
                TodoTextInput_ts_1.TodoTextInputComponent
            ]
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should render correctly', testing_1.fakeAsync(function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.text = 'Use ngrx/store';
        TodoTextInputCmp.placeholder = 'What needs to be done?';
        TodoTextInputCmp.editing = false;
        TodoTextInputCmp.newTodo = false;
        fixture.detectChanges();
        testing_1.tick();
        var input = fixture.nativeElement.querySelector('input');
        expect(input).not.toBeNull();
        expect(input.placeholder).toBe('What needs to be done?');
        expect(input.value).toBe('Use ngrx/store');
        expect(input.className).not.toContain('edit');
        expect(input.className).not.toContain('new-todo');
    }));
    it('should render correctly when editing=true', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.editing = true;
        fixture.detectChanges();
        var input = fixture.nativeElement.querySelector('input');
        expect(input).not.toBeNull();
        expect(input.className).toContain('edit');
    });
    it('should render correctly when newTodo=true', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.newTodo = true;
        fixture.detectChanges();
        var input = fixture.nativeElement.querySelector('input');
        expect(input).not.toBeNull();
        expect(input.className).toContain('new-todo');
    });
    it('should update value on change', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.editing = true;
        fixture.detectChanges();
        var input = fixture.nativeElement.querySelector('input');
        expect(input).not.toBeNull();
        input.value = 'Use ngrx/store';
        input.dispatchEvent(new CustomEvent('input'));
        expect(TodoTextInputCmp.text).toBe('Use ngrx/store');
    });
    it('should call onSave on handleSubmit', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        fixture.detectChanges();
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.text = 'Use ngrx/store';
        spyOn(TodoTextInputCmp.onSave, 'emit').and.callThrough();
        TodoTextInputCmp.handleSubmit({ keyCode: 13 });
        expect(TodoTextInputCmp.onSave.emit).toHaveBeenCalledWith('Use ngrx/store');
    });
    it('should reset state on handleSubmit if newTodo', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.newTodo = true;
        var input = fixture.nativeElement.querySelector('input');
        expect(input).not.toBeNull();
        input.value = 'Use ngrx/store';
        spyOn(TodoTextInputCmp.onSave, 'emit').and.callThrough();
        TodoTextInputCmp.handleSubmit({ keyCode: 13 });
        fixture.detectChanges();
        expect(input.value).toBe('');
    });
    it('should call onSave on handleBlur', function () {
        var fixture = testing_1.TestBed.createComponent(TodoTextInput_ts_1.TodoTextInputComponent);
        fixture.detectChanges();
        var TodoTextInputCmp = fixture.componentInstance;
        TodoTextInputCmp.newTodo = false;
        TodoTextInputCmp.text = 'Use ngrx/store';
        spyOn(TodoTextInputCmp.onSave, 'emit').and.callThrough();
        TodoTextInputCmp.handleBlur();
        expect(TodoTextInputCmp.onSave.emit).toHaveBeenCalledWith('Use ngrx/store');
    });
});
//# sourceMappingURL=TodoTextInput.spec.js.map