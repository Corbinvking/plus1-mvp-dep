(()=>{var e={};e.id=702,e.ids=[702],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},2300:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(482),i=s(9108),n=s(2563),a=s.n(n),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9468)),"C:\\Users\\Admin\\Desktop\\plus1-mvp-base-main\\src\\app\\dashboard\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,6510)),"C:\\Users\\Admin\\Desktop\\plus1-mvp-base-main\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Admin\\Desktop\\plus1-mvp-base-main\\src\\app\\dashboard\\page.tsx"],u="/dashboard/page",h={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5263:(e,t,s)=>{Promise.resolve().then(s.bind(s,5780))},5780:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>W});var r=s(5344),i=s(3729),n=s(1453),a=s(6506),o=s(9673),l=s(9119),c=s(2273),d=s(3211),u=s(573),h=s(3746),x=s(8120),m=s(7075);let p=(0,m.Z)("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var g=s(4513),f=s(9410);let v=(0,i.createContext)(void 0),w=()=>{let e=(0,i.useContext)(v);if(!e)throw Error("useSidebar must be used within a SidebarProvider");return e},b=({children:e,open:t,setOpen:s,animate:n=!0})=>{let[a,o]=(0,i.useState)(!1);return r.jsx(v.Provider,{value:{open:void 0!==t?t:a,setOpen:void 0!==s?s:o,animate:n},children:e})},y=({children:e,open:t,setOpen:s,animate:i})=>r.jsx(b,{open:t,setOpen:s,animate:i,children:e}),j=e=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(k,{...e}),r.jsx(P,{...e})]}),N=[{label:"Dashboard",icon:c.Z,href:"/dashboard"},{label:"My Learning",icon:d.Z,href:"/dashboard/learning"},{label:"Profile",icon:u.Z,href:"/dashboard/profile"},{label:"Settings",icon:h.Z,href:"/dashboard/settings"},{label:"Logout",icon:x.Z,href:"/auth/logout"}],k=({className:e,children:t,...s})=>{let{open:i,setOpen:a,animate:l}=w();return r.jsx(o.E.div,{className:(0,n.cn)("fixed top-0 left-0 h-screen hidden md:flex md:flex-col bg-white dark:bg-gray-900 flex-shrink-0 border-r border-gray-200 dark:border-gray-800","transition-all duration-300 ease-in-out",e),animate:{width:l?i?"300px":"72px":"300px"},transition:{duration:.3,ease:"easeInOut"},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),...s,children:(0,r.jsxs)("div",{className:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",children:[r.jsx("div",{className:"flex items-center flex-shrink-0 px-4",children:r.jsx(M,{})}),r.jsx("nav",{className:"mt-8 flex-1 space-y-2",children:N.map(e=>r.jsx(C,{link:e},e.label))})]})})},P=({className:e,children:t,...s})=>{let{open:i,setOpen:a}=w();return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,n.cn)("h-16 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-800"),...s,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx(f.default,{src:"/logos/plus1-logo.jpeg",alt:"Plus One Logo",width:32,height:32,className:"rounded-lg"}),r.jsx("span",{className:"font-medium text-black dark:text-white",children:"Plus One"})]}),r.jsx("div",{className:"flex justify-end z-20",children:r.jsx(p,{className:"text-gray-600 dark:text-gray-300 cursor-pointer",onClick:()=>a(!i)})}),r.jsx(l.M,{children:i&&(0,r.jsxs)(o.E.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},transition:{duration:.3,ease:"easeInOut"},className:(0,n.cn)("fixed h-full w-full inset-0 bg-white dark:bg-gray-900 p-10 z-[100] flex flex-col justify-between",e),children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[r.jsx(f.default,{src:"/logos/plus1-logo.jpeg",alt:"Plus One Logo",width:40,height:40,className:"rounded-lg"}),r.jsx("span",{className:"font-medium text-black dark:text-white",children:"Plus One"})]}),r.jsx("div",{className:"text-gray-600 dark:text-gray-300 cursor-pointer",onClick:()=>a(!i),children:r.jsx(g.Z,{})})]}),r.jsx("nav",{className:"flex-1 px-4 space-y-2 mt-8",children:N.map(e=>r.jsx(C,{link:e},e.label))})]})})]})})},C=({link:e,className:t,...s})=>{let{open:i,animate:l}=w(),c=e.icon;return(0,r.jsxs)(a.default,{href:e.href,className:(0,n.cn)("flex items-center py-2 text-sm font-medium rounded-lg relative","text-gray-600 hover:text-gray-900 hover:bg-gray-50","dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800","transition-colors duration-150 ease-in-out",i?"px-4":"px-6",t),...s,children:[r.jsx(c,{className:"h-5 w-5 flex-shrink-0"}),r.jsx(o.E.span,{animate:{opacity:l?i?1:0:1,width:l?i?"auto":0:"auto"},transition:{duration:.2,ease:"easeInOut"},className:(0,n.cn)("ml-3 whitespace-pre",!i&&"hidden"),children:e.label})]})},M=()=>{let{open:e}=w();return(0,r.jsxs)(a.default,{href:"/dashboard",className:"flex items-center gap-2",children:[r.jsx(f.default,{src:"/logos/plus1-logo.jpeg",alt:"Plus One Logo",width:40,height:40,className:"rounded-lg"}),e&&r.jsx(o.E.span,{initial:{opacity:0},animate:{opacity:1},className:"font-medium text-black dark:text-white whitespace-pre",children:"Plus One"})]})};var S=s(3024);let q=(0,m.Z)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var T=s(5094);function _(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function z(e,t){let s=Object.keys(e),r=Object.keys(t);return s.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&s.every(s=>{let r=e[s],i=t[s];return"function"==typeof r?`${r}`==`${i}`:_(r)&&_(i)?z(r,i):r===i})}function E(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function A(e={},t=[]){let s=(0,i.useRef)(e),r=(0,i.useRef)(t),[n,a]=(0,i.useState)(),[o,l]=(0,i.useState)(),c=(0,i.useCallback)(()=>{n&&n.reInit(s.current,r.current)},[n]);return(0,i.useEffect)(()=>{z(s.current,e)||(s.current=e,c())},[e,c]),(0,i.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let s=E(e),r=E(t);return s.every((e,t)=>z(e,r[t]))}(r.current,t)&&(r.current=t,c())},[t,c]),(0,i.useEffect)(()=>{a(void 0)},[o,a]),[l,n]}A.globalOptions=void 0;let U=i.createContext(null);function O(){let e=i.useContext(U);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}function L({orientation:e="horizontal",opts:t,setApi:s,plugins:a,className:o,children:l,...c}){let[d,u]=A({...t,axis:"horizontal"===e?"x":"y"},a),[h,x]=i.useState(!1),[m,p]=i.useState(!1),g=i.useCallback(e=>{e&&(x(e.canScrollPrev()),p(e.canScrollNext()))},[]),f=i.useCallback(()=>{u?.scrollPrev()},[u]),v=i.useCallback(()=>{u?.scrollNext()},[u]),w=i.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),f()):"ArrowRight"===e.key&&(e.preventDefault(),v())},[f,v]);return i.useEffect(()=>{u&&s&&s(u)},[u,s]),i.useEffect(()=>{if(u)return g(u),u.on("reInit",g),u.on("select",g),()=>{u?.off("select",g)}},[u,g]),r.jsx(U.Provider,{value:{carouselRef:d,api:u,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:f,scrollNext:v,canScrollPrev:h,canScrollNext:m},children:r.jsx("div",{onKeyDownCapture:w,className:(0,n.cn)("relative",o),role:"region","aria-roledescription":"carousel","data-slot":"carousel",...c,children:l})})}function D({className:e,...t}){let{carouselRef:s,orientation:i}=O();return r.jsx("div",{ref:s,className:"overflow-hidden","data-slot":"carousel-content",children:r.jsx("div",{className:(0,n.cn)("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",e),...t})})}function I({className:e,...t}){let{orientation:s}=O();return r.jsx("div",{role:"group","aria-roledescription":"slide","data-slot":"carousel-item",className:(0,n.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===s?"pl-4":"pt-4",e),...t})}var Z=s(875);let R=[{id:"music-production",title:"Music Production Fundamentals",description:"Learn the basics of music production, from setting up your DAW to mixing and mastering your first track.",image:"/course-thumbnails/music-production.jpg",duration:"8 weeks",level:"Beginner",contentType:"video",contentUrl:"https://www.youtube.com/embed/Hi72cCOPUQU"},{id:"songwriting",title:"Songwriting Essentials",description:"Master the art of songwriting with practical exercises and professional techniques.",image:"/course-thumbnails/songwriting.jpg",duration:"6 weeks",level:"Intermediate",contentType:"video",contentUrl:"https://www.youtube.com/embed/NC1PcpFT604"},{id:"mixing",title:"Professional Mixing Techniques",description:"Take your mixing skills to the next level with industry-standard practices and tools.",image:"/course-thumbnails/mixing.jpg",duration:"10 weeks",level:"Advanced",contentType:"video",contentUrl:"https://www.youtube.com/embed/_gDR0Pu66Kw"},{id:"marketing",title:"Music Marketing Mastery",description:"Learn how to promote your music effectively and build your audience in the digital age.",image:"/course-thumbnails/marketing.jpg",duration:"4 weeks",level:"Intermediate",contentType:"video",contentUrl:"https://www.youtube.com/embed/Aq_VTI_cXuY"}];function F({title:e="Featured Courses",description:t,items:s=R}){let[n,a]=(0,i.useState)(),[o,l]=(0,i.useState)(0),[c,d]=(0,i.useState)(!1),[u,h]=(0,i.useState)(!1),[x,m]=(0,i.useState)(null);return(0,i.useEffect)(()=>{n&&(n.on("select",()=>{l(n.selectedScrollSnap())}),n.on("reInit",()=>{l(n.selectedScrollSnap())}),d(n.canScrollPrev()),h(n.canScrollNext()))},[n]),(0,r.jsxs)("section",{className:"py-6",children:[(0,r.jsxs)("div",{className:"flex items-end justify-between mb-8",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("h2",{className:"text-2xl font-medium md:text-3xl",children:e}),r.jsx("p",{className:"max-w-lg text-sm text-muted-foreground",children:t})]}),(0,r.jsxs)("div",{className:"hidden shrink-0 gap-2 md:flex",children:[r.jsx(T.z,{size:"icon",variant:"ghost",onClick:()=>n?.scrollPrev(),disabled:!c,className:"disabled:pointer-events-auto",children:r.jsx(S.Z,{className:"size-5"})}),r.jsx(T.z,{size:"icon",variant:"ghost",onClick:()=>n?.scrollNext(),disabled:!u,className:"disabled:pointer-events-auto",children:r.jsx(q,{className:"size-5"})})]})]}),(0,r.jsxs)("div",{className:"w-full",children:[r.jsx(L,{setApi:a,opts:{align:"start",loop:!0},className:"w-full",children:r.jsx(D,{className:"-ml-2 md:-ml-4",children:s.map(e=>r.jsx(I,{className:"pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4",children:r.jsx("button",{onClick:()=>m(e),className:"group block h-full w-full",children:(0,r.jsxs)("div",{className:"relative overflow-hidden rounded-xl h-[400px]",children:[r.jsx("div",{className:"h-[250px]",children:r.jsx("img",{src:e.image,alt:e.title,className:"absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"})}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"}),(0,r.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 text-xs text-white/80 mb-3",children:[e.duration&&r.jsx("span",{className:"rounded-full bg-white/20 px-2.5 py-1",children:e.duration}),e.level&&r.jsx("span",{className:"rounded-full bg-white/20 px-2.5 py-1",children:e.level})]}),r.jsx("h3",{className:"mb-3 text-xl font-semibold text-white line-clamp-2",children:e.title}),r.jsx("p",{className:"mb-4 line-clamp-3 text-sm text-gray-200/90",children:e.description}),(0,r.jsxs)("div",{className:"flex items-center text-sm text-white/90 font-medium",children:["Start Learning",r.jsx(q,{className:"ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"})]})]})]})})},e.id))})}),r.jsx("div",{className:"mt-6 flex justify-center gap-2",children:s.map((e,t)=>r.jsx("button",{className:`h-2 w-2 rounded-full transition-colors ${o===t?"bg-primary":"bg-primary/20"}`,onClick:()=>n?.scrollTo(t),"aria-label":`Go to slide ${t+1}`},t))})]}),x&&r.jsx(Z.v,{isOpen:!!x,onClose:()=>m(null),courseId:x.id,lessonId:"lesson-1",contentType:x.contentType||"video",contentUrl:x.contentUrl||"https://example.com/default.mp4"})]})}class Y{constructor(e,t,s){this.x=e,this.y=t,this.z=s}dot2(e,t){return this.x*e+this.y*t}}class G{constructor(e=0){this.grad3=[new Y(1,1,0),new Y(-1,1,0),new Y(1,-1,0),new Y(-1,-1,0),new Y(1,0,1),new Y(-1,0,1),new Y(1,0,-1),new Y(-1,0,-1),new Y(0,1,1),new Y(0,-1,1),new Y(0,1,-1),new Y(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=Array(512),this.gradP=Array(512),this.seed(e)}seed(e){e>0&&e<1&&(e*=65536),(e=Math.floor(e))<256&&(e|=e<<8);for(let t=0;t<256;t++){let s=1&t?this.p[t]^255&e:this.p[t]^e>>8&255;this.perm[t]=this.perm[t+256]=s,this.gradP[t]=this.gradP[t+256]=this.grad3[s%12]}}fade(e){return e*e*e*(e*(6*e-15)+10)}lerp(e,t,s){return(1-s)*e+s*t}perlin2(e,t){let s=Math.floor(e),r=Math.floor(t);e-=s,t-=r,s&=255,r&=255;let i=this.gradP[s+this.perm[r]].dot2(e,t),n=this.gradP[s+this.perm[r+1]].dot2(e,t-1),a=this.gradP[s+1+this.perm[r]].dot2(e-1,t),o=this.gradP[s+1+this.perm[r+1]].dot2(e-1,t-1),l=this.fade(e);return this.lerp(this.lerp(i,a,l),this.lerp(n,o,l),this.fade(t))}}function $({lineColor:e="hsl(var(--foreground))",backgroundColor:t="transparent",waveSpeedX:s=.0125,waveSpeedY:a=.005,waveAmpX:o=32,waveAmpY:l=16,xGap:c=10,yGap:d=32,friction:u=.925,tension:h=.005,maxCursorMove:x=100,className:m}){let p=(0,i.useRef)(null),g=(0,i.useRef)(null),f=(0,i.useRef)(null),v=(0,i.useRef)({width:0,height:0,left:0,top:0}),w=(0,i.useRef)(new G(Math.random())),b=(0,i.useRef)([]),y=(0,i.useRef)({x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1});return(0,i.useEffect)(()=>{let t=g.current,r=p.current;function i(){v.current=r.getBoundingClientRect(),t.width=v.current.width,t.height=v.current.height}function n(){let{width:e,height:t}=v.current;b.current=[];let s=Math.ceil((e+200)/c),r=Math.ceil((t+30)/d),i=(e-c*s)/2,n=(t-d*r)/2;for(let e=0;e<=s;e++){let t=[];for(let s=0;s<=r;s++)t.push({x:i+c*e,y:n+d*s,wave:{x:0,y:0},cursor:{x:0,y:0,vx:0,vy:0}});b.current.push(t)}}function m(e,t=!0){return{x:Math.round(10*(e.x+e.wave.x+(t?e.cursor.x:0)))/10,y:Math.round(10*(e.y+e.wave.y+(t?e.cursor.y:0)))/10}}function j(){i(),n()}function N(e){P(e.pageX,e.pageY)}function k(e){e.preventDefault();let t=e.touches[0];P(t.clientX,t.clientY)}function P(e,t){let s=y.current,r=v.current;s.x=e-r.left,s.y=t-r.top+window.scrollY,s.set||(s.sx=s.x,s.sy=s.y,s.lx=s.x,s.ly=s.y,s.set=!0)}return f.current=t.getContext("2d"),i(),n(),requestAnimationFrame(function t(i){let n=y.current;n.sx+=(n.x-n.sx)*.1,n.sy+=(n.y-n.sy)*.1;let c=n.x-n.lx,d=n.y-n.ly,p=Math.hypot(c,d);n.v=p,n.vs+=(p-n.vs)*.1,n.vs=Math.min(100,n.vs),n.lx=n.x,n.ly=n.y,n.a=Math.atan2(d,c),r.style.setProperty("--x",`${n.sx}px`),r.style.setProperty("--y",`${n.sy}px`),function(e){let t=b.current,r=y.current,i=w.current;t.forEach(t=>{t.forEach(t=>{let n=12*i.perlin2((t.x+e*s)*.002,(t.y+e*a)*.0015);t.wave.x=Math.cos(n)*o,t.wave.y=Math.sin(n)*l;let c=Math.hypot(t.x-r.sx,t.y-r.sy),d=Math.max(175,r.vs);if(c<d){let e=Math.cos(.001*c)*(1-c/d);t.cursor.vx+=Math.cos(r.a)*e*d*r.vs*65e-5,t.cursor.vy+=Math.sin(r.a)*e*d*r.vs*65e-5}t.cursor.vx+=(0-t.cursor.x)*h,t.cursor.vy+=(0-t.cursor.y)*h,t.cursor.vx*=u,t.cursor.vy*=u,t.cursor.x+=2*t.cursor.vx,t.cursor.y+=2*t.cursor.vy,t.cursor.x=Math.min(x,Math.max(-x,t.cursor.x)),t.cursor.y=Math.min(x,Math.max(-x,t.cursor.y))})})}(i),function(){let{width:t,height:s}=v.current,r=f.current;r.clearRect(0,0,t,s),r.beginPath(),r.strokeStyle=e,b.current.forEach(e=>{let t=m(e[0],!1);r.moveTo(t.x,t.y),e.forEach((s,i)=>{let n=i===e.length-1;t=m(s,!n);let a=m(e[i+1]||e[e.length-1],!n);r.lineTo(t.x,t.y),n&&r.moveTo(a.x,a.y)})}),r.stroke()}(),requestAnimationFrame(t)}),window.addEventListener("resize",j),window.addEventListener("mousemove",N),window.addEventListener("touchmove",k,{passive:!1}),()=>{window.removeEventListener("resize",j),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",k)}},[e,t,s,a,o,l,u,h,x,c,d]),(0,r.jsxs)("div",{ref:p,style:{backgroundColor:t},className:(0,n.cn)("absolute top-0 left-0 w-full h-full overflow-hidden",m),children:[r.jsx("div",{className:(0,n.cn)("absolute top-0 left-0 rounded-full","w-2 h-2 bg-foreground/10"),style:{transform:"translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",willChange:"transform"}}),r.jsx("canvas",{ref:g,className:"block w-full h-full"})]})}var V=i.createContext(void 0),B={setTheme:e=>{},themes:[]},X=()=>{var e;return null!=(e=i.useContext(V))?e:B};let H=[{id:"music-production",title:"Music Production Fundamentals",description:"Learn the basics of music production, from setting up your DAW to mixing and mastering your first track.",href:"/courses/music-production",image:"/course-thumbnails/music-production.jpg",duration:"8 weeks",level:"beginner",contentType:"video",contentUrl:"https://www.youtube.com/embed/Hi72cCOPUQU"},{id:"songwriting",title:"Songwriting Essentials",description:"Master the art of songwriting with practical exercises and professional techniques.",href:"/courses/songwriting",image:"/course-thumbnails/songwriting.jpg",duration:"6 weeks",level:"intermediate",contentType:"video",contentUrl:"https://www.youtube.com/embed/NC1PcpFT604"},{id:"mixing",title:"Professional Mixing Techniques",description:"Take your mixing skills to the next level with industry-standard practices and tools.",href:"/courses/mixing",image:"/course-thumbnails/mixing.jpg",duration:"10 weeks",level:"advanced",contentType:"video",contentUrl:"https://www.youtube.com/embed/_gDR0Pu66Kw"},{id:"marketing",title:"Music Marketing Mastery",description:"Learn how to promote your music effectively and build your audience in the digital age.",href:"/courses/marketing",image:"/course-thumbnails/marketing.jpg",duration:"4 weeks",level:"intermediate",contentType:"video",contentUrl:"https://www.youtube.com/embed/Aq_VTI_cXuY"}];function W(){let{theme:e}=X(),t=[{label:"Dashboard",href:"/dashboard",icon:c.Z},{label:"My Learning",href:"/dashboard/learning",icon:d.Z},{label:"Profile",href:"/dashboard/profile",icon:u.Z},{label:"Settings",href:"/dashboard/settings",icon:h.Z},{label:"Logout",href:"/auth/logout",icon:x.Z}],[s,o]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:"min-h-screen w-full bg-background",children:[r.jsx(y,{open:s,setOpen:o,children:r.jsx(j,{children:t.map(e=>r.jsx(C,{link:e},e.href))})}),r.jsx("main",{className:(0,n.cn)("transition-[padding] duration-300 ease-in-out","md:pl-[72px]",s&&"md:pl-[300px]"),children:(0,r.jsxs)("div",{className:"relative min-h-screen",children:[r.jsx("div",{className:"absolute inset-0 z-0",children:r.jsx($,{lineColor:"dark"===e?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",backgroundColor:"transparent",waveSpeedX:.02,waveSpeedY:.01,waveAmpX:40,waveAmpY:20,friction:.9,tension:.01,maxCursorMove:120,xGap:12,yGap:36})}),r.jsx("div",{className:"relative z-10",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsxs)("div",{className:"grid gap-6 md:grid-cols-2 mb-8",children:[r.jsx(a.default,{href:"/dashboard/learning",className:"rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:bg-accent/50 transition-colors",children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"rounded-full bg-primary/10 p-3",children:(0,r.jsxs)("svg",{className:"h-6 w-6 text-primary",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]})}),(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"font-semibold",children:"Continue Learning"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"Pick up where you left off"})]})]})}),r.jsx(a.default,{href:"/dashboard/courses",className:"rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:bg-accent/50 transition-colors",children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"rounded-full bg-primary/10 p-3",children:(0,r.jsxs)("svg",{className:"h-6 w-6 text-primary",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M21 15V6"}),r.jsx("path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),r.jsx("path",{d:"M12 12H3"}),r.jsx("path",{d:"M16 6H3"}),r.jsx("path",{d:"M12 18H3"})]})}),(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"font-semibold",children:"Browse Courses"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"Discover new skills and knowledge"})]})]})})]}),r.jsx("div",{className:"mb-8",children:r.jsx(F,{items:H,title:"Featured Courses",description:"Explore our curated selection of music production courses designed to help you master your craft."})})]})})]})})]})}},875:(e,t,s)=>{"use strict";s.d(t,{v:()=>b});var r=s(5344),i=s(3729),n=s(1331),a=s(4513),o=s(1453);function l({...e}){return r.jsx(n.fC,{"data-slot":"dialog",...e})}function c({...e}){return r.jsx(n.h_,{"data-slot":"dialog-portal",...e})}function d({className:e,...t}){return r.jsx(n.aV,{"data-slot":"dialog-overlay",className:(0,o.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function u({className:e,children:t,...s}){return(0,r.jsxs)(c,{"data-slot":"dialog-portal",children:[r.jsx(d,{}),(0,r.jsxs)(n.VY,{"data-slot":"dialog-content",className:(0,o.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...s,children:[t,(0,r.jsxs)(n.x8,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[r.jsx(a.Z,{}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function h({className:e,...t}){return r.jsx(n.Dx,{"data-slot":"dialog-title",className:(0,o.cn)("text-lg leading-none font-semibold",e),...t})}var x=s(4426),m=s(18),p=s(5094),g=s(1467),f=s(2690);let v={"music-production":{title:"Introduction to Music Production",lessons:[{id:"lesson-1",title:"Getting Started with Music Production",contentType:"video",contentUrl:"https://www.youtube.com/embed/Hi72cCOPUQU"},{id:"lesson-2",title:"Basic Music Production Concepts",contentType:"pdf",contentUrl:"https://example.com/basics.pdf"}]},songwriting:{title:"Songwriting Essentials",lessons:[{id:"lesson-1",title:"Understanding Song Structure",contentType:"video",contentUrl:"https://www.youtube.com/embed/NC1PcpFT604"}]},mixing:{title:"Professional Mixing Techniques",lessons:[{id:"lesson-1",title:"Essential Mixing Tips",contentType:"video",contentUrl:"https://www.youtube.com/embed/_gDR0Pu66Kw"}]},marketing:{title:"Music Marketing Mastery",lessons:[{id:"lesson-1",title:"Building Your Music Brand",contentType:"video",contentUrl:"https://www.youtube.com/embed/Aq_VTI_cXuY"}]}},w=[{question:"What is the first step in setting up a DAW?",options:["Configure audio interface","Install plugins","Create a new project","Set up MIDI devices"],correctAnswer:0}];function b({isOpen:e,onClose:t,courseId:s,lessonId:n,contentType:o,contentUrl:c}){let[d,b]=(0,i.useState)(o),[y,j]=(0,i.useState)(""),[N,k]=(0,i.useState)([]),[P,C]=(0,i.useState)(!1),M=(e,t)=>{let s=[...N];s[e]=t,k(s)};return r.jsx(l,{open:e,onOpenChange:t,children:(0,r.jsxs)(u,{className:"fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[160vh] h-[85vh] min-w-[1200px] max-w-[98vw] bg-background/70 backdrop-blur-md rounded-lg border shadow-lg grid grid-rows-[auto_1fr] overflow-hidden text-white",children:[(0,r.jsxs)("div",{className:"px-6 py-4 border-b border-white/10 flex items-center justify-between",children:[r.jsx(h,{className:"text-xl font-semibold text-white",children:v[s]?.title||"Course Content"}),r.jsx(p.z,{variant:"ghost",size:"icon",onClick:t,className:"ml-auto text-white hover:text-white/80",children:r.jsx(a.Z,{className:"h-6 w-6"})})]}),(0,r.jsxs)("div",{className:"grid grid-rows-[60%_40%] overflow-hidden",children:[r.jsx("div",{className:"border-b border-white/10 p-4",children:(0,r.jsxs)(g.mQ,{value:d,onValueChange:e=>b(e),className:"h-full",children:[(0,r.jsxs)(g.dr,{className:"w-full grid grid-cols-2 mb-3 bg-white/10",children:[r.jsx(g.SP,{value:"video",className:"text-base py-2 text-white data-[state=active]:bg-white/20",children:"Video"}),r.jsx(g.SP,{value:"pdf",className:"text-base py-2 text-white data-[state=active]:bg-white/20",children:"PDF Materials"})]}),(0,r.jsxs)("div",{className:"h-[calc(100%-3rem)]",children:[r.jsx(g.nU,{value:"video",className:"mt-0 h-full",children:r.jsx(x.Y,{videoUrl:c,lessonId:n,onComplete:()=>console.log("Video completed"),className:"w-full h-full"})}),r.jsx(g.nU,{value:"pdf",className:"mt-0 h-full",children:r.jsx(m.Z,{pdfUrl:c,lessonId:n,onComplete:()=>console.log("PDF completed"),className:"w-full h-full"})})]})]})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 divide-x divide-white/10 overflow-hidden",children:[(0,r.jsxs)("div",{className:"p-4 grid grid-rows-[auto_1fr_auto] gap-4 overflow-hidden",children:[r.jsx("h2",{className:"text-lg font-semibold text-white",children:"Notes"}),r.jsx(f.g,{placeholder:"Take notes for this lesson...",value:y,onChange:e=>j(e.target.value),className:"resize-none text-base min-h-0 bg-white/10 border-white/20 text-white placeholder:text-white/50"}),r.jsx(p.z,{variant:"outline",className:"w-full border-white/20 text-white hover:bg-white/10",children:"Save Notes"})]}),(0,r.jsxs)("div",{className:"grid grid-rows-[auto_1fr] overflow-hidden",children:[r.jsx("div",{className:"px-6 py-4 border-b border-white/10",children:r.jsx("h2",{className:"text-lg font-semibold text-white",children:"Knowledge Check"})}),r.jsx("div",{className:"p-4 overflow-auto",children:(0,r.jsxs)("div",{className:"space-y-4",children:[w.map((e,t)=>(0,r.jsxs)("div",{className:"space-y-3",children:[r.jsx("p",{className:"text-base font-medium text-white",children:e.question}),r.jsx("div",{className:"space-y-2",children:e.options.map((s,i)=>r.jsx("div",{className:`p-3 text-base rounded-lg border border-white/20 cursor-pointer transition-colors text-white ${N[t]===i?"bg-white/20 border-white/40":"hover:bg-white/10"} ${P?i===e.correctAnswer?"bg-green-500/20 border-green-500/50":N[t]===i?"bg-red-500/20 border-red-500/50":"":""}`,onClick:()=>!P&&M(t,i),children:s},i))})]},t)),P?(0,r.jsxs)("div",{className:"text-center mt-4",children:[(0,r.jsxs)("p",{className:"text-lg font-medium mb-3 text-white",children:["Score: ",N.filter((e,t)=>e===w[t].correctAnswer).length,"/",w.length]}),r.jsx(p.z,{onClick:()=>C(!1),variant:"outline",className:"w-full border-white/20 text-white hover:bg-white/10",children:"Try Again"})]}):r.jsx(p.z,{onClick:()=>{C(!0)},className:"w-full mt-4 bg-white/20 text-white hover:bg-white/30",children:"Submit Answers"})]})})]})]})]})]})})}},9468:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(6843).createProxy)(String.raw`C:\Users\Admin\Desktop\plus1-mvp-base-main\src\app\dashboard\page.tsx`),{__esModule:i,$$typeof:n}=r,a=r.default}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,977,337,697,685,789,509,698,436,675],()=>s(2300));module.exports=r})();