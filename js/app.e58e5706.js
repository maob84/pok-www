(()=>{"use strict";var e={8330:(e,t,r)=>{var o=r(9104),n=r(4430),a=r(8734),i=r(1758);const l=Object.assign({name:"App"},{__name:"App",setup(e){return(e,t)=>{const r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(r)}}}),s=l,c=s;var d=r(1573),u=r(587);const p=(0,d.M_)((()=>{const e=(0,u.Ey)();return e}));var f=r(455);const h=[{path:"/",component:()=>Promise.all([r.e(121),r.e(996),r.e(17)]).then(r.bind(r,5017)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(996),r.e(666)]).then(r.bind(r,3216)),meta:{showHeader:!0}},{path:"room",component:()=>Promise.all([r.e(121),r.e(996),r.e(695)]).then(r.bind(r,3695)),meta:{showHeader:!1}},{path:"instrument",component:()=>Promise.all([r.e(121),r.e(996),r.e(169)]).then(r.bind(r,9160)),meta:{showHeader:!1}},{path:"impressum",component:()=>Promise.all([r.e(121),r.e(526)]).then(r.bind(r,6526)),meta:{showBackArrow:!0,hideFooter:!0}}]},{path:"/desktop",component:()=>Promise.all([r.e(121),r.e(996),r.e(664)]).then(r.bind(r,6664)),children:[{path:"",component:()=>Promise.all([r.e(121),r.e(996),r.e(841)]).then(r.bind(r,841))},{path:"/desktop/room",component:()=>Promise.all([r.e(121),r.e(996),r.e(695)]).then(r.bind(r,3695))},{path:"/desktop/instruments/:filter",component:()=>Promise.all([r.e(121),r.e(996),r.e(74)]).then(r.bind(r,8105))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(121),r.e(487)]).then(r.bind(r,7487))}],m=h,v=(0,d.wE)((function(){const e=f.Bt,t=(0,f.aE)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function b(e,t){const r=e(c);r.use(n.A,t);const o="function"===typeof p?await p({}):p;r.use(o);const i=(0,a.IG)("function"===typeof v?await v({store:o}):v);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}var g=r(4806);const y={config:{dark:!0},plugins:{AppFullscreen:g.A}};var w=r(9012);(0,w.k)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const k="";async function P({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:l,publicPath:k})}catch(s){return s&&s.url?void i(s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.mount("#q-app"))}b(o.Ef,y).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,660)),Promise.resolve().then(r.bind(r,4776))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));P(e,r)}))}))},660:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(1573),n=r(2303);const a=n.A.create({baseURL:"http://192.168.2.111:8000"}),i=(0,o.zj)((({app:e})=>{e.config.globalProperties.$axios=n.A,e.config.globalProperties.$api=a}))},4776:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=({app:e})=>{window.onload=()=>{document.getElementById("q-app").classList.remove("loading")}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(996===e?"chunk-common":e)+"."+{17:"51f97904",74:"72112bcc",169:"5cba4fc4",487:"8dbf8a6a",526:"c232761e",664:"dfcf0708",666:"271e3c24",695:"c546a4d8",841:"250c71e7",996:"d5a50f46"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{17:"16ed98bb",74:"ec2e23a4",169:"5cd9a385",666:"c5aa48e0",695:"7d819f8c"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="pok:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,o,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var l=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&r.type,l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+l+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=l,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,null,n,a)})),n={524:0};r.f.miniCss=(e,t)=>{var r={17:1,74:1,169:1,666:1,695:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={524:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var d=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=globalThis["webpackChunkpok"]=globalThis["webpackChunkpok"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[121],(()=>r(8330)));o=r.O(o)})();