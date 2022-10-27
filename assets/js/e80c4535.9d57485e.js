"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:11,sidebar_label:"Container Executor"},i="What is a Container Executor?",s={unversionedId:"test-types/container-executor",id:"test-types/container-executor",title:"What is a Container Executor?",description:"The TestKube Container Executor allows you to run your own container images for executing tests. TestKube orchestrates the Tests using the container image as Kubernetes Jobs.",source:"@site/docs/4-test-types/container-executor.md",sourceDirName:"4-test-types",slug:"/test-types/container-executor",permalink:"/testkube/test-types/container-executor",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/container-executor.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Container Executor"},sidebar:"tutorialSidebar",previous:{title:"cURL",permalink:"/testkube/test-types/executor-curl"},next:{title:"Creating New Test Types",permalink:"/testkube/test-types/executor-custom"}},u={},c=[{value:"Input Data",id:"input-data",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-container-executor"},"What is a Container Executor?"),(0,a.kt)("p",null,"The TestKube Container Executor allows you to run your own container images for executing tests. TestKube orchestrates the Tests using the container image as Kubernetes Jobs."),(0,a.kt)("p",null,"The Test execution fails if the container exits with an error and succeeds when the container command successfully executes."),(0,a.kt)("p",null,"In order to use the Container Executor, create a new executor with ",(0,a.kt)("inlineCode",{parentName:"p"},"executor_type: container")," and your custom type. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: curl-container-executor\n  namespace: testkube\nspec:\n  image: curlimages/curl:7.85.0\n  command: ["curl"]\n  executor_type: container\n  imagePullSecrets:\n    - name: secret-name\n  types:\n  - curl-container/test\n')),(0,a.kt)("p",null,"In the above example, all Tests of ",(0,a.kt)("inlineCode",{parentName:"p"},"curl-container/test")," will be executed by this Executor. Then you can create a new test that uses this Executor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: test-website\n  namespace: testkube\nspec:\n  type: curl-container/test\n  executionRequest:\n    args:\n    - https://testkube.kubeshop.io/\n    envs:\n      TESTKUBE_ENV: example\n")),(0,a.kt)("p",null,"Executing this test will run a Kubernetes Job with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curlimages/curl:7.85.0")," image"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secret-name")," image pull secret"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"curl")," command"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://testkube.kubeshop.io/")," argument")),(0,a.kt)("p",null,"You can provide image, args, command, and image pull secrets in the HTTP Request, Test Spec, and Executor spec. The container executor merges all the data using the following order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"HTTP Request."),(0,a.kt)("li",{parentName:"ol"},"Test.Spec.ExecutionRequest fields are used if they are not filled before."),(0,a.kt)("li",{parentName:"ol"},"Executor.Spec fields are used if they are not filled before.")),(0,a.kt)("h2",{id:"input-data"},"Input Data"),(0,a.kt)("p",null,"You can provide input data via string, files, and Git repositories via TestKube Dashboard. The data is downloaded into ",(0,a.kt)("inlineCode",{parentName:"p"},"/data")," before the test is run using Kubernetes Init container. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," type, the content is put into ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/test-content")," file. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: custom-container\n  namespace: testkube\nspec:\n  content:\n    data: |-\n      {\n        "project": "testkube",\n        "is": "awesome"\n      }\n    type: string\n  type: custom-container/test\n')),(0,a.kt)("p",null,"Puts data into ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/test-content")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat /data/test-content\n{\n  "project": "testkube",\n  "is": "awesome"\n}\n')),(0,a.kt)("p",null,"When using Git or Git directory sources, the content is placed inside ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/repo")," directory. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: custom-container\n  namespace: testkube\nspec:\n  content:\n    repository:\n      branch: main\n      type: git-dir\n      uri: https://github.com/kubeshop/testkube-executor-init\n    type: git-dir\n")),(0,a.kt)("p",null,"Downloads into ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/repo")," directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls /data/repO\nCODE_OF_CONDUCT.md  CONTRIBUTING.md  LICENSE  Makefile  README.md  build  cmd  go.mod  go.sum  pkg\n")))}p.isMDXComponent=!0}}]);