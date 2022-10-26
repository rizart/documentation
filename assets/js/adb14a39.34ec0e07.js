(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{309:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return u})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return m}));var t=n(3),o=n(7),c=(n(0),n(446)),i=["components"],a={title:"rucio-hermes"},u={unversionedId:"bin/rucio-hermes",id:"bin/rucio-hermes",isDocsHomePage:!1,title:"rucio-hermes",description:"`",source:"@site/../docs/bin/rucio-hermes.md",sourceDirName:"bin",slug:"/bin/rucio-hermes",permalink:"/documentation/bin/rucio-hermes",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-hermes.md",version:"current",frontMatter:{title:"rucio-hermes"},sidebar:"docs",previous:{title:"rucio-follower",permalink:"/documentation/bin/rucio-follower"},next:{title:"rucio-hermes2",permalink:"/documentation/bin/rucio-hermes2"}},s=[],l={toc:s};function m(e){var r=e.components,n=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"usage: rucio-hermes [-h] [--run-once] [--threads THREADS] [--bulk BULK]\n                    [--broker-timeout BROKER_TIMEOUT]\n                    [--broker-retry BROKER_RETRY] [--sleep-time SLEEP_TIME]\n\nThe Hermes daemon is responsible for delivering messages via STOMP to a messagebroker and via SMTP as email.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --broker-timeout BROKER_TIMEOUT\n                        Broker control: timeout second per cycle\n  --broker-retry BROKER_RETRY\n                        Broker control: number of retries per cycle\n  --sleep-time SLEEP_TIME\n                        Delay control: second control per cycle\n\nCreate a test message::\n\n  $ python\n  from rucio.core.message import add_message\n  add_message(event_type='NEW_DID', payload='There is a new DID')\n\nRun the daemon::\n\n  $ rucio-hermes --run-once\n    \n")))}m.isMDXComponent=!0},446:function(e,r,n){"use strict";n.d(r,"a",(function(){return m})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=t,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||c;return n?o.a.createElement(f,a(a({ref:r},s),{},{components:n})):o.a.createElement(f,a({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);