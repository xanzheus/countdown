(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,n,e){t.exports=e(296)},122:function(t,n,e){t.exports=e.p+"static/media/digital-7.1e670d88.ttf"},296:function(t,n,e){"use strict";e.r(n);var r=e(9),a=e(13),c=e(22),o=e(21),i=e(23),u=e(1),l=e(0),s=e.n(l),f=e(2),b=e(105),p=e.n(b);function m(){var t=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n"]);return m=function(){return t},t}function d(){var t=Object(u.a)(["\n    font-family: 'Digital-7';\n    font-size: 96px;\n    color: #FFFFFF;\n"]);return d=function(){return t},t}var v=f.c.h1(d()),h=f.c.div(m()),O=new Date("2019-01-01T00:00:00Z"),j=function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=Object(c.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(i)))).state={date:O-Date.now()},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:O-Date.now()})}},{key:"render",value:function(){return s.a.createElement(h,null,s.a.createElement(v,null,this.state.date>0?p()(this.state.date).format("h:mm:ss"):"Happy new year!"))}}]),n}(s.a.PureComponent);function g(){var t=Object(u.a)(["\n\tbody {\n\t\tfont-family: 'Sarabun', sans-serif;\n\t\tbackground: #37474F;\n\t\tfont-size: 18px;\n\t}\n\tinput, button {\n\t\tfont-family: 'Sarabun', sans-serif;\n\t\tfont-size: 18px;\n\t}\n\t@font-face {\n\t\tfont-family: 'Digital-7';\n\t\tsrc: url(",");\n\t}\n\n"]);return g=function(){return t},t}var x=Object(f.a)(g(),e(122));function E(){var t=Object(u.a)(["\n\tbackground: white;\n\tborder-radius: 16px;\n\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);return E=function(){return t},t}var y=f.c.div(E());function w(){var t=Object(u.a)(["\n\tmax-width: 700px;\n\tmargin: auto;\n\t@media (max-width: 700px) {\n\t\tmargin: 0 32px;\n\t}\n\t@media (max-width: 580px) {\n\t\tmargin: 0 16px;\n\t}\n"]);return w=function(){return t},t}var k=f.c.div(w()),C=e(7);function I(){var t=Object(u.a)(["\n\t\tbackground: ",";\n\t"]);return I=function(){return t},t}function F(){var t=Object(u.a)(["\n\tfont-size: 18px;\n\toutline: 0;\n\tborder: 0;\n\tborder-radius: 360px;\n\tpadding: 8px 16px;\n\tcolor: white;\n\twidth: 100%;\n\t&::placeholder {\n\t\tcolor: #F7F7F7;\n\t}\n\t","\n"]);return F=function(){return t},t}var U=Object(f.c)(function(t){t.color;var n=Object(C.a)(t,["color"]);return s.a.createElement("input",n)})(F(),function(t){var n=t.color;return Object(f.b)(I(),n)});function D(){var t=Object(u.a)(["\n\tcolor: white;\n\toutline: 0;\n\tborder: 0;\n\tborder-radius: 360px;\n\tbackground: #FF7F7F;\n\tpadding: 8px 16px;\n"]);return D=function(){return t},t}U.defaultProps={color:"#CFD8DC"};var S=f.c.button(D());function z(){var t=Object(u.a)(["justify-content: center;"]);return z=function(){return t},t}function T(){var t=Object(u.a)(["\n\tdisplay: flex;\n\t",";\n"]);return T=function(){return t},t}var P=Object(f.c)(function(t){t.isCenter;var n=Object(C.a)(t,["isCenter"]);return s.a.createElement("div",n)})(T(),function(t){return t.isCenter&&Object(f.b)(z())});function A(){var t=Object(u.a)(["justify-content: flex-end;"]);return A=function(){return t},t}function M(){var t=Object(u.a)(["\n\twidth: 50%;\n\tdisplay: flex;\n\t",";\n"]);return M=function(){return t},t}var B=Object(f.c)(function(t){t.isRight;var n=Object(C.a)(t,["isRight"]);return s.a.createElement("div",n)})(M(),function(t){return t.isRight&&Object(f.b)(A())}),L=j,R=e(6);function H(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 48px;\n\t@media (max-width: 700px) {\n\t\tpadding: 16px;\n\t}\n"]);return H=function(){return t},t}var J=f.c.div(H()),K=e(17),q=(e(123),e(110)),N=e.n(q).a.initializeApp({apiKey:"AIzaSyDp5453L5s4ULaF-bdwnt6UjvqFuFn7DgE",databaseURL:"https://count-down-b0eb5.firebaseio.com",projectId:"count-down-b0eb5"}).firestore(),W=Object(K.a)(Object(R.b)(function(t){var n=t.user,e=t.userInput;return{user:n,open:function(){return e.open()}}}),R.c)(function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=Object(c.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(i)))).state={msg:""},e.onType=function(t){var n=t.target.value;e.setState({msg:n})},e.onEnter=function(t){if(13===t.keyCode){var n=e.state.msg,r=e.props.user;N.collection("msg").add({msg:n,user:r.getInfo(),date:(new Date).getTime()}),e.setState({msg:""})}},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t=this.props,n=t.user,e=n.color,r=n.isInit,a=t.open,c=this.state.msg;return s.a.createElement(y,null,r?s.a.createElement(J,null,s.a.createElement(P,null,s.a.createElement(Q,null)),s.a.createElement(P,null,s.a.createElement(U,{placeholder:"Say something fun... and enter!",color:e,onChange:this.onType,onKeyDown:this.onEnter,value:c}))):s.a.createElement(J,null,s.a.createElement(P,{isCenter:!0},s.a.createElement(S,{onClick:a},"Let's Chat!"))))}}]),n}(l.Component));function Z(){var t=Object(u.a)(["\n\theight: 50vh;\n\twidth: 100%;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n"]);return Z=function(){return t},t}var G=f.c.div(Z()),Q=Object(K.a)(Object(R.b)(function(t){return{user:t.user}}),R.c)(function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=Object(c.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(i)))).state={msgs:[]},e.setMsgs=function(t){e.setState({msgs:t})},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.listenToMsg()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"listenToMsg",value:function(){var t=this.setMsgs;N.collection("msg").orderBy("date","asc").onSnapshot(function(n){var e=[];n.forEach(function(t){return e.push(t.data())}),t(e)})}},{key:"scrollToBottom",value:function(){var t=document.getElementById("chat-box");t.scrollTop=t.scrollHeight}},{key:"render",value:function(){var t=this.state.msgs,n=this.props.user;return s.a.createElement(G,{id:"chat-box"},t.map(function(t){return s.a.createElement(ft,{msg:t,user:n})}))}}]),n}(l.Component));function V(){var t=Object(u.a)(["\n\tflex: 1;\n"]);return V=function(){return t},t}function X(){var t=Object(u.a)(["background: ",";"]);return X=function(){return t},t}function Y(){var t=Object(u.a)(["\n\t",";\n\tborder-radius: 16px;\n\tcolor: white;\n\tpadding: 8px;\n\tword-wrap: break-word\n"]);return Y=function(){return t},t}function $(){var t=Object(u.a)(["color: ",";"]);return $=function(){return t},t}function _(){var t=Object(u.a)(["\n\t",";\n\tfont-size: 18px;\n"]);return _=function(){return t},t}function tt(){var t=Object(u.a)(["justify-content: end;"]);return tt=function(){return t},t}function nt(){var t=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: ",";\n\tmargin: 16px 8px;\n\t",";\n"]);return nt=function(){return t},t}function et(){var t=Object(u.a)(["margin-left: 16px;"]);return et=function(){return t},t}function rt(){var t=Object(u.a)(["margin-right: 16px;"]);return rt=function(){return t},t}function at(){var t=Object(u.a)(["\n\t\tbackground-color: ",";\n\t\tbackground-image: url(",");\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\t",";\n\t"]);return at=function(){return t},t}function ct(){var t=Object(u.a)(["\n\t",";\n\tborder-radius: 100%;\n\twidth: 64px;\n\theight: 64px;\n"]);return ct=function(){return t},t}var ot=Object(f.c)(function(t){t.color,t.src,t.isUser;var n=Object(C.a)(t,["color","src","isUser"]);return s.a.createElement("div",n)})(ct(),function(t){var n=t.color,e=t.src,r=t.isUser;return Object(f.b)(at(),n,e,r?Object(f.b)(et()):Object(f.b)(rt()))}),it=Object(f.c)(function(t){t.isUser;var n=Object(C.a)(t,["isUser"]);return s.a.createElement("div",n)})(nt(),function(t){return t.isUser?"row-reverse":"reverse"},function(t){return t.isUser&&Object(f.b)(tt())}),ut=Object(f.c)(function(t){t.color;var n=Object(C.a)(t,["color"]);return s.a.createElement("div",n)})(_(),function(t){var n=t.color;return Object(f.b)($(),n)}),lt=Object(f.c)(function(t){t.color;var n=Object(C.a)(t,["color"]);return s.a.createElement("p",n)})(Y(),function(t){var n=t.color;return Object(f.b)(X(),n)}),st=f.c.div(V()),ft=function(t){var n=t.msg,e=t.user;return s.a.createElement(P,null,s.a.createElement(it,{isUser:e.isUser(n.user)},s.a.createElement(ot,{src:n.user.pic,color:n.user.color,isUser:e.isUser(n.user)}),s.a.createElement(st,null,s.a.createElement(ut,{color:n.user.color},n.user.name),s.a.createElement(lt,{color:n.user.color},n.msg))))},bt=e(4),pt=function(){function t(){Object(r.a)(this,t),this.color="#f44336",this.name="",this.pic=""}return Object(a.a)(t,[{key:"updateInfo",value:function(t){var n=t.name,e=t.color,r=t.pic;this.name=n,this.color=e,this.pic=r,this.isInit=!0}},{key:"isUser",value:function(t){return this.name===t.name&&this.pic===t.pic&&this.color===t.color}},{key:"getInfo",value:function(){return{name:this.name,color:this.color,pic:this.pic}}}]),t}(),mt=Object(bt.g)(pt,{color:bt.l,name:bt.l,pic:bt.l,isInit:bt.l,updateInfo:bt.d}),dt=e(111);function vt(){var t=Object(u.a)(["\n\twidth: 600px;\n\t@media (max-width: 700px) {\n\t\twidth: 100%;\n\t\tmargin: 0 24px;\n\t}\n"]);return vt=function(){return t},t}function ht(){var t=Object(u.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tleft: 0;\n\tbottom: 0;\n\tz-index: 1;\n\tbackground: rgba(0,0,0,0.7);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return ht=function(){return t},t}var Ot=f.c.div(ht()),jt=Object(f.c)(y)(vt()),gt=Object(K.a)(Object(R.b)(function(t,n){return{isOpen:t[n.name].isOpen}}),R.c)(function(t){var n=t.isOpen,e=Object(C.a)(t,["isOpen"]);return n&&s.a.createElement(Ot,null,s.a.createElement(jt,e))}),xt=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(r.a)(this,t),this.isOpen=n}return Object(a.a)(t,[{key:"open",value:function(){this.isOpen=!0}},{key:"close",value:function(){this.isOpen=!1}}]),t}(),Et=Object(bt.g)(xt,{isOpen:bt.l,open:bt.d,close:bt.d});function yt(){var t=Object(u.a)(["\n\twidth: auto;\n\tpadding: 16px;\n"]);return yt=function(){return t},t}function wt(){var t=Object(u.a)(["background: ",";"]);return wt=function(){return t},t}function kt(){var t=Object(u.a)(["\n\tborder-radius: 100%;\n\twidth: 50px;\n\theight: 50px;\n\t",";\n"]);return kt=function(){return t},t}var Ct=Object(f.c)(function(t){t.color;var n=Object(C.a)(t,["color"]);return s.a.createElement("div",n)})(kt(),function(t){var n=t.color;return Object(f.b)(wt(),n)}),It=Object(f.c)(gt)(yt()),Ft=e(112),Ut=Object(K.a)(Object(R.b)(function(t){var n=t.colorPicker;return{open:function(){return n.open()},close:function(){return n.close()}}}),R.c)(function(t){var n=t.open,e=t.color,r=t.onSelectColor,a=t.close;return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ct,{onClick:n,color:e}),s.a.createElement(It,{name:"colorPicker"},s.a.createElement(Ft.CirclePicker,{onChangeComplete:function(t){r(t),a()},color:e})))});function Dt(){var t=Object(u.a)(["\n\tpadding: 32px;\n\t@media (max-width: 700px) {\n\t\tpadding: 16px;\n\t}\n\t> *:not(:last-child) {\n\t\tmargin-bottom: 16px;\n\t}\n"]);return Dt=function(){return t},t}var St=f.c.div(Dt()),zt=Object(K.a)(Object(R.b)(function(t){var n=t.user,e=t.userInput;return{updateInfo:function(t){return n.updateInfo(t)},close:function(){return e.close()}}}),R.c)(function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=Object(c.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(i)))).state={name:"",pic:"",color:"#f44336"},e.onInputChange=function(t){var n=t.target,r=n.value,a=n.name;e.setState(Object(dt.a)({},a,r))},e.onSelectColor=function(t){e.setState({color:t.hex})},e.submit=function(){var t=e.props,n=t.updateInfo,r=t.close;n(e.state),r()},e}return Object(i.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t=this.state,n=t.pic,e=t.name,r=t.color;return s.a.createElement(gt,{name:"userInput"},s.a.createElement(St,null,s.a.createElement(P,null,s.a.createElement(U,{name:"name",placeholder:"Name",value:e,onChange:this.onInputChange})),s.a.createElement(P,null,s.a.createElement(B,null,s.a.createElement(U,{name:"pic",placeholder:"Profile Pic",value:n,onChange:this.onInputChange})),s.a.createElement(B,{isRight:!0},s.a.createElement(Ut,{onSelectColor:this.onSelectColor,color:r}))),s.a.createElement(P,{isCenter:!0},s.a.createElement(S,{onClick:this.submit},"Let's Chat"))))}}]),n}(l.Component)),Tt=new function t(){Object(r.a)(this,t),this.stores={},this.stores.userInput=new Et(!0),this.stores.colorPicker=new Et,this.stores.user=new mt},Pt=function(){return s.a.createElement(R.a,Tt.stores,s.a.createElement(k,null,s.a.createElement(zt,null),s.a.createElement(L,null),s.a.createElement(W,null)))},At=e(18);e.n(At).a.render(s.a.createElement(function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x,null),s.a.createElement(Pt,null))},null),document.getElementById("root"))}},[[114,2,1]]]);
//# sourceMappingURL=main.609675a3.chunk.js.map