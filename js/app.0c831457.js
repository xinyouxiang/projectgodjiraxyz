(function(t){function e(e){for(var a,o,s=e[0],u=e[1],p=e[2],c=0,y=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&y.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(y.length)y.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-d6d8a804":"65083885"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var p=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",p.name="ChunkLoadError",p.type=a,p.request=i,n[1](p)}r[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"app-box"};function i(t,e,n,i,o,s){var u=Object(a["v"])("router-view");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["g"])(u)])}var o=n("1da1"),s=(n("96cf"),n("e9c4"),n("6c02")),u={name:"App",setup:function(){Object(s["c"])();var t=Object(a["i"])(),e=t.proxy;return Object(a["p"])(Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:sessionStorage.getItem("storedata")&&e.$store.replaceState(Object.assign({},e.$store.state,JSON.parse(sessionStorage.getItem("storedata")))),window.addEventListener("beforeunload",(function(){sessionStorage.setItem("storedata",JSON.stringify(e.$store.state))})),window.addEventListener("pagehide",(function(){sessionStorage.setItem("storedata",JSON.stringify(e.$store.state))}));case 3:case"end":return t.stop()}}),t)})))),{}}},p=n("6b0d"),c=n.n(p);const l=c()(u,[["render",i]]);var y=l,d=(n("d3b7"),n("3ca3"),n("ddb0"),function(){return n.e("chunk-d6d8a804").then(n.bind(null,"d504"))}),m=[{path:"/",name:"Home",component:d},{path:"/:catchAll(.*)",redirect:"/"}],b=Object(s["a"])({history:Object(s["b"])(""),routes:m});b.beforeEach((function(t,e,n){return n()}));var f=b,w=n("5502"),g=Object(w["a"])({state:{connect:{isConnect:!1,address:"",balance:""},supportData:0,network:[{id:1,chainName:"TRON Shasta(测试网)",rpcUrls:"https://api.shasta.trongrid.io"},{id:2,chainName:"TRON主网(TronGrid)",rpcUrls:"https://api.trongrid.io"},{id:3,chainName:"TRON主网(TronStack)",rpcUrls:"https://api.tronstack.io"},{id:4,chainName:"TRON Nile(测试网)",rpcUrls:"https://api.nileex.io"},{id:5,chainName:"DappChain (主网)",rpcUrls:"https://sun.tronex.io"},{id:6,chainName:"DappChain (测试网)",rpcUrls:"https://suntest.tronex.io"}]},mutations:{changeconnect:function(t,e){t.connect=e}},actions:{},modules:{}}),h=n("47e2"),v={name:"姓名",age:"男",lang_1:"Spot Center",lang_2:"OTC trading",lang_3:"Contract Center",lang_4:"Agent",lang_5:"More"},x=v,M={name:"姓名",age:"男",lang_1:"Spot Center",lang_2:"OTC trading",lang_3:"Contract Center",lang_4:"Agent",lang_5:"More"},O=M,F={zh_CN:x,en_US:O},k=localStorage.getItem("localeLang")||"zh_CN",N=Object(h["a"])({locale:k,messages:F}),S=N,_=n("bc3a"),C=n.n(_),j={},T={state:!1,balance:0};j.linkWallet=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!window.tronWeb){t.next=20;break}if(e=window.tronWeb,e.defaultAddress.base58){t.next=6;break}T.msg="Please login wallet!",t.next=18;break;case 6:if(n=e.fullNode.host,a=g.state.network[g.state.supportData],n!=a.rpcUrls){t.next=17;break}return T.state=!0,T.address=e.defaultAddress.base58,t.next=13,e.trx.getBalance(e.defaultAddress.base58);case 13:r=t.sent,T.balance=e.fromSun(r),t.next=18;break;case 17:T.msg="The current network is not supported. Please switch the network to"+a.chainName+"and try again！";case 18:t.next=21;break;case 20:T.msg="Please install the wallet!";case 21:return t.abrupt("return",T);case 22:case"end":return t.stop()}}),t)}))),j.getbalance=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=tronWeb,t.next=3,tronWeb.trx.getBalance(e);case 3:return t.t1=t.sent,n=t.t0.fromSun.call(t.t0,t.t1),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var A=j,I={trx721StandardAddress:"TZC7kx5xCNZuN34ooLt13Zx4iZn3mMgkWv"},P=I,V=n("ec7d"),R={},L=function(t,e){return window.tronWeb.contract(t,e)};R.trx721StandarContract=function(){return L(V,P.trx721StandardAddress)};var U=R,E={},W=null;E.getCurrentContract=function(){return window.tronWeb&&null==W&&(W=U.trx721StandarContract().methods),W},E.totalSupply=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.totalSupply().call();case 2:return e=t.sent,t.abrupt("return",parseInt(e._hex,16));case 4:case"end":return t.stop()}}),t)}))),E.publicMint=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,a,r){var i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return{},i=e*n,o=window.tronWeb.toHex(i*Math.pow(10,6)),t.next=5,W["mint"](e);case 5:s=t.sent,s.send({feeLimit:1e8,callValue:o,shouldPollResponse:!1}).then((function(t){a(t)}),(function(t){r(t)}));case 7:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}();var B=E,J={};J.CONSTANTS=P,J.CONNECT=A,J.CONTRACT=B;var $=J,D={get:function(t,e){return C()({method:"get",url:t,params:e})},post:function(t,e){return C()({method:"post",url:t,headers:{"Content-Type":"aplication/json","x-access-token":g.state.connect.token},data:e})}},Z=D,q=Object(a["d"])(y);q.use(g),q.use(f),q.use(S),q.config.globalProperties.$http=Z,q.config.globalProperties.$utils=$,q.mount("#app")},ec7d:function(t){t.exports=JSON.parse('[{"inputs":[{"name":"defaultBaseURI","type":"string"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"Event"},{"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"Event"},{"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"Event"},{"stateMutability":"Payable","type":"Fallback"},{"inputs":[{"name":"_addresses","type":"address[]"}],"name":"addToWhiteList","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"baseURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"cost","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"_address","type":"address"}],"name":"isWhiteListed","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"maxMintAmount","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"maxMintPerTransaction","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"maxSupply","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_mintAmount","type":"uint256"}],"name":"mint","stateMutability":"Payable","type":"Function"},{"inputs":[{"name":"_to","type":"address"},{"name":"_mintAmount","type":"uint256"}],"name":"mintByOwner","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"name":"mintLive","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"_address","type":"address"}],"name":"mintedByAddressCount","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"name","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"nextOwnerToExplicitlySet","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"name":"owner","stateMutability":"View","type":"Function"},{"outputs":[{"type":"address"}],"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","stateMutability":"View","type":"Function"},{"outputs":[{"type":"bool"}],"name":"preSaleLive","stateMutability":"View","type":"Function"},{"inputs":[{"name":"_mintAmount","type":"uint256"}],"name":"preSaleMint","stateMutability":"Payable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"operator","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newURI","type":"string"}],"name":"setBaseURI","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setCost","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"quantity","type":"uint256"}],"name":"setOwnersExplicit","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","stateMutability":"Nonpayable","type":"Function"},{"inputs":[{"name":"_newmaxMintPerTransaction","type":"uint256"}],"name":"setmaxMintPerTransaction","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"bool"}],"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"name":"symbol","stateMutability":"View","type":"Function"},{"name":"toggleMintLive","stateMutability":"Nonpayable","type":"Function"},{"name":"togglePreSaleLive","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","stateMutability":"View","type":"Function"},{"outputs":[{"type":"string"}],"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"name":"totalSupply","stateMutability":"View","type":"Function"},{"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","stateMutability":"Nonpayable","type":"Function"},{"name":"withdraw","stateMutability":"Payable","type":"Function"},{"stateMutability":"Payable","type":"Receive"}]')}});
//# sourceMappingURL=app.0c831457.js.map