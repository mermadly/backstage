(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{3490:function(module,exports,__webpack_require__){__webpack_require__(44);var KEYWORDS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],LITERALS=["true","false","null","undefined","NaN","Infinity"],BUILT_INS=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);module.exports=function livescript(hljs){var KEYWORDS$1={keyword:KEYWORDS.concat(["then","unless","until","loop","of","by","when","and","or","is","isnt","not","it","that","otherwise","from","to","til","fallthrough","case","enum","native","list","map","__hasProp","__extends","__slice","__bind","__indexOf"]),literal:LITERALS.concat(["yes","no","on","off","it","that","void"]),built_in:BUILT_INS.concat(["npm","print"])},JS_IDENT_RE="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",TITLE=hljs.inherit(hljs.TITLE_MODE,{begin:JS_IDENT_RE}),SUBST={className:"subst",begin:/#\{/,end:/\}/,keywords:KEYWORDS$1},SUBST_SIMPLE={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:KEYWORDS$1},EXPRESSIONS=[hljs.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[hljs.BACKSLASH_ESCAPE,SUBST,SUBST_SIMPLE]},{begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,SUBST,SUBST_SIMPLE]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[SUBST,hljs.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/}]},{begin:"@"+JS_IDENT_RE},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];SUBST.contains=EXPRESSIONS;var PARAMS={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:KEYWORDS$1,contains:["self"].concat(EXPRESSIONS)}]};return{name:"LiveScript",aliases:["ls"],keywords:KEYWORDS$1,illegal:/\/\*/,contains:EXPRESSIONS.concat([hljs.COMMENT("\\/\\*","\\*\\/"),hljs.HASH_COMMENT_MODE,{begin:"(#=>|=>|\\|>>|-?->|!->)"},{className:"function",contains:[TITLE,PARAMS],returnBegin:!0,variants:[{begin:"("+JS_IDENT_RE+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",end:"->\\*?"},{begin:"("+JS_IDENT_RE+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+JS_IDENT_RE+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[TITLE]},TITLE]},{begin:JS_IDENT_RE+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);