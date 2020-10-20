(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(6),s=(t(0),t(92)),c={id:"flows.requests",title:"Service Requests",sidebar_label:"Service Requests",slug:"/flows/requests"},a={unversionedId:"flows.requests",id:"flows.requests",isDocsHomePage:!1,title:"Service Requests",description:"Requests could be executed inside a resource or rollback block.",source:"@site/docs/flows-requests.md",slug:"/flows/requests",permalink:"/semaphore/docs/flows/requests",editUrl:"https://github.com/jexia/semaphore/edit/master/website/docs/flows-requests.md",version:"current",sidebar_label:"Service Requests",sidebar:"docs",previous:{title:"Conditions",permalink:"/semaphore/docs/flows/conditions"},next:{title:"Error handling",permalink:"/semaphore/docs/flows/errors"}},i=[],u={rightToc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Requests could be executed inside a resource or rollback block.\nRequests interact with a external service through the configured transport protocol (ex: ",Object(s.b)("inlineCode",{parentName:"p"},"HTTP"),", ",Object(s.b)("inlineCode",{parentName:"p"},"gRPC"),")."),Object(s.b)("p",null,"The service method request and response object are used to define the request schemas.\nResponses produced by the given service could be referenced inside other resources of the given flow."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-hcl"}),'flow "CreateUser" {\n    input "com.org.User" {}\n\n    resource "user" {\n        request "com.org.Users" "Create" {\n          first_name = "{{ input:first_name }}"\n          last_name = "{{ input:last_name }}"\n          age = "{{ input:age }}"\n        }\n\n        rollback {\n            request "com.org.Users" "Delete" {\n              id = "{{ user:id }}"\n            }\n        }\n    }\n\n    output "com.org.User" {\n        id = "{{ user:id }}"\n        ref = "{{ input:ref }}"\n    }\n}\n')))}l.isMDXComponent=!0},92:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return t?o.a.createElement(b,a(a({ref:r},u),{},{components:t})):o.a.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<s;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);