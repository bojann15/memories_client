(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(19),s=n(30),o=n(79),l=n(95),u="CREATE",d="UPDATE",j="DELETE",p="FETCH_ALL",b="AUTH",m="LOGOUT",h=n(12),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return localStorage.setItem("profile",JSON.stringify(Object(h.a)({},null===t||void 0===t?void 0:t.data))),Object(h.a)(Object(h.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case m:return localStorage.clear(),Object(h.a)(Object(h.a)({},e),{},{authData:null});default:return e}},g=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return e.filter((function(e){return e._id!==t.payload}));case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);default:return e}},auth:f}),x=n(181),O=n(42),v=n(13),y=n(27),w=n(171),C=n(138),k=n(173),S=n(186),N=n(174),I=n(80),T=n(167),D=n(170),F=Object(T.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(D.a[500]),backgroundColor:D.a[500]}}})),L=n.p+"static/media/memories.9cfa8a46.png",A=n(2),_=function(){var e=F(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(y.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(v.f)(),l=Object(v.g)(),u=function(){s({type:"LOGOUT"}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(I.a)(e).exp<(new Date).getTime()&&u());c(JSON.parse(localStorage.getItem("profile")))}),[l]),Object(A.jsxs)(w.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(A.jsxs)("div",{className:e.brandContainer,children:[Object(A.jsx)(C.a,{component:O.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(A.jsx)("img",{className:e.image,src:L,alt:"memories",height:"60"})]}),Object(A.jsx)(k.a,{className:e.toolbar,children:r?Object(A.jsxs)("div",{className:e.profile,children:[Object(A.jsx)(S.a,{className:e.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(A.jsx)(C.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(A.jsx)(N.a,{variant:"contained",className:e.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(A.jsx)(N.a,{component:O.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},E=n(185),z=n(180),B=n(15),P=n.n(B),W=n(24),U=n(85),J=n.n(U).a.create({baseURL:"https://memoriesbojan.herokuapp.com/"});J.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var M=function(e){return J.patch("/posts/".concat(e,"/likePost"))},H=function(e,t){return J.patch("/posts/".concat(e),t)},G=function(e){return J.delete("/posts/".concat(e))},R=function(e){return J.post("/user/signin",e)},q=function(e){return J.post("/user/signup",e)},V=n(179),Y=n(175),Z=n(176),K=n(177),Q=n(178),X=n(87),$=n.n(X),ee=n(65),te=n.n(ee),ne=n(89),ae=n.n(ne),re=n(88),ce=n.n(re),ie=n(86),se=n.n(ie),oe=Object(T.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),le=function(e){var t,n,a,r,c=e.post,s=e.setCurrentId,o=oe(),l=JSON.parse(localStorage.getItem("profile")),u=Object(i.b)(),p=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.googleId)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n._id))}))?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)($.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(te.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(te.a,{fontSize:"small"}),"\xa0Like"]})};return Object(A.jsxs)(Y.a,{className:o.card,children:[Object(A.jsx)(Z.a,{className:o.media,image:c.selectedFile,title:c.title}),Object(A.jsxs)("div",{className:o.overlay,children:[Object(A.jsx)(C.a,{variant:"h6",children:c.name}),Object(A.jsx)(C.a,{variant:"body2",children:se()(c.createdAt).fromNow()})]}),((null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(A.jsx)("div",{className:o.overlay2,children:Object(A.jsx)(N.a,{style:{color:"white"},size:"small",onClick:function(){return s(c._id)},children:Object(A.jsx)(ce.a,{fontSize:"default"})})}),Object(A.jsx)("div",{className:o.details,children:Object(A.jsx)(C.a,{variant:"body2",color:"textSecondary",children:c.tags.map((function(e){return"#".concat(e)}))})}),Object(A.jsx)(C.a,{className:o.title,variant:"h5",gutterBottom:!0,children:c.title}),Object(A.jsx)(K.a,{children:Object(A.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(A.jsxs)(Q.a,{className:o.cardActions,children:[Object(A.jsx)(N.a,{size:"small",color:"primary",disabled:!(null===l||void 0===l?void 0:l.result),onClick:function(){return u((e=c._id,function(){var t=Object(W.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:a=t.sent,r=a.data,n({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(A.jsx)(p,{})}),((null===l||void 0===l||null===(a=l.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===l||void 0===l||null===(r=l.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(A.jsxs)(N.a,{size:"small",color:"primary",onClick:function(){return u((e=c._id,function(){var t=Object(W.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e);case 3:n({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(A.jsx)(ae.a,{fontSize:"small"}),"Delete"]})]})]})},ue=Object(T.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),de=function(e){var t=e.setCurrentId,n=Object(i.c)((function(e){return e.posts})),a=ue();return console.log(n),n.length?Object(A.jsx)(z.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(A.jsx)(z.a,{item:!0,xs:12,sm:6,md:6,children:Object(A.jsx)(le,{post:e,setCurrentId:t})},e._id)}))}):Object(A.jsx)(V.a,{})},je=n(97),pe=n(184),be=n(90),me=n.n(be),he=Object(T.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),fe=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(y.a)(c,2),o=s[0],l=s[1],j=Object(i.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),p=he(),b=Object(i.b)(),m=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){j&&l(j)}),[j]);var f=function(){r(null),l({title:"",message:"",tags:"",selectedFile:""})};return(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.name)?Object(A.jsx)(je.a,{className:p.paper,children:Object(A.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:function(e){var t,a;(e.preventDefault(),0===n)?(b(function(e){return function(){var t=Object(W.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,J.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(h.a)(Object(h.a)({},o),{},{name:null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.name}))),f()):(b(function(e,t){return function(){var n=Object(W.a)(P.a.mark((function n(a){var r;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H(e,t);case 3:r=n.sent,a({type:d,payload:r}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(n,Object(h.a)(Object(h.a)({},o),{},{name:null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.name}))),f())},children:[Object(A.jsxs)(C.a,{variant:"h6",children:[n?"Editing":"Creating"," a Memory"]}),Object(A.jsx)(pe.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{title:e.target.value}))}}),Object(A.jsx)(pe.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:o.message,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{message:e.target.value}))}}),Object(A.jsx)(pe.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(h.a)(Object(h.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(A.jsxs)("div",{className:p.fileInput,children:[Object(A.jsx)(me.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(h.a)(Object(h.a)({},o),{},{selectedFile:t}))}})," "]}),Object(A.jsx)(N.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(A.jsx)(N.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0,children:"Clear"})]})}):Object(A.jsx)(je.a,{className:p.paper,children:Object(A.jsx)(C.a,{variant:"h6",align:"center",children:"Please Sign In to create your own memories and like other's memories"})})},ge=function(){var e=Object(a.useState)(0),t=Object(y.a)(e,2),n=t[0],r=t[1],c=Object(i.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(W.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.get("/posts");case 3:n=e.sent,a=n.data,t({type:p,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(A.jsx)(E.a,{in:!0,children:Object(A.jsx)(x.a,{children:Object(A.jsxs)(z.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(A.jsx)(z.a,{item:!0,xs:12,sm:7,children:Object(A.jsx)(de,{setCurrentId:r})}),Object(A.jsx)(z.a,{item:!0,xs:12,sm:4,children:Object(A.jsx)(fe,{currentId:n,setCurrentId:r})})]})})})},xe=n(57),Oe=n(91),ve=function(){return Object(A.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},ye=n(94),we=n.n(ye),Ce=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),ke=n(182),Se=n(183),Ne=n(92),Ie=n.n(Ne),Te=n(93),De=n.n(Te),Fe=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(A.jsx)(z.a,{item:!0,xs:12,sm:r?6:12,children:Object(A.jsx)(pe.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(A.jsx)(ke.a,{position:"end",children:Object(A.jsx)(Se.a,{onClick:s,children:"password"===i?Object(A.jsx)(Ie.a,{}):Object(A.jsx)(De.a,{})})})}:null})})},Le={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ae=function(){var e=Ce(),t=Object(a.useState)(!1),n=Object(y.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(y.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(Le),j=Object(y.a)(d,2),p=j[0],m=j[1],f=Object(i.b)(),g=Object(v.f)(),O=function(e){m(Object(h.a)(Object(h.a)({},p),{},Object(xe.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(W.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{f({type:"AUTH",data:{result:n,token:a}}),g.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(x.a,{component:"main",maxWidth:"xs",children:Object(A.jsxs)(je.a,{className:e.paper,elevation:3,children:[Object(A.jsx)(S.a,{className:e.avatar,children:Object(A.jsx)(we.a,{})}),Object(A.jsx)(C.a,{variant:"h5",children:l?"Sign Up":"Sign In"}),Object(A.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),f(l?function(e,t){return function(){var n=Object(W.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:r=n.sent,c=r.data,a({type:b,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(p,g):function(e,t){return function(){var n=Object(W.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e);case 3:r=n.sent,c=r.data,a({type:b,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(p,g))},children:[Object(A.jsxs)(z.a,{container:!0,spacing:2,children:[l&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Fe,{name:"firstName",label:"First Name",handleChange:O,autoFocus:!0,half:!0}),Object(A.jsx)(Fe,{name:"lastName",label:"Last Name",handleChange:O,half:!0})]}),Object(A.jsx)(Fe,{name:"email",label:"Email Address",handleChange:O,type:"email"}),Object(A.jsx)(Fe,{name:"password",label:"Password",handleChange:O,type:r?" text":"password",handleShowPassword:function(){return c(!r)}}),l&&Object(A.jsx)(Fe,{name:"confirmPassword",label:"Repeat Password",handleChange:O,type:"password"})]}),Object(A.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:l?"Sign Up":"Sign In"}),Object(A.jsx)(Oe.GoogleLogin,{clientId:"777845847095-3u6ado3mntj783cobu49uhq300bo4e95.apps.googleusercontent.com",render:function(t){return Object(A.jsx)(N.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(A.jsx)(ve,{}),variant:"contained",children:"Google Sign In"})},onSuccess:w,onFailure:function(){console.log("Google Sign In was unsuccessfull. Try again Later")},cookiePolicy:"single_host_origin"}),Object(A.jsx)(z.a,{container:!0,justify:"flex-end",children:Object(A.jsx)(z.a,{item:!0,children:Object(A.jsx)(N.a,{onClick:function(){u((function(e){return!e})),c(!1)},children:l?"Already have na account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},_e=function(){return Object(A.jsx)(O.a,{children:Object(A.jsxs)(x.a,{maxWidth:"lg",children:[Object(A.jsx)(_,{}),Object(A.jsxs)(v.c,{children:[Object(A.jsx)(v.a,{path:"/",exact:!0,component:ge}),Object(A.jsx)(v.a,{path:"/auth",exact:!0,component:Ae})]})]})})},Ee=(n(135),Object(s.e)(g,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(A.jsx)(i.a,{store:Ee,children:Object(A.jsx)(_e,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.83a21be1.chunk.js.map