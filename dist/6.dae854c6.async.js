(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{rXGw:function(e,a,t){"use strict";var r=t("284h"),n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(t("o0o1")),u=n(t("MVZn")),c=r(t("02gu")),p=(n(t("Aeqt")),{namespace:"recharge",state:{charges:{}},reducers:{updateState:function(e,a){var t=a.payload;return(0,u.default)({},e,t)}},effects:{charges:s.default.mark(function e(a,t){var r,n,u,p,o,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,u=t.put,p=r.page,o=r.size,e.next=5,n(c.charges,p,o);case 5:return i=e.sent,e.next=8,u({type:"updateState",payload:{charges:i}});case 8:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var a=e.dispatch,t=e.history;return t.listen(function(e){var t=e.pathname;e.query;"/recharge-manage"===t&&a({type:"charges",payload:{page:0,size:10}})})}}});a.default=p}}]);