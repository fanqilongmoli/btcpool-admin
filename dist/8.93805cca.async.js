(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{amlF:function(e,t,a){"use strict";var r=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a("o0o1")),p=n(a("MVZn")),u=r(a("R4QX")),i=(n(a("Aeqt")),{namespace:"withdraw",state:{withdraws:{},state:0},reducers:{updateState:function(e,t){var a=t.payload;return(0,p.default)({},e,a)}},effects:{withdrawApply:s.default.mark(function e(t,a){var r,n,p,i,c,d,l,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,p=a.put,i=a.select,e.next=4,i(function(e){return e.withdraw});case 4:return c=e.sent,d=r.page,l=r.size,e.next=8,n(u.withdrawApply,d,l,c.state);case 8:return o=e.sent,console.log(o),e.next=12,p({type:"updateState",payload:{withdraws:o}});case 12:case"end":return e.stop()}},e,this)}),withdrawApplySuccess:s.default.mark(function e(t,a){var r,n,p,i,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,p=a.put,a.select,i=r.id,e.next=5,n(u.withdrawApplySuccess,i);case 5:return c=e.sent,console.log(c),e.next=9,p({type:"withdrawApply",payload:{page:0,size:10}});case 9:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;return a.listen(function(e){var a=e.pathname;e.query;"/withdraw-examine"===a&&t({type:"withdrawApply",payload:{page:0,size:10}})})}}});t.default=i}}]);