"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),p=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(y,i(i({ref:n},u),{},{components:r})):o.createElement(y,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(7294),t=r(6010);const a="tabItem_Ymn6";function i(e){var n=e.children,r=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,t.Z)(a,i),hidden:r},n)}},5488:(e,n,r)=>{r.d(n,{Z:()=>m});var o=r(7462),t=r(7294),a=r(6010),i=r(2389),l=r(7392),s=r(7094),p=r(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,r,i=e.lazy,d=e.block,m=e.defaultValue,y=e.values,g=e.groupId,w=e.className,f=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=y?y:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),C=(0,l.l)(x,(function(e,n){return e.value===n.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:f[0].props.value;if(null!==k&&!x.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),b=h.tabGroupChoices,v=h.setTabGroupChoices,P=(0,t.useState)(k),T=P[0],I=P[1],Z=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var N=b[g];null!=N&&N!==T&&x.some((function(e){return e.value===N}))&&I(N)}var O=function(e){var n=e.currentTarget,r=Z.indexOf(n),o=x[r].value;o!==T&&(j(n),I(o),null!=g&&v(g,String(o)))},S=function(e){var n,r=null;switch(e.key){case"ArrowRight":var o,t=Z.indexOf(e.currentTarget)+1;r=null!=(o=Z[t])?o:Z[0];break;case"ArrowLeft":var a,i=Z.indexOf(e.currentTarget)-1;r=null!=(a=Z[i])?a:Z[Z.length-1]}null==(n=r)||n.focus()};return t.createElement("div",{className:(0,a.Z)("tabs-container",u)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},w)},x.map((function(e){var n=e.value,r=e.label,i=e.attributes;return t.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,a.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=r?r:n)}))),i?(0,t.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,i.Z)();return t.createElement(d,(0,o.Z)({key:String(n)},e))}},4959:(e,n,r)=>{r.d(n,{Z:()=>p});var o=r(7294),t=r(9960),a=r(4477),i=r(2263),l=r(643).version.split("."),s=[l[0],l[1]].join(".");const p=function(e){var n=e.to,r=e.children,l=(0,a.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===s?o.createElement(t.default,{to:"/api/"+n},r):o.createElement(t.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+n},r)}},2767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var o=r(7462),t=r(3366),a=(r(7294),r(3905)),i=r(4959),l=r(5488),s=r(5162),p=r(1435);var u=["components"],c={id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},d=void 0,m={unversionedId:"guides/proxy-management",id:"guides/proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks",source:"@site/../docs/guides/proxy_management.mdx",sourceDirName:"guides",slug:"/guides/proxy-management",permalink:"/docs/next/guides/proxy-management",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1661087458,formattedLastUpdatedAt:"Aug 21, 2022",frontMatter:{id:"proxy-management",title:"Proxy Management",description:"Using proxies to get around those annoying IP-blocks"},sidebar:"docs",previous:{title:"JavaScript rendering",permalink:"/docs/next/guides/javascript-rendering"},next:{title:"Session Management",permalink:"/docs/next/guides/session-management"}},y={},g=[{value:"Quick start",id:"quick-start",level:2},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Crawler integration",id:"crawler-integration",level:3},{value:"IP Rotation and session management",id:"ip-rotation-and-session-management",level:3},{value:"Inspecting current proxy in Crawlers",id:"inspecting-current-proxy-in-crawlers",level:2}],w={toc:g};function f(e){var n=e.components,r=(0,t.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},w,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address_blocking",target:"_blank",rel:"noopener"},"IP address blocking")," is one of the oldest\nand most effective ways of preventing access to a website. It is therefore paramount for\na good web scraping library to provide easy to use but powerful tools which can work around\nIP blocking. The most powerful weapon in our anti IP blocking arsenal is a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener"},"proxy server"),"."),(0,a.kt)("p",null,"With Crawlee we can use our own proxy servers or proxy servers acquired from\nthird-party providers."),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"If we already have proxy URLs of our own, we can start using\nthem immediately in only a few lines of code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ]\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n")),(0,a.kt)("p",null,"Examples of how to use our proxy URLs with crawlers are shown below in ",(0,a.kt)("a",{parentName:"p",href:"#crawler-integration",target:null,rel:null},"Crawler integration")," section."),(0,a.kt)("h2",{id:"proxy-configuration"},"Proxy Configuration"),(0,a.kt)("p",null,"All our proxy needs are managed by the ",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration"))," class. We create an instance using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," ",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration#constructor",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"constructor"))," function based on the provided options. See the ",(0,a.kt)(i.Z,{to:"core/interface/ProxyConfigurationOptions",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfigurationOptions"))," for all the possible constructor options."),(0,a.kt)("h3",{id:"crawler-integration"},"Crawler integration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," integrates seamlessly into ",(0,a.kt)(i.Z,{to:"http-crawler/class/HttpCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"HttpCrawler")),", ",(0,a.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,a.kt)(i.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler")),", ",(0,a.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," and ",(0,a.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ],\n});\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    // ...\n});\n"))),(0,a.kt)("p",null,"Our crawlers will now use the selected proxies for all connections."),(0,a.kt)("h3",{id:"ip-rotation-and-session-management"},"IP Rotation and session management"),(0,a.kt)("p",null,"\u200b",(0,a.kt)(i.Z,{to:"core/class/ProxyConfiguration#newUrl",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyConfiguration.newUrl()"))," allows us to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," parameter. It will then be used to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," pair, and subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"newUrl()")," calls with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," will always return the same ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl"),". This is extremely useful in scraping, because we want to create the impression of a real user. See the ",(0,a.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},"session management guide")," and ",(0,a.kt)(i.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"SessionPool"))," class for more information on how keeping a real session helps us avoid blocking."),(0,a.kt)("p",null,"When no ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," is provided, our proxy URLs are rotated round-robin."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { ProxyConfiguration, SessionPool } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst sessionPool = await SessionPool.open({ /* opts */ });\n\nconst session = await sessionPool.getSession();\n\nconst proxyUrl = await proxyConfiguration.newUrl(session.id);\n"))),(0,a.kt)("h2",{id:"inspecting-current-proxy-in-crawlers"},"Inspecting current proxy in Crawlers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HttpCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSDOMCrawler"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," grant access to information about the currently used proxy\nin their ",(0,a.kt)("inlineCode",{parentName:"p"},"requestHandler")," using a ",(0,a.kt)(i.Z,{to:"core/interface/ProxyInfo",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo"))," object.\nWith the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo")," object, we can easily access the proxy URL."),(0,a.kt)(l.Z,{groupId:"proxy_session_management",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n")),(0,a.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,a.kt)(p.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    async requestHandler({ proxyInfo }) {\n        console.log(proxyInfo);\n    },\n    // ...\n});\n"))))}f.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 14.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);