(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0e1J":function(e,t,a){"use strict";var n=a("284h"),o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(a("o0o1")),c=n(a("PiK8")),r=o(a("Aeqt")),i={namespace:"login",state:{},reducers:{},effects:{login:s.default.mark(function e(t,a){var n,o,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,a.put,e.next=4,o(c.login,n);case 4:i=e.sent,window.localStorage.setItem("".concat(r.default.prefix,"token"),i.token),window.localStorage.setItem("".concat(r.default.prefix,"username"),i.username);case 7:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){e.dispatch,e.history}}};t.default=i}}]);