"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=l(n),d=s,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:4,sidebar_label:"K6"},o="K6 Performance Tests",i={unversionedId:"test-types/executor-k6",id:"test-types/executor-k6",title:"K6 Performance Tests",description:"Check out our blog post to follow tutorial steps to harness the power of k6 load testing in Kubernetes with Testkube's CLI and API.",source:"@site/docs/4-test-types/executor-k6.md",sourceDirName:"4-test-types",slug:"/test-types/executor-k6",permalink:"/testkube/test-types/executor-k6",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/executor-k6.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"K6"},sidebar:"tutorialSidebar",previous:{title:"SoapUI",permalink:"/testkube/test-types/executor-soapui"},next:{title:"KubePug",permalink:"/testkube/test-types/executor-kubepug"}},u={},l=[{value:"<strong>Running a K6 Test</strong>",id:"running-a-k6-test",level:2},{value:"<strong>Using Files as Input</strong>",id:"using-files-as-input",level:3},{value:"<strong>Using Additional K6 Arguments in Your Tests</strong>",id:"using-additional-k6-arguments-in-your-tests",level:3},{value:"<strong>K6 Test Results</strong>",id:"k6-test-results",level:3}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"k6-performance-tests"},"K6 Performance Tests"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Check out our ",(0,s.kt)("a",{parentName:"strong",href:"https://kubeshop.io/blog/load-testing-in-kubernetes-with-k6-and-testkube"},"blog post")," to follow tutorial steps to harness the power of k6 load testing in Kubernetes with Testkube's CLI and API.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://k6.io/docs/"},"K6")," Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. K6 is free, developer-centric and extensible."),(0,s.kt)("p",null,"Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. K6 will help you to build resilient and performant applications that scale."),(0,s.kt)("p",null,"K6 is developed by Grafana Labs and the community."),(0,s.kt)("h2",{id:"running-a-k6-test"},(0,s.kt)("strong",{parentName:"h2"},"Running a K6 Test")),(0,s.kt)("p",null,"K6 is integral part of Testkube. The Testkube k6 executor is installed by default during the Testkube installation. To run a k6 test in Testkube you need to create a Test. "),(0,s.kt)("h3",{id:"using-files-as-input"},(0,s.kt)("strong",{parentName:"h3"},"Using Files as Input")),(0,s.kt)("p",null,"Let's save our k6 test in file e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"test.js"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import http from 'k6/http';\nimport { sleep } from 'k6';\n\nexport default function () {\n  http.get('https://kubeshop.github.io/testkube/');\n  sleep(1);\n}\n")),(0,s.kt)("p",null,"Testkube and the k6 executor accept a test file as an input."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --file test.js --name k6-test\n")),(0,s.kt)("p",null,"You don't need to pass a type here, Testkube will autodetect it. "),(0,s.kt)("p",null,"To run the test, pass previously created test name: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test -f k6-test\n")),(0,s.kt)("p",null,"You can also create a Test based on Git repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# create k6-test-script.js from this Git repository\nkubectl testkube create test --git-uri https://github.com/kubeshop/testkube-executor-k6.git --git-branch main --git-path examples --type "k6/script" --name k6-test-script-git\n')),(0,s.kt)("p",null,"Testkube will clone the repository and create a Testkube Test Custom Resource in your cluster. "),(0,s.kt)("h3",{id:"using-additional-k6-arguments-in-your-tests"},(0,s.kt)("strong",{parentName:"h3"},"Using Additional K6 Arguments in Your Tests")),(0,s.kt)("p",null,"You can also pass additional arguments to ",(0,s.kt)("inlineCode",{parentName:"p"},"k6")," binary thanks to ",(0,s.kt)("inlineCode",{parentName:"p"},"--args")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube run test -f k6-test --args '--vus 100 --no-connection-reuse'\n")),(0,s.kt)("h3",{id:"k6-test-results"},(0,s.kt)("strong",{parentName:"h3"},"K6 Test Results")),(0,s.kt)("p",null,"A k6 test will be successful in Testkube when all checks and thresholds are successful. In the case of an error, the test will have ",(0,s.kt)("inlineCode",{parentName:"p"},"failed")," status, even if there is no failure in the summary report in the test logs. For details check ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/grafana/k6/issues/1680"},"this k6 issue"),"."))}c.isMDXComponent=!0}}]);