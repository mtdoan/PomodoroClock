(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(4),r=t.n(i),o=(t(9),t(2)),a=(t(10),t(11),t(0)),d=function(e){var n=e.breakInterval,t=e.increaseBreak,c=e.decreaseBreak;return Object(a.jsxs)("div",{className:"interval-container",children:[Object(a.jsx)("h5",{children:"Break Length"}),Object(a.jsxs)("div",{id:"container1",children:[Object(a.jsx)("button",{id:"break-decrement",onClick:c,children:"Down"}),Object(a.jsx)("p",{id:"break-length",className:"interval-length",children:n}),Object(a.jsx)("button",{id:"break-increment",onClick:t,children:"Up"})]})]})},l=(t(13),function(e){var n=e.sessionInterval,t=e.increaseSession,c=e.decreaseSession;return Object(a.jsxs)("div",{className:"interval-container",children:[Object(a.jsx)("h5",{children:"Session Length"}),Object(a.jsxs)("div",{id:"container2",children:[Object(a.jsx)("button",{id:"session-decrement",onClick:c,children:"Down"}),Object(a.jsx)("p",{id:"session-length",className:"interval-length",children:n}),Object(a.jsx)("button",{id:"session-increment",onClick:t,children:"Up"})]})]})}),j=(t(14),function(e){var n=e.breakLength,t=e.sessionLength,s=e.reset,i=Object(c.useState)(!0),r=Object(o.a)(i,2),d=r[0],l=r[1],j=Object(c.useState)({second:0,minute:25}),u=Object(o.a)(j,2),b=u[0],h=u[1],m=Object(c.useState)(0),O=Object(o.a)(m,2),f=O[0],x=O[1],v=Object(c.useState)(!1),k=Object(o.a)(v,2),p=k[0],g=k[1];Object(c.useEffect)((function(){h({second:0,minute:t})}),[t]);var S=document.getElementById("beep"),N=function(){console.log("decreaseTimer"),h((function(e){switch(e.second){case 0:return 0===e.minute&&(S.play(),l((function(e){return!e})),console.log(),h(d?{second:0,minute:n}:{second:0,minute:t})),{second:59,minute:e.minute-1};default:return{second:e.second-1,minute:e.minute}}}))};return Object(a.jsxs)("div",{id:"",children:[Object(a.jsxs)("section",{className:"timer-container",children:[Object(a.jsx)("h3",{children:!0===d?"Session":"Break"}),Object(a.jsxs)("div",{id:"time-left",children:[Object(a.jsx)("span",{className:"timer",children:0===b.minute?"00":b.minute>=10?b.minute:"0"+b.minute}),Object(a.jsx)("span",{className:"timer",children:":"}),Object(a.jsx)("span",{className:"timer",children:0===b.second?"00":b.second<10?"0"+b.second:b.second})]})]}),Object(a.jsxs)("section",{className:"timer-actions",children:[Object(a.jsx)("button",{id:"start_stop",onClick:function(){if(!1===p){var e=setInterval(N,20);g(!0),x(e)}else clearInterval(f),g(!1)},children:"Play/Stop"}),Object(a.jsx)("button",{id:"reset",onClick:function(){clearInterval(f),x(0),s(),h({second:0,minute:25}),l(!0),g(!1),S.pause(),S.currentTime=0},children:"Refresh"})]}),Object(a.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})});var u=function(){var e=Object(c.useState)(5),n=Object(o.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)(25),r=Object(o.a)(i,2),u=r[0],b=r[1],h=function(){t<60&&s((function(e){return e+1}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Pomodoro Clock"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{id:"break-label",className:"col",children:Object(a.jsx)(d,{breakInterval:t,increaseBreak:h,decreaseBreak:function(){t>1&&s((function(e){return e-1}))}})}),Object(a.jsx)("div",{id:"session-label",className:"col",children:Object(a.jsx)(l,{sessionInterval:u,increaseSession:function(){u<60&&b((function(e){return e+1}))},decreaseSession:function(){u>1&&b((function(e){return e-1}))}})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{id:"timer-label",className:"col",children:Object(a.jsx)(j,{breakLength:t,sessionLength:u,increaseBreak:h,reset:function(){b(25),s(5)}})})})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.949725a6.chunk.js.map