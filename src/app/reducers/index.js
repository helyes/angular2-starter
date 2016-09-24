"use strict";
var store_1 = require('@ngrx/store');
var todos = require('./todos.ts');
var reducer = store_1.combineReducers(todos);
exports.store = store_1.StoreModule.provideStore(reducer);
//# sourceMappingURL=index.js.map