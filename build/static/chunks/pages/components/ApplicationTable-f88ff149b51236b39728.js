(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{5531:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var o=e(7294),r=e(44),i=e(9282),a=e(1163),u=(e(9024),e(5893));function c(n){var t=(0,o.useState)([]),e=(t[0],t[1],n.data),c=n.pending,s=(0,a.useRouter)(),l=[{name:"Mobile no",selector:function(n){return n.mobileNo},sortable:!0},{name:"Name",selector:function(n){return n.name},sortable:!0},{name:"Disability",selector:function(n){return n.disability},sortable:!0},{name:"Education",selector:function(n){return n.education}},{name:"Type",selector:function(n){return p(n).toString()}},{name:"Status",selector:function(n){return d(n).toString()}},{name:"",cell:function(n){return(0,u.jsx)("button",{onClick:function(){return f(n)},children:"View "})},ignoreRowClick:!0,button:!0}],p=function(n){var t=[];return"jobApplication"in n&&t.push("JOB"),t},d=function(n){var t=[];return"jobApplication"in n&&t.push("JOB - "+n.jobApplication.status),t},f=function(n){var t,e;s.replace(null!==(t=null===(e=s.query)||void 0===e?void 0:e.next)&&void 0!==t?t:"/dashboard/application/".concat(n.mobileNo))};return(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("hr",{}),(0,u.jsxs)(i.Z,{data:e,className:"btn btn-xs btn-warning",children:[" ","Export Csv"," "]}),(0,u.jsx)(r.ZP,{columns:l,data:e,pagination:!0,defaultSortAsc:!1,progressPending:c,expandableRows:!0,expandableRowsComponent:function(n){var t=n.data;return(0,u.jsx)("pre",{children:JSON.stringify(t,null,2)})},highlightOnHover:!0,noHeader:!0})]})}},7270:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ApplicationTable",function(){return e(5531)}])},1163:function(n,t,e){n.exports=e(4651)}},function(n){n.O(0,[352,774,888,179],(function(){return t=7270,n(n.s=t);var t}));var t=n.O();_N_E=t}]);