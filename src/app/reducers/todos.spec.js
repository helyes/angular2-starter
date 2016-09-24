"use strict";
/// <reference path="../../../typings/index.d.ts"/>
require('zone.js/dist/zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
var todos_ts_1 = require('./todos.ts');
var types = require('../constants/ActionTypes.ts');
var filters = require('../constants/TodoFilters.ts');
describe('Reducers', function () {
    describe('todo reducer', function () {
        it('should handle initial state', function () {
            expect(todos_ts_1.todos(undefined, {})).toEqual([
                {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle ADD_TODO', function () {
            expect(todos_ts_1.todos([], {
                type: types.ADD_TODO,
                text: 'Run the tests'
            })).toEqual([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }
            ]);
            expect(todos_ts_1.todos([
                {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.ADD_TODO,
                text: 'Run the tests'
            })).toEqual([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.ADD_TODO,
                text: 'Fix the tests'
            })).toEqual([
                {
                    text: 'Fix the tests',
                    completed: false,
                    id: 2
                }, {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle DELETE_TODO', function () {
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.DELETE_TODO,
                id: 1
            })).toEqual([
                {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle EDIT_TODO', function () {
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.EDIT_TODO,
                text: 'Fix the tests',
                id: 1
            })).toEqual([
                {
                    text: 'Fix the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle COMPLETE_TODO', function () {
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.COMPLETE_TODO,
                id: 1
            })).toEqual([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle COMPLETE_ALL', function () {
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.COMPLETE_ALL
            })).toEqual([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: true,
                    id: 0
                }
            ]);
            // unmark if all todos are currently completed
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: true,
                    id: 0
                }
            ], {
                type: types.COMPLETE_ALL
            })).toEqual([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should handle CLEAR_COMPLETED', function () {
            expect(todos_ts_1.todos([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.CLEAR_COMPLETED
            })).toEqual([
                {
                    text: 'Use ngrx/store',
                    completed: false,
                    id: 0
                }
            ]);
        });
        it('should not generate duplicate ids after CLEAR_COMPLETED', function () {
            expect([
                {
                    type: types.COMPLETE_TODO,
                    id: 0
                }, {
                    type: types.CLEAR_COMPLETED
                }, {
                    type: types.ADD_TODO,
                    text: 'Write more tests'
                }
            ].reduce(todos_ts_1.todos, [
                {
                    id: 0,
                    completed: false,
                    text: 'Use ngrx/store'
                }, {
                    id: 1,
                    completed: false,
                    text: 'Write tests'
                }
            ])).toEqual([
                {
                    text: 'Write more tests',
                    completed: false,
                    id: 2
                }, {
                    text: 'Write tests',
                    completed: false,
                    id: 1
                }
            ]);
        });
    });
    describe('visibility reducer', function () {
        it('should handle initial state', function () {
            expect(todos_ts_1.visibility(undefined, { type: '', filter: undefined }).type).toEqual(filters.SHOW_ALL);
            expect(todos_ts_1.visibility(undefined, { type: '', filter: null }).filter(null)).toEqual(true);
        });
        it('should handle SHOW_COMPLETED', function () {
            var showCompleted = todos_ts_1.visibility({ type: filters.SHOW_ALL, filter: function () { return true; } }, { type: filters.SHOW_COMPLETED });
            expect(showCompleted.filter({ completed: false })).toEqual(false);
            expect(showCompleted.filter({ completed: true })).toEqual(true);
        });
        it('should handle SHOW_ACTIVE', function () {
            var showActive = todos_ts_1.visibility({ type: filters.SHOW_ALL, filter: function () { return true; } }, { type: filters.SHOW_ACTIVE });
            expect(showActive.filter({ completed: false })).toEqual(true);
            expect(showActive.filter({ completed: true })).toEqual(false);
        });
        it('should handle SHOW_ALL', function () {
            var showAll = todos_ts_1.visibility(undefined, { type: filters.SHOW_ALL });
            expect(showAll.filter({ completed: false })).toEqual(true);
            expect(showAll.filter({ completed: true })).toEqual(true);
        });
    });
});
//# sourceMappingURL=todos.spec.js.map