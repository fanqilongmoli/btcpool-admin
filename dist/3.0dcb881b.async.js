(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{WzgL:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("o0o1")),u=n(a("MVZn")),c=r(a("f2yE")),p=(n(a("Aeqt")),{namespace:"product",state:{tableData:[],editingKey:""},reducers:{updateState:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}},effects:{getParameters:s.default.mark(function e(t,a){var r,n,u;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.payload,r=a.call,n=a.put,e.next=4,r(c.getParameters);case 4:return u=e.sent,e.next=7,n({type:"updateState",payload:{tableData:u.content}});case 7:case"end":return e.stop()}},e,this)}),addParameters:s.default.mark(function e(t,a){var r,n,u;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,e.next=4,n(c.addParameters,r);case 4:return e.sent,e.next=7,u({type:"getParameters"});case 7:case"end":return e.stop()}},e,this)}),delParameters:s.default.mark(function e(t,a){var r,n,u,p;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,u=a.put,p=r.name,e.next=5,n(c.delParameters,p);case 5:return e.sent,e.next=8,u({type:"getParameters"});case 8:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;return a.listen(function(e){var a=e.pathname;e.query;"/product-calc"===a&&t({type:"getParameters"})})}}});t.default=p}}]);