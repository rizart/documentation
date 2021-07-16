(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(352)),o=["components"],c={title:"1.15.4",sidebar_label:"1.15.4"},s={unversionedId:"release-notes/1.15.4",id:"release-notes/1.15.4",isDocsHomePage:!1,title:"1.15.4",description:"General",source:"@site/../docs/release-notes/1.15.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.15.4",permalink:"/documentation/release-notes/1.15.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.15.4.md",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1626437981,formattedLastUpdatedAt:"7/16/2021",sidebar_label:"1.15.4",frontMatter:{title:"1.15.4",sidebar_label:"1.15.4"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: rucio-judge-cleaner traceback against postgres ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/722"},"#722")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Keyword parameters should always be used for instansiating datetime.timedelta ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/807"},"#807")),Object(i.b)("li",{parentName:"ul"},"Documentation: Add external link for ActiveMQ for people joining the project ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1001"},"#1001")),Object(i.b)("li",{parentName:"ul"},"Documentation: Typographical Review of Documentation Files ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/985"},"#985")),Object(i.b)("li",{parentName:"ul"},"Release management: Add python3 in the rucio dev docker image ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/973"},"#973"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: section policy/support/rucio_support missing in rucio.cfg template and tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/976"},"#976"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Error with python3: the JSON object must be str, not 'bytes' ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/964"},"#964")),Object(i.b)("li",{parentName:"ul"},"Clients: Client AttributeError when the server returns nothing ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/965"},"#965")),Object(i.b)("li",{parentName:"ul"},"Release management: setup_clients.py classifiers needs to be a list, not tuples ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/949"},"#949"))))}b.isMDXComponent=!0}}]);