(this["webpackJsonpstoryboard-proto"]=this["webpackJsonpstoryboard-proto"]||[]).push([[0],{10:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s(6),i=s.n(c),o=(s(21),s(3)),l=(s(22),s(15)),r=(s(23),function(e){var t=e.passages,s=e.setPassages,n=e.count,c=e.setCount,i=n;return Object(a.jsx)("div",{className:"App-header",children:Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),s([].concat(Object(l.a)(t),[{id:1e3*Math.random(),empty:!1,index:i,selected:!1}])),c((function(e){return e+1}))},id:"passage_button",children:Object(a.jsx)("span",{children:"Create Section"})})})}),d=s(2);s(24),s(10);var j=function(e){var t=e.stateList;return Object(a.jsxs)("div",{className:"Core_Container ".concat(t.hidden?"hide":"unhide"),children:[Object(a.jsxs)("div",{className:"Core_Header",children:[Object(a.jsx)("input",{onChange:function(e){t.setTitle(e.target.value),t.title.length},type:"text",className:"core_title",autoComplete:"off",placeholder:t.title}),Object(a.jsx)("button",{className:"coreButton Fullscreen",onClick:function(){console.log("Fullscreening")}}),Object(a.jsx)("button",{className:"coreButton Exit",onClick:function(){t.setHidden(!0),t.setDarken(!1),""===t.title&&""===t.textile?t.setPassages(t.passages.map((function(e){return e.id===t.passage.id?Object(d.a)(Object(d.a)({},e),{},{empty:!0}):e}))):t.setPassages(t.passages.map((function(e){return e.id===t.passage.id?Object(d.a)(Object(d.a)({},e),{},{empty:!1}):e})))}})]}),Object(a.jsx)("textarea",{onChange:function(e){t.setTextile(e.target.value),t.textile.length},name:"",className:"core_textile",cols:"30",rows:"10",placeholder:t.textile})]})},u=s(14),b=s.n(u);var O=function(e){var t=e.setDarken,s=e.passages,c=e.setPassages,i=e.passage,l=Object(n.useState)(!0),r=Object(o.a)(l,2),u=r[0],O=r[1],p=Object(n.useState)("Untitled Section"),x=Object(o.a)(p,2),g=x[0],h=x[1],m=Object(n.useState)("Double click here edit this."),f=Object(o.a)(m,2),v=f[0],N={title:g,setTitle:h,textile:v,setTextile:f[1],passages:s,setPassages:c,hidden:u,setHidden:O,setDarken:t,passage:i};return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{stateList:N}),Object(a.jsx)(b.a,{children:Object(a.jsxs)("div",{className:"passage",children:[Object(a.jsxs)("div",{className:"passage_index ".concat(i.empty?"empty_mode":""),onMouseDown:function(){c(s.map((function(e){return e.id===i.id?Object(d.a)(Object(d.a)({},e),{},{selected:!0}):e.id!==i.id?Object(d.a)(Object(d.a)({},e),{},{selected:!1}):e})))},onDoubleClick:function(){O(!1),t(!0)},children:[Object(a.jsx)("h6",{className:"passage_text title",children:g.substring(0,17)}),Object(a.jsx)("h6",{className:"passage_text textile",children:v.substring(0,57)}),Object(a.jsx)("div",{className:"line  ".concat(i.empty?"visible":""),children:Object(a.jsxs)("div",{className:"line_inner",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})]}),Object(a.jsx)("div",{className:"options ".concat(i.selected?"visible":""),children:Object(a.jsx)("button",{onClick:function(){c(s.filter((function(e){return e.id!==i.id})))},className:"delete_btn",alt:"delete"})})]})})]})};var p=function(e){var t=e.passages,s=e.setPassages,n=e.setHidden,c=e.setDarken,i=e.count;return Object(a.jsx)("div",{className:"passage__container",children:Object(a.jsx)("div",{className:"passage__list",children:t.map((function(e){return Object(a.jsx)(O,{passages:t,setPassages:s,setHidden:n,setDarken:c,count:i,passage:e,index:e.index,selected:e.selected},e.id)}))})})};var x=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),d=l[0],j=l[1],u=Object(n.useState)(0),b=Object(o.a)(u,2),O=b[0],x=b[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:d?"darken":""}),Object(a.jsx)(r,{passages:s,setPassages:c,count:O,setCount:x}),Object(a.jsx)(p,{passages:s,setPassages:c,setDarken:j,count:O})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.83223b52.chunk.js.map