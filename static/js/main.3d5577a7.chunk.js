(this["webpackJsonpups-movies"]=this["webpackJsonpups-movies"]||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(12),r=c.n(a),i=(c(20),c(6)),j=c(2),o=c(5),l=c(0);var h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){return fetch("https://ups-json-server.herokuapp.com/english").then((function(e){return e.json()})).then((function(e){console.log("data",e),c(e)})),function(){}}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"English"}),Object(l.jsx)("p",{})]})};var d=function(){return Object(l.jsx)("footer",{className:"page-footer green darken-4",children:Object(l.jsx)("div",{className:"footer-copyright",children:Object(l.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(l.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Link"})]})})})};var b=function(){return Object(l.jsx)("nav",{className:"green darken-2",children:Object(l.jsxs)("div",{className:"nav-wrapper",children:[Object(l.jsx)(i.b,{to:"/",className:"brand-logo",children:"UPS app"}),Object(l.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Movies"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/english",children:"English"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/weather",children:"Weather"})})]})]})})},O=c(15);var u=function(e){var t=e.Title,c=e.Year,n=e.imdbID,s=e.Type,a=e.Poster;return Object(l.jsxs)("div",{id:n,className:"card movie",children:[Object(l.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===a?Object(l.jsx)("img",{className:"activator",src:"https://via.placeholder.com/400x400?text=".concat(t),alt:"Poster "+t}):Object(l.jsx)("img",{className:"activator",src:a,alt:"Poster "+t})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(l.jsxs)("p",{children:[c," ",Object(l.jsx)("span",{className:"right",children:s})]})]})]})};var x=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(l.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(l.jsx)(u,Object(O.a)({},e),e.imdbID)})):Object(l.jsx)("h4",{children:"Not found"})})};var m=function(){return Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"indeterminate"})})},p=function(e){var t=e.searchMovies,c=void 0===t?Function.prototype:t,s=Object(n.useState)(""),a=Object(o.a)(s,2),r=a[0],i=a[1],j=Object(n.useState)("all"),h=Object(o.a)(j,2),d=h[0],b=h[1],O=function(e){b((function(){return e.target.dataset.type}))};return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col s12",children:Object(l.jsxs)("div",{className:"input-field ",children:[Object(l.jsx)("input",{value:r,className:"validate",placeholder:"Search",type:"search",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(r)}}),Object(l.jsxs)("button",{onClick:function(){return c(r)},className:"waves-effect waves-light btn search-btn",children:[Object(l.jsx)("i",{className:"material-icons right",children:"search"}),"search"]}),Object(l.jsxs)("div",{className:"filter",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:O,checked:""===d}),Object(l.jsx)("span",{children:"All"})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:O,checked:"movie"===d}),Object(l.jsx)("span",{children:"Movies only"})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:O,checked:"series"===d}),Object(l.jsx)("span",{children:"Series only"})]})]})]})})})},v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),r=Object(o.a)(a,2),i=r[0],j=r[1];return Object(n.useEffect)((function(){return fetch("https://www.omdbapi.com/?apikey=1f1ef129&s=matrix").then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){console.log(e),j(!1)})),function(){}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{searchMovies:function(e){j(!0),fetch("https://www.omdbapi.com/?apikey=1f1ef129&s=".concat(e)).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)}))}}),i?Object(l.jsx)(m,{}):Object(l.jsx)(x,{movies:c})]})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Weather"})})};var g=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Page not found"})})};var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"content container",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(l.jsx)(j.a,{path:"/weather",component:f}),Object(l.jsx)(j.a,{path:"/english",component:h}),Object(l.jsx)(j.a,{component:g})]})}),Object(l.jsx)(d,{})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3d5577a7.chunk.js.map