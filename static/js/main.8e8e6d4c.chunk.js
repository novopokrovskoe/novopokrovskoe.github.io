(this.webpackJsonpsamevibe=this.webpackJsonpsamevibe||[]).push([[0],{46:function(t,e,_){},53:function(t,e,_){},54:function(t,e,_){},83:function(t,e,_){"use strict";_.r(e);var o=_(5),i=_(0),c=_.n(i),O=_(17),n=_.n(O),S=_(1),a=function(t){return Object(S.jsx)("h1",{children:"authorized"})},d=_(12),E=(_(46),_(47));var T=function(t){return Object(S.jsx)("form",{className:"login",children:Object(S.jsx)("img",{src:"/img/ya-auth.svg",onClick:function(){var e=E.parse(E.format({protocol:"https",hostname:"oauth.yandex.ru",pathname:"/authorize",query:{response_type:"code",client_id:t.ya.clientID,redirect_uri:t.ya.callbackURL}}));window.open(e.href,"_self")},alt:"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u044f\u043d\u0434\u0435\u043a\u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})})},r=function(t){var e=c.a.useState(!1);return Object(d.a)(e,1)[0]?Object(S.jsx)("h1",{children:"authorized"}):Object(S.jsx)(T,Object(o.a)({},t))};_(53);var s=function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"404 Not Found"}),Object(S.jsx)("a",{href:"/",children:"go back to main page"})]})},C=(_(54),_(16)),P=_(7),R=_(14),v=_(40),j=["children","appSettings"];var A=function(t){t.children;var e=t.appSettings,_=Object(v.a)(t,j);return Object(S.jsx)(P.b,Object(o.a)(Object(o.a)({},_),{},{render:function(){return Object(S.jsx)(P.a,{to:(null===e||void 0===e?void 0:e.basePath)+"/login"})}}))},u=_(10),b=_(13),h=_(26),D="AUTHORIZE",p="LOGOUT",K=!1,l={authorized:K,payload:{}},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:case p:return Object(o.a)(Object(o.a)({},t),{},{authorized:K});default:return t}},W=function(t){return Object(b.b)({router:Object(R.b)(t),auth:H})},U=Object(u.a)();var N=_(23),L=_.n(N),F=_(37),I=_(38),f=_(39),x=_.n(f),y=function t(e){var _=this;Object(I.a)(this,t),this.isAuthorised=void 0,this.access_token=void 0,this.refresh_token=void 0,this.token_type=void 0,this.expires_in=void 0,this.y_curi=void 0,this.y_cid=void 0,this.y_cs=void 0,this.getTokenByCode=function(){var t=Object(F.a)(L.a.mark((function t(e){var o,i,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new FormData).append("grant_type","authorization_code"),o.append("code",e),o.append("client_id",_.y_cid),o.append("client_secret",_.y_cs),t.next=7,x.a.post("https://oauth.yandex.ru/token",o).then((function(t){var e,_;if(void 0!==(null===(e=t.data)||void 0===e?void 0:e.error))throw null===(_=t.data)||void 0===_?void 0:_.error_description;return[t.data.access_token,t.data.refresh_token,t.data.token_type,t.data.expires_in]}));case 7:i=t.sent,c=Object(d.a)(i,4),_.access_token=c[0],_.refresh_token=c[1],_.token_type=c[2],_.expires_in=c[3];case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.y_curi=e.ya.callbackURL,this.y_cid=e.ya.clientID,this.y_cs=e.ya.clientSecret,this.isAuthorised=!1};var B,k=function(t){var e=Object(i.useState)(),_=Object(d.a)(e,2),o=_[0],c=_[1],O=Object(i.useState)(""),n=Object(d.a)(O,1)[0];return Object(i.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code")+"";new y(t).getTokenByCode(e).then().catch()}),[c,t]),console.log(o),Object(S.jsx)("h1",{children:n})},g=(B={},Object(b.d)(W(U),B,Object(b.c)(Object(b.a)(Object(h.a)(U))))),m={basePath:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_PATH?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_PATH):""},V={tokenKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TOKEN_KEY?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TOKEN_KEY):"1",cookieKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COOKIE_KEY?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COOKIE_KEY):"",publicKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_KEY?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_KEY):"",api:{basePath:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_PATH?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_PATH):"",domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CURRENT_DOMAIN?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CURRENT_DOMAIN):""},ya:{clientID:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CID?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CID):"",clientSecret:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CIS?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CIS):"",callbackURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CURI?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YA_CURI):""}};n.a.render(Object(S.jsx)(C.a,{store:g,children:Object(S.jsx)(R.a,{history:U,children:Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(P.d,{children:[Object(S.jsx)(P.b,{exact:!0,path:(null===m||void 0===m?void 0:m.basePath)+"/verification/ya",children:Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(k,Object(o.a)({},V))})}),Object(S.jsx)(P.b,{exact:!0,path:(null===m||void 0===m?void 0:m.basePath)+"/login",children:Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(r,Object(o.a)({},V))})}),Object(S.jsx)(A,{exact:!0,path:null===m||void 0===m?void 0:m.basePath,appSettings:m,children:Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(a,Object(o.a)({},V))})}),Object(S.jsx)(P.b,{component:s})]})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.8e8e6d4c.chunk.js.map