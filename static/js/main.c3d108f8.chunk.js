(this.webpackJsonpwebChat=this.webpackJsonpwebChat||[]).push([[0],{28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(19),r=a.n(s),i=(a(28),a(29),a(3)),o=a(5),l=a(2);localStorage.getItem("chats")||localStorage.setItem("chats",JSON.stringify([{_id:"67rdca3eeb7f6fgeed471815",name:"JavaScript",image:"https://www.svgrepo.com/show/327372/logo-javascript.svg"},{_id:"67rdca3eeb7f6fgeed471816",name:"nodeJS",image:"https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png"},{_id:"67rdca3eeb7f6fgeed471817",name:"Java",image:"https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"},{_id:"67rdca3eeb7f6fgeed471818",name:"PHP",image:"https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/php-512.png"},{_id:"67rdca3eeb7f6fgeed471819",name:"Ruby",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Devicon-ruby-plain.svg/1200px-Devicon-ruby-plain.svg.png"},{_id:"67rdca3eeb7f6fgeed471820",name:"\u0421++",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"},{_id:"67rdca3eeb7f6fgeed471821",name:"Kotlin",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kotlin_Icon_2021.svg/2048px-Kotlin_Icon_2021.svg.png"}]));var d={fetchAll:function(){return new Promise((function(e){window.setTimeout((function(){e(JSON.parse(localStorage.getItem("chats")))}),2e3)}))},getById:function(e){return new Promise((function(t){window.setTimeout((function(){t(JSON.parse(localStorage.getItem("chats")).find((function(t){return t._id===e})))}),1e3)}))},update:function(e,t){return new Promise((function(a){var n=JSON.parse(localStorage.getItem("chats")),c=n.findIndex((function(t){return t._id===e}));n[c]=Object(l.a)(Object(l.a)({},n[c]),t),localStorage.setItem("chats",JSON.stringify(n)),a(n[c])}))}},m=[{_id:"67rdca3eeb7f6fg",userId:"67rdca3eeb7f6fg1",pageId:"67rdca3eeb7f6fgeed471815",content:"I love JS",created_at:"1633576399367"},{_id:"67rdca3eeb7f6fgdasd",pageId:"67rdca3eeb7f6fgeed471815",userId:"67rdca3eeb7f6fgdasd2",content:"Hello world!",created_at:"1633573058520"},{_id:"67rdca3eeb7f6fgdaasd",pageId:"67rdca3eeb7f6fgeed471817",userId:"67rdca3eeb7f6fgdaasd3",content:"Like it",created_at:"1633573058520"}];localStorage.getItem("comments")||localStorage.setItem("comments",JSON.stringify(m));var u={chats:d,comments:{fetchAll:function(){return new Promise((function(e){window.setTimeout((function(){e(m)}),200)}))},fetchCommentsForChat:function(e){return new Promise((function(t){window.setTimeout((function(){t(JSON.parse(localStorage.getItem("comments")).filter((function(t){return t.pageId===e})))}),200)}))},add:function(e){return new Promise((function(t){window.setTimeout((function(){var a=JSON.parse(localStorage.getItem("comments")),n=Object(l.a)(Object(l.a)({},e),{},{created_at:Date.now(),_id:Math.random().toString(36).substr(2,9)});a.push(n),localStorage.setItem("comments",JSON.stringify(a)),t(n)}),200)}))},remove:function(e){return new Promise((function(t){window.setTimeout((function(){var a=JSON.parse(localStorage.getItem("comments")).filter((function(t){return t._id!==e}));console.log(e),console.log(a),localStorage.setItem("comments",JSON.stringify(a)),t(e)}),200)}))}}},b=a(9),j=a(0),f=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u.chats.fetchAll().then((function(e){return c(e)}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"chat-list",children:a?a.map((function(e){return Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(b.b,{to:"/chats/".concat(e._id),children:e.name},e._id)},e._id)})):Object(j.jsx)("div",{children:"Loading..."})})})},g=function(e){var t=e.chat;return Object(j.jsx)("div",{className:"card mb-3",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center text-center position-relative",children:[Object(j.jsx)("img",{src:t.image,width:"100"}),Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)("h4",{children:t.name})})]})})})},h=a(23),O=a(22);function v(e){var t=new Date(parseInt(e)),a=new Date;if(0===a.getFullYear()-t.getFullYear()){var n=a.getDate()-t.getDate();if(console.log(n,"dayDif"),0===n){var c=a.getHours()-t.getHours();if(console.log(c,"hoursDif"),0===c){var s=a.getMinutes()-t.getMinutes();return console.log(s,"minutesDif"),s>=0&&s<5?"1 \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434":s>=5&&s<10?"5 \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434":s>=10&&s<30?"10 \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434":"30 \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"}return"".concat(t.getHours(),":").concat(t.getMinutes())}return"".concat(t.getDate()," ").concat(t.toLocaleString("default",{month:"long"}))}return t.getFullYear()+"."+(t.getMonth()+1)+"_"+t.getDate()}var x=[{_id:"67rdca3eeb7f6fg1",name:"John"},{_id:"67rdca3eeb7f6fgdasd2",name:"Melany"},{_id:"67rdca3eeb7f6fgdaasd3",name:"Howard"}];localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(x));var p="currentUser";function N(e){return sessionStorage.setItem(p,JSON.stringify(e))}function S(){var e=sessionStorage.getItem(p);return JSON.parse(e)}var w=function(e){var t=e.content,a=e.created_at,c=e._id,s=e.userId,r=e.chatId,i=e.onRemove,l=S(),d=function(e){return JSON.parse(localStorage.getItem("users")).find((function(t){return t._id===e}))}(s),m=Object(n.useState)(),b=Object(o.a)(m,2),f=b[0],g=b[1],h=Object(n.useState)(!1),O=Object(o.a)(h,2),x=O[0],p=O[1];return Object(n.useEffect)((function(){p(!0),u.chats.getById(r).then((function(e){g(e),p(!1)}))}),[]),Object(j.jsx)("div",{className:"bg-light card-body  mb-1",children:Object(j.jsx)("div",{className:"row",children:x?"Loading ...":Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"d-flex flex-start ",children:[Object(j.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/".concat((Math.random()+1).toString(36).substring(7),".svg"),className:"rounded-circle shadow-1-strong me-3",alt:"avatar",width:"30",height:"30"}),Object(j.jsx)("div",{className:"flex-grow-1 flex-shrink-1",children:Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(j.jsxs)("p",{className:"mb-1 ",children:[f&&f.name," ",Object(j.jsxs)("span",{className:"small",children:[Object(j.jsxs)("span",{children:[d.name," "]}),v(a)]})]}),l._id===s?Object(j.jsx)("button",{className:"btn btn-sm text-primary d-flex align-items-center",onClick:function(){return i(c)},children:Object(j.jsx)("i",{className:"bi bi-x-lg"})}):null]}),Object(j.jsx)("p",{className:"small mb-0",children:t})]})})]})})})})},I=function(e){var t=e.comments,a=e.onRemove;return t.map((function(e){return Object(j.jsx)(w,Object(l.a)(Object(l.a)({},e),{},{onRemove:a}),e._id)}))},y=a(11),_=function(e){var t=e.name,a=e.value,n=e.onChange,c=e.error;return Object(j.jsx)("div",{className:"mb-4",children:Object(j.jsxs)("div",{className:"input-group has-validation",children:[Object(j.jsx)("textarea",{id:t,name:t,value:a,onChange:function(e){var t=e.target;n({name:t.name,value:t.value})},className:"form-control"+(c?" is-invalid":"")}),c&&Object(j.jsx)("div",{className:"invalid-feedback ",children:c})]})})};_.defaultProps={type:"text"};var k=_,J={chatId:"",content:""},C=function(e){var t=e.onSubmit,a=Object(n.useState)(J),c=Object(o.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)({}),d=Object(o.a)(i,2),m=d[0],u=d[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s),r(J),u({})},children:[Object(j.jsx)(k,{value:s.content,onChange:function(e){r((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},e.name,e.value))}))},name:"content",label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",error:m.content}),Object(j.jsx)("div",{className:"d-flex justify-content-end",children:Object(j.jsx)("button",{className:"btn btn-primary",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})},D=I,F=function(){var e=S(),t=Object(i.h)().chatId,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1];Object(n.useEffect)((function(){return u.comments.fetchCommentsForChat(t).then((function(e){return r(e)})),window.addEventListener("storage",(function(){u.comments.fetchCommentsForChat(t).then((function(e){return r(e)}))})),function(){window.removeEventListener("storage",(function(){return alert("listenerremoved")}))}}),[]);var d=Object(O.orderBy)(s,["created_at"],["asc"]);return Object(j.jsx)(j.Fragment,{children:d&&Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("div",{className:"card-body",style:{maxHeight:"80%"},children:Object(j.jsx)(D,{comments:d,onRemove:function(e){u.comments.remove(e).then((function(e){r(s.filter((function(t){return t._id!==e})))}))}})}),Object(j.jsx)("div",{className:"card-body ",children:Object(j.jsx)(C,{onSubmit:function(a){u.comments.add(Object(l.a)(Object(l.a)({},a),{},{pageId:t,userId:e._id})).then((function(e){return r([].concat(Object(h.a)(s),[e]))}))}})})]})})},B=function(){var e=S();return Object(j.jsx)("ul",{className:"nav",children:e?Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(b.b,{className:"nav-link ","aria-current":"page",to:"/chats",children:"Rooms"})}):null})},P=function(e){var t=e.chatId,a=Object(n.useState)(),c=Object(o.a)(a,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){u.chats.getById(t).then((function(e){return r(e)}))}),[]),s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(B,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row gutters-sm",children:[Object(j.jsx)("div",{className:"col-md-4 mb-3",children:Object(j.jsx)(g,{chat:s})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)(F,{})})]})})]}):Object(j.jsx)("div",{className:"chat-list",children:"Loading..."})},E=function(){var e=Object(i.h)().chatId;return Object(j.jsx)(j.Fragment,{children:e?Object(j.jsx)(P,{chatId:e}):Object(j.jsx)(f,{})})};var M=function(e){var t=e.label,a=e.type,c=e.name,s=e.value,r=e.onChange,i=e.error,l=Object(n.useState)(!1),d=Object(o.a)(l,2),m=d[0],u=d[1];return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:c,children:t}),Object(j.jsxs)("div",{className:"input-group has-validation",children:[Object(j.jsx)("input",{type:m?"text":a,id:c,name:c,value:s,onChange:function(e){var t=e.target;r({name:t.name,value:t.value})},className:"form-control"+(i?" is-invalid":"")}),"password"===a&&Object(j.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){u((function(e){return!e}))},children:Object(j.jsx)("i",{className:"bi bi-eye"+(m?"-slash":"")})}),i&&Object(j.jsx)("div",{className:"invalid-feedback",children:i})]})]})};M.defaultProps={type:"text"};var R=M;var L=function(e){var t=e.label,a=e.value,n=e.onChange,c=e.defaultOption,s=e.options,r=e.error,i=e.name,o=Array.isArray(s)||"object"!==typeof s?s:Object.values(s);return Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("label",{htmlFor:i,className:"form-label",children:t}),Object(j.jsxs)("select",{className:"form-select"+(r?" is-invalid":""),id:i,name:i,value:a,onChange:function(e){var t=e.target;n({name:t.name,value:t.value})},children:[Object(j.jsx)("option",{disabled:!0,value:"",children:c}),o.length>0&&o.map((function(e){return Object(j.jsx)("option",{value:e.value,children:e.label},e.value)}))]}),r&&Object(j.jsx)("div",{className:"invalid-feedback",children:r})]})},A=function(){var e=Object(n.useState)({name:"",chatId:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(i.g)(),r=Object(n.useState)({}),d=Object(o.a)(r,2),m=d[0],b=d[1],f=Object(n.useState)({}),g=Object(o.a)(f,2),h=g[0],O=g[1];Object(n.useEffect)((function(){u.chats.fetchAll().then(O)}),[]);var v=h&&Object.keys(h).map((function(e){return{label:h[e].name,value:h[e]._id}})),x=function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},e.name,e.value))})),console.log(a)},p={name:{isRequired:{message:"Name is required"},min:{message:"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0438\u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:3}}};Object(n.useEffect)((function(){S()}),[a]);var S=function(){var e=function(e,t){var a={};function n(e,t,a){var n;switch(e){case"isRequired":n="boolean"===typeof t?!t:""===t.trim();break;case"isEmail":n=!/^\S+@\S+\.\S+$/g.test(t);break;case"isCapitalSymbol":n=!/[A-Z]+/g.test(t);break;case"isContainDigit":n=!/\d+/g.test(t);break;case"min":n=t.length<a.value}if(n)return a.message}for(var c in e)for(var s in t[c]){var r=n(s,e[c],t[c][s]);r&&!a[c]&&(a[c]=r)}return a}(a,p);return b(e),0===Object.keys(e).length},w=0===Object.keys(m).length;return Object(j.jsx)("div",{className:"container mt-5",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3 shadow p-4 bg-light",children:[Object(j.jsx)("h4",{className:"mb-3",children:"Registration"}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),S()){var t=Object(l.a)(Object(l.a)({},a),{},{image:"https://avatars.dicebear.com/api/avataaars/".concat((Math.random()+1).toString(36).substring(7),".svg"),created_at:Date.now(),_id:Math.random().toString(36).substr(2,9)});console.log(t,"registrationData"),s.push("/chats/".concat(a.chatId)),N(t),function(e){new Promise((function(t){window.setTimeout((function(){var a=JSON.parse(localStorage.getItem("users")),n=Object(l.a)(Object(l.a)({},e),{},{created_at:Date.now()});a.push(n),localStorage.setItem("users",JSON.stringify(a)),t(n)}),200)}))}(t)}},children:[Object(j.jsx)(R,{label:"Name",name:"name",value:a.name,onChange:x,error:m.name}),Object(j.jsx)(L,{label:"Room",onChange:x,options:v,name:"chatId",value:a.chatId,defaultOption:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442",error:m.chatId}),Object(j.jsx)("button",{className:"btn btn-primary w-100 mx-auto",type:"submit",disabled:!w,children:"Enter"})]})]})})})},H=function(){var e=S(),t=Object(i.g)();return Object(j.jsxs)(j.Fragment,{children:[" ",e?t.push("/chats"):Object(j.jsx)(A,{})]})},T=function(){var e=Object(i.g)(),t=S();return console.log(t),t&&e.push("/chats"),Object(j.jsx)("div",{className:"my-5",children:Object(j.jsx)(A,{})})};var q=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/chats/:chatId?/:edit?",component:E}),Object(j.jsx)(i.b,{path:"/register",component:T}),Object(j.jsx)(i.b,{path:"/",exact:!0,component:H}),Object(j.jsx)(i.a,{to:"/"})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b.a,{basename:"/webChat",children:Object(j.jsx)(q,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c3d108f8.chunk.js.map