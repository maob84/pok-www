if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,l)=>{const c=n||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let o={};const r=n=>i(n,c),f={module:{uri:c},exports:o,require:r};e[c]=Promise.all(s.map((n=>f[n]||r(n)))).then((n=>(l(...n),o)))}}define(["./workbox-49d4ab5b"],(function(n){"use strict";n.setCacheNameDetails({prefix:"pok"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/17.f202355e.css",revision:null},{url:"css/439.bafa6192.css",revision:null},{url:"css/578.1bd802c0.css",revision:null},{url:"css/584.7d819f8c.css",revision:null},{url:"css/98.c5aa48e0.css",revision:null},{url:"css/app.420ebab1.css",revision:null},{url:"css/vendor.f8b38ae6.css",revision:null},{url:"favicon.ico",revision:"7594897533c3642fea581d3ceab1f074"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/fa-brands-400.455ea818.woff2",revision:null},{url:"fonts/fa-brands-400.60127e35.ttf",revision:null},{url:"fonts/fa-regular-400.21cb8f55.woff2",revision:null},{url:"fonts/fa-regular-400.eb91f7b9.ttf",revision:null},{url:"fonts/fa-solid-900.4d986b00.woff2",revision:null},{url:"fonts/fa-solid-900.bacd5de6.ttf",revision:null},{url:"fonts/fa-v4compatibility.c8e090db.ttf",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"53e6ee63b44111664c3f4d22cb1d38b4"},{url:"icons/apple-icon-152x152.png",revision:"295a2511ccb9cea26bbfa2dd9c7ed8f7"},{url:"icons/apple-icon-167x167.png",revision:"d4bb6ba0d2794278ad76ce9df472182f"},{url:"icons/apple-icon-180x180.png",revision:"b26bc445009b975b5234169f61374932"},{url:"icons/apple-launch-1080x2340.png",revision:"febb201cd6faa14b7eceb81339dc908f"},{url:"icons/apple-launch-1125x2436.png",revision:"e500ca903a303697998b511e3ba52f56"},{url:"icons/apple-launch-1170x2532.png",revision:"eddda892c2e076cf4ae619b6a07e3046"},{url:"icons/apple-launch-1179x2556.png",revision:"1febb6e631263eaf70f94562e803475f"},{url:"icons/apple-launch-1242x2208.png",revision:"fcfa32cd8092b92292861fe61c2084ec"},{url:"icons/apple-launch-1242x2688.png",revision:"9a83ac912c5136c17e7021f1e65d9c1f"},{url:"icons/apple-launch-1284x2778.png",revision:"8b6ad2bdcb0bec3c9b29d905c40f6236"},{url:"icons/apple-launch-1290x2796.png",revision:"a05e84c90fc3528107d8a40cf74b6312"},{url:"icons/apple-launch-1536x2048.png",revision:"9036ca3f921e4c3fb8f1c6ff1c62d7da"},{url:"icons/apple-launch-1620x2160.png",revision:"e13073c385cef5e2c86aa06481ea205b"},{url:"icons/apple-launch-1668x2224.png",revision:"77c65e88451ead056aed144ad4915d25"},{url:"icons/apple-launch-1668x2388.png",revision:"57afe5607e2e1dfb25b72d97e4d1ec28"},{url:"icons/apple-launch-2048x2732.png",revision:"859298767e9caa0e955be5b7403ecd10"},{url:"icons/apple-launch-750x1334.png",revision:"a2372a0ffc4f4885f74bf6794122559a"},{url:"icons/apple-launch-828x1792.png",revision:"d954b5995bc86a56265d3bba6187d96a"},{url:"icons/favicon-128x128.png",revision:"4394f42f557dbb4aa326c475741fabd4"},{url:"icons/favicon-16x16.png",revision:"06f6937b1326555bc870c4bfaee7c1f6"},{url:"icons/favicon-32x32.png",revision:"7a17b0310a787b4a5e200b483386821f"},{url:"icons/favicon-96x96.png",revision:"e32fc25f34cb7431521122a3140ddfbe"},{url:"icons/icon-128x128.png",revision:"4394f42f557dbb4aa326c475741fabd4"},{url:"icons/icon-192x192.png",revision:"5657314af07ff8a6375a05f0891e49cf"},{url:"icons/icon-256x256.png",revision:"e0329bd7208bf53239b1a58b34375c25"},{url:"icons/icon-384x384.png",revision:"270e0bf83c94fc9aa81b68c54415b59f"},{url:"icons/icon-512x512.png",revision:"7f015b8c7a2c25c14b89033b162ad563"},{url:"icons/ms-icon-144x144.png",revision:"330df1c5b46233581e851b23db1bbcee"},{url:"icons/safari-pinned-tab.svg",revision:"c40540648fe16bd52aedf8801e919af8"},{url:"index.html",revision:"d6cb29294a745448373dd9ef4a21dde8"},{url:"js/17.1f6baca5.js",revision:null},{url:"js/439.f45fc18f.js",revision:null},{url:"js/487.e36e9602.js",revision:null},{url:"js/578.b7659727.js",revision:null},{url:"js/584.5803c43b.js",revision:null},{url:"js/664.2b051253.js",revision:null},{url:"js/841.279f0cc6.js",revision:null},{url:"js/98.af0663ce.js",revision:null},{url:"js/app.d48971f1.js",revision:null},{url:"js/chunk-common.044392e9.js",revision:null},{url:"js/vendor.e18f1c48.js",revision:null},{url:"manifest.json",revision:"efd2b57980ea59b273553cc0b62428c7"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
