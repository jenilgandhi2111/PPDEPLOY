"use strict";(self.webpackChunkjenil_keval_rikin_template=self.webpackChunkjenil_keval_rikin_template||[]).push([[6566],{7357:function(n,e){e.Z=function(n){return""==n||void 0==n||null==n?"Not Defined!":n}},2503:function(n,e,t){var r=t(1413),a=t(72791),i=t(58173),o=t(68843),c=t(31628),s=t(23735),l=t(93328),d=t(80184);e.Z=function(n){n.type;var e=(0,i.Z)((function(e){return{card:{backgroundColor:void 0===n.type?e.palette.primary.main:e.palette.error.main,color:e.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:"210px",height:"210px",background:"linear-gradient(210.04deg, "+e.palette.primary[200]+" -50.94%, rgba(144, 202, 249, 0) 83.49%)",borderRadius:"50%",top:"-30px",right:"-180px"},"&:before":{content:'""',position:"absolute",width:"210px",height:"210px",background:"linear-gradient(140.9deg, "+e.palette.primary[200]+" -14.02%, rgba(144, 202, 249, 0) 77.58%)",borderRadius:"50%",top:"-160px",right:"-130px"}},content:{padding:"16px !important"},avatar:(0,r.Z)((0,r.Z)((0,r.Z)({},e.typography.commonAvatar),e.typography.largeAvatar),{},{backgroundColor:e.palette.primary[800],color:"#fff"}),primary:{color:"#fff"},secondary:{color:e.palette.primary.light,marginTop:"5px"},padding:{paddingTop:0,paddingBottom:0}}}))();return(0,d.jsx)(a.Fragment,{children:n.isLoading?(0,d.jsx)(l.Z,{}):(0,d.jsx)(s.Z,{border:!1,className:e.card,contentClass:e.content,children:(0,d.jsx)(o.Z,{className:e.padding,children:(0,d.jsx)(c.ZP,{alignItems:"center",disableGutters:!0,className:e.padding,children:n.data})})})})}},93328:function(n,e,t){t(72791);var r=t(58173),a=t(46087),i=t(51233),o=t(68843),c=t(31628),s=t(59496),l=t(75522),d=t(2066),u=t(80184),p=(0,r.Z)({content:{padding:"16px !important"},padding:{paddingTop:0,paddingBottom:0}});e.Z=function(){var n=p();return(0,u.jsx)(a.Z,{children:(0,u.jsx)(i.Z,{className:n.content,children:(0,u.jsx)(o.Z,{className:n.padding,children:(0,u.jsxs)(c.ZP,{alignItems:"center",disableGutters:!0,className:n.padding,children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(l.Z,{variant:"rect",width:44,height:44})}),(0,u.jsx)(d.Z,{className:n.padding,primary:(0,u.jsx)(l.Z,{variant:"rect",height:20}),secondary:(0,u.jsx)(l.Z,{variant:"text"})})]})})})})}},5948:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r=t(70885),a=t(72791),i=t(55477),o=t(89426),c=t(14872),s=t(23735),l=t(80928),d=t(58173),u=t(13555),p=t(23142),m=t(88890),h=t.n(m),g=(t(34363),t(59940)),x=t.n(g),Z=(t(56960),t(18421)),f=t(79271),v=(t(37658),t(2503)),j=t(58956),y=t(8155),b=t(80184),P=(0,u.Z)({root:{color:"#FFFFFF"}})(i.Z),k=y.Z[300];var F=function(){var n=(0,f.useHistory)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(o.ZP,{item:!0,xs:12,md:10,children:(0,b.jsx)(P,{variant:"h2",children:"Not applied to any announcement yet"})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:2,children:(0,b.jsxs)(c.Z,{style:{backgroundColor:k},variant:"contained",size:"small",startIcon:(0,b.jsx)(j.Us8,{}),onClick:function(){n.push("/_student/announcement/view_announcement")},children:[" ","View"," "]})})]})})},_=t(7357),w=(0,d.Z)((function(n){return{applyBtn:{background:n.palette.success.light,color:n.palette.success.dark,"&:hover":{background:n.palette.success.main,color:n.palette.background.paper}},crd:{background:n.palette.primary.light,color:n.palette.grey[700]},description:{background:n.palette.primary.light,color:n.palette.grey[700]},lightBlue:{marginTop:12,background:n.palette.primary.light,color:n.palette.grey[700]}}}));(0,u.Z)({root:{color:"#FFFFFF"}})(i.Z),(0,u.Z)({root:{color:"##e3f2fd"}});var C=function(){var n,e=w(),t=(0,a.useState)(""),d=(0,r.Z)(t,2),u=d[0],m=d[1],g=(0,Z.Z)("/subscribeannouncement/getSubscribedAnnouncements/","GET"),j=g.required_data,y=g.loading;y||(n=j.data,console.log(n));var P=(0,f.useHistory)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(s.Z,{title:"View Applied Announcements",children:[(0,b.jsx)(p.Z,{label:"Search",value:u,onChange:function(n){return function(n){console.log(n.target.value),m(n.target.value);var e=""==n.target.value?" ":n.target.value,t=document.getElementsByClassName("MuiGrid-root MuiGrid-container")[0].children;console.log(t);for(var r=0;r<t.length;r++){var a=document.getElementById(t[r].id);a.innerText.toLowerCase().includes(e.toLowerCase())?h()(a).show():h()(a).hide()}}(n)},fullWidth:!0}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),y?"":0==n.length?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(o.ZP,{item:!0,children:(0,b.jsx)(v.Z,{loading:!1,data:(0,b.jsx)(F,{})})})}):(0,b.jsx)(o.ZP,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:1,md:1},children:n.map((function(n){return(0,b.jsx)(o.ZP,{item:!0,xs:12,md:6,id:n.Announcement_ID,children:(0,b.jsxs)(l.Z,{title:n.Company_details.Company_name+"-"+n.Job_Role+" for "+x().getYear(n.Passed_out_year)+" Batch",children:[(0,b.jsx)(i.Z,{variant:"h5"}),(0,b.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,b.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,md:4,children:(0,b.jsx)(i.Z,{style:{color:"rgb(97, 97, 97)"},variant:"h4",children:"Posted On: "})}),(0,b.jsx)(o.ZP,{item:!0,xs:6,md:8,children:(0,b.jsx)(i.Z,{style:{color:"#828282"},variant:"h5",children:(0,_.Z)(x().ParseDate(n.Date_of_announcement))})})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,md:4,children:(0,b.jsx)(i.Z,{style:{color:"rgb(97, 97, 97)"},variant:"h4",children:"Job Location: "})}),(0,b.jsx)(o.ZP,{item:!0,xs:6,md:8,children:(0,b.jsx)(i.Z,{style:{color:"#828282"},variant:"h5",children:(0,_.Z)(n.Job_Location)})})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,b.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,md:4,children:(0,b.jsx)(i.Z,{style:{color:"rgb(97, 97, 97)"},variant:"h4",children:"Job Role: "})}),(0,b.jsx)(o.ZP,{item:!0,xs:6,md:8,children:(0,b.jsx)(i.Z,{style:{color:"#828282"},variant:"h5",children:(0,_.Z)(n.Job_Role)})})]})})]}),(0,b.jsx)("br",{}),(0,b.jsx)(c.Z,{onClick:function(){return e=n.Announcement_ID,void P.push("/_student/announcement/view_announcement/"+e);var e},size:"large",fullWidth:!0,className:e.applyBtn,children:"View Full Announcement"})]})})}))})]})})}},18545:function(n,e,t){t.d(e,{dA:function(){return a},Wy:function(){return i},YL:function(){return o},vs:function(){return c},LV:function(){return s},vY:function(){return l},ze:function(){return d}});var r=t(4942);function a(n){return String(parseFloat(n)).length===String(n).length}function i(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function o(n){return parseFloat(n)}function c(n){return function(e,t){var r=i(e);if(r===t)return e;var a=o(e);"px"!==r&&("em"===r||"rem"===r)&&(a=o(e)*o(n));var c=a;if("px"!==t)if("em"===t)c=a/o(n);else{if("rem"!==t)return e;c=a/o(n)}return parseFloat(c.toFixed(5))+t}}function s(n){var e=n.size,t=n.grid,r=e-e%t,a=r+t;return e-r<a-e?r:a}function l(n){var e=n.lineHeight;return n.pixels/(e*n.htmlFontSize)}function d(n){var e=n.cssProperty,t=n.min,a=n.max,i=n.unit,o=void 0===i?"rem":i,c=n.breakpoints,s=void 0===c?[600,900,1200]:c,l=n.transform,d=void 0===l?null:l,u=(0,r.Z)({},e,"".concat(t).concat(o)),p=(a-t)/s[s.length-1];return s.forEach((function(n){var a=t+p*n;null!==d&&(a=d(a)),u["@media (min-width:".concat(n,"px)")]=(0,r.Z)({},e,"".concat(Math.round(1e4*a)/1e4).concat(o))})),u}},92189:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(87462);function a(n){var e=n.theme,t=n.name,a=n.props;if(!e||!e.components||!e.components[t]||!e.components[t].defaultProps)return a;var i,o=(0,r.Z)({},a),c=e.components[t].defaultProps;for(i in c)void 0===o[i]&&(o[i]=c[i]);return o}}}]);
//# sourceMappingURL=6566.74fd853b.chunk.js.map