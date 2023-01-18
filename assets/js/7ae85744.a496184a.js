(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(457)),s=["components"],i={id:"transfers-overview",title:"Transfers Overview"},l={unversionedId:"transfers-overview",id:"transfers-overview",isDocsHomePage:!1,title:"Transfers Overview",description:"Rucio has a set of daemons in charge of transfers between rucio storage elements",source:"@site/../docs/transfers_overview.md",sourceDirName:".",slug:"/transfers-overview",permalink:"/documentation/transfers-overview",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/transfers_overview.md",version:"current",lastUpdatedBy:"Rizart Dona",lastUpdatedAt:1674019957,formattedLastUpdatedAt:"1/18/2023",frontMatter:{id:"transfers-overview",title:"Transfers Overview"},sidebar:"docs",previous:{title:"Configuration parameters",permalink:"/documentation/configuration_parameters"},next:{title:"Transfers Submitter",permalink:"/documentation/transfers-submitter"}},c=[{value:"Daemon overview",id:"daemon-overview",children:[]}],p={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rucio has a set of daemons in charge of transfers between rucio storage elements\n(RSE). Historically, these daemons were grouped under the name of ",Object(o.b)("inlineCode",{parentName:"p"},"conveyor"),",\nso a big part of the documentation and source code still uses this naming\nwhen referring to the transfer machinery."),Object(o.b)("p",null,"Rucio doesn't execute the actual physical data movement between storage\nelements. It relies on external tools for this scope. Currently, rucio supports\n",Object(o.b)("a",{parentName:"p",href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/overview.html"},"fts3")," and\n",Object(o.b)("a",{parentName:"p",href:"https://www.globus.org/data-transfer"},"globus"),'. Rucio builds on top of these\n"TransferTools" and provides additional services like recovery from a transfer\nfailure by using another copy from another storage element, multi-hopping\nusing multiple transfertools (or multiple instances of the same transfertool\ntype) and others.'),Object(o.b)("h2",{id:"daemon-overview"},"Daemon overview"),Object(o.b)("p",null,"The following transfer-related daemons exist in rucio, presented in the order\nthey intervene in a transfer lifecycle:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"preparer"),": an optional daemon, but required for some advanced usages, like\nmultiple transfertools together. It is also required to be able to use\nthrottler"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"throttler"),": an optional daemon which can throttle request submissions\nto/from an RSE"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"submitter"),", ",Object(o.b)("strong",{parentName:"li"},"stager"),": perform source selection, path computation and the\nactual submission of transfers to the external transfertool. Stager is a\nspecialized submitter for issuing stagein operations to tape archives."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"receiver"),": optional daemons which listens for events published into a\nqueueing system (activemq) by the external transfertool and reacts to those\nevents to mark transfers as successful or failed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"poller"),": regularly polls the external transfertool for the status of\npending transfers and marks them as successful/failed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"finisher"),": acts on successful or failed transfers. For example, by\nre-scheduling a new attempt.")),Object(o.b)("p",null,"The minimal list of daemons needed for transfer execution is:\n",Object(o.b)("inlineCode",{parentName:"p"},"submitter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"poller")," and ",Object(o.b)("inlineCode",{parentName:"p"},"finisher"),"."),Object(o.b)("h1",{id:"lifecycle-of-transfer-requests"},"Lifecycle of transfer requests"),Object(o.b)("p",null,"There is no user-facing way to schedule a transfer. All transfer requests are\ncreated internally by rucio as result of rule evaluations. The lifetime of a\nrucio transfer is thus strongly bound to the rule which created it.\nHereafter is a simple example which gives the intuition of how rucio proceeds\nwith a replication/transfer of a file as part of a rule."),Object(o.b)("p",null,"In the rest of this example we'll assume the following 4 rucio storage\nelements:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   5    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2502 RSE1 \u2502        \u2502 RSE2 \u2502\n\u2502      \u2502    \u250c\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n   \u25b2        \u2502\n   \u2502100     \u25023\n   \u25bc        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2518   \u2502      \u2502\n\u2502 RSE3 \u2502        \u2502 RSE4 \u2502\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   2    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),Object(o.b)("p",null,"The numbers on the arrows represent the administrative cost which is set\nby the rucio administrator. Cost is unidirectional, but, in this example,\nwe assume that the cost was configured identical in both directions.\nFor example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"rucio-admin rse add-distance --distance 5 --ranking 5 RSE1 RSE2\nrucio-admin rse add-distance --distance 5 --ranking 5 RSE2 RSE1\n")),Object(o.b)("p",null,"Assume a certain dataset ",Object(o.b)("inlineCode",{parentName:"p"},"someScope:dsName"),", which has two files\n",Object(o.b)("inlineCode",{parentName:"p"},"someScope:file1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"someScope:file2"),", and both files are located on ",Object(o.b)("inlineCode",{parentName:"p"},"RSE1"),"."),Object(o.b)("p",null,"The destination of the transfer will be decided on the rule evaluation phase,\nFor example the user adds a rule to ensure that rucio maintains two copies\nfor each of the files on any of the RSEs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"rucio add-rule someScope:dsName 2 '*'\n")),Object(o.b)("p",null,"The rule evaluation mechanism detects that a copy is already available\non RSE1, but one additional copy is needed to respect the rule requirements of\n2 copies. It will thus create a transfer request to one of the other 3 rses.\nAs of time of writing, the selection of the destination is random as\nlong as it respects the RSE expression. Here, ",Object(o.b)("inlineCode",{parentName:"p"},"*")," matches any RSE.\nFor the seek of the example, lets assume that RSE4 was selected."),Object(o.b)("p",null,"The rule evaluation mechanism will then create two transfer requests, which\nwill be picked by the transfer machinery. After being processed, if needed,\nby ",Object(o.b)("inlineCode",{parentName:"p"},"preparer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"throttler")," the transfers eventually arrive at ",Object(o.b)("inlineCode",{parentName:"p"},"submitter"),"."),Object(o.b)("p",null,"At this stage, the submitter finds all the possible sources. It filters out\nthe ones which don't match different rule criterias (for example:\nsource RSE expression) and administrative constraints (for example:\nskip blocklisted RSEs). It then computes the paths. In the previous example,\nthe path ",Object(o.b)("inlineCode",{parentName:"p"},"RSE1 -> RSE2 -> RSE3 -> RSE4")," will be picked due to cost constraints.\nNote that it's possible to make rucio prefer shorter parts by setting the RSE\nattribute ",Object(o.b)("inlineCode",{parentName:"p"},"hop_penalty"),", or the global configuration value with the same name."),Object(o.b)("p",null,"The path will be then submitted to the transfertool either in its integrity,\nif transfertool supports multi-hopping, or in multiple iterations."),Object(o.b)("p",null,"The final steps are for the ",Object(o.b)("inlineCode",{parentName:"p"},"reciver")," or ",Object(o.b)("inlineCode",{parentName:"p"},"poller")," to monitor the transfer's\ncompletion in transfertool and ",Object(o.b)("inlineCode",{parentName:"p"},"finisher")," to mark the transfers as completed.\nWe only described here a simple case, when the transfer is successful on the\nfirst try. In case of errors, multiple transitions are possible between\ndifferent daemons. Check the following request state transition diagram\nfor a more detailed view:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Request State Transition Chart",src:n(521).default})))}u.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||f[b]||o;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[b]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},521:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/request_state_transition_chart-90de7549052e3f216d8b9732b742ad16.svg"}}]);