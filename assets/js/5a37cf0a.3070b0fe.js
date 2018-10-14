"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8957],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>m});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),u=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return o?t.createElement(f,a(a({ref:n},c),{},{components:o})):t.createElement(f,a({ref:n},c))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=o[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5162:(e,n,o)=>{o.d(n,{Z:()=>a});var t=o(7294),r=o(6010);const s="tabItem_Ymn6";function a(e){var n=e.children,o=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,a),hidden:o},n)}},5488:(e,n,o)=>{o.d(n,{Z:()=>m});var t=o(7462),r=o(7294),s=o(6010),a=o(2389),i=o(7392),l=o(7094),u=o(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,o,a=e.lazy,d=e.block,m=e.defaultValue,f=e.values,y=e.groupId,w=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.l)(g,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(o=h.find((function(e){return e.props.default})))?void 0:o.props.value)?n:h[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.U)(),x=v.tabGroupChoices,C=v.setTabGroupChoices,P=(0,r.useState)(b),S=P[0],T=P[1],O=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var N=x[y];null!=N&&N!==S&&g.some((function(e){return e.value===N}))&&T(N)}var I=function(e){var n=e.currentTarget,o=O.indexOf(n),t=g[o].value;t!==S&&(j(n),T(t),null!=y&&C(y,String(t)))},Z=function(e){var n,o=null;switch(e.key){case"ArrowRight":var t,r=O.indexOf(e.currentTarget)+1;o=null!=(t=O[r])?t:O[0];break;case"ArrowLeft":var s,a=O.indexOf(e.currentTarget)-1;o=null!=(s=O[a])?s:O[O.length-1]}null==(n=o)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},w)},g.map((function(e){var n=e.value,o=e.label,a=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:I,onClick:I},a,{className:(0,s.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":S===n})}),null!=o?o:n)}))),a?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function m(e){var n=(0,a.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},4959:(e,n,o)=>{o.d(n,{Z:()=>u});var t=o(7294),r=o(9960),s=o(4477),a=o(2263),i=o(643).version.split("."),l=[i[0],i[1]].join(".");const u=function(e){var n=e.to,o=e.children,i=(0,s.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?t.createElement(r.default,{to:"/api/"+n},o):t.createElement(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+n},o)}},6079:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var t=o(7462),r=o(3366),s=(o(7294),o(3905)),a=o(4959),i=o(5488),l=o(5162),u=o(1435);var c=["components"],p={id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},d=void 0,m={unversionedId:"guides/session-management",id:"guides/session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more",source:"@site/../docs/guides/session_management.mdx",sourceDirName:"guides",slug:"/guides/session-management",permalink:"/docs/next/guides/session-management",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1661087458,formattedLastUpdatedAt:"Aug 21, 2022",frontMatter:{id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},sidebar:"docs",previous:{title:"Proxy Management",permalink:"/docs/next/guides/proxy-management"},next:{title:"Scaling our crawlers",permalink:"/docs/next/guides/scaling-crawlers"}},f={},y=[],w={toc:y};function h(e){var n=e.components,o=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,t.Z)({},w,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u200b",(0,s.kt)(a.Z,{to:"core/class/SessionPool",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"SessionPool"))," is a class that allows us to handle the rotation of proxy IP addresses along with cookies and other custom settings in Crawlee."),(0,s.kt)("p",null,"The main benefit of using Session pool is that we can filter out blocked or non-working proxies,\nso our actor does not retry requests over known blocked/non-working proxies.\nAnother benefit of using SessionPool is that we can store information tied tightly to an IP address,\nsuch as cookies, auth tokens, and particular headers. Having our cookies and other identifiers used only with a specific IP will reduce the chance of being blocked.\nThe last but not least benefit is the even rotation of IP addresses - SessionPool  picks the session randomly,\nwhich should prevent burning out a small pool of available IPs."),(0,s.kt)("p",null,"Now let's take a look at the examples of how to use Session pool:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"basic-crawler/class/BasicCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"BasicCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"http-crawler/class/HttpCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"HttpCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"CheerioCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"jsdom-crawler/class/JSDOMCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"JSDOMCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"PlaywrightCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"with ",(0,s.kt)(a.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"li"},"PuppeteerCrawler")),";"),(0,s.kt)("li",{parentName:"ul"},"without a crawler (standalone usage to manage sessions manually).")),(0,s.kt)(i.Z,{groupId:"session_pool",mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"basic",label:"BasicCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { BasicCrawler, ProxyConfiguration } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new BasicCrawler({\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    async requestHandler({ request, session }) {\n        const { url } = request;\n        const requestOptions = {\n            url,\n            // We use session id in order to have the same proxyUrl\n            // for all the requests using the same session.\n            proxyUrl: await proxyConfiguration.newUrl(session.id),\n            throwHttpErrors: false,\n            headers: {\n                // If you want to use the cookieJar.\n                // This way you get the Cookie headers string from session.\n                Cookie: session.getCookieString(url),\n            },\n        };\n        let response;\n\n        try {\n            response = await gotScraping(requestOptions);\n        } catch (e) {\n            if (e === 'SomeNetworkError') {\n                // If a network error happens, such as timeout, socket hangup, etc.\n                // There is usually a chance that it was just bad luck\n                // and the proxy works. No need to throw it away.\n                session.markBad();\n            }\n            throw e;\n        }\n\n        // Automatically retires the session based on response HTTP status code.\n        session.retireOnBlockedStatusCodes(response.statusCode);\n\n        if (response.body.blocked) {\n            // You are sure it is blocked.\n            // This will throw away the session.\n            session.retire();\n        }\n\n        // Everything is ok, you can get the data.\n        // No need to call session.markGood -> BasicCrawler calls it for you.\n\n        // If you want to use the CookieJar in session you need.\n        session.setCookiesFromResponse(response);\n    },\n});\n")),(0,s.kt)(l.Z,{value:"http",label:"HttpCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, body }) {\n        const title = body.match(/<title(?:.*?)>(.*?)<\\/title>/)?.[1];\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n")),(0,s.kt)(l.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, $ }) {\n        const title = $('title').text();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n")),(0,s.kt)(l.Z,{value:"jsdom",label:"JSDOMCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, window }) {\n        const title = window.document.title;\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n")),(0,s.kt)(l.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PlaywrightCrawler.\n        }\n    },\n});\n")),(0,s.kt)(l.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PuppeteerCrawler.\n        }\n    },\n});\n")),(0,s.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},(0,s.kt)(u.Z,{language:"js",mdxType:"CodeBlock"},"import { SessionPool } from 'crawlee';\n\n// Override the default Session pool configuration.\nconst sessionPoolOptions = {\n    maxPoolSize: 100,\n};\n\n// Open Session Pool.\nconst sessionPool = await SessionPool.open(sessionPoolOptions);\n\n// Get session.\nconst session = await sessionPool.getSession();\n\n// Increase the errorScore.\nsession.markBad();\n\n// Throw away the session.\nsession.retire();\n\n// Lower the errorScore and mark the session good.\nsession.markGood();\n"))),(0,s.kt)("p",null,"These are the basics of configuring SessionPool.\nPlease, bear in mind that a Session pool needs time to find working IPs and build up the pool,\nso we will probably see a lot of errors until it becomes stabilized."))}h.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 14.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);