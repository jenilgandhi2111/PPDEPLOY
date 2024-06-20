"use strict";(self.webpackChunkjenil_keval_rikin_template=self.webpackChunkjenil_keval_rikin_template||[]).push([[26],{73356:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(1413),o=t(15861),i=t(70885),a=t(87757),s=t.n(a),c=t(52515),l=t(72585),u=t(89426),d=t(23142),f=t(14872),p=t(72791),v=t(23735),h=t(34363),y=t(56960),m=t(77751),Z=t(33915),b=t(85909),x=t(80184);function k(){var e=p.useState(!1),r=(0,i.Z)(e,2),t=r[0],a=r[1],k=function(){return a(!1)},j=(0,p.useState)({Subject:"",Header:"",Body:""}),g=(0,i.Z)(j,2),P=g[0],S=g[1],w=function(){var e=(0,o.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(!0),""!=P.Passed_out_year&&""!=P.Subject&&""!=P.Header&&""!=P.Body){e.next=5;break}y.Am.error("All fields are compulsary."),e.next=10;break;case 5:return e.next=7,(0,h.Z)("/student/sendStudentsBatchMailNotification/",P,"POST");case 7:r=e.sent,console.log("email status : ",r),null!==r&&void 0!==r&&r.status?y.Am.success(null===r||void 0===r?void 0:r.data):y.Am.error(null===r||void 0===r?void 0:r.data);case 10:k();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsxs)(v.Z,{title:"Send Batch Mail Notification",children:[(0,x.jsx)(c.Z,{open:t,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsx)(l.Z,{style:{position:"absolute",top:"50%",left:"50%",bgcolor:"background.paper",boxShadow:24,p:4},color:"primary"})}),(0,x.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(u.ZP,{item:!0,md:12,xs:12,children:(0,x.jsx)(Z.Z,{dateAdapter:m.Z,children:(0,x.jsx)(b.Z,{views:["year"],label:"Passed Out Year",value:P.Passed_out_year,onChange:function(e){S((0,n.Z)((0,n.Z)({},P),{},{Passed_out_year:e}))},renderInput:function(e){return(0,x.jsx)(d.Z,(0,n.Z)((0,n.Z)({fullWidth:!0},e),{},{helperText:null}))}})})}),(0,x.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,x.jsx)(d.Z,{value:P.Subject,onChange:function(e){S((0,n.Z)((0,n.Z)({},P),{},{Subject:e.target.value}))},fullWidth:!0,label:"Subject"})}),(0,x.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,x.jsx)(d.Z,{value:P.Header,onChange:function(e){S((0,n.Z)((0,n.Z)({},P),{},{Header:e.target.value}))},fullWidth:!0,label:"Header"})}),(0,x.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,x.jsx)(d.Z,{value:P.Body,onChange:function(e){S((0,n.Z)((0,n.Z)({},P),{},{Body:e.target.value}))},fullWidth:!0,label:"Body",rows:5,maxRows:4,multiline:!0})})]}),(0,x.jsx)("br",{}),(0,x.jsx)(f.Z,{onClick:function(){return w()},variant:"contained",children:"Send Mail"}),(0,x.jsx)("p",{children:"Note: Mail will be sent to all students having passed out year as selected above. Sending mail might take a while."}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{})]})}},72585:function(e,r,t){t.d(r,{Z:function(){return R}});var n=t(30168),o=t(63366),i=t(87462),a=t(72791),s=(t(52007),t(28182)),c=t(80163),l=t(52554),u=t(43234),d=t(80085),f=t(94695),p=t(34923);function v(e){return(0,p.Z)("MuiCircularProgress",e)}(0,t(50782).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h,y,m,Z,b,x,k,j,g=t(80184),P=["className","color","disableShrink","size","style","thickness","value","variant"],S=44,w=(0,l.F4)(b||(b=h||(h=(0,n.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=(0,l.F4)(x||(x=y||(y=(0,n.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),_=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,r){var t=e.styleProps;return[r.root,r[t.variant],r["color".concat((0,u.Z)(t.color))]]}})((function(e){var r=e.styleProps,t=e.theme;return(0,i.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:t.palette[r.color].main})}),(function(e){return"indeterminate"===e.styleProps.variant&&(0,l.iv)(k||(k=m||(m=(0,n.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),w)})),M=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,r){return r.svg}})({display:"block"}),O=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,r){var t=e.styleProps;return[r.circle,r["circle".concat((0,u.Z)(t.variant))],t.disableShrink&&r.circleDisableShrink]}})((function(e){var r=e.styleProps,t=e.theme;return(0,i.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var r=e.styleProps;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(j||(j=Z||(Z=(0,n.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),R=a.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),n=t.className,a=t.color,l=void 0===a?"primary":a,f=t.disableShrink,p=void 0!==f&&f,h=t.size,y=void 0===h?40:h,m=t.style,Z=t.thickness,b=void 0===Z?3.6:Z,x=t.value,k=void 0===x?0:x,j=t.variant,w=void 0===j?"indeterminate":j,C=(0,o.Z)(t,P),R=(0,i.Z)({},t,{color:l,disableShrink:p,size:y,thickness:b,value:k,variant:w}),B=function(e){var r=e.classes,t=e.variant,n=e.color,o=e.disableShrink,i={root:["root",t,"color".concat((0,u.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,u.Z)(t)),o&&"circleDisableShrink"]};return(0,c.Z)(i,v,r)}(R),D={},N={},A={};if("determinate"===w){var H=2*Math.PI*((S-b)/2);D.strokeDasharray=H.toFixed(3),A["aria-valuenow"]=Math.round(k),D.strokeDashoffset="".concat(((100-k)/100*H).toFixed(3),"px"),N.transform="rotate(-90deg)"}return(0,g.jsx)(_,(0,i.Z)({className:(0,s.Z)(B.root,n),style:(0,i.Z)({width:y,height:y},N,m),styleProps:R,ref:r,role:"progressbar"},A,C,{children:(0,g.jsx)(M,{className:B.svg,styleProps:R,viewBox:"".concat(22," ").concat(22," ").concat(S," ").concat(S),children:(0,g.jsx)(O,{className:B.circle,style:D,styleProps:R,cx:S,cy:S,r:(S-b)/2,fill:"none",strokeWidth:b})})}))}))},43668:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(61120),o=t(78814);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=t(97326);function s(e,r){if(r&&("object"===i(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(e)}function c(e){var r=(0,o.Z)();return function(){var t,o=(0,n.Z)(e);if(r){var i=(0,n.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return s(this,t)}}},61120:function(e,r,t){function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.d(r,{Z:function(){return n}})},60136:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(89611);function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&(0,n.Z)(e,r)}},78814:function(e,r,t){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=26.f9dce678.chunk.js.map