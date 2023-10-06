(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),r=(c(35),c(36),c(7)),a=c(3),s=(c(37),c(10)),l=c.n(s),i=c(1),o=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},j=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(r.c,{to:"/",className:o,children:"Home"}),Object(i.jsx)(r.c,{to:"/people",className:o,children:"People"})]})})})},d=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},u=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=c(5),h=c(0),O=c(4),x=c(8),m="https://mate-academy.github.io/react_people-table/api/people.json";function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function f(){return(f=Object(x.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(500).then((function(){return fetch(m)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(39);var v=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},N=c(24),g=["Name","Sex","Born","Died"],y={All:null,Male:"m",Female:"f"},w=["16","17","18","19","20"],L=function(e){var t=e.person,c=Object(r.d)(),n=Object(b.a)(c,1)[0];return Object(i.jsx)(r.b,{to:{pathname:"../".concat(t.slug),search:n.toString()},className:l()({"has-text-danger":t.sex===y.Female}),children:t.name})},k=function(e){var t=e.person,c=Object(a.r)().personSlug,n=t.sex,r=t.slug,s=t.born,o=t.died,j=t.mother,d=t.motherName,u=t.father,b=t.fatherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":r===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(L,{person:t})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:o}),Object(i.jsx)("td",{children:j?Object(i.jsx)(L,{person:j}):d||"-"}),Object(i.jsx)("td",{children:u?Object(i.jsx)(L,{person:u}):b||"-"})]})};function S(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],r=t[1];null===r?c.delete(n):Array.isArray(r)?(c.delete(n),r.forEach((function(e){c.append(n,e)}))):c.set(n,r)})),c.toString()}var C=function(e){var t=e.people,c=Object(r.d)(),n=Object(b.a)(c,1)[0],a=n.get("sort"),s=n.get("order"),o=function(e){var t={sort:e,order:null};return a===e&&s&&(t.sort=null),a!==e||s||(t.order="desc"),S(n,t)};return Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[g.map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(i.jsx)(r.b,{to:{search:o(e.toLowerCase())},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":a!==e.toLowerCase(),"fa-sort-up":a===e.toLowerCase()&&!s,"fa-sort-down":a===e.toLowerCase()&&s})})})})]})},e)})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(k,{person:e})}))})]})})})},A=c(9),F=function(){var e=Object(r.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],a=c.get("query")||"",s=c.get("sex")||null,o=c.getAll("centuries")||[];function j(e){var t=o.includes(e)?o.filter((function(t){return t!==e})):[].concat(Object(A.a)(o),[e]);return S(c,{centuries:t})}return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(y).map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(i.jsx)(r.b,{className:l()({"is-active":a===s}),to:{search:S(c,{sex:a})},children:n},n)}))}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:a,onChange:function(e){n(S(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:w.map((function(e){return Object(i.jsx)(r.b,{"data-cy":"century",className:l()("button","mr-1",{"is-info":o.includes(e)}),to:{search:j(e)},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(r.b,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":!!o.length}),to:{search:S(c,{centuries:null})},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(r.b,{className:"button is-link is-outlined is-fullwidth",to:{search:S(c,{centuries:null,query:null,sex:null})},children:"Reset all filters"})})]})};function P(e,t,c,n,r,a){var s=Object(A.a)(e);if(t&&(s=s.filter((function(e){return function(e,t){var c,n,r=t.toLowerCase();return e.name.toLowerCase().includes(r)||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(r))||(null===(n=e.motherName)||void 0===n?void 0:n.toLowerCase().includes(r))}(e,t)}))),c&&(s=s.filter((function(e){return e.sex===c}))),n.length){var l=n.map(Number);s=s.filter((function(e){var t,c=e.born;return l.includes((t=c,Math.ceil(t/100)))}))}return r&&(s=s.sort((function(e,t){switch(r){case"name":case"sex":return e[r].localeCompare(t[r]);case"born":case"died":return e[r]-t[r];default:return 0}}))),a&&s.reverse(),s}var E=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),s=Object(b.a)(a,2),l=s[0],o=s[1],j=Object(h.useState)(!1),d=Object(b.a)(j,2),u=d[0],O=d[1],x=Object(r.d)(),m=Object(b.a)(x,1)[0];Object(h.useEffect)((function(){o(!0),function(){return f.apply(this,arguments)}().then((function(e){return n(function(e){return e.map((function(t){var c=e.find((function(e){var c=e.name;return t.fatherName===c})),n=e.find((function(e){var c=e.name;return t.motherName===c}));return Object(N.a)(Object(N.a)({},t),{},{father:c,mother:n})}))}(e))})).catch((function(){return O(!0)})).finally((function(){return o(!1)}))}),[]);var p=P(c,m.get("query")||"",m.get("sex")||null,m.getAll("centuries")||[],m.get("sort"),m.get("order")),g=!c.length&&!l&&!u,y=!p.length&&!l&&!u,w=u&&!l,L=!!c.length&&!u;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!!c.length&&Object(i.jsx)(F,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[l&&Object(i.jsx)(v,{}),w&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),g&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),L&&Object(i.jsx)(C,{people:p}),y&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"})]})})]})})]})},_=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},q=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(u,{})}),Object(i.jsx)(a.c,{path:"people",children:Object(i.jsx)(a.c,{path:":personSlug?",element:Object(i.jsx)(E,{})})}),Object(i.jsx)(a.c,{path:"/home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(_,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(q,{}))}},[[40,1,2]]]);
//# sourceMappingURL=main.259c16e4.chunk.js.map