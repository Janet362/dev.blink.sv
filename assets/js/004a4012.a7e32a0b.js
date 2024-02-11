"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,v=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(v,i(i({ref:t},m),{},{components:n})):r.createElement(v,i({ref:t},m))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"postman",title:"Postman collection",slug:"/api/postman"},i=void 0,l={unversionedId:"api/postman",id:"api/postman",title:"Postman collection",description:"API requests in multiple programming languages",source:"@site/docs/api/postman.md",sourceDirName:"api",slug:"/api/postman",permalink:"/api/postman",draft:!1,tags:[],version:"current",frontMatter:{id:"postman",title:"Postman collection",slug:"/api/postman"},sidebar:"apiSidebar",previous:{title:"Error handling",permalink:"/api/errors"},next:{title:"Learn more",permalink:"/api/learn-more"}},p={},s=[{value:"API requests in multiple programming languages",id:"api-requests-in-multiple-programming-languages",level:2},{value:"Local development",id:"local-development",level:2},{value:"Collection",id:"collection",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Usage",id:"usage",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-requests-in-multiple-programming-languages"},"API requests in multiple programming languages"),(0,o.kt)("p",null,"To browse the API requests in multiple programming languages visit the ",(0,o.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#f3e8e86e-67c1-411d-8208-03220fd1ed43"},"Galoy API Postman collection"),". ",(0,o.kt)("br",null),"\nGo ahead and fork the collection together with the public environment variables to work in your own Postman workspace."),(0,o.kt)("h2",{id:"local-development"},"Local development"),(0,o.kt)("p",null,"We've included the following files here that can be imported into Postman to get up-and-running with the Galoy API."),(0,o.kt)("h3",{id:"collection"},"Collection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy_graphql_main_api.postman_collection.json"},"galoy_graphql_main_api.postman_collection.json"),": the collection of queries and mutations")),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy-mainnet.postman_environment.json"},"galoy-mainnet.postman_environment.json"),": environment variables to hit our deployed Blink production environment with mainnet bitcoin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy-staging.postman_environment.json"},"galoy-staging.postman_environment.json"),": environment variables to hit our deployed staging with signet bitcoin")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download Postman: ",(0,o.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"www.postman.com")," or use the web version: ",(0,o.kt)("a",{parentName:"li",href:"https://web.postman.co/"},"web.postman.co")),(0,o.kt)("li",{parentName:"ul"},"Import the collection and the respective environment variable files into Postman.")))}u.isMDXComponent=!0}}]);