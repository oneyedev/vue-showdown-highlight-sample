(function(n){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],l=0,d=[];l<a.length;l++)s=a[l],i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,a=1;a<t.length;a++){var u=t[a];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/vue-showdown-highlight-sample/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=u;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("64a9"),i=t.n(r);i.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("vue-showdown",{staticClass:"markdown-body",attrs:{markdown:n.markdown,flavor:"github"}})],1)},o=[],s="\n# This is a h1\n## This is a h2 \n### This is a h3\n#### This is a h4\n##### This is a h5\n###### this is a h6\n***\n- This is a unordered item1\n- This is a unordered item2\n- This is a unordered item3\n\n1. This is a ordered item1\n1. This is a ordered item2\n1. This is a ordered item3\n\n* depth1\n * depth2\n   * depth3 is not working! (maybe.. bug?)\n\n***\n[This is a hyper link](https://google.com)\n![This is a image](https://picsum.photos/200/200/?random)\n![This is a image alt](https://)\n***\n\n<center>This text is centered</center>\n**This is a emphasizing text**\n*This is a italic-style text*\n> This is a block quote\n\n```sh\nThis is a code block\n```\n```js\nconst HELLO_WORLD = 'Hello World!'\n```\n",a={name:"app",data:function(){return{markdown:s}}},u=a,c=(t("034f"),t("2877")),h=Object(c["a"])(u,i,o,!1,null,null,null),l=h.exports,d=t("866c"),p=t.n(d);t("e4cb");r["a"].use(p.a),r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(l)}}).$mount("#app")},"64a9":function(n,e,t){}});
//# sourceMappingURL=app.1454108e.js.map