(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{410:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(446)),o=["components"],s={id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},c={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing Guide",description:"Thank you for participating",source:"@site/../docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/documentation/contributing",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/contributing.md",version:"current",lastUpdatedBy:"serfon",lastUpdatedAt:1666786099,formattedLastUpdatedAt:"10/26/2022",sidebar_label:"Contributing Guide",frontMatter:{id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},sidebar:"docs",previous:{title:"Developing with Rucio",permalink:"/documentation/developing_with_rucio"},next:{title:"Rest Api Documentation",permalink:"/documentation/rest_api_doc"}},l=[{value:"Thank you for participating",id:"thank-you-for-participating",children:[]},{value:"What should I know before I get started",id:"what-should-i-know-before-i-get-started",children:[]},{value:"How can I Contribute",id:"how-can-i-contribute",children:[{value:"1. Prerequisite",id:"1-prerequisite",children:[]},{value:"2. Create an Issue",id:"2-create-an-issue",children:[]},{value:"3. Create a local working branch",id:"3-create-a-local-working-branch",children:[]},{value:"4. Commit your changes",id:"4-commit-your-changes",children:[]},{value:"5. Push changes and create a Pull Request",id:"5-push-changes-and-create-a-pull-request",children:[]},{value:"6. Watch the Pull Request for reviews",id:"6-watch-the-pull-request-for-reviews",children:[]}]},{value:"Automatic Testing",id:"automatic-testing",children:[{value:"Local automatic testing",id:"local-automatic-testing",children:[]}]},{value:"Human Review",id:"human-review",children:[]},{value:"Coding Style",id:"coding-style",children:[]}],u={toc:l};function b(e){var t=e.components,s=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"thank-you-for-participating"},"Thank you for participating"),Object(i.b)("p",null,"The following is a set of rules for contributing to ",Object(i.b)("strong",{parentName:"p"},"Rucio")," and its\npackages. Use your best judgment, and feel free to propose changes to this\ndocument."),Object(i.b)("p",null,"If you have questions, you can reach the core development team on our\n",Object(i.b)("a",{parentName:"p",href:"https://rucio.slack.com/"},Object(i.b)("strong",{parentName:"a"},"Slack"))," channel, or send an email to our\ndevelopment mailing list ",Object(i.b)("a",{parentName:"p",href:"mailto:rucio-dev@cern.ch"},Object(i.b)("strong",{parentName:"a"},"rucio-dev@cern.ch")),"."),Object(i.b)("h2",{id:"what-should-i-know-before-i-get-started"},"What should I know before I get started"),Object(i.b)("p",null,"A contribution can be either be a ",Object(i.b)("strong",{parentName:"p"},"patch")," or ",Object(i.b)("strong",{parentName:"p"},"feature"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Patches")," include bugfixes and minor changes to the code and are included in\npatch releases usually made on a bi-weekly schedule."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Features")," include major developments or potentially disruptive changes and\nare included in feature releases made multiple times a year.")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("strong",{parentName:"a"},"repository"))," consists of different\nbranches:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("strong",{parentName:"li"},"master")," branch includes the development for the next major version."),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("strong",{parentName:"li"},"release-\u2026")," branches include the patch/minor development of the\nreleases.")),Object(i.b)("p",null,"Release branches only exist for the currently maintained release\nversions. Hotfix branches are created on demand. Please communicate to the Rucio\nmaintainers, if you wish to hotfix a previous release."),Object(i.b)("p",null,"Generally all ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/pulls"},Object(i.b)("strong",{parentName:"a"},"pull requests"))," are to\nbe created against the Rucio ",Object(i.b)("strong",{parentName:"p"},"master")," branch. Features will end up in the\nupstream ",Object(i.b)("strong",{parentName:"p"},"master")," only and patches are cherry-picked to the maintained\nreleases if applicable. Release-specific changes are excluded from that rule and\nmight be needed if e.g. cherry-picking to the last release was not successful."),Object(i.b)("p",null,"The following figure might help you with an overview:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Branching Strategy Graph",src:n(523).default})),Object(i.b)("h2",{id:"how-can-i-contribute"},"How can I Contribute"),Object(i.b)("h3",{id:"1-prerequisite"},"1. Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure you add your name (and organisation) to our ",Object(i.b)("a",{parentName:"p",href:"/documentation/about_our_contributors"},Object(i.b)("strong",{parentName:"a"},"list of\ncontributors")),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fork the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("strong",{parentName:"a"},"repository"))," on\nGithub.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the repository to your development machine and configure it:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<YOUR_USER>/rucio/\ncd rucio\ngit remote add upstream https://github.com/rucio/rucio.git\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Optional: Install Git Hooks")),Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"prepare-commit-msg")," hook can be installed by executing the script:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./tools/configure_git.sh\n")),Object(i.b)("p",{parentName:"li"},"Also, the ",Object(i.b)("a",{parentName:"p",href:"https://pre-commit.com/"},Object(i.b)("inlineCode",{parentName:"a"},"pre-commit")," python")," package is configured\nfor this repository. The ",Object(i.b)("inlineCode",{parentName:"p"},"pre-commit")," hook checks the syntax and format of the\nfiles before commiting. This saves time in the development process, since\nminor errors are noticed before submission."),Object(i.b)("p",{parentName:"li"},"To install the package and activate the hooks for the project:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\npre-commit install\n")),Object(i.b)("p",{parentName:"li"},"If you only want to run the hooks on a push, run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pre-commit install --hook-type pre-push\n")),Object(i.b)("p",{parentName:"li"},"More information:\n",Object(i.b)("a",{parentName:"p",href:"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages"},"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages")))),Object(i.b)("h3",{id:"2-create-an-issue"},"2. Create an Issue"),Object(i.b)("p",null,"Please ensure that an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/new"},Object(i.b)("strong",{parentName:"a"},"issue")),"\nexists before submitting your contribution as a pull request. The issue should\ncontain the motivation, modification and expected results (discussions usually\nhappen there). No pull request will be merged without an associated issue\n(release notes are generated from issues). Each issue gets a ",Object(i.b)("strong",{parentName:"p"},"unique issue\nnumber"),"."),Object(i.b)("h3",{id:"3-create-a-local-working-branch"},"3. Create a local working branch"),Object(i.b)("p",null,"Create a local branch that corresponds to the issue. To easily\nidentify the purpose of branches different keywords must be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Patch branches must be named ",Object(i.b)("strong",{parentName:"li"},"patch-","[issue number]","-","[short description]")),Object(i.b)("li",{parentName:"ul"},"Feature branches must be named ",Object(i.b)("strong",{parentName:"li"},"feature-","[issue number]","-","[short description]"))),Object(i.b)("p",null,"If you create these branches by hand please check the spelling because otherwise\nthe test automation might misidentify your branch. There are utility scripts to\nfetch master and create these branches for you:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./tools/create-patch-branch <unique issue number> '<short_change_message>'\n./tools/create-feature-branch <unique issue number> '<short_change_message>'\n")),Object(i.b)("h3",{id:"4-commit-your-changes"},"4. Commit your changes"),Object(i.b)("p",null,"Commit your change. The commit command must include a specific message format:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'git commit -m "<component>: <change_message> #<issue number>"\n')),Object(i.b)("p",null,"Valid component names are listed in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/labels"},Object(i.b)("strong",{parentName:"a"},"label\nlist"))," and are usually specified on the\nissue of the change."),Object(i.b)("p",null,"Add additional explanations to the body of the commit, such as motivation for\ncertain decisions and background information. Here are some general rules:\n",Object(i.b)("a",{parentName:"p",href:"https://cbea.ms/git-commit/"},"https://cbea.ms/git-commit/"),"."),Object(i.b)("p",null,"If you add a ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-using-keywords/"},Object(i.b)("strong",{parentName:"a"},"github-recognised\nkeyword"))," then\nthe associated issue can be closed automatically once the pull request is\nmerged, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"<component>: <change_message> Fix #<issue number>\n")),Object(i.b)("p",null,"Using multiple commits is allowed as long as they achieve an independent,\nwell-defined, change and are well-described. Otherwise multiple commits should\nbe squashed."),Object(i.b)("h3",{id:"5-push-changes-and-create-a-pull-request"},"5. Push changes and create a Pull Request"),Object(i.b)("p",null,"Push the commit to your forked repository and create the pull request. Try to\nkeep the Pull Request simple, it should achieve the single objective described\nin the issue. Multiple enhancements/fixes should be split into multiple Pull\nRequests."),Object(i.b)("p",null,"While using the ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request/"},Object(i.b)("strong",{parentName:"a"},"github\ninterface"))," is the\ndefault interface to create pull requests, you could also use GitHub\u2019s\ncommand-line wrapper ",Object(i.b)("a",{parentName:"p",href:"https://hub.github.com"},Object(i.b)("strong",{parentName:"a"},"hub"))," or the ",Object(i.b)("a",{parentName:"p",href:"https://cli.github.com/"},Object(i.b)("strong",{parentName:"a"},"GitHub\nCLI")),"."),Object(i.b)("p",null,"The format of the pull request title must be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"<component>: <short_change_message> #<issue number>\n")),Object(i.b)("h3",{id:"6-watch-the-pull-request-for-reviews"},"6. Watch the Pull Request for reviews"),Object(i.b)("p",null,"Watch the pull request for comments and reviews. For any pull requests update,\nplease try to squash/amend your commits to avoid \u201cin-between\u201d commits."),Object(i.b)("h2",{id:"automatic-testing"},"Automatic Testing"),Object(i.b)("p",null,"Every submitted pull request will automatically be run through automated testing\nthrough continuous integration. You should see the status of these tests on your\npull request."),Object(i.b)("h3",{id:"local-automatic-testing"},"Local automatic testing"),Object(i.b)("p",null,"There is also a local shell script to run the same autotests:\n",Object(i.b)("inlineCode",{parentName:"p"},"tools/run_autotests.sh"),". For manual local testing within containers, please see\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst"},Object(i.b)("strong",{parentName:"a"},"the docker\nREADME")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"WARNING:")," Because of the nature of using the same scripts as continuous\nintegration, some containers may be left running after a test run or when\naborting the test run. This is especially the case for running this script\nwithout podman."),Object(i.b)("p",null,"By default the tool uses 3 worker processes to run all tests that are defined in\n",Object(i.b)("inlineCode",{parentName:"p"},"etc/docker/test/matrix.yml"),". Feel free to modify the matrix to your needs, but\nbe sure to not unintentionally commit your changes to it. The tests run at most\n6 hours - after that a TimeoutError will be raised, causing the script to\nfail. Running the autotests like this can be parameterized with environment\nvariables as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"USE_PODMAN")," 0/1 (default: depends on whether the docker command points to\npodman)"),Object(i.b)("p",{parentName:"li"},"  Use podman and therefore pods to run the tests.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS")," 0/1 (default: 1)"),Object(i.b)("p",{parentName:"li"},"  1 enables multiple processes to run autotests and 0 disables it.  When\nenabled, logs of the running autotests will be written to the ",Object(i.b)("inlineCode",{parentName:"p"},".autotest"),"\ndirectory created in the working directory. Otherwise the log output will be\nwritten to the console (stderr)."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"Note that when tests are not running in parallel mode, the test run will\nalways fail fast."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_PROCNUM")," (1,) (default: 3)"),Object(i.b)("p",{parentName:"li"},"  Specifies the number of processes to run and therefor the concurrently run\nautotests. 3 will usually result in more than 8 GB RAM usage and a fair\namount of load on the PC.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_FAILFAST")," 0/1 (default: 0)"),Object(i.b)("p",{parentName:"li"},"  Will abort the parallel run of autotests as soon as possible after at least\none autotest failed. Enabling this will leave containers running in case of\na failure even on podman.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"COPY_AUTOTEST_LOGS")," 0/1 (default: 0)"),Object(i.b)("p",{parentName:"li"},"  Copies ",Object(i.b)("inlineCode",{parentName:"p"},"/var/log")," from the rucio container into the ",Object(i.b)("inlineCode",{parentName:"p"},".autotest")," directory\nafter the test run. Each test case will have it\u2019s specific naming as with\nthe logs from the parallel run above."))),Object(i.b)("h2",{id:"human-review"},"Human Review"),Object(i.b)("p",null,"Anyone is welcome to review merge requests and make comments!"),Object(i.b)("p",null,"The Rucio development team can approve, request changes, or close pull\nrequests. Merging of approved pull requests is done by the Rucio development\nlead."),Object(i.b)("h2",{id:"coding-style"},"Coding Style"),Object(i.b)("p",null,"We use flake8 and pylint to sanitize our code. Please do the same before\nsubmitting a pull request."))}b.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},523:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/branching_strategy-45fbbc81b218298d5c1cf6b0128672b5.svg"}}]);