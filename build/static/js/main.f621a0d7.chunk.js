(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(11),c=n.n(r),i=n(2),o=n.n(i),d=n(5),l=n(10),u=n(3),m=n(14),j=n(0),b=function(e){return c.a.createPortal(Object(j.jsx)("div",{className:"modal fade",id:e.modalId,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:e.title}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:e.children})]})})}),document.querySelector("#portal-modal-container"))},p=n.p+"static/media/bell.e23eae67.svg",h=n.p+"static/media/cross.209f13dc.svg",x=n.p+"static/media/add.0b0d305a.svg";function f(e){if(e.reminderIsSet){var t=new Date(e.reminderTime).toLocaleTimeString();return Object(j.jsxs)("div",{className:"reminder-container "+e.reminderTime,children:[Object(j.jsx)("img",{src:p,alt:""}),Object(j.jsx)("span",{children:t})]})}return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{task:e.task}),Object(j.jsxs)("div",{className:"add-reminder-container","data-bs-toggle":"modal","data-bs-target":"#set-reminder-modal",children:[Object(j.jsx)("img",{src:x,alt:""}),Object(j.jsx)("span",{children:"Add"})]})]})}var O=function(e){var t=e.task,n=Object(a.useState)(" "),s=Object(l.a)(n,2),r=s[0],c=s[1],i=new Date,u=Object(a.useState)({"set-reminder-date":"".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate()),"set-reminder-time":"00:00"}),p=Object(l.a)(u,2),h=p[0],x=p[1],f=Object(a.useContext)(B),O=function(){var e=Object(d.a)(o.a.mark((function e(n){var a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=n.target["set-reminder-date"].value.split("-"),s=n.target["set-reminder-time"].value.split(":"),!((r=new Date(a[0],a[1]-1,a[2],s[0],s[1]).getTime())<=(new Date).getTime())){e.next=7;break}return c("Cannot set reminder in the past buddy!!"),e.abrupt("return",0);case 7:return i={reminder:{isSet:!0,reminderTime:r}},e.next=10,f.editTask({id:t._id,taskProperties:i});case 10:return document.querySelector("#set-reminder-modal .btn-close").click(),e.next=13,f.updateTasks();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target.getAttribute("id"),n=Object(m.a)({},h);n[t]=e.target.value,x(n)},v=Object(j.jsxs)("form",{onSubmit:function(e){O(e)},children:[Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"warning-text",children:r})}),Object(j.jsx)("input",{type:"time",name:"set-reminder-time",id:"set-reminder-time",value:h["set-reminder-time"],onChange:g}),Object(j.jsx)("input",{type:"date",name:"set-reminder-date",id:"set-reminder-date",value:h["set-reminder-date"],onChange:g}),Object(j.jsx)("input",{type:"submit",value:"Set",className:"btn btn-primary"})]});return Object(j.jsx)(b,{modalId:"set-reminder-modal",title:"Set Reminder",children:v})},g=function(e){var t=e.task,n=Object(a.useContext)(B),s=function(){var e=Object(d.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.editTask({id:t._id,taskProperties:{isCompleted:!t.isCompleted}});case 2:return e.sent,e.next=5,n.updateTasks();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:t._id,className:"task task-opacity",children:[Object(j.jsx)("div",{className:"is-completed",children:Object(j.jsx)("input",{type:"checkbox",name:"is-completed",id:"is-completed",checked:t.isCompleted,onChange:function(e){s(e)}})}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("span",{className:"title",children:t.title}),Object(j.jsx)("span",{className:"time",children:new Date(t.time).toLocaleTimeString()})]}),Object(j.jsx)(f,{reminderIsSet:t.reminder.isSet,reminderTime:t.reminder.reminderTime,task:t}),Object(j.jsx)("div",{className:"delete-icon",onClick:Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setIsFetching(!0),e.next=3,n.deleteTask(t._id);case 3:return e.next=5,n.updateTasks();case 5:case"end":return e.stop()}}),e)}))),children:Object(j.jsx)("img",{src:h,alt:""})})]})},v=n(39);var k=function(e){return Object(j.jsx)(v.a,{timeout:300,appear:!0,classNames:"example",children:Object(j.jsx)("div",{className:"task-list",children:0===e.tasks.length?Object(j.jsx)("span",{className:"no-tasks-warning",children:'"No tasks To fetch!!!"'}):e.tasks.map((function(e,t){if(t<10)return Object(j.jsx)(g,{task:e},e._id)}))})},Math.random())};var w=function(e){return Object(j.jsxs)("div",{className:"tasklist-header",children:[Object(j.jsxs)("span",{className:"heading",children:[Object(j.jsx)("span",{children:"Task"}),Object(j.jsx)("span",{children:"List"})]}),Object(j.jsx)("button",{className:"add-btn","data-bs-toggle":"modal","data-bs-target":"#add-task-modal",children:Object(j.jsx)("img",{src:x,alt:""})})]})},T=n(18),y=n.n(T),S=function(e){var t=Object(a.useContext)(B),n=Object(a.useState)({title:"",time:"00:00",setReminder:!1,reminderTime:"00:00"}),s=Object(l.a)(n,2),r=s[0],c=s[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),p=u[0],h=u[1];function x(e,t,n,a,s){return new Date(e,t,n,a,s).getTime()}var f=function(){var e=Object(d.a)(o.a.mark((function e(n){var a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=new Date,s=x(a.getFullYear(),a.getMonth(),a.getDate(),r.time.split(":")[0],r.time.split(":")[1]),""!==(i={title:r.title,isCompleted:!1,time:s,reminder:{isSet:r.setReminder,reminderTime:x(a.getFullYear(),a.getMonth(),a.getDate(),n.target["reminder-time"].value.split(":")[0],n.target["reminder-time"].value.split(":")[1])}}).title.trim()){e.next=8;break}h("Please enter a valid title!!"),e.next=24;break;case 8:if(!(i.time<(new Date).getTime()+5e3)){e.next=12;break}h("Please enter a valid time!!"),e.next=24;break;case 12:if(!(i.reminder.isSet&&i.reminder.reminderTime<(new Date).getTime()+5e3)){e.next=16;break}h("Please enter a valid reminder time!!"),e.next=24;break;case 16:return console.log({dataToSend:i}),e.next=19,t.addTask(i);case 19:return document.querySelector("#add-task-modal .btn-close").click(),e.next=22,t.updateTasks();case 22:h(""),c({title:"",time:"00:00",setReminder:!1,reminderTime:"00:00"});case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target.getAttribute("id"),n=Object(m.a)({},r);n[t]="setReminder"===t?e.target.checked:e.target.value,c(n),console.log({formData:r})};new y.a("#portal-modal-container");return Object(j.jsxs)(b,{modalId:"add-task-modal",title:"Add a Task",children:[Object(j.jsx)("div",{className:"warning-text",children:p}),Object(j.jsxs)("form",{onSubmit:function(e){f(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Title",id:"title",className:"form-control",value:r.title,onChange:function(e){O(e)}}),Object(j.jsx)("label",{htmlFor:"time",children:"Time"}),Object(j.jsx)("input",{type:"time",name:"time",id:"time",value:r.time,onChange:function(e){O(e)}}),Object(j.jsxs)("div",{className:"set-reminder",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",name:"set-reminder",id:"setReminder",className:"form-check-input",checked:r.setReminder,onChange:function(e){O(e)}}),Object(j.jsx)("label",{htmlFor:"setReminder",children:"Set Reminder"})]}),Object(j.jsx)("input",{disabled:!r.setReminder,type:"time",name:"reminder-time",id:"reminderTime",value:r.reminderTime,onChange:function(e){O(e)}})]}),Object(j.jsx)("input",{type:"submit",value:"Add",id:"add-btn",className:"btn btn-primary"})]})]})},N=n(12),C=n.p+"static/media/account.bb90f038.svg",I=function(e){var t=e.isLoggedIn,n=e.handleLogout;return Object(j.jsxs)("header",{className:"main-header",children:[Object(j.jsx)("div",{className:"links-container",children:t?Object(j.jsx)(N.b,{to:"/login",onClick:function(){n()},children:"Logout"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N.b,{to:"/login",children:"Login"}),Object(j.jsx)(N.b,{to:"/signup",children:"SignUP"})]})}),t&&Object(j.jsx)("div",{className:"account-details",children:Object(j.jsx)("img",{src:C,alt:""})})]})},D=n.p+"static/media/simple-cross.ecf96b3c.svg";var P=function(e){var t=e.show,n=e.message,a=e.setAlert;return Object(j.jsxs)("div",{className:"header-alert "+(t&&"show"),children:[n,Object(j.jsx)("img",{src:D,className:"close-alert-btn",alt:"",onClick:function(){a({message:"",show:!1})}})]})},F=function(e){return Object(j.jsx)("div",{className:"container  d-flex justify-content-center ",children:Object(j.jsxs)("form",{className:"p-5",onSubmit:function(t){t.preventDefault(),e.handleSubmit({username:t.target.username.value,password:t.target.password.value})},children:[Object(j.jsxs)("div",{class:"form-group mb-2",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Email address"}),Object(j.jsx)("input",{type:"text",class:"form-control",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username"})]}),Object(j.jsxs)("div",{class:"form-group mb-2",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",class:"form-control",id:"password",placeholder:"Password"})]}),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})},L=function(e){return Object(j.jsx)("div",{className:"container  d-flex justify-content-center ",children:Object(j.jsxs)("form",{className:"p-5",onSubmit:function(t){t.preventDefault(),e.handleSubmit({username:t.target.username.value,password:t.target.password.value,mobile:t.target.mobile.value})},children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",class:"form-control",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{htmlFor:"mobile",children:"Mobile Number"}),Object(j.jsx)("input",{type:"text",class:"form-control",id:"mobile","aria-describedby":"mobileHelp",placeholder:"Enter mobile"})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",class:"form-control",id:"password",placeholder:"Password"})]}),Object(j.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})})},E=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,s,r,c,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:Y,n=localStorage.getItem("auth-token"),a=t+"/tasks",s={method:"GET",headers:{"Content-Type":"application/json","auth-token":n}},e.next=6,fetch(a,s);case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r,c,i,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:Y,a=localStorage.getItem("auth-token"),s=n+"/tasks/"+t,r={method:"DELETE",headers:{"Content-Type":"application/json","auth-token":a}},e.next=6,fetch(s,r);case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r,c,i,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:Y,a=localStorage.getItem("auth-token"),s=n+"/tasks",r={method:"POST",headers:{"Content-Type":"application/json","auth-token":a},body:JSON.stringify(t)},e.next=6,fetch(s,r);case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,console.log(i),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r,c,i,d,l,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.taskProperties,s=u.length>1&&void 0!==u[1]?u[1]:Y,r=localStorage.getItem("auth-token"),c=s+"/tasks/"+n,i={method:"PATCH",headers:{"Content-Type":"application/json","auth-token":r},body:JSON.stringify(a)},e.next=7,fetch(c,i);case 7:return d=e.sent,e.next=10,d.json();case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r,c,i,d,l,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.mobile,s=t.password,r=u.length>1&&void 0!==u[1]?u[1]:Y,c=r+"/signup",i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,mobile:a,password:s})},e.next=6,fetch(c,i);case 6:return d=e.sent,e.next=9,d.json();case 9:return l=e.sent,console.log(l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r,c,i,d,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,s=l.length>1&&void 0!==l[1]?l[1]:Y,r=s+"/login",c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:a})},e.next=6,fetch(r,c);case 6:return i=e.sent,e.next=9,i.json();case 9:return d=e.sent,console.log(d),e.abrupt("return",d);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_={fetchTasks:E,deleteTask:R,addTask:A,editTask:M,addUser:J,loginUser:U},H=(n(36),n.p+"static/media/loader.4c586b4e.svg"),q=function(e){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("img",{src:H,alt:""})})},Y="https://schedulerserver404.herokuapp.com",B=(localStorage.getItem("auth-token"),s.a.createContext({}));var G=function(){var e=Object(a.useState)([!0]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),c=Object(l.a)(r,2),i=c[0],m=c[1],b=Object(a.useState)({show:!1,message:""}),p=Object(l.a)(b,2),h=p[0],x=p[1],f=Object(a.useState)([]),O=Object(l.a)(f,2),g=O[0],v=O[1],T=Object(u.f)(),y=Object(u.g)(),N=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,_.fetchTasks();case 3:t=e.sent,console.log({response:t}),t.success?(m(!0),v(t.tasks),setTimeout((function(){s(!1)}),400)):(t.invalidAuthToken&&T.push("/login"),s(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.next=3,_.loginUser({username:n,password:a});case 3:(s=e.sent).success?(localStorage.setItem("auth-token",s.authToken),T.push("/"),N(),m(!0),x({show:!1,message:""})):x({message:"Error : "+s.message,show:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,s=t.mobile,e.next=3,_.addUser({username:n,password:a,mobile:s});case 3:(r=e.sent).success?(localStorage.setItem("auth-token",r.authToken),T.push("/"),N(),m(!0),x({show:!1,message:""})):x({show:!0,message:r.message});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("auth-token",null),v([]),m(!1),x({show:!1,message:""});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){console.log(y.pathname),"/"==y.pathname&&(console.log("object"),N())}),[y]),Object(j.jsxs)(B.Provider,{value:{deleteTask:_.deleteTask,editTask:_.editTask,addTask:_.addTask,fetchTasks:_.fetchTasks,updateTasks:N,setIsFetching:s},children:[Object(j.jsx)(S,{}),Object(j.jsx)(P,{message:h.message,show:h.show,setAlert:x}),Object(j.jsx)(I,{isLoggedIn:i,setIsLoggedIn:m,handleLogout:E}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",children:i&&Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)(w,{}),n?Object(j.jsx)(q,{}):Object(j.jsx)(k,{tasks:g})]})}),Object(j.jsx)(u.a,{exact:!0,path:"/signup",children:Object(j.jsx)(L,{handleSubmit:D})}),Object(j.jsx)(u.a,{exact:!0,path:"/login",children:Object(j.jsx)(F,{handleSubmit:C})})]})]})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N.a,{children:Object(j.jsx)(G,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f621a0d7.chunk.js.map