(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),i=a(3),j=a.n(i),u=a(6),o=a(4),b=(a(12),a(0)),l=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Mumbai"),r=Object(o.a)(n,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=49ddd173b2a503b416be9284e7e0643a"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,s(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"inputData",children:Object(b.jsx)("input",{type:"search",className:"inputField",value:i,onChange:function(e){l(e.target.value)}})}),a?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"info",children:[Object(b.jsxs)("h2",{className:"location",children:[Object(b.jsx)("i",{className:"fas fa-street-view"}),i]}),Object(b.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0C"]}),Object(b.jsxs)("h3",{className:"tempmin_max",children:["Min:",a.temp_min,"\xb0C | Max :",a.temp_max,"\xb0C"]})]}),Object(b.jsx)("div",{className:"wave -one"}),Object(b.jsx)("div",{className:"wave -two"}),Object(b.jsx)("div",{className:"wave -three"})]}):Object(b.jsx)("h1",{className:"errorMsg",children:"No Data Found"})]})})},d=function(){return Object(b.jsx)(l,{})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2376e7cb.chunk.js.map