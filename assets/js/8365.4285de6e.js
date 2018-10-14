"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,v=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return t?a.createElement(v,i(i({ref:n},m),{},{components:t})):a.createElement(v,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3612:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7294),r=t(6010),l=t(5281),i=t(5999);const o="admonition_LlT9",c="admonitionHeading_tbUL",s="admonitionIcon_kALy",m="admonitionContent_S0QG";var u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function f(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:r}}(e.children),r=t.mdxAdmonitionTitle,l=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:r,children:l})}function v(e){var n=f(e),t=n.children,i=n.type,v=n.title,p=n.icon,h=function(e){var n,t=null!=(n=d[e])?n:e;return u[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),u.info)}(i),b=null!=v?v:h.label,g=h.iconComponent,E=null!=p?p:a.createElement(g,null);return a.createElement("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,o)},a.createElement("div",{className:c},a.createElement("span",{className:s},E),b),a.createElement("div",{className:m},t))}},1986:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var a=t(7462),r=t(7294),l=t(6010),i=t(5281),o=t(3791),c=t(8596),s=t(9960),m=t(4996),u=t(5999);function d(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function v(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},n):t?r.createElement(s.default,{className:a,href:t,itemProp:"item"},r.createElement("span",{itemProp:"name"},n)):r.createElement("span",{className:a},n)}function p(e){var n=e.children,t=e.active,i=e.index,o=e.addMicrodata;return r.createElement("li",(0,a.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),n,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function h(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(s.default,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",f.breadcrumbsItemLink),href:e},r.createElement(d,{className:f.breadcrumbHomeIcon})))}function b(){var e=(0,o.s1)(),n=(0,c.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},n&&r.createElement(h,null),e.map((function(n,t){var a=t===e.length-1;return r.createElement(p,{key:t,active:a,index:t,addMicrodata:!!n.href},r.createElement(v,{href:n.href,isLast:a},n.label))})))):null}},4966:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(7462),r=t(7294),l=t(5999),i=t(6010),o=t(9960);function c(e){var n=e.permalink,t=e.title,a=e.subLabel,l=e.isNext;return r.createElement(o.default,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},t))}function s(e){var n=e.previous,t=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n&&r.createElement(c,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),t&&r.createElement(c,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var a=t(7294),r=t(6010),l=t(5999),i=t(5281),o=t(4477);function c(e){var n=e.className,t=(0,o.E)();return t.badge?a.createElement("span",{className:(0,r.Z)(n,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},2503:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),o=t(5999),c=t(6668);const s="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";var u=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,r.Z)(e,u),f=(0,c.L)().navbar.hideOnScroll;return"h1"!==n&&t?l.createElement(n,(0,a.Z)({},d,{className:(0,i.Z)("anchor",f?m:s),id:t}),d.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,a.Z)({},d,{id:void 0}))}},2435:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var a=t(7462),r=t(7294),l=t(3366),i=t(5742),o=["mdxType","originalType"];var c=t(1435);var s=t(9960);var m=t(6010),u=t(2389),d=t(6043);const f="details_lb9f",v="isBrowser_bmU9",p="collapsibleContent_i85q";var h=["summary","children"];function b(e){return!!e&&("SUMMARY"===e.tagName||b(e.parentElement))}function g(e,n){return!!e&&(e===n||g(e.parentElement,n))}function E(e){var n=e.summary,t=e.children,i=(0,l.Z)(e,h),o=(0,u.Z)(),c=(0,r.useRef)(null),s=(0,d.u)({initialState:!i.open}),E=s.collapsed,y=s.setCollapsed,N=(0,r.useState)(i.open),C=N[0],L=N[1];return r.createElement("details",(0,a.Z)({},i,{ref:c,open:C,"data-collapsed":E,className:(0,m.Z)(f,o&&v,i.className),onMouseDown:function(e){b(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;b(n)&&g(n,c.current)&&(e.preventDefault(),E?(y(!1),L(!0)):y(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(d.z,{lazy:!1,collapsed:E,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){y(e),L(!e)}},r.createElement("div",{className:p},t)))}const y="details_b_Ee";function N(e){var n=Object.assign({},e);return r.createElement(E,(0,a.Z)({},n,{className:(0,m.Z)("alert alert--info",y,n.className)}))}var C=t(2503);function L(e){return r.createElement(C.default,e)}const Z="containsTaskList_mC6p";const x="img_ev3q";const _={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,l.Z)(t,o));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(i.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?r.createElement("code",e):r.createElement(c.Z,e)},a:function(e){return r.createElement(s.default,e)},pre:function(e){var n;return r.createElement(c.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),l=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(N,(0,a.Z)({},e,{summary:t}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&Z))}));var n},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,x))}));var n},h1:function(e){return r.createElement(L,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(L,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(L,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(L,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(L,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(L,(0,a.Z)({as:"h6"},e))},admonition:t(3612).Z}},5042:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(7294),r=t(3905),l=t(2435);function i(e){var n=e.children;return a.createElement(r.Zo,{components:l.default},n)}},9407:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),o=t(8011);const c="tableOfContents_bqdL";var s=["className"];function m(e){var n=e.className,t=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",n)},l.createElement(o.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},9286:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var a=t(7294),r=t(6010),l=t(6043),i=t(8011),o=t(7462),c=t(3366),s=t(5999);const m="tocCollapsibleButton_TO0P",u="tocCollapsibleButtonExpanded_MG3E";var d=["collapsed"];function f(e){var n=e.collapsed,t=(0,c.Z)(e,d);return a.createElement("button",(0,o.Z)({type:"button"},t,{className:(0,r.Z)("clean-btn",m,!n&&u,t.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const v="tocCollapsible_ETCw",p="tocCollapsibleContent_vkbj",h="tocCollapsibleExpanded_sAul";function b(e){var n=e.toc,t=e.className,o=e.minHeadingLevel,c=e.maxHeadingLevel,s=(0,l.u)({initialState:!0}),m=s.collapsed,u=s.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(v,!m&&h,t)},a.createElement(f,{collapsed:m,onClick:u}),a.createElement(l.z,{lazy:!0,className:p,collapsed:m},a.createElement(i.Z,{toc:n,minHeadingLevel:o,maxHeadingLevel:c})))}},8011:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),r=t(3366),l=t(7294),i=t(6668),o=t(9665),c=t(6841);function s(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}const m=l.memo(s);var u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,d=e.linkClassName,f=void 0===d?"table-of-contents__link":d,v=e.linkActiveClassName,p=void 0===v?void 0:v,h=e.minHeadingLevel,b=e.maxHeadingLevel,g=(0,r.Z)(e,u),E=(0,i.L)(),y=null!=h?h:E.tableOfContents.minHeadingLevel,N=null!=b?b:E.tableOfContents.maxHeadingLevel,C=(0,o.b)({toc:n,minHeadingLevel:y,maxHeadingLevel:N}),L=(0,l.useMemo)((function(){if(f&&p)return{linkClassName:f,linkActiveClassName:p,minHeadingLevel:y,maxHeadingLevel:N}}),[f,p,y,N]);return(0,c.S)(L),l.createElement(m,(0,a.Z)({toc:C,className:s,linkClassName:f},g))}},5130:(e,n,t)=>{t.d(n,{b:()=>i,k:()=>o});var a=t(7294),r=t(9688),l=a.createContext(null);function i(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(l.Provider,{value:t},n)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}},6841:(e,n,t)=>{t.d(n,{S:()=>c});var a=t(7294),r=t(6668);function l(e){var n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function i(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return l(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function o(){var e=(0,a.useRef)(0),n=(0,r.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){var n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:t.current}),m=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},9665:(e,n,t)=>{t.d(n,{a:()=>o,b:()=>s});var a=t(3366),r=t(7294),l=["parentIndex"];function i(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,l);t>=0?n[t].children.push(i):r.push(i)})),r}function o(e){return(0,r.useMemo)((function(){return i(e)}),[e])}function c(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return c({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}}}]);