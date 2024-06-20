"use strict";(self.webpackChunkjenil_keval_rikin_template=self.webpackChunkjenil_keval_rikin_template||[]).push([[2115],{34684:function(e,t){t.Z={admin:{student:{add_student:{browse_file:"Browse File",add_student:"Add Student Details"},edit_student:{header:"Edit Student",update:"update",update_placement:"Update Placement",update_internship:"Update Internship"},batch_update:{header:"Update Student Details",browse_file:"Browse File",update_student_btn:"Submit"},view_student:{title:"View Student Details",delete_message:"Are, you really sure want to delete this student?"},student_passwords:{title:"Student First Time Passwords",btn_send_passwords:"Send Passwords",note:"Note: Sending passwords might take a while!"},student_profile:{header:"Student Profile",view_cv:"View CV",view_photo:"View Photo",student_skills:{header:"Student Skills",no_skill_message:{message:"No student skills added yet",variant:"h2"}},internships:{header:"Internships",no_internship_message:{message:"No student internships added yet",variant:"h2"}},projects:{header:"Projects",no_projects_message:{message:"No student projects added yet",variant:"h2"}}}},company:{view_company:{header:"View Company",edit_company:"Edit Company"},edit_company:{header:"Edit Company",update_button:"update"},add_company:{header:"Add Company",add_button:"Add Company"}}},student:{Profile:{placements:{Header:"Placements from college",no_placements_message:{message:"No student placements added yet",variant:"h2"}},internships:{Header:"Internships from college",no_internships_message:{message:"No student internships added yet",variant:"h2"}}}}}},18172:function(e,t,n){n.d(t,{Z:function(){return i}});var r=function(e){var t=e.HandleToast.toast,n=e.data,r=e.HandleToast.flag,a=e.HandleToast.customMessage,s="not defined";s=r?a:n.data,n.status?t.success(s):t.error(s)},a=n(79271),s=function(e){var t=(0,a.useHistory)(),n=e.data;n.redirect&&t.push(n.redirectUrl)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[[s,r],[r]];n[t].forEach((function(t){t(e)}))}},30221:function(e,t,n){var r=n(15861),a=n(87757),s=n.n(a),i=(n(72791),function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a,i,o,d,c,l=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in r=l.length>2&&void 0!==l[2]?l[2]:"POST",e.prev=1,a=new FormData,i=Object.keys(n))a.append(i[o],n[i[o]]);return console.log({method:r,headers:{Accept:"application/json"},body:a}),e.next=8,fetch(t,{method:r,headers:{Accept:"application/json"},body:a});case 8:return d=e.sent,e.next=11,d.json();case 11:return c=e.sent,e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.toString());case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n){return e.apply(this,arguments)}}());t.Z=i},12115:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(15861),a=n(70885),s=n(87757),i=n.n(s),o=n(72791),d=n(23735),c=n(14872),l=n(49143),u=n(13239),p=n(47630),f=n(30221),m=n(56960),h=n(18172),v=(n(18421),n(34684)),g=n(80184),y=(0,p.ZP)("input")({display:"none"});function k(){var e=o.useState(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],p=function(){return s(!0)},k=function(){return s(!1)},_=(0,o.useState)({}),b=(0,a.Z)(_,2),x=b[0],Z=b[1];(0,o.useEffect)((function(){}),[x]);function w(){return(w=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(),"{}"!=JSON.stringify(x)){e.next=5;break}m.Am.error("Please upload a file."),e.next=10;break;case 5:return e.next=7,(0,f.Z)("/student/addStudent",x,"POST");case 7:t=e.sent,n={data:t,HandleToast:{toast:m.Am,flag:!1}},(0,h.Z)(n,1);case 10:k();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,g.jsxs)(d.Z,{title:v.Z.admin.student.add_student.add_student,children:[(0,g.jsx)(l.Z,{open:n,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,g.jsx)(u.Z,{style:{position:"absolute",top:"50%",left:"50%",bgcolor:"background.paper",boxShadow:24,p:4},color:"primary"})}),(0,g.jsxs)("form",{enctype:"multipart/form-data",children:[(0,g.jsxs)("label",{htmlFor:"contained-button-file",children:[(0,g.jsx)(y,{onChange:function(e){return function(e){document.getElementById("fileUploadDetails").innerText=e.target.files[0].name;var t=e.target.files[0];console.log(t);var n=x;n.Student_Details_File=t,Z(n)}(e)},required:!0,accept:".xlsx, .xls, .csv",id:"contained-button-file",multiple:!0,type:"file"}),(0,g.jsx)(c.Z,{variant:"outlined",component:"span",children:v.Z.admin.student.add_student.browse_file})," ",(0,g.jsx)("label",{id:"fileUploadDetails"})]}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(c.Z,{onClick:function(){return w.apply(this,arguments)},variant:"contained",size:"large",color:"primary",children:"Submit"})]})]})}},13239:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(30168),a=n(63366),s=n(87462),i=n(72791),o=(n(52007),n(28182)),d=n(90767),c=n(52554),l=n(14036),u=n(93736),p=n(47630),f=n(95159);function m(e){return(0,f.Z)("MuiCircularProgress",e)}(0,n(30208).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h,v,g,y,k,_,b,x,Z=n(80184),w=["className","color","disableShrink","size","style","thickness","value","variant"],S=44,j=(0,c.F4)(k||(k=h||(h=(0,r.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),P=(0,c.F4)(_||(_=v||(v=(0,r.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),C=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["color".concat((0,l.Z)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme;return(0,s.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:n.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,c.iv)(b||(b=g||(g=(0,r.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),j)})),D=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),N=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var n=e.ownerState;return[t.circle,t["circle".concat((0,l.Z)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,n=e.theme;return(0,s.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,c.iv)(x||(x=y||(y=(0,r.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),P)})),F=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCircularProgress"}),r=n.className,i=n.color,c=void 0===i?"primary":i,p=n.disableShrink,f=void 0!==p&&p,h=n.size,v=void 0===h?40:h,g=n.style,y=n.thickness,k=void 0===y?3.6:y,_=n.value,b=void 0===_?0:_,x=n.variant,j=void 0===x?"indeterminate":x,P=(0,a.Z)(n,w),F=(0,s.Z)({},n,{color:c,disableShrink:f,size:v,thickness:k,value:b,variant:j}),M=function(e){var t=e.classes,n=e.variant,r=e.color,a=e.disableShrink,s={root:["root",n,"color".concat((0,l.Z)(r))],svg:["svg"],circle:["circle","circle".concat((0,l.Z)(n)),a&&"circleDisableShrink"]};return(0,d.Z)(s,m,t)}(F),A={},T={},H={};if("determinate"===j){var E=2*Math.PI*((S-k)/2);A.strokeDasharray=E.toFixed(3),H["aria-valuenow"]=Math.round(b),A.strokeDashoffset="".concat(((100-b)/100*E).toFixed(3),"px"),T.transform="rotate(-90deg)"}return(0,Z.jsx)(C,(0,s.Z)({className:(0,o.Z)(M.root,r),style:(0,s.Z)({width:v,height:v},T,g),ownerState:F,ref:t,role:"progressbar"},H,P,{children:(0,Z.jsx)(D,{className:M.svg,ownerState:F,viewBox:"".concat(22," ").concat(22," ").concat(S," ").concat(S),children:(0,Z.jsx)(N,{className:M.circle,style:A,ownerState:F,cx:S,cy:S,r:(S-k)/2,fill:"none",strokeWidth:k})})}))}))},14036:function(e,t,n){var r=n(27312);t.Z=r.Z}}]);
//# sourceMappingURL=2115.06de3fef.chunk.js.map