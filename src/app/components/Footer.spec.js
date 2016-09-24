/// <reference path="../../../typings/index.d.ts"/>
"use strict";
var Footer_ts_1 = require('./Footer.ts');
var testing_1 = require('@angular/core/testing');
var TodoFilters_ts_1 = require('../constants/TodoFilters.ts');
describe('Footer component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                Footer_ts_1.FooterComponent
            ]
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should render correctly', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        fixture.detectChanges();
        var footer = fixture.nativeElement;
        expect(footer.querySelector('footer')).not.toBeNull();
        expect(footer.querySelector('footer').className).toBe('footer');
    });
    it('should display active count when 0', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        var footer = fixture.nativeElement;
        var FooterCmp = fixture.componentInstance;
        FooterCmp.activeCount = 0;
        fixture.detectChanges();
        expect(footer.querySelector('.todo-count').textContent.trim()).toBe('No items left');
    });
    it('should display active count when above 0', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        var footer = fixture.nativeElement;
        var FooterCmp = fixture.componentInstance;
        FooterCmp.activeCount = 1;
        fixture.detectChanges();
        expect(footer.querySelector('.todo-count').textContent.trim()).toBe('1 item left');
    });
    it('should call onShow when a filter is clicked', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        var footer = fixture.nativeElement;
        var FooterCmp = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(FooterCmp.onShow, 'emit');
        footer.querySelectorAll('a')[1].dispatchEvent(new Event('click'));
        expect(FooterCmp.onShow.emit).toHaveBeenCalledWith(TodoFilters_ts_1.SHOW_ACTIVE);
    });
    it('shouldnt show clear button when no completed todos', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        var footer = fixture.nativeElement;
        var FooterCmp = fixture.componentInstance;
        FooterCmp.completedCount = 0;
        fixture.detectChanges();
        expect(footer.querySelector('.clear-completed')).toBeNull();
    });
    it('should call onClearCompleted on clear button click', function () {
        var fixture = testing_1.TestBed.createComponent(Footer_ts_1.FooterComponent);
        var footer = fixture.nativeElement;
        var FooterCmp = fixture.componentInstance;
        FooterCmp.completedCount = 1;
        fixture.detectChanges();
        spyOn(FooterCmp.onClearCompleted, 'emit');
        footer.querySelector('.clear-completed').dispatchEvent(new Event('click'));
        expect(FooterCmp.onClearCompleted.emit).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Footer.spec.js.map