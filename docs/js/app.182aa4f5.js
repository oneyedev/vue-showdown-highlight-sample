(function(n){function e(e){for(var i,s,a=e[0],h=e[1],l=e[2],c=0,d=[];c<a.length;c++)s=a[c],o[s]&&d.push(o[s][0]),o[s]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(n[i]=h[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],i=!0,a=1;a<t.length;a++){var h=t[a];0!==o[h]&&(i=!1)}i&&(r.splice(e--,1),n=s(s.s=t[0]))}return n}var i={},o={app:0},r=[];function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=i,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)s.d(t,i,function(e){return n[e]}.bind(null,i));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/vue-showdown-highlight-sample/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=h;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var i=t("64a9"),o=t.n(i);o.a},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var i=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("vue-showdown",{staticClass:"markdown-body",attrs:{markdown:n.markdown,flavor:"github",extensions:["showdownHighlight","colorTextExtension","h1LinkExtension"]}})],1)},r=[],s="\n# Welcome to vue-showdown-hightlight sample page!\nThis page source is markdown. Belows are made by `vue-showdown`, `showdown-hightlight` module in `vue-framework`.\n\nYou can see h1 tag link like github. All steps are here - [Convert Markdown Text into HTML (vue-showdown-highlight)](https://oneyedev.github.io/#/articles/convert-markdown-text-into-html-1)\n\n# This is a h1\n## This is a h2 \n### This is a h3\n#### This is a h4\n##### This is a h5\n###### this is a h6\n# List item\n- This is a unordered item1\n- This is a unordered item2\n- This is a unordered item3\n\n1. This is a ordered item1\n1. This is a ordered item2\n1. This is a ordered item3\n\n* depth1\n * depth2\n   * depth3 is not working! (maybe.. bug?)\n\n# Link, Image\n[This is a hyper link](https://google.com)\n![This is a image](https://picsum.photos/200/200/?random)\n![This is a image alt](https://)\n\n# Text \n<center>This text is centered</center>\n*This is a italic-style text*\n**This is a strong text**\n\n> This is a block quote\n\n# Code block\n```sh\nThis is a code block\n```\n\n```js\nconst HELLO_WORLD = 'Hello World!'\n```\n\n# Custom extension\n***[#FF0000]This is a color text by a custom extension***\nLinks are added at h1 tag by a custom extension. click it!\n\n",a={name:"app",data:function(){return{markdown:s}}},h=a,l=(t("034f"),t("2877")),u=Object(l["a"])(h,o,r,!1,null,null,null),c=u.exports,d=(t("a481"),t("866c")),p=t.n(d),f=(t("e4cb"),t("aef1")),g=t.n(f),m=(t("2c43"),{type:"lang",regex:/\*\*\*\[(#[0-9A-F]{6})\](.+)\*\*\*/g,replace:'<span style="color:$1">$2</span>'}),w=0,b={type:"output",filter:function(n,e){if(w<1){++w;var t=e.makeHtml(n);return t.replace(/<h1 id="(.+)">(.+)<\/h1>/g,'\n            <h1 id="$1">\n                <a href="#$1" class="anchor">\n                    <i\n                        style="visibility: visible"\n                        class="octicon octicon-link material-icons"\n                    >\n                    link\n                    </i>\n                </a>\n                $2\n            </h1>')}return n}};d["showdown"].extension("showdownHighlight",g.a),d["showdown"].extension("colorTextExtension",m),d["showdown"].extension("h1LinkExtension",b),i["a"].use(p.a),i["a"].config.productionTip=!1,new i["a"]({render:function(n){return n(c)}}).$mount("#app")},"64a9":function(n,e,t){}});
//# sourceMappingURL=app.182aa4f5.js.map