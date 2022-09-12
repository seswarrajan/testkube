"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var i=n.createContext({}),k=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=k(r),p=u,f=o["".concat(i,".").concat(p)]||o[p]||b[p]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function p(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,l=new Array(a);l[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:u,l[1]=c;for(var k=2;k<a;k++)l[k]=r[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}o.displayName="MDXCreateElement"},8417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>k});var n=r(7462),u=(r(7294),r(3905));const a={},l=void 0,c={unversionedId:"cli-reference/kubectl-testkube",id:"cli-reference/kubectl-testkube",title:"kubectl-testkube",description:"kubectl-testkube",source:"@site/docs/5-cli-reference/kubectl-testkube.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube",permalink:"/testkube/cli-reference/kubectl-testkube",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference"},next:{title:"kubectl-testkube_abort",permalink:"/testkube/cli-reference/kubectl-testkube_abort"}},i={},k=[{value:"kubectl-testkube",id:"kubectl-testkube",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:k};function b(e){let{components:t,...r}=e;return(0,u.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"kubectl-testkube"},"kubectl-testkube"),(0,u.kt)("p",null,"Testkube entrypoint for kubectl plugin"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"kubectl-testkube [flags]\n")),(0,u.kt)("h3",{id:"options"},"Options"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n  -h, --help               help for kubectl-testkube\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,u.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_abort"},"kubectl-testkube abort"),"\t - Abort tests or test suites"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_completion"},"kubectl-testkube completion"),"\t - Generate the autocompletion script for the specified shell"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_config"},"kubectl-testkube config"),"\t - Set feature configuration value"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_create"},"kubectl-testkube create"),"\t - Create resource"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_create-ticket"},"kubectl-testkube create-ticket"),"\t - Create bug ticket"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_dashboard"},"kubectl-testkube dashboard"),"\t - Open testkube dashboard"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_debug"},"kubectl-testkube debug"),"\t - Print environment information for debugging"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_delete"},"kubectl-testkube delete"),"\t - Delete resources"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_disable"},"kubectl-testkube disable"),"\t - Disable feature"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_download"},"kubectl-testkube download"),"\t - Artifacts management commands"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_enable"},"kubectl-testkube enable"),"\t - Enable feature"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_generate"},"kubectl-testkube generate"),"\t - Generate resources commands"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_get"},"kubectl-testkube get"),"\t - Get resources"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_init"},"kubectl-testkube init"),"\t - Install Helm chart registry in current kubectl context and update dependencies"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_migrate"},"kubectl-testkube migrate"),"\t - manual migrate command"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_purge"},"kubectl-testkube purge"),"\t - Uninstall Helm chart registry from current kubectl context"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_run"},"kubectl-testkube run"),"\t - Runs tests or test suites"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_status"},"kubectl-testkube status"),"\t - Show status of feature or resource"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_update"},"kubectl-testkube update"),"\t - Update resource"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_upgrade"},"kubectl-testkube upgrade"),"\t - Upgrade Helm chart, install dependencies and run migrations"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_version"},"kubectl-testkube version"),"\t - Shows version and build info"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/testkube/cli-reference/kubectl-testkube_watch"},"kubectl-testkube watch"),"\t - Watch tests or test suites")))}b.isMDXComponent=!0}}]);