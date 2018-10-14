"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function h(e){var t,a,l=e.lazy,h=e.block,d=e.defaultValue,m=e.values,g=e.groupId,w=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),N=v.tabGroupChoices,x=v.setTabGroupChoices,T=(0,n.useState)(b),C=T[0],j=T[1],I=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=N[g];null!=O&&O!==C&&y.some((function(e){return e.value===O}))&&j(O)}var E=function(e){var t=e.currentTarget,a=I.indexOf(t),r=y[a].value;r!==C&&(S(t),j(r),null!=g&&x(g,String(r)))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=I.indexOf(e.currentTarget)+1;a=null!=(r=I[n])?r:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;a=null!=(o=I[l])?o:I[I.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},w)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,l.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}},4959:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294),n=a(9960),o=a(4477),l=a(2263),i=a(643).version.split("."),s=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===s?r.createElement(n.default,{to:"/api/"+t},a):r.createElement(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t},a)}},4281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>w,frontMatter:()=>p,metadata:()=>h,toc:()=>m});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=(a(4959),a(5488)),i=a(5162),s=a(1435);var c=["components"],p={id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},u=void 0,h={unversionedId:"introduction/real-world-project",id:"version-3.0/introduction/real-world-project",title:"Getting some real-world data",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.0/introduction/04-real-world-project.mdx",sourceDirName:"introduction",slug:"/introduction/real-world-project",permalink:"/docs/introduction/real-world-project",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1661087458,formattedLastUpdatedAt:"Aug 21, 2022",sidebarPosition:4,frontMatter:{id:"real-world-project",title:"Getting some real-world data",sidebar_label:"Real-world project",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Adding more URLs",permalink:"/docs/introduction/adding-urls"},next:{title:"Crawling",permalink:"/docs/introduction/crawling"}},d={},m=[{value:"Making a production-grade crawler",id:"making-a-production-grade-crawler",level:2},{value:"Drawing a plan",id:"drawing-a-plan",level:2},{value:"Choosing the data you need",id:"choosing-the-data-you-need",level:2},{value:"The start URL(s)",id:"the-start-urls",level:3},{value:"Exploring the page",id:"exploring-the-page",level:2},{value:"Categories and sorting",id:"categories-and-sorting",level:3},{value:"Pagination",id:"pagination",level:3},{value:"The crawling strategy",id:"the-crawling-strategy",level:2},{value:"Sanity check",id:"sanity-check",level:2},{value:"DevTools - the scrapers toolbox",id:"devtools---the-scrapers-toolbox",level:2},{value:"Selecting elements",id:"selecting-elements",level:2},{value:"Next lesson",id:"next-lesson",level:2}],g={toc:m};function w(e){var t=e.components,p=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Hey, guys, you know, it's cool that we can scrape the ",(0,o.kt)("inlineCode",{parentName:"em"},"<title>")," elements of web pages, but that's not very useful. Can we finally scrape some real data and save it somewhere in a machine-readable format? Because that's why I started reading this tutorial in the first place!"))),(0,o.kt)("p",null,"We hear you, young padawan! First, learn how to crawl, you must. Only then, walk through data, you can!"),(0,o.kt)("h2",{id:"making-a-production-grade-crawler"},"Making a production-grade crawler"),(0,o.kt)("p",null,"Making a production-grade crawler is not difficult, but there are many pitfalls of scraping that can catch you off guard. So for the real world project you'll learn how to scrape ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," instead of the Crawlee website. It is a library of scrapers and automations called ",(0,o.kt)("strong",{parentName:"p"},"actors")," that anyone can grab and use for free."),(0,o.kt)("p",null,"The website requires JavaScript rendering, which allows us to showcase more features of Crawlee. We've also added some helpful tips that prepare you for the real-world issues that you will surely encounter when scraping at scale."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're not interested in crawling theory, feel free to ",(0,o.kt)("a",{parentName:"p",href:"./crawling",target:null,rel:null},"skip to the next lesson")," and get right back to coding.")),(0,o.kt)("h2",{id:"drawing-a-plan"},"Drawing a plan"),(0,o.kt)("p",null,"Sometimes scraping is really straightforward, but most of the time, it really pays off to do a bit of research first and try to answer some of these questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How is the website structured?"),(0,o.kt)("li",{parentName:"ul"},'Can I scrape it only with HTTP requests (read "with ',(0,o.kt)("inlineCode",{parentName:"li"},"CheerioCrawler"),'")?'),(0,o.kt)("li",{parentName:"ul"},"Do I need a headless browser for something?"),(0,o.kt)("li",{parentName:"ul"},"Are there any anti-scraping protections in place?"),(0,o.kt)("li",{parentName:"ul"},"Do I need to parse the HTML or can I get the data otherwise, such as directly from the website's API?")),(0,o.kt)("p",null,"For the purposes of this tutorial, let's assume that the website cannot be scraped with ",(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),". It actually can, but we would have to dive a bit deeper than this introductory guide allows. So for now we will make things easier for you, scrape it with ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),", and you'll learn about headless browsers in the process."),(0,o.kt)("h2",{id:"choosing-the-data-you-need"},"Choosing the data you need"),(0,o.kt)("p",null,"A good first step is to figure out what data you want to scrape and where to find it. For the time being, let's just agree that we want to scrape all actors from ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," and for each actor we want to get its:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL"),(0,o.kt)("li",{parentName:"ul"},"Owner"),(0,o.kt)("li",{parentName:"ul"},"Unique identifier (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"apify/web-scraper"),")"),(0,o.kt)("li",{parentName:"ul"},"Title"),(0,o.kt)("li",{parentName:"ul"},"Description"),(0,o.kt)("li",{parentName:"ul"},"Last modification date"),(0,o.kt)("li",{parentName:"ul"},"Number of runs")),(0,o.kt)("p",null,'You will notice that some information is available directly on the list page, but for details such as "Last modification date" or "Number of runs" we\'ll also need to open the actor detail pages.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data to scrape",src:a(8991).Z,title:"Overview of data to be scraped.",width:"2992",height:"1868"})),(0,o.kt)("h3",{id:"the-start-urls"},"The start URL(s)"),(0,o.kt)("p",null,"This is where you start your crawl. It's convenient to start as close to the data as possible. For example, it wouldn't make much sense to start at ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com")," and look for a ",(0,o.kt)("inlineCode",{parentName:"p"},"store")," link there, when we already know that everything we want to extract can be found at the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com/store")," page."),(0,o.kt)("h2",{id:"exploring-the-page"},"Exploring the page"),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify.com/store")," page more carefully. There are some ",(0,o.kt)("strong",{parentName:"p"},"categories")," on the left, ",(0,o.kt)("strong",{parentName:"p"},"sorting")," on the right, and at the very bottom, there are links to the next pages of results. This is usually called ",(0,o.kt)("strong",{parentName:"p"},"the pagination"),"."),(0,o.kt)("h3",{id:"categories-and-sorting"},"Categories and sorting"),(0,o.kt)("p",null,"When you click the categories, you'll see that they filter the results. If you remove the category, you're back to the original number of results. By going through a few categories and observing the behavior, we can quite safely assume that the default setting - with ",(0,o.kt)("strong",{parentName:"p"},"no category selected")," - shows us ",(0,o.kt)("strong",{parentName:"p"},"all the actors available")," in the store and that's the setting we'll use to scrape. The same applies to sorting. We don't need that now."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be careful, because on some websites, like ",(0,o.kt)("a",{parentName:"p",href:"https://amazon.com",target:"_blank",rel:"noopener"},"amazon.com"),", this is not true and the sum of products in categories is actually larger than what's available without filters. Learn more in our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/tutorials/scrape-paginated-sites",target:"_blank",rel:"noopener"},"tutorial on scraping websites with limited pagination"),".")),(0,o.kt)("h3",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"The pagination of Apify Store is simple enough. The only setback is that there's no button that would allow you to go directly to the last page, so you can't confirm how many results there are. But you can trick it a bit. When you click on the page 2 button, you'll see that the URL changes to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://apify.com/store?page=2\n")),(0,o.kt)("p",null,"Try clicking on the link to page 6. You'll see that the pagination links update and show more pages. But can you trust that this will include all pages and won't stop at some point?"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Similarly to the issue with filters explained above, the existence of pagination does not guarantee that you can simply paginate through all the results. Always test your assumptions about pagination. Otherwise, you might miss a chunk of results, and not even know about it.")),(0,o.kt)("p",null,"At the time of writing the Store results counter showed 1047 results - actors. Quick count of actors on one page of results makes 24. 8 rows times 3 actors. This means that there should be 44 pages of results. 1047 divided by 24. Try going to page number 44 (or the number your own calculation produced)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://apify.com/store?page=44\n")),(0,o.kt)("p",null,"It's empty. \ud83e\udd2f Wrong calculation? Not really. This is an example of another common issue in web scraping. The result count presented by websites very rarely matches the actual number of available results. In our case, it's simply because certain actors were hidden for some reason, but the count does not reflect it."),(0,o.kt)("p",null,"At the time of writing, the last results were actually on page 42. But that's ok. What's important is that on this page 42, the pagination links at the bottom are still the same as on page one, two or six. This makes it fairly certain that you can keep following those links until you scrape all the results. Good \ud83d\udc4d"),(0,o.kt)("p",null,"If you're not convinced, you can visit a page somewhere in the middle, like ",(0,o.kt)("inlineCode",{parentName:"p"},"https://apify.com/store?page=20")," and see how the pagination looks there."),(0,o.kt)("h2",{id:"the-crawling-strategy"},"The crawling strategy"),(0,o.kt)("p",null,"Now that you know where to start and how to find all the actor details, let's look at the crawling process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit the store page containing the list of actors (our start URL)."),(0,o.kt)("li",{parentName:"ol"},"Enqueue all links to actor details."),(0,o.kt)("li",{parentName:"ol"},"Enqueue links to next pages of results."),(0,o.kt)("li",{parentName:"ol"},"Open the next page in queue.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When it's a results list page, go to 2."),(0,o.kt)("li",{parentName:"ul"},"When it's an actor detail page, scrape the data."))),(0,o.kt)("li",{parentName:"ol"},"Repeat until all results pages and all actor details have been processed.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," will make sure to visit the pages for you, if you provide the correct requests, and you already know how to enqueue pages, so this should be fairly easy. Nevertheless, there are few more tricks that we'd like to showcase."),(0,o.kt)("h2",{id:"sanity-check"},"Sanity check"),(0,o.kt)("p",null,"Let's check that everything is set up correctly before writing the scraping logic itself. You might realize that something in your previous analysis doesn't quite add up, or the website might not behave exactly as you expected."),(0,o.kt)("p",null,"The example below creates a new crawler that visits the start URL and prints the text content of all the actor cards on that page. When you run the code, you will see the ",(0,o.kt)("em",{parentName:"p"},"very badly formatted")," content of the individual actor cards."),(0,o.kt)(l.Z,{groupId:"sanity-check",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"playwright",label:"Playwright",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.ActorStoreItem');\n        // Execute a function in the browser which targets\n        // the actor card elements and allows their manipulation.\n        const actorTexts = await page.$$eval('.ActorStoreItem', (els) => {\n            // Extract text content from the actor cards\n            return els.map((el) => el.textContent);\n        });\n        actorTexts.forEach((text, i) => {\n            console.log(`ACTOR_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n")),(0,o.kt)(i.Z,{value:"playwright-with-cheerio",label:"Playwright with Cheerio",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"// Instead of CheerioCrawler let's use Playwright\n// to be able to render JavaScript.\nimport { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, parseWithCheerio }) => {\n        // Wait for the actor cards to render.\n        await page.waitForSelector('.ActorStoreItem');\n        // Extract the page's HTML from browser\n        // and parse it with Cheerio.\n        const $ = await parseWithCheerio();\n        // Use familiar Cheerio syntax to\n        // select all the actor cards.\n        $('.ActorStoreItem').each((i, el) => {\n            const text = $(el).text();\n            console.log(`ACTOR_${i + 1}: ${text}\\n`);\n        });\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n"))),(0,o.kt)("p",null,"If you're wondering how to get that ",(0,o.kt)("inlineCode",{parentName:"p"},".ActorStoreItem")," selector. We'll explain it in the next chapter on DevTools."),(0,o.kt)("h2",{id:"devtools---the-scrapers-toolbox"},"DevTools - the scrapers toolbox"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We'll use Chrome DevTools here, since it's the most common browser, but feel free to use any other, they're all very similar.")),(0,o.kt)("p",null,"Let's open DevTools by going to ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"https://apify.com/store")," in Chrome and then right-clicking anywhere in the page and selecting ",(0,o.kt)("strong",{parentName:"p"},"Inspect"),", or by pressing ",(0,o.kt)("strong",{parentName:"p"},"F12")," or whatever your system prefers. With DevTools, you can inspect or manipulate any aspect of the currently open web page. You can learn more about DevTools in their ",(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/",target:"_blank",rel:"noopener"},"official documentaion"),"."),(0,o.kt)("h2",{id:"selecting-elements"},"Selecting elements"),(0,o.kt)("p",null,"In the DevTools, choose the ",(0,o.kt)("strong",{parentName:"p"},"Select an element")," tool and try hovering over one of the actor cards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"select an element",src:a(7321).Z,title:"Finding the select an element tool.",width:"1362",height:"692"})),(0,o.kt)("p",null,"You'll see that you can select different elements inside the card. Instead, select the whole card, not just some of its contents, such as its title or description."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"selected element",src:a(5775).Z,title:"Selecting an element by hovering over it.",width:"2254",height:"804"})),(0,o.kt)("p",null,"Selecting an element will highlight it in the DevTools HTML inspector. When carefully look at the elements, you'll see that there are some ",(0,o.kt)("strong",{parentName:"p"},"classes")," attached to the different HTML elements. Those are called ",(0,o.kt)("strong",{parentName:"p"},"CSS classes"),", and we can make a use of them in scraping."),(0,o.kt)("p",null,"Conversely, by hovering over elements in the HTML inspector, you will see them highlight on the page. Inspect the page's structure around the actor cards. You'll see that all the card's data is displayed in an ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," element with two classes, one of which is ",(0,o.kt)("strong",{parentName:"p"},"ActorStoreItem"),". It should now make sense how we got that ",(0,o.kt)("inlineCode",{parentName:"p"},".ActorStoreItem")," selector. It's just a way to find all elements that are annotated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActorStoreItem"),"."),(0,o.kt)("p",null,"It's always a good idea to double-check that you're not getting any unwanted elements with this class. To do that, go into the ",(0,o.kt)("strong",{parentName:"p"},"Console")," tab of DevTools and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"document.querySelectorAll('.ActorStoreItem');\n")),(0,o.kt)("p",null,"You will see that only the 24 actor cards will be returned, and nothing else."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"CSS selectors and DevTools are quite a big topic. If you want to learn more, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.apify.com/academy/web-scraping-for-beginners",target:"_blank",rel:"noopener"},"Web scraping for beginners course")," in the Apify Academy. ",(0,o.kt)("strong",{parentName:"p"},"It's free and open-source")," \u2764\ufe0f.")),(0,o.kt)("h2",{id:"next-lesson"},"Next lesson"),(0,o.kt)("p",null,"In the next lesson we will crawl the whole store, including all the listing pages and all the actor detail pages."))}w.isMDXComponent=!0},8991:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/scraping-practice-ff5b1b61c1d1607988633d7ae672313f.jpg"},7321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/select-an-element-36b5c5354cb1fd93ae2746723c24ed28.png"},5775:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/selected-element-7425c1de56610e846bded7e60f47e58e.png"},643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.0.4","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":{"crawlee":"./src/cli.ts"},"main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"npm run clean && npm run compile && npm run copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/cli":"^3.0.4","@crawlee/core":"^3.0.4","@crawlee/basic":"^3.0.4","@crawlee/browser":"^3.0.4","@crawlee/http":"^3.0.4","@crawlee/cheerio":"^3.0.4","@crawlee/jsdom":"^3.0.4","@crawlee/playwright":"^3.0.4","@crawlee/puppeteer":"^3.0.4","@crawlee/utils":"^3.0.4","import-local":"^3.1.0"},"peerDependencies":{"playwright":"^1.21.1","puppeteer":">= 9.x <= 14.x"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);