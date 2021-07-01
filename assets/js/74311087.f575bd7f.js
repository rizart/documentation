(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(350)),o=["components"],i={id:"cli-admin-examples",title:"Rucio administration CLI: Examples",sidebar_label:"Rucio administration CLI: Examples"},l={unversionedId:"cli-admin-examples",id:"cli-admin-examples",isDocsHomePage:!1,title:"Rucio administration CLI: Examples",description:"Rucio provides a CLI for administrative tasks. The get methods can be executed by",source:"@site/../docs/cli-admin-examples.md",sourceDirName:".",slug:"/cli-admin-examples",permalink:"/documentation/cli-admin-examples",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/cli-admin-examples.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1625151458,formattedLastUpdatedAt:"7/1/2021",sidebar_label:"Rucio administration CLI: Examples",frontMatter:{id:"cli-admin-examples",title:"Rucio administration CLI: Examples",sidebar_label:"Rucio administration CLI: Examples"}},s=[{value:"Account and identity methods",id:"account-and-identity-methods",children:[]},{value:"Scope methods",id:"scope-methods",children:[]},{value:"RSE methods",id:"rse-methods",children:[]},{value:"Replica methods",id:"replica-methods",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Rucio provides a CLI for administrative tasks. The get methods can be executed by\nany user, but the set methods require some admin privileges. See the ",Object(c.b)("a",{parentName:"p",href:"/documentation/bin/rucio-admin"},"rucio-admin help page"),"."),Object(c.b)("h2",{id:"account-and-identity-methods"},"Account and identity methods"),Object(c.b)("p",null,"To create a new account::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe\n")),Object(c.b)("p",null,"You can choose different types in the list USER, GROUP, SERVICE. Different policies/permissions can be set depending on the account type.  Once the account is created, you need to create and attach an identity to this account::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin identity add --type X509 --id "/DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe" --email jdoe@blahblih.com --account jdoe\n')),Object(c.b)("p",null,"The list of possible identity types is X509, GSS, USERPASS, SSH::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-identities jdoe\n  Identity: /DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe,        type: X509\n")),Object(c.b)("p",null,"You can set attributes to the users::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account add-attribute --key country --value xyz jdoe\n")),Object(c.b)("p",null,"And list these attributes::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account list-attributes jdoe\n  +---------+-------+\n  | Key     | Value |\n  |---------+-------|\n  | country | xyz   |\n  +---------+-------+\n")),Object(c.b)("p",null,"You can also list all the accounts matching a certain attribute using the filter option::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin account list --filters "country=xyz"\n  jdoe\n')),Object(c.b)("p",null,"To set the quota for one account on a given RSE::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000\n  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB\n  $ rucio-admin account get-limits dcameron SITE2_SCRATCH\n  Quota on SITE2_SCRATCH for jdoe : 10 TB\n")),Object(c.b)("h2",{id:"scope-methods"},"Scope methods"),Object(c.b)("p",null,"To create a new scope::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope add --account jdoe --scope user.jdoe\n")),Object(c.b)("p",null,"Only the owner of the scope or privileged users can write into the scope."),Object(c.b)("p",null,"To list all the scopes::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin scope list\n  user.janedoe\n  user.jdoe\n")),Object(c.b)("h2",{id:"rse-methods"},"RSE methods"),Object(c.b)("p",null,"To create a new RSE::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse add SITE2_SCRATCH\n")),Object(c.b)("p",null,"To add a RSE attribute::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz\n")),Object(c.b)("p",null,"To check an RSE attribute::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"  $ rucio-admin rse get-attribute SITE2_SCRATCH\n  country: xyz\n")),Object(c.b)("h2",{id:"replica-methods"},"Replica methods"),Object(c.b)("p",null,"To declare bad (i.e. corrupted or lost replicas)::"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file\n')))}d.isMDXComponent=!0},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);