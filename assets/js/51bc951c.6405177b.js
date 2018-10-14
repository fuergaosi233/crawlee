"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[0],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4959:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(9960),o=a(4477),s=a(2263),i=a(643).version.split("."),p=[i[0],i[1]].join(".");const l=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===p?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},a)}},1612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(1435),i=a(4959);var p=["components"],l={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},d=void 0,c={unversionedId:"examples/map-and-reduce",id:"examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Dataset map",source:"@site/../docs/examples/map_and_reduce.mdx",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/docs/next/examples/map-and-reduce",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1661087458,formattedLastUpdatedAt:"Aug 21, 2022",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"docs",previous:{title:"JSDOM crawler",permalink:"/docs/next/examples/jsdom-crawler"},next:{title:"Playwright crawler",permalink:"/docs/next/examples/playwright-crawler"}},u={},m=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}],h={toc:m};function y(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows an easy use-case of the ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset"))," ",(0,o.kt)(i.Z,{to:"core/class/Dataset#map",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"map")),"\nand ",(0,o.kt)(i.Z,{to:"core/class/Dataset#reduce",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"reduce"))," methods. Both methods can be used to simplify\nthe dataset results workflow process. Both can be called on the ",(0,o.kt)(i.Z,{to:"core/class/Dataset",mdxType:"ApiLink"},"dataset")," directly."),(0,o.kt)("p",null,"Important to mention is that both methods return a new result (",(0,o.kt)("inlineCode",{parentName:"p"},"map")," returns a new array and ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," can return any type) - neither method updates\nthe dataset in any way."),(0,o.kt)("p",null,"Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page: the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," and a hypothetical number of\n",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"h3")," header elements under the ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," key."),(0,o.kt)("p",null,"This data structure is stored in the default dataset under ",(0,o.kt)("inlineCode",{parentName:"p"},"{PROJECT_FOLDER}/storage/datasets/default/"),". If you want to simulate the\nfunctionality, you can use the ",(0,o.kt)(i.Z,{to:"core/class/Dataset#pushData",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"dataset.pushData()")),"\nmethod to save the example ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON array")," to your dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "url": "https://crawlee.dev/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://crawlee.dev/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://crawlee.dev/proxy",\n        "headingCount": 4\n    }\n]\n')),(0,o.kt)("h3",{id:"map"},"Map"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method is very similar to standard Array mapping methods. It produces a new array of values by mapping each value in the existing\narray through a transformation function and an options parameter."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method used to check if are there more than 5 header elements on each page:"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{ headingCount: number }>();\n\n// calling map function and filtering through mapped items\nconst moreThan5headers = (await dataset.map((item) => item.headingCount)).filter((count) => count > 5);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_with_more_than_5_headers', moreThan5headers);\n"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moreThan5headers")," variable is an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," attributes where the number of headers is greater than 5."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method's result value saved to the ",(0,o.kt)(i.Z,{to:"core/class/KeyValueStore",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"key-value store"))," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[11, 8]\n")),(0,o.kt)("h3",{id:"reduce"},"Reduce"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method does not produce a new array of values - it reduces a list of values down to a single value. The method iterates through\nthe items in the dataset using the ",(0,o.kt)(i.Z,{to:"core/class/Dataset#reduce",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"memo")," argument"),". After performing the necessary\ncalculation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," is sent to the next iteration, while the item just processed is reduced (removed)."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method to get the total number of headers scraped (all items in the dataset):"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open();\n\n// calling reduce function and using memo to calculate number of headers\nconst pagesHeadingCount = await dataset.reduce((memo, value) => {\n    return memo + value.headingCount;\n}, 0);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_heading_count', pagesHeadingCount);\n"),(0,o.kt)("p",null,"The original dataset will be reduced to a single value, ",(0,o.kt)("inlineCode",{parentName:"p"},"pagesHeadingCount"),", which contains the count of all headers for all scraped pages (all\ndataset items)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method's result value saved to the ",(0,o.kt)(i.Z,{to:"core/class/KeyValueStore",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"key-value store"))," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"23\n")))}y.isMDXComponent=!0},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 14.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);