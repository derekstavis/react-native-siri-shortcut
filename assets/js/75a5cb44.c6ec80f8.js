"use strict";(self.webpackChunkreact_native_siri_shortcut_docs=self.webpackChunkreact_native_siri_shortcut_docs||[]).push([[689],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2974:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},s="Project Setup",p={unversionedId:"getting-started/project-setup",id:"getting-started/project-setup",title:"Project Setup",description:"In order to get your project ready for Siri Shortcuts, you need to follow a couple steps.",source:"@site/docs/getting-started/project-setup.md",sourceDirName:"getting-started",slug:"/getting-started/project-setup",permalink:"/docs/getting-started/project-setup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/project-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Listening for Shortcuts",permalink:"/docs/api/listening-for-shortcuts"}},l={},u=[{value:"Enable the Siri Capability",id:"enable-the-siri-capability",level:2},{value:"Declare Shortcuts",id:"declare-shortcuts",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-setup"},"Project Setup"),(0,o.kt)("p",null,"In order to get your project ready for Siri Shortcuts, you need to follow a couple steps."),(0,o.kt)("h2",{id:"enable-the-siri-capability"},"Enable the Siri Capability"),(0,o.kt)("p",null,"Open your project's xcworkspace in Xcode > Capabilities > Add the Siri Capability."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Siri Capability Xcode Screenshot",src:r(2431).Z,width:"1869",height:"1055"})),(0,o.kt)("h2",{id:"declare-shortcuts"},"Declare Shortcuts"),(0,o.kt)("p",null,"Add each of your shortcuts' Activity Type in your Info.plist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Info.plist"',title:'"Info.plist"'},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n  ...\n  // highlight-start\n  <key>NSUserActivityTypes</key>\n  <array>\n    <string>your.bundle.identifier.ExampleActivityType</string>\n  </array>\n  // highlight-end\n</dict>\n</plist>\n')))}f.isMDXComponent=!0},2431:function(e,t,r){t.Z=r.p+"assets/images/add-capability-example-9fa3a79c9c35ad84b445d03acb436fe7.png"}}]);