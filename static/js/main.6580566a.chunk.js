(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(170)},126:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},144:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),o=(a(126),a(128),a(130),a(3)),i=a(13),u=a(32),s=(a(132),a(103)),m=a(100),d=a(173),f=a(179),p=a(180),h=a(101),E=(a(136),a(171),a(96)),v=h.a.initializeApp({apiKey:"AIzaSyDdt6lIGfXCBmovCNnrxB-blf7ql1S7eYI",authDomain:"raemond-project-1.firebaseapp.com",databaseURL:"https://raemond-project-1.firebaseio.com",projectId:"raemond-project-1",storageBucket:"raemond-project-1.appspot.com",messagingSenderId:"808805796858",appId:"1:808805796858:web:87aa57c9d6c1b3c283b243"}).firestore(),g=h.a.auth();var y=a(181),b=a(178),w=a(174),x=a(175),O=a(48);function j(){j=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(z){i=function(e,t,a){return e[t]=a}}function u(e,t,a,r){var l=t&&t.prototype instanceof d?t:d,c=Object.create(l.prototype),o=new C(r||[]);return n(c,"_invoke",{value:w(e,a,o)}),c}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(z){return{type:"throw",arg:z}}}e.wrap=u;var m={};function d(){}function f(){}function p(){}var h={};i(h,l,function(){return this});var E=Object.getPrototypeOf,v=E&&E(E(L([])));v&&v!==t&&a.call(v,l)&&(h=v);var g=p.prototype=d.prototype=Object.create(h);function y(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;n(this,"_invoke",{value:function(n,l){function c(){return new t(function(r,c){!function n(r,l,c,o){var i=s(e[r],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,o)})}o(i.arg)}(n,l,r,c)})}return r=r?r.then(c,c):c()}})}function w(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return k()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=x(c,a);if(o){if(o===m)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=i(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),i(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new b(u(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(g),i(g,o,"Generator"),i(g,l,function(){return this}),i(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;N(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){return Object(E.a)(g,function(e){return r(e)})},[]),a}(),h=Object(n.useRef)(),N=Object(n.useRef)(),C=Object(n.useRef)(),L=Object(n.useRef)(),k=Object(n.useRef)(),z=Object(n.useState)(""),S=Object(i.a)(z,2),P=S[0],F=S[1],G=Object(n.useState)(!1),I=Object(i.a)(G,2),B=I[0],_=I[1],A=Object(n.useState)(!1),T=Object(i.a)(A,2),R=T[0],q=T[1],U=function(){return _(!1)},H=function(){_(!0),q(!1)},D=function(){return q(!1)};function Y(){return(Y=Object(o.a)(j().mark(function e(t){var a;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),t.preventDefault(),L.current.value===k.current.value){e.next=4;break}return e.abrupt("return",F("Passwords do not match"));case 4:return e.prev=4,F(""),l(!0),e.next=9,n=C.current.value,r=L.current.value,void g.createUserWithEmailAndPassword(n,r).then(function(e){return v.collection("users").doc(e.user.uid).set({favourites:[],recipes:[]})});case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),a=e.t0.message,console.log(a),F("Failed to create the account");case 16:alert("registered successfully"),l(!1),q(!1),F("");case 20:case"end":return e.stop()}var n,r},e,null,[[4,11]])}))).apply(this,arguments)}function M(){return(M=Object(o.a)(j().mark(function e(){var t;return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,a=h.current.value,n=N.current.value,Object(E.b)(g,a,n);case 4:alert("Login successfully"),console.log("success login"),_(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),t=P.message,console.log(t),F("Failed to log in");case 14:l(!1);case 15:case"end":return e.stop()}var a,n},e,null,[[1,9]])}))).apply(this,arguments)}function W(){return(W=Object(o.a)(j().mark(function e(){return j().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,Object(E.c)(g);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Error!");case 9:l(!1);case 10:case"end":return e.stop()}},e,null,[[1,6]])}))).apply(this,arguments)}return r.a.createElement(d.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a.Brand,{href:"/",className:"icon",sticky:"top"},r.a.createElement(s.a,{icon:"fa-brands fa-facebook-square"}),r.a.createElement(m.a,null)," ",r.a.createElement(s.a,{icon:"fa-brands fa-facebook-square"})),r.a.createElement("div",{className:"title"}," One Free Pizza"),r.a.createElement(p.a,{className:"me-auto"},r.a.createElement(u.c,{to:"/",className:"text-link"},"Home"),r.a.createElement(u.c,{to:"/get-your-pizza",className:"text-link"},"Get Your Free Pizza"),r.a.createElement(u.c,{to:"/orders",className:"text-link"},"Orders"),!c&&r.a.createElement(u.c,{to:"#",className:"text-link",onClick:H}," Log In"),c&&r.a.createElement(u.b,{to:"#",className:"text-link",id:"logout",onClick:function(){return W.apply(this,arguments)}}," Log Out"),r.a.createElement("a",{href:"#",class:"loginBtn",onClick:H}),r.a.createElement(O.a,{show:B,onHide:U},r.a.createElement(O.a.Header,{closeButton:!0}),r.a.createElement(O.a.Body,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{id:"email"},P&&r.a.createElement(w.a,{variant:"danger"},P),r.a.createElement(b.a.Label,null,"Email"),r.a.createElement(b.a.Control,{ref:h,placeholder:"Email",type:"email",required:!0})),r.a.createElement(b.a.Group,{id:"password"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{ref:N,type:"password",placeholder:"Password",required:!0})),r.a.createElement(x.a,{className:"w-100",onClick:function(){return M.apply(this,arguments)}},"Log In"))))),r.a.createElement(O.a.Footer,null,r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement("span",{onClick:function(){_(!1),q(!0)}},"Need an account? Sign Up")),r.a.createElement(x.a,{variant:"secondary",onClick:U},"Close"))),r.a.createElement(O.a,{show:R,onHide:D},r.a.createElement(O.a.Header,{closeButton:!0}),r.a.createElement(O.a.Body,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),P&&r.a.createElement(w.a,{variant:"danger"},P),r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{id:"email"},r.a.createElement(b.a.Label,null,"Email:"),r.a.createElement(b.a.Control,{type:"email",ref:C,required:!0})),r.a.createElement(b.a.Group,{id:"password"},r.a.createElement(b.a.Label,null,"Password:"),r.a.createElement(b.a.Control,{type:"password",ref:L,required:!0})),r.a.createElement(b.a.Group,{id:"passwordConfirmation"},r.a.createElement(b.a.Label,null,"Confirm Password:"),r.a.createElement(b.a.Control,{type:"password",ref:k,required:!0})),r.a.createElement(x.a,{disabled:a,className:"w-100",onClick:function(e){return Y.apply(this,arguments)}},"Sign Up"))))),r.a.createElement(O.a.Footer,null,r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement("span",{onClick:H},"Already have an account? Log In")),r.a.createElement(x.a,{variant:"secondary",onClick:D},"Close"))))))};var C,L,k,z,S,P,F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(N,null)))},G=a(65),I=a(52),B=a(53),_=B.a.div(C||(C=Object(I.a)(["\npadding: 80px 60px;\nbackground: black;\nposition: relative;\nbottom: 0;\nwidth: 100%;\n\n\n@media (max-width: 1000px) {\n\tpadding: 70px 30px;\n}\n"]))),A=B.a.div(L||(L=Object(I.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmax-width: 1000px;\n\tmargin: 0 auto;\n\t/* background: red; */\n"]))),T=B.a.div(k||(k=Object(I.a)(["\ndisplay: flex;\nflex-direction: column;\ntext-align: left;\nmargin-left: 60px;\n"]))),R=B.a.div(z||(z=Object(I.a)(["\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(185px, 1fr));\ngrid-gap: 20px;\n\n@media (max-width: 1000px) {\n\tgrid-template-columns: repeat(auto-fill,\n\t\t\t\t\t\tminmax(200px, 1fr));\n}\n"]))),q=B.a.a(S||(S=Object(I.a)(["\ncolor: #fff;\nmargin-bottom: 20px;\nfont-size: 18px;\ntext-decoration: none;\n\n&:hover {\n\tcolor: green;\n\ttransition: 200ms ease-in;\n}\n"]))),U=B.a.p(P||(P=Object(I.a)(["\nfont-size: 24px;\ncolor: #fff;\nmargin-bottom: 40px;\nfont-weight: bold;\n"]))),H=function(){return r.a.createElement(_,null,r.a.createElement("h1",{style:{color:"green",textAlign:"center",marginTop:"-50px"}},"One Free Pizza: A sample only site"),r.a.createElement(A,null,r.a.createElement(R,null,r.a.createElement(T,null,r.a.createElement(U,null,"About Us"),r.a.createElement(q,{href:"#"},"Aim"),r.a.createElement(q,{href:"#"},"Vision"),r.a.createElement(q,{href:"#"},"Testimonials")),r.a.createElement(T,null,r.a.createElement(U,null,"Services"),r.a.createElement(q,{href:"#"},"Writing"),r.a.createElement(q,{href:"#"},"Internships"),r.a.createElement(q,{href:"#"},"Coding"),r.a.createElement(q,{href:"#"},"Teaching")),r.a.createElement(T,null,r.a.createElement(U,null,"Contact Us"),r.a.createElement(q,{href:"#"},"Raemond Carta")),r.a.createElement(T,null,r.a.createElement(U,null,"Social Media"),r.a.createElement(q,{href:"#"},r.a.createElement("i",{class:"fa-brands fa-facebook-square"},r.a.createElement("span",{style:{marginLeft:"10px"}},r.a.createElement(G.a,null)))),r.a.createElement(q,{href:"#"},r.a.createElement("i",{className:"fab fa-instagram"},r.a.createElement("span",{style:{marginLeft:"10px"}},r.a.createElement(G.b,null)))),r.a.createElement(q,{href:"#"},r.a.createElement("i",{className:"fab fa-twitter"},r.a.createElement("span",{style:{marginLeft:"10px"}},r.a.createElement(G.c,null)))),r.a.createElement(q,{href:"#"},r.a.createElement("i",{className:"fab fa-youtube"},r.a.createElement("span",{style:{marginLeft:"10px"}},r.a.createElement(G.d,null))))))))},D=a(117),Y=a.n(D),M=(a(144),a(46)),W=a(22),V=a(86),J=Object(V.b)({name:"orders",initialState:{list:[]},reducers:{setOrders:function(e,t){e.list=t.payload},addOrder:function(e,t){var a=t.payload,n=[].concat(Object(W.a)(e.list),[a]);e.list=n},removeOrder:function(e,t){var a=t.payload,n=e.list.filter(function(e){return e.id!==a});e.list=n},clearOrder:function(e,t){e.list=[]}}}),Z=J.actions,K=Z.setOrders,X=Z.addOrder,Q=Z.removeOrder,$=(Z.clearOrder,J.reducer),ee=a(119),te=a.n(ee).a.create({baseURL:"https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api",timeout:5e3,headers:{Authorization:"basic c737d0e2-67bd-4d24-8818-2bf194aae53a"}}),ae=a(176),ne=a(94),re=a(1);var le=function(e){var t=Object(M.b)(),a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),f=m[0],p=m[1],h=Object(n.useState)("default"),E=Object(i.a)(h,2),v=E[0],g=E[1],y=Object(n.useState)("default"),b=Object(i.a)(y,2),w=b[0],O=b[1],j=Object(n.useState)("default"),N=Object(i.a)(j,2),C=N[0],L=N[1],k=Object(n.useState)(null),z=Object(i.a)(k,2),S=z[0],P=z[1],F=Object(n.useState)(!1),G=Object(i.a)(F,2),I=G[0],B=G[1],_=Object(re.l)();return r.a.createElement(d.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{sm:6},r.a.createElement("div",{className:"formBanner"},r.a.createElement("h2",null,"CHOOSE YOUR PIZZA!"),r.a.createElement("br",null),r.a.createElement("p",null,"Please feel free to choose and style your own pizza, Fill out the form and we'll send the pizza on your way!"),r.a.createElement("p",null,"Made the order already? Checkout your orders and others who have enjoyed their One Free Pizza!")),r.a.createElement(u.c,{to:"/orders",className:"text-link"},r.a.createElement(x.a,{variant:"warning"},"See Orders"))),r.a.createElement(ne.a,{sm:1}),r.a.createElement(ne.a,{sm:5},r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=[];if("default"===v&&a.push("Please choose your pizza"),"default"===w&&a.push("Please choose your crust"),"default"===C&&a.push("Please choose your cheese"),""===f&&a.push("Please input address"),""===c&&a.push("Please input name"),a.length>0)P(a);else{P(null);var n={id:Y()(),name:c,address:f,style:v,crust:w,cheese:C};B(!0),te.post("/orders",n).then(function(e){201===e.status&&(t(X(n)),o(""),p(""),g(""),O(""),P(null),B(!1)),_("/orders")})}}},r.a.createElement("div",{className:"field"},S&&r.a.createElement("div",{className:"error"},"Please, verify the entered data:",r.a.createElement("ul",null,S.map(function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("label",null,"Pizza Style:"),r.a.createElement("div",null,r.a.createElement("select",{defaultValue:v,onChange:function(e){g(e.target.value)}},r.a.createElement("option",{value:"default",disabled:!0,hidden:!0},"Choose your Pizza"),r.a.createElement("option",{value:"Hawaiian"},"Hawaiian"),r.a.createElement("option",{value:"Pepperoni"},"Pepperoni"),r.a.createElement("option",{value:"Canadian"},"Canadian"),r.a.createElement("option",{value:"Supreme"},"Supreme"),r.a.createElement("option",{value:"Cheese"},"Cheese"),r.a.createElement("option",{value:"Margherita"},"Margherita")))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Pizza Crust:"),r.a.createElement("div",null,r.a.createElement("select",{defaultValue:v,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"default",disabled:!0,hidden:!0},"Choose your Pizza Crust"),r.a.createElement("option",{value:"Original Crust"},"Original Crust"),r.a.createElement("option",{value:"Thin Crust"},"Thin Crust"),r.a.createElement("option",{value:"Gluten-Free Crust"},"Gluten-Free Crust")))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Cheese:"),r.a.createElement("div",null,r.a.createElement("select",{defaultValue:C,onChange:function(e){L(e.target.value)}},r.a.createElement("option",{value:"default",disabled:!0,hidden:!0},"Want Extra Cheese?"),r.a.createElement("option",{value:!0},"Extra Cheese"),r.a.createElement("option",{value:!1},"Regular")))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name:"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",maxLength:150,value:c,onChange:function(e){o(e.target.value)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Address:"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",maxLength:150,value:f,onChange:function(e){p(e.target.value)}}))),r.a.createElement("button",{type:"submit"},"Order"),I&&r.a.createElement("div",{className:"saving"},"Saving..."))))))};a(164);var ce=function(){return r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{sm:7}),r.a.createElement(ne.a,{sm:5},r.a.createElement("div",{className:"banner"},r.a.createElement("p",null,"One Free Pizza is a company looking to give back to the community."),r.a.createElement("p",null,"Our owner wants to give free pizzas to everyone. Everyone deserves a pizza every once in a while!"))),r.a.createElement(u.c,{to:"/get-your-pizza",className:"text-link"},r.a.createElement(x.a,{variant:"outline-light",size:"lg"},"Get Your Free Pizza Now!")))))};a(166),a(168);var oe=function(e){var t=Object(M.b)();return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},"Name: ",e.order.name),r.a.createElement("h3",{className:"card-title"},"Address: ",e.order.address),r.a.createElement("h3",{className:"card-title"},"Style: ",e.order.style),r.a.createElement("h3",{className:"card-title"},"Crust: ",e.order.crust),r.a.createElement("div",{className:"card-text"},r.a.createElement("span",{style:{fontWeight:"bold"}},"Id:"),e.order.id),r.a.createElement("div",{className:"card-text"},r.a.createElement("span",{style:{fontWeight:"bold"}},"Extra Cheese:")," ",e.order.cheese),r.a.createElement("button",{onClick:function(){var a=e.order.id;te.delete("/orders/"+a).then(function(e){200===e.status&&t(Q(a))})},id:"statusButtons",className:"btn btn-danger btn-sm"},"Remove Order"))))};var ie=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(M.c)(function(e){return e.orders.list}),o=Object(M.b)();return Object(n.useEffect)(function(){te.get("/orders").then(function(e){200===e.status&&(o(K(e.data)),l(!1))})},[]),r.a.createElement(d.a,null,r.a.createElement("div",{className:"card-body-order-page"},r.a.createElement("h2",null,"Orders:"),a&&r.a.createElement("div",{className:"loading"},"Loading..."),r.a.createElement("div",{className:"card-text"},c.map(function(e,t){return r.a.createElement(oe,{key:t,order:e})}))))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(re.c,null,r.a.createElement(re.a,{path:"/get-your-pizza",element:r.a.createElement(le,null)}),r.a.createElement(re.a,{path:"/orders",element:r.a.createElement(ie,null)}),r.a.createElement(re.a,{path:"/",element:r.a.createElement(ce,null)})),r.a.createElement(H,null))},se=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,177)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})},me=Object(V.a)({reducer:{orders:$}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(M.a,{store:me},r.a.createElement(ue,null)))),document.getElementById("root")),se()}},[[121,3,2]]]);
//# sourceMappingURL=main.6580566a.chunk.js.map