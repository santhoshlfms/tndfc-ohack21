(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5531:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var a=s(7294),t=s(44),i=s(9282),c=s(1163),r=(s(9024),s(5893));function l(n){var e=(0,a.useState)([]),s=(e[0],e[1],n.data),l=n.pending,o=(0,c.useRouter)(),u=[{name:"Mobile no",selector:function(n){return n.mobileNo},sortable:!0},{name:"Name",selector:function(n){return n.name},sortable:!0},{name:"Disability",selector:function(n){return n.disability},sortable:!0},{name:"Education",selector:function(n){return n.education}},{name:"Type",selector:function(n){return d(n).toString()}},{name:"Status",selector:function(n){return f(n).toString()}},{name:"",cell:function(n){return(0,r.jsx)("button",{onClick:function(){return x(n)},children:"View "})},ignoreRowClick:!0,button:!0}],d=function(n){var e=[];return"jobApplication"in n&&e.push("JOB"),e},f=function(n){var e=[];return"jobApplication"in n&&e.push("JOB - "+n.jobApplication.status),e},x=function(n){var e,s;o.replace(null!==(e=null===(s=o.query)||void 0===s?void 0:s.next)&&void 0!==e?e:"/dashboard/application/".concat(n.mobileNo))};return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("hr",{}),(0,r.jsxs)(i.Z,{data:s,className:"btn btn-xs btn-warning",children:[" ","Export Csv"," "]}),(0,r.jsx)(t.ZP,{columns:u,data:s,pagination:!0,defaultSortAsc:!1,progressPending:l,expandableRows:!0,expandableRowsComponent:function(n){var e=n.data;return(0,r.jsx)("pre",{children:JSON.stringify(e,null,2)})},highlightOnHover:!0,noHeader:!0})]})}},3057:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return i}});var a=s(9008),t=s(5893);function i(n){n.desc;var e=n.title;return(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:null!==e&&void 0!==e?e:"TNDFC"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"../plugins/fontawesome-free/css/all.min.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"../css/adminlte.css"})]})}},6891:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return f}});var a=s(266),t=s(809),i=s.n(t),c=s(6690),r=s(4145),l=s(1163),o=s(5675),u=s(1664),d=s(5893);function f(){(0,r.a)().currentUser;var n=function(){var n=(0,a.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.w7)((0,c.v0)());case 2:l.default.replace("/");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,d.jsxs)("nav",{className:"main-header navbar navbar-expand navbar-white navbar-light",children:[(0,d.jsxs)("ul",{className:"navbar-nav",children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(u.default,{href:"#",children:(0,d.jsx)("a",{className:"nav-link","data-widget":"pushmenu",role:"button",children:(0,d.jsx)(o.default,{src:"/img/original_logo.jpeg",layout:"fill"})})})}),(0,d.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,d.jsx)(u.default,{href:"/dashboard",children:(0,d.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,d.jsx)("li",{className:"nav-item d-none d-sm-inline-block",children:(0,d.jsx)(u.default,{href:"/dashboard/users",children:(0,d.jsx)("a",{className:"nav-link",children:"Users"})})})]}),(0,d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(u.default,{href:"#",children:(0,d.jsx)("a",{className:"nav-link","data-widget":"control-sidebar","data-slide":"true",role:"button",onClick:n,children:(0,d.jsx)("i",{className:"fas fa-sign-out-alt"})})})}),(0,d.jsx)("li",{className:"nav-item",children:(0,d.jsx)(u.default,{href:"#",children:(0,d.jsx)("a",{className:"nav-link",role:"button",onClick:function(){console.log("handle")},children:(0,d.jsx)("i",{className:"fas fa-th-large"})})})})]})]})}},6429:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return r}});var a=s(6311),t=s(7294),i=s(286),c=(s(6412),s(8513),s(5893));function r(n){var e=t.useState(!1),s=(0,a.Z)(e,2),r=s[0],l=(s[1],t.useState([])),o=(0,a.Z)(l,2),u=o[0],d=o[1],f=function(e){var s=u,a=e.value;-1===s.indexOf(a)?s.push(a):s.splice(s.indexOf(a),1),d(s),n.filterStatus(u)},x={startDate:new Date,endDate:new Date,key:"selection"};return(0,c.jsxs)("div",{children:["Reports",(0,c.jsx)("div",{className:"form-inline",children:[{id:1,value:"APPROVED"},{id:2,value:"DECLINED"},{id:3,value:"NEW"},{id:4,value:"MORE_INFO"}].map((function(n,e){return(0,c.jsxs)("div",{className:"custom-control custom-checkbox",children:[(0,c.jsx)("input",{className:"custom-control-input custom-control-input-success custom-control-input-outline ml-2",type:"checkbox",id:"customCheckbox".concat(n.id),value:n.id,onChange:function(){f(n)}},n.id),(0,c.jsxs)("label",{htmlFor:"customCheckbox".concat(n.id),className:"custom-control-label mr-2  ",children:[n.value," "]})]},e)}))}),(0,c.jsx)("div",{className:"row",children:r?(0,c.jsx)(i.Dw,{ranges:[x],onChange:f}):null})]})}},2595:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return t}});var a=s(5893);function t(n){var e=n.total,s=n.pending,t=n.completed,i=n.actionNeeded;return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-3 col-sm-6 col-12",children:(0,a.jsxs)("div",{className:"info-box",children:[(0,a.jsx)("span",{className:"info-box-icon bg-info",children:(0,a.jsx)("i",{className:"far fa-envelope"})}),(0,a.jsxs)("div",{className:"info-box-content",children:[(0,a.jsx)("span",{className:"info-box-text",children:"Total Application"}),(0,a.jsx)("span",{className:"info-box-number",children:e})]})]})}),(0,a.jsx)("div",{className:"col-md-3 col-sm-6 col-12",children:(0,a.jsxs)("div",{className:"info-box",children:[(0,a.jsx)("span",{className:"info-box-icon bg-success",children:(0,a.jsx)("i",{className:"far fa-flag"})}),(0,a.jsxs)("div",{className:"info-box-content",children:[(0,a.jsx)("span",{className:"info-box-text",children:"Completed"}),(0,a.jsx)("span",{className:"info-box-number",children:t})]})]})}),(0,a.jsx)("div",{className:"col-md-3 col-sm-6 col-12",children:(0,a.jsxs)("div",{className:"info-box",children:[(0,a.jsx)("span",{className:"info-box-icon bg-warning",children:(0,a.jsx)("i",{className:"far fa-copy"})}),(0,a.jsxs)("div",{className:"info-box-content",children:[(0,a.jsx)("span",{className:"info-box-text",children:"Pending"}),(0,a.jsx)("span",{className:"info-box-number",children:s})]})]})}),(0,a.jsx)("div",{className:"col-md-3 col-sm-6 col-12",children:(0,a.jsxs)("div",{className:"info-box",children:[(0,a.jsx)("span",{className:"info-box-icon bg-danger",children:(0,a.jsx)("i",{className:"far fa-star"})}),(0,a.jsxs)("div",{className:"info-box-content",children:[(0,a.jsx)("span",{className:"info-box-text",children:"Action Needed"}),(0,a.jsx)("span",{className:"info-box-number",children:i})]})]})})]})}},3707:function(n,e,s){"use strict";s.r(e);var a=s(266),t=s(809),i=s.n(t),c=s(7294),r=s(2720),l=s(1163),o=s(6486),u=s.n(o),d=s(3057),f=s(6891),x=s(2595),m=s(5531),h=s(6429),j=s(1591),p=s(5893);e.default=function(){var n=(0,c.useState)([]),e=n[0],s=n[1],t=(0,c.useState)(!0),o=t[0],v=t[1],b=(0,c.useState)(0),N=b[0],g=b[1],k=(0,c.useState)(0),w=k[0],y=k[1],S=(0,c.useState)(0),E=S[0],C=S[1],O=(0,c.useState)(0),_=O[0],A=O[1],D=function(){var n=(0,a.Z)(i().mark((function n(){var e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.PL)((0,j.IO)((0,j.hJ)((0,j.ad)(),"application")));case 2:e=n.sent,a=[],e.forEach((function(n){a.push(n.data())})),s(a),g(a.length),y(u().countBy(a,(function(n){return"APPROVED"===n.jobApplication.status})).true||0),A(u().countBy(a,(function(n){return"MORE_INFO"===n.jobApplication.status})).true||0),C(u().countBy(a,(function(n){return"NEW"===n.jobApplication.status})).true||0),v(!1);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){var n=(0,r.v0)();(0,r.Aj)(n,(function(n){n||l.default.replace("/"),D()}))}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(d.default,{}),(0,p.jsxs)("div",{className:"wrapper",children:[(0,p.jsx)(f.default,{}),(0,p.jsx)("div",{className:"container mt-2",children:(0,p.jsx)(x.default,{total:N,pending:E,completed:w,actionNeeded:_})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"container mt-2",children:(0,p.jsx)(h.default,{filterStatus:function(n){if(n.length>0){var a=e.filter((function(e){return n.every((function(n){return n==e.jobApplication.status}))}));s(a)}else D()},datesFilter:function(n){}})}),(0,p.jsx)(m.default,{data:e,pending:o})]})]})]})}},5158:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(3707)}])},9008:function(n,e,s){n.exports=s(639)}},function(n){n.O(0,[774,662,640,677,352,888,179],(function(){return e=5158,n(n.s=e);var e}));var e=n.O();_N_E=e}]);