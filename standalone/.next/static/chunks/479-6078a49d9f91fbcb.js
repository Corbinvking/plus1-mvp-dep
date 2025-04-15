"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{2235:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(7977).Z)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},703:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(7447),o=n.n(r)},1749:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(4096),o=n(3667),i=n(3827),a=o._(n(4090)),u=r._(n(9542)),l=r._(n(2251)),c=n(8630),s=n(6906),d=n(337);n(6184);let f=n(6993),p=r._(n(536)),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,o,i){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=a.version.split(".",2),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:u,width:l,decoding:c,className:s,style:d,fetchPriority:f,placeholder:p,loading:v,unoptimized:g,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:E,setShowAltText:C,onLoad:S,onError:x,...P}=e;return(0,i.jsx)("img",{...P,...h(f),loading:v,width:l,height:u,decoding:c,"data-nimg":y?"fill":"1",className:s,style:d,sizes:o,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,p,b,w,E,g))},[n,p,b,w,E,x,g,t]),onLoad:e=>{m(e.currentTarget,p,b,w,E,g)},onError:e=>{C(!0),"empty"!==p&&E(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=v||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:l}=e,m=(0,a.useRef)(u);(0,a.useEffect)(()=>{m.current=u},[u]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[b,w]=(0,a.useState)(!1),[E,C]=(0,a.useState)(!1),{props:S,meta:x}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:b,showAltText:E});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:C,ref:t}),x.priority?(0,i.jsx)(y,{isAppRouter:!n,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5827:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(4096)._(n(4090)).default.createContext({})},3044:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8630:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),n(6184);let r=n(7160),o=n(6906);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var n;let u,l,c,{src:s,sizes:d,unoptimized:f=!1,priority:p=!1,loading:v,className:m,quality:h,width:g,height:y,fill:b=!1,style:w,onLoad:E,onLoadingComplete:C,placeholder:S="empty",blurDataURL:x,fetchPriority:P,layout:j,objectFit:_,objectPosition:O,lazyBoundary:M,lazyRoot:R,...k}=e,{imgConf:D,showAltText:I,blurComplete:A,defaultLoader:L}=t,N=D||o.imageConfigDefault;if("allSizes"in N)u=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);u={...N,allSizes:e,deviceSizes:t}}let T=k.loader||L;delete k.loader,delete k.srcSet;let W="__next_img_default"in T;if(W){if("custom"===u.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!d&&(d=t)}let z="",F=a(g),B=a(y);if("object"==typeof(n=s)&&(i(n)||void 0!==n.src)){let e=i(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,x=x||e.blurDataURL,z=e.src,!b){if(F||B){if(F&&!B){let t=F/e.width;B=Math.round(e.height*t)}else if(!F&&B){let t=B/e.height;F=Math.round(e.width*t)}}else F=e.width,B=e.height}}let V=!p&&("lazy"===v||void 0===v);(!(s="string"==typeof s?s:z)||s.startsWith("data:")||s.startsWith("blob:"))&&(f=!0,V=!1),u.unoptimized&&(f=!0),W&&s.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let U=a(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:O}:{},I?{}:{color:"transparent"},w),K=A||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:B,blurWidth:l,blurHeight:c,blurDataURL:x||"",objectFit:H.objectFit})+'")':'url("'+S+'")',Y=K?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},G=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),s=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,r)=>u({config:t,src:n,quality:i,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:u({config:t,src:n,quality:i,width:l[s]})}}({config:u,src:s,unoptimized:f,width:F,quality:U,sizes:d,loader:T});return{props:{...k,loading:V?"lazy":v,fetchPriority:P,width:F,height:B,decoding:"async",className:m,style:{...H,...Y},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:b}}}},2251:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return d},default:function(){return m}});let r=n(4096),o=n(3667),i=n(3827),a=o._(n(4090)),u=r._(n(7392)),l=n(5827),c=n(7484),s=n(3044);function d(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(6184);let p=["name","httpEquiv","charSet","itemProp"];function v(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return(0,i.jsx)(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7160:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=r?40*r:t,l=o?40*o:n,c=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},337:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=n(4096)._(n(4090)),o=n(6906),i=r.default.createContext(o.imageConfigDefault)},6906:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},7447:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return u},default:function(){return l}});let r=n(4096),o=n(8630),i=n(1749),a=r._(n(536)),u=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=i.Image},536:function(e,t){function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},7392:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(4090),o=r.useLayoutEffect,i=r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6555:function(e,t,n){let r;n.d(t,{x8:function(){return to},VY:function(){return tn},aV:function(){return tt},h_:function(){return te},fC:function(){return e5},Dx:function(){return tr}});var o,i,a,u,l,c,s,d=n(4090),f=n(4991),p=n(1266),v=n(4104),m=n(8687),h=n(9310),g=n(9586),y=n(9830),b=n(3827),w="dismissableLayer.update",E=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),C=d.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:u,onInteractOutside:l,onDismiss:s,...v}=e,m=d.useContext(E),[h,C]=d.useState(null),P=null!==(r=null==h?void 0:h.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,j]=d.useState({}),_=(0,p.e)(t,e=>C(e)),O=Array.from(m.layers),[M]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),R=O.indexOf(M),k=h?O.indexOf(h):-1,D=m.layersWithOutsidePointerEventsDisabled.size>0,I=k>=R,A=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,y.W)(e),o=d.useRef(!1),i=d.useRef(()=>{});return d.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){x("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!I||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==s||s())},P),L=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,y.W)(e),o=d.useRef(!1);return d.useEffect(()=>{let e=e=>{e.target&&!o.current&&x("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(null==u||u(e),null==l||l(e),e.defaultPrevented||null==s||s())},P);return!function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,y.W)(e);d.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return n.addEventListener("keydown",e,{capture:!0}),()=>n.removeEventListener("keydown",e,{capture:!0})},[r,n])}(e=>{k!==m.layers.size-1||(null==i||i(e),!e.defaultPrevented&&s&&(e.preventDefault(),s()))},P),d.useEffect(()=>{if(h)return o&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(c=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(h)),m.layers.add(h),S(),()=>{o&&1===m.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=c)}},[h,P,o,m]),d.useEffect(()=>()=>{h&&(m.layers.delete(h),m.layersWithOutsidePointerEventsDisabled.delete(h),S())},[h,m]),d.useEffect(()=>{let e=()=>j({});return document.addEventListener(w,e),()=>document.removeEventListener(w,e)},[]),(0,b.jsx)(g.WV.div,{...v,ref:_,style:{pointerEvents:D?I?"auto":"none":void 0,...e.style},onFocusCapture:(0,f.M)(e.onFocusCapture,L.onFocusCapture),onBlurCapture:(0,f.M)(e.onBlurCapture,L.onBlurCapture),onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,A.onPointerDownCapture)})});function S(){let e=new CustomEvent(w);document.dispatchEvent(e)}function x(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,g.jH)(i,a):i.dispatchEvent(a)}C.displayName="DismissableLayer",d.forwardRef((e,t)=>{let n=d.useContext(E),r=d.useRef(null),o=(0,p.e)(t,r);return d.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,b.jsx)(g.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var P="focusScope.autoFocusOnMount",j="focusScope.autoFocusOnUnmount",_={bubbles:!1,cancelable:!0},O=d.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[u,l]=d.useState(null),c=(0,y.W)(o),s=(0,y.W)(i),f=d.useRef(null),v=(0,p.e)(t,e=>l(e)),m=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let e=function(e){if(m.paused||!u)return;let t=e.target;u.contains(t)?f.current=t:k(f.current,{select:!0})},t=function(e){if(m.paused||!u)return;let t=e.relatedTarget;null===t||u.contains(t)||k(f.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&k(u)});return u&&n.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,u,m.paused]),d.useEffect(()=>{if(u){D.add(m);let e=document.activeElement;if(!u.contains(e)){let t=new CustomEvent(P,_);u.addEventListener(P,c),u.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(k(r,{select:t}),document.activeElement!==n)return}(M(u).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&k(u))}return()=>{u.removeEventListener(P,c),setTimeout(()=>{let t=new CustomEvent(j,_);u.addEventListener(j,s),u.dispatchEvent(t),t.defaultPrevented||k(null!=e?e:document.body,{select:!0}),u.removeEventListener(j,s),D.remove(m)},0)}}},[u,c,s,m]);let h=d.useCallback(e=>{if(!n&&!r||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=M(e);return[R(t,e),R(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&k(i,{select:!0})):(e.preventDefault(),n&&k(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,m.paused]);return(0,b.jsx)(g.WV.div,{tabIndex:-1,...a,ref:v,onKeyDown:h})});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function R(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function k(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}O.displayName="FocusScope";var D=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=I(r,e)).unshift(e)},remove(e){var t;null===(t=(r=I(r,e))[0])||void 0===t||t.resume()}});function I(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var A=n(9542),L=n(2618),N=d.forwardRef((e,t)=>{var n,r;let{container:o,...i}=e,[a,u]=d.useState(!1);(0,L.b)(()=>u(!0),[]);let l=o||a&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return l?A.createPortal((0,b.jsx)(g.WV.div,{...i,ref:t}),l):null});N.displayName="Portal";var T=n(2642),W=0;function z(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var V="right-scroll-bar-position",U="width-before-scroll-bar";function H(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K=d.useLayoutEffect,Y=new WeakMap,G=(void 0===o&&(o={}),(void 0===i&&(i=function(e){return e}),a=[],u=!1,l={read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=i(e,u);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){u=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=F({async:!0,ssr:!1},o),l),Z=function(){},q=d.forwardRef(function(e,t){var n,r,o,i,a=d.useRef(null),u=d.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),l=u[0],c=u[1],s=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,E=e.as,C=e.gapMode,S=B(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[a,t],r=function(e){return n.forEach(function(t){return H(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,K(function(){var e=Y.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||H(e,null)}),r.forEach(function(e){t.has(e)||H(e,o)})}Y.set(i,n)},[n]),i),P=F(F({},S),l);return d.createElement(d.Fragment,null,m&&d.createElement(g,{sideCar:G,removeScrollBar:v,shards:h,noIsolation:y,inert:b,setCallbacks:c,allowPinchZoom:!!w,lockRef:a,gapMode:C}),s?d.cloneElement(d.Children.only(f),F(F({},P),{ref:x})):d.createElement(void 0===E?"div":E,F({},P,{className:p,ref:x}),f))});q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},q.classNames={fullWidth:U,zeroRight:V};var X=function(e){var t=e.sideCar,n=B(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,F({},n))};X.isSideCarExport=!0;var $=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},J=function(){var e=$();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Q=function(){var e=J();return function(t){return e(t.styles,t.dynamic),null}},ee=function(e){return parseInt(e||"",10)||0},et=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[ee(n),ee(r),ee(o)]},en=function(e){void 0===e&&(e="margin");var t=et(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},er=Q(),eo="data-scroll-locked",ei=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(eo,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(V," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(U," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(V," .").concat(V," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(U," .").concat(U," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eo,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},ea=function(){var e=parseInt(document.body.getAttribute(eo)||"0",10);return isFinite(e)?e:0},eu=function(){d.useEffect(function(){return document.body.setAttribute(eo,(ea()+1).toString()),function(){var e=ea()-1;e<=0?document.body.removeAttribute(eo):document.body.setAttribute(eo,e.toString())}},[])},el=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;eu();var i=d.useMemo(function(){return en(o)},[o]);return d.createElement(er,{styles:ei(i,!t,o,n?"":"!important")})},ec=!1;try{var es=Object.defineProperty({},"passive",{get:function(){return ec=!0,!0}});window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch(e){ec=!1}var ed=!!ec&&{passive:!1},ef=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ep=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ev(e,r)){var o=em(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ev=function(e,t){return"v"===e?ef(t,"overflowY"):ef(t,"overflowX")},em=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eh=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=em(e,l),m=v[0],h=v[1]-v[2]-a*m;(m||h)&&ev(e,l)&&(f+=h,p+=m),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},eg=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ey=function(e){return[e.deltaX,e.deltaY]},eb=function(e){return e&&"current"in e?e.current:e},ew=0,eE=[],eC=(G.useMedium(function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(ew++)[0],i=d.useState(Q)[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eb),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!a.current.allowPinchZoom;var o,i=eg(e),u=n.current,l="deltaX"in e?e.deltaX:u[0]-i[0],c="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ep(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ep(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return eh(p,t,e,"h"===p?l:c,!0)},[]),l=d.useCallback(function(e){if(eE.length&&eE[eE.length-1]===i){var n="deltaY"in e?ey(e):eg(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eb).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=d.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),s=d.useCallback(function(e){n.current=eg(e),r.current=void 0},[]),f=d.useCallback(function(t){c(t.type,ey(t),t.target,u(t,e.lockRef.current))},[]),p=d.useCallback(function(t){c(t.type,eg(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return eE.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ed),document.addEventListener("touchmove",l,ed),document.addEventListener("touchstart",s,ed),function(){eE=eE.filter(function(e){return e!==i}),document.removeEventListener("wheel",l,ed),document.removeEventListener("touchmove",l,ed),document.removeEventListener("touchstart",s,ed)}},[]);var v=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?d.createElement(el,{gapMode:e.gapMode}):null)}),X),eS=d.forwardRef(function(e,t){return d.createElement(q,F({},e,{ref:t,sideCar:eC}))});eS.classNames=q.classNames;var ex=new WeakMap,eP=new WeakMap,ej={},e_=0,eO=function(e){return e&&(e.host||eO(e.parentNode))},eM=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eO(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});ej[n]||(ej[n]=new WeakMap);var i=ej[n],a=[],u=new Set,l=new Set(o),c=function(e){!e||u.has(e)||(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(ex.get(e)||0)+1,c=(i.get(e)||0)+1;ex.set(e,l),i.set(e,c),a.push(e),1===l&&o&&eP.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),e_++,function(){a.forEach(function(e){var t=ex.get(e)-1,o=i.get(e)-1;ex.set(e,t),i.set(e,o),t||(eP.has(e)||e.removeAttribute(r),eP.delete(e)),o||e.removeAttribute(n)}),--e_||(ex=new WeakMap,ex=new WeakMap,eP=new WeakMap,ej={})}},eR=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eM(r,o,n,"aria-hidden")):function(){return null}},ek=n(9143),eD="Dialog",[eI,eA]=(0,v.b)(eD),[eL,eN]=eI(eD),eT=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!0}=e,u=d.useRef(null),l=d.useRef(null),[c=!1,s]=(0,h.T)({prop:r,defaultProp:o,onChange:i});return(0,b.jsx)(eL,{scope:t,triggerRef:u,contentRef:l,contentId:(0,m.M)(),titleId:(0,m.M)(),descriptionId:(0,m.M)(),open:c,onOpenChange:s,onOpenToggle:d.useCallback(()=>s(e=>!e),[s]),modal:a,children:n})};eT.displayName=eD;var eW="DialogTrigger";d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eN(eW,n),i=(0,p.e)(t,o.triggerRef);return(0,b.jsx)(g.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e3(o.open),...r,ref:i,onClick:(0,f.M)(e.onClick,o.onOpenToggle)})}).displayName=eW;var ez="DialogPortal",[eF,eB]=eI(ez,{forceMount:void 0}),eV=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=eN(ez,t);return(0,b.jsx)(eF,{scope:t,forceMount:n,children:d.Children.map(r,e=>(0,b.jsx)(T.z,{present:n||i.open,children:(0,b.jsx)(N,{asChild:!0,container:o,children:e})}))})};eV.displayName=ez;var eU="DialogOverlay",eH=d.forwardRef((e,t)=>{let n=eB(eU,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eN(eU,e.__scopeDialog);return i.modal?(0,b.jsx)(T.z,{present:r||i.open,children:(0,b.jsx)(eY,{...o,ref:t})}):null});eH.displayName=eU;var eK=(0,ek.Z8)("DialogOverlay.RemoveScroll"),eY=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eN(eU,n);return(0,b.jsx)(eS,{as:eK,allowPinchZoom:!0,shards:[o.contentRef],children:(0,b.jsx)(g.WV.div,{"data-state":e3(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eG="DialogContent",eZ=d.forwardRef((e,t)=>{let n=eB(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eN(eG,e.__scopeDialog);return(0,b.jsx)(T.z,{present:r||i.open,children:i.modal?(0,b.jsx)(eq,{...o,ref:t}):(0,b.jsx)(eX,{...o,ref:t})})});eZ.displayName=eG;var eq=d.forwardRef((e,t)=>{let n=eN(eG,e.__scopeDialog),r=d.useRef(null),o=(0,p.e)(t,n.contentRef,r);return d.useEffect(()=>{let e=r.current;if(e)return eR(e)},[]),(0,b.jsx)(e$,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,f.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,f.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,f.M)(e.onFocusOutside,e=>e.preventDefault())})}),eX=d.forwardRef((e,t)=>{let n=eN(eG,e.__scopeDialog),r=d.useRef(!1),o=d.useRef(!1);return(0,b.jsx)(e$,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),e$=d.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...a}=e,u=eN(eG,n),l=d.useRef(null),c=(0,p.e)(t,l);return d.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:z()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:z()),W++,()=>{1===W&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),W--}},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(O,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,b.jsx)(C,{role:"dialog",id:u.contentId,"aria-describedby":u.descriptionId,"aria-labelledby":u.titleId,"data-state":e3(u.open),...a,ref:c,onDismiss:()=>u.onOpenChange(!1)})}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(e9,{titleId:u.titleId}),(0,b.jsx)(e7,{contentRef:l,descriptionId:u.descriptionId})]})]})}),eJ="DialogTitle",eQ=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eN(eJ,n);return(0,b.jsx)(g.WV.h2,{id:o.titleId,...r,ref:t})});eQ.displayName=eJ;var e0="DialogDescription";d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eN(e0,n);return(0,b.jsx)(g.WV.p,{id:o.descriptionId,...r,ref:t})}).displayName=e0;var e1="DialogClose",e2=d.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eN(e1,n);return(0,b.jsx)(g.WV.button,{type:"button",...r,ref:t,onClick:(0,f.M)(e.onClick,()=>o.onOpenChange(!1))})});function e3(e){return e?"open":"closed"}e2.displayName=e1;var e6="DialogTitleWarning",[e4,e8]=(0,v.k)(e6,{contentName:eG,titleName:eJ,docsSlug:"dialog"}),e9=e=>{let{titleId:t}=e,n=e8(e6),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return d.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e7=e=>{let{contentRef:t,descriptionId:n}=e,r=e8("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return d.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e5=eT,te=eV,tt=eH,tn=eZ,tr=eQ,to=e2}}]);