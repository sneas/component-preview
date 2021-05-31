(()=>{var e={800:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var o=t(15),r=t.n(o),i=t(645),s=t.n(i)()(r());s.push([e.id,'.hljs{background:#1e1e1e;color:#dcdcdc}.hljs-keyword,.hljs-literal,.hljs-symbol,.hljs-name{color:#569cd6}.hljs-link{color:#569cd6;text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-number,.hljs-class{color:#b8d7a3}.hljs-string,.hljs-meta .hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-subst,.hljs-function,.hljs-title,.hljs-params,.hljs-formula{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a;font-style:italic}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-tag{color:#9b9b9b}.hljs-variable,.hljs-template-variable{color:#bd63c5}.hljs-attr,.hljs-attribute{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-bullet,.hljs-selector-tag,.hljs-selector-id,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo{color:#d7ba7d}.hljs-addition{background-color:#144212;display:inline-block;width:100%}.hljs-deletion{background-color:#600;display:inline-block;width:100%}.x-ray__toggle{cursor:pointer}.x-ray__toggle:before{content:" ";display:inline-block;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid currentColor;vertical-align:middle;margin-right:.7rem;transform:translateY(-2px);transition:transform .2s ease-out}.x-ray__toggle.x-ray__toggle--active:before{transform:rotate(90deg) translate(-3px, -4px)}.x-ray__toggle:active,.x-ray__toggle:focus{outline:none}.x-ray__code-container{max-height:0;overflow:hidden;transition:max-height .2s ease-out}.x-ray__code-container--visible{max-height:1000px;transition:max-height .15s ease-in}.x-ray__code{margin-bottom:0;padding:7px}',"",{version:3,sources:["webpack://./node_modules/highlight.js/scss/vs2015.scss","webpack://./src/index.scss"],names:[],mappings:"AAKA,MACE,kBAAA,CACA,aAAA,CAGF,oDAIE,aAAA,CAEF,WACE,aAAA,CACA,yBAAA,CAGF,0BAEE,aAAA,CAGF,yBAEE,aAAA,CAGF,qCAEE,aAAA,CAGF,gCAEE,aAAA,CAGF,kEAKE,aAAA,CAGF,0BAEE,aAAA,CACA,iBAAA,CAGF,aACE,aAAA,CAGF,8CAIE,aAAA,CAGF,uCAEE,aAAA,CAGF,2BAEE,aAAA,CAGF,cACE,UAAA,CAGF,eACE,iBAAA,CAGF,aACE,gBAAA,CAOF,iHAME,aAAA,CAGF,eACE,wBAAA,CACA,oBAAA,CACA,UAAA,CAGF,eACE,qBAAA,CACA,oBAAA,CACA,UAAA,CC5GF,eACE,cAAA,CAEA,sBACE,WAAA,CACA,oBAAA,CAEA,gCAAA,CACA,mCAAA,CACA,kCAAA,CAEA,qBAAA,CACA,kBAAA,CACA,0BAAA,CAEA,iCAAA,CAIA,4CACE,6CAAA,CAIJ,2CAEE,YAAA,CAIJ,uBACE,YAAA,CACA,eAAA,CACA,kCAAA,CAGF,gCACE,iBAAA,CACA,kCAAA,CAGF,aACE,eAAA,CACA,WAAA",sourcesContent:["/*\n * Visual Studio 2015 dark style\n * Author: Nicolas LLOBERA <nllobera@gmail.com>\n */\n\n.hljs {\n  background: #1E1E1E;\n  color: #DCDCDC;\n}\n\n.hljs-keyword,\n.hljs-literal,\n.hljs-symbol,\n.hljs-name {\n  color: #569CD6;\n}\n.hljs-link {\n  color: #569CD6;\n  text-decoration: underline;\n}\n\n.hljs-built_in,\n.hljs-type {\n  color: #4EC9B0;\n}\n\n.hljs-number,\n.hljs-class {\n  color: #B8D7A3;\n}\n\n.hljs-string,\n.hljs-meta .hljs-string {\n  color: #D69D85;\n}\n\n.hljs-regexp,\n.hljs-template-tag {\n  color: #9A5334;\n}\n\n.hljs-subst,\n.hljs-function,\n.hljs-title,\n.hljs-params,\n.hljs-formula {\n  color: #DCDCDC;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #57A64A;\n  font-style: italic;\n}\n\n.hljs-doctag {\n  color: #608B4E;\n}\n\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n\n.hljs-tag {\n  color: #9B9B9B;\n}\n\n.hljs-variable,\n.hljs-template-variable {\n  color: #BD63C5;\n}\n\n.hljs-attr,\n.hljs-attribute {\n  color: #9CDCFE;\n}\n\n.hljs-section {\n  color: gold;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n/*.hljs-code {\n  font-family:'Monospace';\n}*/\n\n.hljs-bullet,\n.hljs-selector-tag,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo {\n  color: #D7BA7D;\n}\n\n.hljs-addition {\n  background-color: #144212;\n  display: inline-block;\n  width: 100%;\n}\n\n.hljs-deletion {\n  background-color: #600;\n  display: inline-block;\n  width: 100%;\n}\n","@import '~highlight.js/scss/vs2015';\n\n.x-ray__toggle {\n  cursor: pointer;\n\n  &:before {\n    content: ' ';\n    display: inline-block;\n\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 5px solid currentColor;\n\n    vertical-align: middle;\n    margin-right: 0.7rem;\n    transform: translateY(-2px);\n\n    transition: transform 0.2s ease-out;\n  }\n\n  &.x-ray__toggle--active {\n    &:before {\n      transform: rotate(90deg) translate(-3px, -4px);\n    }\n  }\n\n  &:active,\n  &:focus {\n    outline: none;\n  }\n}\n\n.x-ray__code-container {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n.x-ray__code-container--visible {\n  max-height: 1000px;\n  transition: max-height 0.15s ease-in;\n}\n\n.x-ray__code {\n  margin-bottom: 0;\n  padding: 7px;\n}\n"],sourceRoot:""}]);const a=s},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},15:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}e.exports=function(e){var t,o,r=(o=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var o,r,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw r}}return i}}(t,o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],s=r[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(l," */"),d=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(d).concat([c]).join("\n")}return[i].join("\n")}},802:e=>{var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var o=e[n];"object"!=typeof o||Object.isFrozen(o)||t(o)})),e}n.exports=t,n.exports.default=t;var o=n.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const a=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!a(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class d extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function u(e){return e?"string"==typeof e?e:e.source:null}function g(...e){return e.map((e=>u(e))).join("")}function h(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map((e=>u(e))).join("|")+")"}function f(e){return new RegExp(e.toString()+"|").exec("").length-1}const p=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function A(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let o=u(e),r="";for(;o.length>0;){const e=p.exec(o);if(!e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+n):(r+=e[0],"("===e[0]&&t++)}return r})).map((e=>`(${e})`)).join(n)}const b="[a-zA-Z]\\w*",m="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",E="\\b(0b[01]+)",j={begin:"\\\\[\\s\\S]",relevance:0},_={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[j]},w={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[j]},v=function(e,n,t={}){const o=s({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=h("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:g(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},C=v("//","$"),k=v("/\\*","\\*/"),N=v("#","$"),O={scope:"number",begin:x,relevance:0},S={scope:"number",begin:y,relevance:0},M={scope:"number",begin:E,relevance:0},B={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[j,{begin:/\[/,end:/\]/,relevance:0,contains:[j]}]}]},R={scope:"title",begin:b,relevance:0},I={scope:"title",begin:m,relevance:0};var L=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:b,UNDERSCORE_IDENT_RE:m,NUMBER_RE:x,C_NUMBER_RE:y,BINARY_NUMBER_RE:E,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=g(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:j,APOS_STRING_MODE:_,QUOTE_STRING_MODE:w,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:v,C_LINE_COMMENT_MODE:C,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:N,NUMBER_MODE:O,C_NUMBER_MODE:S,BINARY_NUMBER_MODE:M,REGEXP_MODE:B,TITLE_MODE:R,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function T(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function D(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function P(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function G(e,n){Array.isArray(e.illegal)&&(e.illegal=h(...e.illegal))}function F(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function H(e,n){void 0===e.relevance&&(e.relevance=1)}const $=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=g(t.beforeMatch,g("(?=",t.begin,")")),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},U=["of","and","for","in","not","or","if","then","parent","list","value"];function z(e,n,t="keyword"){const o=Object.create(null);return"string"==typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(o,z(e[t],n,t))})),o;function r(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");o[t[0]]=[e,K(t[0],t[1])]}))}}function K(e,n){return n?Number(n):function(e){return U.includes(e.toLowerCase())}(e)?0:1}const W={},Z=e=>{console.error(e)},q=(e,...n)=>{console.log(`WARN: ${e}`,...n)},X=(e,n)=>{W[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),W[`${e}/${n}`]=!0)},Y=new Error;function J(e,n,{key:t}){let o=0;const r=e[t],i={},s={};for(let e=1;e<=n.length;e++)s[e+o]=r[e],i[e+o]=!0,o+=f(n[e-1]);e[t]=s,e[t]._emit=i,e[t]._multi=!0}function V(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Y;if("object"!=typeof e.beginScope||null===e.beginScope)throw Z("beginScope must be object"),Y;J(e,e.begin,{key:"beginScope"}),e.begin=A(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Y;if("object"!=typeof e.endScope||null===e.endScope)throw Z("endScope must be object"),Y;J(e,e.end,{key:"endScope"}),e.end=A(e.end,{joinWith:""})}}(e)}function Q(e){function n(n,t){return new RegExp(u(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(A(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),o=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,o)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,i){const a=r;if(r.isCompiled)return a;[D,F,V,$].forEach((e=>e(r,i))),e.compilerExtensions.forEach((e=>e(r,i))),r.__beforeBegin=null,[P,G,H].forEach((e=>e(r,i))),r.isCompiled=!0;let l=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=z(r.keywords,e.case_insensitive)),a.keywordPatternRe=n(l,!0),i&&(r.begin||(r.begin=/\B|\b/),a.beginRe=n(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(a.endRe=n(r.end)),a.terminatorEnd=u(r.end)||"",r.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(a.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:ee(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,a)})),r.starts&&t(r.starts,i),a.matcher=function(e){const n=new o;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(a),a}(e)}function ee(e){return!!e&&(e.endsWithParent||ee(e.starts))}const ne=i,te=s,oe=Symbol("nomatch");var re=function(e){const n=Object.create(null),t=Object.create(null),i=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:d};function u(e){return c.noHighlightRe.test(e)}function g(e,n,t,o){let r="",i="";"object"==typeof n?(r=e,t=n.ignoreIllegals,i=n.language,o=void 0):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,r=n),void 0===t&&(t=!0);const s={code:r,language:i};E("before:highlight",s);const a=s.result?s.result:h(s.language,s.code,t,o);return a.code=s.code,E("after:highlight",a),a}function h(e,t,o,i){const l=Object.create(null);function d(){if(!v.keywords)return void k.addText(N);let e=0;v.keywordPatternRe.lastIndex=0;let n=v.keywordPatternRe.exec(N),t="";for(;n;){t+=N.substring(e,n.index);const r=j.case_insensitive?n[0].toLowerCase():n[0],i=(o=r,v.keywords[o]);if(i){const[e,o]=i;if(k.addText(t),t="",l[r]=(l[r]||0)+1,l[r]<=7&&(O+=o),e.startsWith("_"))t+=n[0];else{const t=j.classNameAliases[e]||e;k.addKeyword(n[0],t)}}else t+=n[0];e=v.keywordPatternRe.lastIndex,n=v.keywordPatternRe.exec(N)}var o;t+=N.substr(e),k.addText(t)}function u(){null!=v.subLanguage?function(){if(""===N)return;let e=null;if("string"==typeof v.subLanguage){if(!n[v.subLanguage])return void k.addText(N);e=h(v.subLanguage,N,!0,C[v.subLanguage]),C[v.subLanguage]=e._top}else e=f(N,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(O+=e.relevance),k.addSublanguage(e._emitter,e.language)}():d(),N=""}function g(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const o=j.classNameAliases[e[t]]||e[t],r=n[t];o?k.addKeyword(r,o):(N=r,d(),N=""),t++}}function p(e,n){return e.scope&&"string"==typeof e.scope&&k.openNode(j.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(k.addKeyword(N,j.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=""):e.beginScope._multi&&(g(e.beginScope,n),N="")),v=Object.create(e,{parent:{value:v}}),v}function A(e,n,t){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(o){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.isMatchIgnored&&(o=!1)}if(o){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return A(e.parent,n,t)}function b(e){return 0===v.matcher.regexIndex?(N+=e[0],1):(B=!0,0)}function x(e){const n=e[0],o=t.substr(e.index),r=A(v,e,o);if(!r)return oe;const i=v;v.endScope&&v.endScope._wrap?(u(),k.addKeyword(n,v.endScope._wrap)):v.endScope&&v.endScope._multi?(u(),g(v.endScope,e)):i.skip?N+=n:(i.returnEnd||i.excludeEnd||(N+=n),u(),i.excludeEnd&&(N=n));do{v.scope&&!v.isMultiClass&&k.closeNode(),v.skip||v.subLanguage||(O+=v.relevance),v=v.parent}while(v!==r.parent);return r.starts&&p(r.starts,e),i.returnEnd?0:n.length}let y={};function E(n,i){const a=i&&i[0];if(N+=n,null==a)return u(),0;if("begin"===y.type&&"end"===i.type&&y.index===i.index&&""===a){if(N+=t.slice(i.index,i.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=y.rule,n}return 1}if(y=i,"begin"===i.type)return function(e){const n=e[0],t=e.rule,o=new r(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,o),o.isMatchIgnored))return b(n);return t.skip?N+=n:(t.excludeBegin&&(N+=n),u(),t.returnBegin||t.excludeBegin||(N=n)),p(t,e),t.returnBegin?0:n.length}(i);if("illegal"===i.type&&!o){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(v.scope||"<unnamed>")+'"');throw e.mode=v,e}if("end"===i.type){const e=x(i);if(e!==oe)return e}if("illegal"===i.type&&""===a)return 1;if(M>1e5&&M>3*i.index)throw new Error("potential infinite loop, way more iterations than matches");return N+=a,a.length}const j=m(e);if(!j)throw Z(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const _=Q(j);let w="",v=i||_;const C={},k=new c.__emitter(c);!function(){const e=[];for(let n=v;n!==j;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>k.openNode(e)))}();let N="",O=0,S=0,M=0,B=!1;try{for(v.matcher.considerAll();;){M++,B?B=!1:v.matcher.considerAll(),v.matcher.lastIndex=S;const e=v.matcher.exec(t);if(!e)break;const n=E(t.substring(S,e.index),e);S=e.index+n}return E(t.substr(S)),k.closeAllNodes(),k.finalize(),w=k.toHTML(),{language:e,value:w,relevance:O,illegal:!1,_emitter:k,_top:v}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:ne(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:S,context:t.slice(S-100,S+100),mode:n.mode,resultSoFar:w},_emitter:k};if(s)return{language:e,value:ne(t),illegal:!1,relevance:0,errorRaised:n,_emitter:k,_top:v};throw n}}function f(e,t){t=t||c.languages||Object.keys(n);const o=function(e){const n={value:ne(e),illegal:!1,relevance:0,_top:l,_emitter:new c.__emitter(c)};return n._emitter.addText(e),n}(e),r=t.filter(m).filter(y).map((n=>h(n,e,!1)));r.unshift(o);const i=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(m(e.language).supersetOf===n.language)return 1;if(m(n.language).supersetOf===e.language)return-1}return 0})),[s,a]=i,d=s;return d.secondBest=a,d}function p(e){let n=null;const o=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=c.languageDetectRe.exec(n);if(t){const n=m(t[1]);return n||(q(a.replace("{}",t[1])),q("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>u(e)||m(e)))}(e);if(u(o))return;E("before:highlightElement",{el:e,language:o}),!c.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),n=e;const r=n.textContent,i=o?g(r,{language:o,ignoreIllegals:!0}):f(r);e.innerHTML=i.value,function(e,n,o){const r=n&&t[n]||o;e.classList.add("hljs"),e.classList.add(`language-${r}`)}(e,o,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),E("after:highlightElement",{el:e,result:i,text:r})}let A=!1;function b(){"loading"!==document.readyState?document.querySelectorAll(c.cssSelector).forEach(p):A=!0}function m(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function x(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{t[e.toLowerCase()]=n}))}function y(e){const n=m(e);return n&&!n.disableAutodetect}function E(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){A&&b()}),!1),Object.assign(e,{highlight:g,highlightAuto:f,highlightAll:b,highlightElement:p,highlightBlock:function(e){return X("10.7.0","highlightBlock will be removed entirely in v12.0"),X("10.7.0","Please use highlightElement now."),p(e)},configure:function(e){c=te(c,e)},initHighlighting:()=>{b(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){b(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,o){let r=null;try{r=o(e)}catch(e){if(Z("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw e;Z(e),r=l}r.name||(r.name=t),n[t]=r,r.rawDefinition=o.bind(null,e),r.aliases&&x(r.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:m,registerAliases:x,autoDetection:y,inherit:te,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.0.0";for(const e in L)"object"==typeof L[e]&&o(L[e]);return Object.assign(e,L),e}({});e.exports=re}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=t(802);function n(e){return e?"string"==typeof e?e:e.source:null}function o(e){return r("(?=",e,")")}function r(...e){return e.map((e=>n(e))).join("")}function i(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map((e=>n(e))).join("|")+")"}var s=t(800);e.registerLanguage("xml",(function(e){const n=r(/[A-Z_]/,r("(?:",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),t={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(s,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,l,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,a,c,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r(/</,o(r(n,i(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:d}]},{className:"tag",begin:r(/<\//,o(r(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}));const a=document.createElement("template");a.innerHTML=`\n  <style>\n    ${s.Z}\n  </style>\n\n  <div class="x-ray__preview">\n    <slot />\n  </div>\n  <div class="x-ray__code-previewer">\n    <a\n      role="button"\n      tabindex="0"\n      class="x-ray__toggle"\n    >Show code</a>\n    <div class="x-ray__code-container">\n      <pre class="x-ray__code hljs"></pre>\n    </div>\n  </div>\n`;class l extends HTMLElement{constructor(){super(),this.code="",this.code=this.querySelector("code:first-child").innerHTML.replace("\x3c!----\x3e",""),this.appendChild(a.content.cloneNode(!0)),this.querySelector(".x-ray__code").innerHTML=e.highlight(((e,n)=>{const t=new RegExp(`^\\s{${n}}`);return e.split("\n").map((e=>e.replace(t,""))).join("\n")})(this.code,(e=>{let n=0;const t=/\S/;for(let o=0;o<e.length;o++)if("\n"!==e.charAt(o)){if(t.test(e.charAt(o)))return n;n++}else n=0;return 0})(this.code)).trim(),{language:"xml"}).value;const n=this.querySelector(".x-ray__toggle"),t=this.querySelector(".x-ray__code-container");n.addEventListener("click",(()=>{const e=n.classList.toggle("x-ray__toggle--active");t.classList.toggle("x-ray__code-container--visible",e)}))}}window.customElements.define("x-ray",l)})()})();
//# sourceMappingURL=index.js.map