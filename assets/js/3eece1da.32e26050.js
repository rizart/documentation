(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),o=(r(0),r(457)),a=["components"],c={title:"1.29.1"},s={unversionedId:"release-notes/1.29.1",id:"release-notes/1.29.1",isDocsHomePage:!1,title:"1.29.1",description:"General",source:"@site/../docs/release-notes/1.29.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.29.1",permalink:"/documentation/release-notes/1.29.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.1.md",version:"current",frontMatter:{title:"1.29.1"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Monitoring & Logging: allow to follow one thread in logs ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5730"},"#5730")),Object(o.b)("li",{parentName:"ul"},"Recovery: Restructure minos code ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5615"},"#5615"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: exception in attach_collections_to_containers ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5713"},"#5713")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: config_get_list incorrectly handles empty strings ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5720"},"#5720")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: Exception while trying to update RSE availability ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5744"},"#5744")),Object(o.b)("li",{parentName:"ul"},"Database: temp tables cannot be used with read-only user ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5716"},"#5716")),Object(o.b)("li",{parentName:"ul"},"Deletion: Undertaker is crashing when jumbo datasets are deleted ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5734"},"#5734")),Object(o.b)("li",{parentName:"ul"},"Monitoring & Logging: dark-reaper not exposing the prometheus metrics port ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5574"},"#5574")),Object(o.b)("li",{parentName:"ul"},"Monitoring & Logging: fix prometheus timer recording ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5688"},"#5688")),Object(o.b)("li",{parentName:"ul"},"Rules: generate_email_for_rule_ok_notification silent fails if exception is raised ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5681"},"#5681")),Object(o.b)("li",{parentName:"ul"},"Transfers: race condition between poller and cleaner ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5429"},"#5429")),Object(o.b)("li",{parentName:"ul"},"Transfers: finisher doesn't handle correctly destination RSE protocol change ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5497"},"#5497"))))}b.isMDXComponent=!0},457:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,f=b["".concat(a,".").concat(p)]||b[p]||m[p]||o;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);