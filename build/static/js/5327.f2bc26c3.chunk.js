"use strict";(self.webpackChunkjenil_keval_rikin_template=self.webpackChunkjenil_keval_rikin_template||[]).push([[5327],{18172:function(e,r,t){t.d(r,{Z:function(){return o}});var n=function(e){var r=e.HandleToast.toast,t=e.data,n=e.HandleToast.flag,a=e.HandleToast.customMessage,i="not defined";i=n?a:t.data,t.status?r.success(i):r.error(i)},a=t(79271),i=function(e){var r=(0,a.useHistory)(),t=e.data;t.redirect&&r.push(t.redirectUrl)},o=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[[i,n],[n]];t[r].forEach((function(r){r(e)}))}},30221:function(e,r,t){var n=t(15861),a=t(87757),i=t.n(a),o=(t(72791),function(){var e=(0,n.Z)(i().mark((function e(r,t){var n,a,o,s,c,l,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n=u.length>2&&void 0!==u[2]?u[2]:"POST",e.prev=1,a=new FormData,o=Object.keys(t))a.append(o[s],t[o[s]]);return console.log({method:n,headers:{Accept:"application/json"},body:a}),e.next=8,fetch(r,{method:n,headers:{Accept:"application/json"},body:a});case 8:return c=e.sent,e.next=11,c.json();case 11:return l=e.sent,e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.toString());case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(r,t){return e.apply(this,arguments)}}());r.Z=o},15327:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(15861),a=t(70885),i=t(87757),o=t.n(i),s=t(72791),c=t(23735),l=t(14872),u=t(47630),d=t(30221),f=t(56960),p=(t(18421),t(13239)),v=t(18172),h=t(49143),m=t(80184),x=(0,u.ZP)("input")({display:"none"});function k(){var e=s.useState(!1),r=(0,a.Z)(e,2),t=r[0],i=r[1],u=function(){return i(!0)},k=function(){return i(!1)},Z=(0,s.useState)({}),b=(0,a.Z)(Z,2),g=b[0],y=b[1];(0,s.useEffect)((function(){}),[g]);function S(){return(S=(0,n.Z)(o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(),"{}"!=JSON.stringify(g)){e.next=5;break}f.Am.error("Please upload a file."),e.next=10;break;case 5:return e.next=7,(0,d.Z)("/studentplacement/addStudentPlacementWithCSV",g,"POST");case 7:r=e.sent,t={data:r,HandleToast:{toast:f.Am,flag:!1}},(0,v.Z)(t,1);case 10:k();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,m.jsxs)(c.Z,{title:"Add Student Placement Via CSV",children:[(0,m.jsx)(h.Z,{open:t,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsx)(p.Z,{style:{position:"absolute",top:"50%",left:"50%",bgcolor:"background.paper",p:4,border:"0px solid white"},color:"primary"})}),(0,m.jsxs)("form",{enctype:"multipart/form-data",children:[(0,m.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,m.jsx)(x,{onChange:function(e){return function(e){document.getElementById("fileUploadDetails").innerText=e.target.files[0].name;var r=e.target.files[0];console.log(r);var t=g;t.Student_Placement_Details_File=r,y(t)}(e)},required:!0,accept:".xlsx, .xls, .csv",id:"contained-button-file",multiple:!0,type:"file"}),(0,m.jsx)(l.Z,{variant:"outlined",component:"span",children:"Browse File"})," ",(0,m.jsx)("label",{id:"fileUploadDetails"})]}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)(l.Z,{onClick:function(){return S.apply(this,arguments)},variant:"contained",size:"large",color:"primary",children:"Submit"})]})]})}},13239:function(e,r,t){t.d(r,{Z:function(){return F}});var n=t(30168),a=t(63366),i=t(87462),o=t(72791),s=(t(52007),t(28182)),c=t(90767),l=t(52554),u=t(14036),d=t(93736),f=t(47630),p=t(95159);function v(e){return(0,p.Z)("MuiCircularProgress",e)}(0,t(30208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h,m,x,k,Z,b,g,y,S=t(80184),j=["className","color","disableShrink","size","style","thickness","value","variant"],w=44,P=(0,l.F4)(Z||(Z=h||(h=(0,n.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=(0,l.F4)(b||(b=m||(m=(0,n.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),D=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],r["color".concat((0,u.Z)(t.color))]]}})((function(e){var r=e.ownerState,t=e.theme;return(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:t.palette[r.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,l.iv)(g||(g=x||(x=(0,n.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),M=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),_=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var t=e.ownerState;return[r.circle,r["circle".concat((0,u.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.ownerState,t=e.theme;return(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.ownerState;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(y||(y=k||(k=(0,n.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),F=o.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),n=t.className,o=t.color,l=void 0===o?"primary":o,f=t.disableShrink,p=void 0!==f&&f,h=t.size,m=void 0===h?40:h,x=t.style,k=t.thickness,Z=void 0===k?3.6:k,b=t.value,g=void 0===b?0:b,y=t.variant,P=void 0===y?"indeterminate":y,C=(0,a.Z)(t,j),F=(0,i.Z)({},t,{color:l,disableShrink:p,size:m,thickness:Z,value:g,variant:P}),T=function(e){var r=e.classes,t=e.variant,n=e.color,a=e.disableShrink,i={root:["root",t,"color".concat((0,u.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(t)),a&&"circleDisableShrink"]};return(0,c.Z)(i,v,r)}(F),N={},A={},H={};if("determinate"===P){var R=2*Math.PI*((w-Z)/2);N.strokeDasharray=R.toFixed(3),H["aria-valuenow"]=Math.round(g),N.strokeDashoffset="".concat(((100-g)/100*R).toFixed(3),"px"),A.transform="rotate(-90deg)"}return(0,S.jsx)(D,(0,i.Z)({className:(0,s.Z)(T.root,n),style:(0,i.Z)({width:m,height:m},A,x),ownerState:F,ref:r,role:"progressbar"},H,C,{children:(0,S.jsx)(M,{className:T.svg,ownerState:F,viewBox:"".concat(22," ").concat(22," ").concat(w," ").concat(w),children:(0,S.jsx)(_,{className:T.circle,style:N,ownerState:F,cx:w,cy:w,r:(w-Z)/2,fill:"none",strokeWidth:Z})})}))}))},14036:function(e,r,t){var n=t(27312);r.Z=n.Z}}]);
//# sourceMappingURL=5327.f2bc26c3.chunk.js.map