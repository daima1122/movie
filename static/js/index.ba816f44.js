(function(n){function e(e){for(var t,r,u=e[0],c=e[1],s=e[2],p=0,d=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var n,e=0;e<i.length;e++){for(var o=i[e],t=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(t=!1)}t&&(i.splice(e--,1),n=u(u.s=o[0]))}return n}var t={},a={index:0},i=[];function r(n){return u.p+"static/js/"+({"pages-download":"pages-download","pages-http":"pages-http","pages-httpp":"pages-httpp","pages-index~pages-play":"pages-index~pages-play","pages-index":"pages-index","pages-play":"pages-play"}[n]||n)+"."+{"pages-download":"bb180fa5","pages-http":"1967b0bc","pages-httpp":"77b92b48","pages-index~pages-play":"16a55f05","pages-index":"0b5aae75","pages-play":"bf59b9b9"}[n]+".js"}function u(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(n){var e=[],o=a[n];if(0!==o)if(o)e.push(o[2]);else{var t=new Promise((function(e,t){o=a[n]=[e,t]}));e.push(o[2]=t);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(n);var s=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(p);var o=a[n];if(0!==o){if(o){var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+t+": "+i+")",s.name="ChunkLoadError",s.type=t,s.request=i,o[1](s)}a[n]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},u.m=n,u.c=t,u.d=function(n,e,o){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(o,t,function(e){return n[e]}.bind(null,t));return o},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=s;i.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("fd2b")},"0fd4":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=t},"15f7":function(n,e,o){"use strict";o.r(e);var t=o("e186"),a=o("7449");for(var i in a)"default"!==i&&function(n){o.d(e,n,(function(){return a[n]}))}(i);o("ab36");var r,u=o("f0c5"),c=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);e["default"]=c.exports},"5f9c":function(n,e,o){var t=o("24fb");e=t(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),n.exports=e},7449:function(n,e,o){"use strict";o.r(e);var t=o("0fd4"),a=o.n(t);for(var i in t)"default"!==i&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=a.a},a596:function(n,e,o){"use strict";(function(n){var e=o("4ea4"),t=e(o("e143"));n["____7B0D79D____"]=!0,delete n["____7B0D79D____"],n.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarBackgroundColor:"#FFFFFF",navigationBarTitleText:"UCC电影网",navigationStyle:"custom",navigationBarTextStyle:"black",animationType:"slide-out-right",rpxCalcMaxDeviceWidth:560},tabBar:{custom:!0,color:"#707070",selectedColor:"#3390F5",borderStyle:"black",backgroundColor:"#ffffff",list:[]},condition:{current:0,list:[{name:"",path:"",query:""}]},usingComponts:!0,sitemapLocation:"sitemap.json"},n.__uniConfig.compilerVersion="3.1.22",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-index",(function(n){var e={component:Promise.all([o.e("pages-index~pages-play"),o.e("pages-index")]).then(function(){return n(o("7948"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-play",(function(n){var e={component:Promise.all([o.e("pages-index~pages-play"),o.e("pages-play")]).then(function(){return n(o("4c76"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-download",(function(n){var e={component:o.e("pages-download").then(function(){return n(o("9aa7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-http",(function(n){var e={component:o.e("pages-http").then(function(){return n(o("21ad"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-httpp",(function(n){var e={component:o.e("pages-httpp").then(function(){return n(o("6fff"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{enablePullDownRefresh:!0})},[n("pages-index",{slot:"page"})])}},meta:{id:1,name:"pages-index",isNVue:!1,maxWidth:0,pagePath:"pages/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/play",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[n("pages-play",{slot:"page"})])}},meta:{name:"pages-play",isNVue:!1,maxWidth:0,pagePath:"pages/play",windowTop:0}},{path:"/pages/download",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-download",{slot:"page"})])}},meta:{name:"pages-download",isNVue:!1,maxWidth:0,pagePath:"pages/download",windowTop:0}},{path:"/pages/http",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-http",{slot:"page"})])}},meta:{name:"pages-http",isNVue:!1,maxWidth:0,pagePath:"pages/http",windowTop:0}},{path:"/pages/httpp",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-httpp",{slot:"page"})])}},meta:{name:"pages-httpp",isNVue:!1,maxWidth:0,pagePath:"pages/httpp",windowTop:0}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,o("c8ba"))},ab36:function(n,e,o){"use strict";var t=o("e42f"),a=o.n(t);a.a},e186:function(n,e,o){"use strict";var t;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var a=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},e42f:function(n,e,o){var t=o("5f9c");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var a=o("4f06").default;a("0bc0e7c9",t,!0,{sourceMap:!1,shadowMode:!1})},fd2b:function(n,e,o){"use strict";var t=o("4ea4"),a=t(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("a596"),o("1c31");var i=t(o("e143")),r=t(o("15f7")),u=t(o("186e"));i.default.use(u.default),i.default.config.productionTip=!1,r.default.mpType="app";var c=new i.default((0,a.default)({},r.default));c.$mount()}});