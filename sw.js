if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>n(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"f5eaa1b04e6a0860ee1cb117e9d3fc95"},{url:"assets/bizcar-BzIAnOqb.png",revision:null},{url:"assets/catch-DpRJS-Ci.png",revision:null},{url:"assets/css-bLrZJUBe.png",revision:null},{url:"assets/dict-DhcSBlaS.png",revision:null},{url:"assets/domino-s01BdWbV.png",revision:null},{url:"assets/gicova-D5-Us4Xy.png",revision:null},{url:"assets/gitB-6ExGK3SL.png",revision:null},{url:"assets/GitHub-CTDVBM4o.png",revision:null},{url:"assets/html-CKyDEyeN.png",revision:null},{url:"assets/ill-CG5Mii6m.png",revision:null},{url:"assets/index-AXN8d9ow.js",revision:null},{url:"assets/index-CwlnswSP.css",revision:null},{url:"assets/jquery-BkZVLsei.png",revision:null},{url:"assets/js-Bu6ZFjaT.png",revision:null},{url:"assets/kt-6gtisiuH.png",revision:null},{url:"assets/me-BhW607wH.png",revision:null},{url:"assets/myself-DmMSvKWt.png",revision:null},{url:"assets/mysql-LFIKHzhJ.png",revision:null},{url:"assets/night-BTosrtq3.png",revision:null},{url:"assets/node-BXcG4YML.png",revision:null},{url:"assets/photo-DCnsx6Sy.png",revision:null},{url:"assets/port-BqW4juR2.png",revision:null},{url:"assets/React-BdJZmLQ_.png",revision:null},{url:"assets/socar-Dpuylntb.png",revision:null},{url:"assets/Three-D41LlUix.png",revision:null},{url:"assets/todo-B_e5idFh.png",revision:null},{url:"favicon.ico",revision:"5efb472c9d8e87d56a4fbde045fafc8f"},{url:"favicon.png",revision:"5153a4cc3d4e790dc45f24648ae5bac8"},{url:"index.html",revision:"1f5bd017b3a2c4f03a48658edc4ff0b5"},{url:"LOGO.svg",revision:"eff91ead8bf3352867cc81cfc14d31a5"},{url:"maskable-icon-512x512.png",revision:"aee6abeacfca4f9c30bb4819bd17ff91"},{url:"pwa-192x192.png",revision:"0c9aee98f2d1335ec472cfdfbfaae416"},{url:"pwa-512x512.png",revision:"e93851c9903b6ee2128238a38b44d4d7"},{url:"pwa-64x64.png",revision:"e5167a61a9d4929b46979befcfb26967"},{url:"manifest.webmanifest",revision:"78261c06607bc18c2755ec79504014bc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));