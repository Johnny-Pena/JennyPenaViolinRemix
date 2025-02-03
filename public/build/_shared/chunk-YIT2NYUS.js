import{A as et,B as tt,C as J,b as Je,c as ye,d as U,e as ze,f as Be,g as Ve,h as ee,i as T,j as Y,k as Xe,l as z,m as Ye,n as Ge,o as te,p as B,q as Re,r as ge,s as ve,u as We,v as Ke,w as Xt,x as qe,y as Ze,z as Qe}from"/build/_shared/chunk-CRC7XLKT.js";import{c as F,d as j}from"/build/_shared/chunk-MFPRU5OA.js";z();var k=F(j());Xt();J();function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}var m=F(j());J();function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}J();async function re(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__remixContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rt(e,t,r){let n=e.map(a=>{var l;let i=t[a.route.id],s=r.routes[a.route.id];return[s.css?s.css.map(u=>({rel:"stylesheet",href:u})):[],(i==null||(l=i.links)===null||l===void 0?void 0:l.call(i))||[]]}).flat(2),o=Wt(e,r);return it(n,o)}async function _e(e,t){var r,n;if(!e.css&&!t.links||!qt())return;let o=[((r=e.css)===null||r===void 0?void 0:r.map(i=>({rel:"stylesheet",href:i})))??[],((n=t.links)===null||n===void 0?void 0:n.call(t))??[]].flat(1);if(o.length===0)return;let a=[];for(let i of o)!oe(i)&&i.rel==="stylesheet"&&a.push({...i,rel:"preload",as:"style"});let l=a.filter(i=>(!i.media||window.matchMedia(i.media).matches)&&!document.querySelector(`link[rel="stylesheet"][href="${i.href}"]`));await Promise.all(l.map(Yt))}async function Yt(e){return new Promise(t=>{let r=document.createElement("link");Object.assign(r,e);function n(){document.head.contains(r)&&document.head.removeChild(r)}r.onload=()=>{n(),t()},r.onerror=()=>{n(),t()},document.head.appendChild(r)})}function oe(e){return e!=null&&typeof e.page=="string"}function Gt(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function nt(e,t,r){let n=await Promise.all(e.map(async o=>{let a=await re(t.routes[o.route.id],r);return a.links?a.links():[]}));return it(n.flat(1).filter(Gt).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function xe(e,t,r,n,o,a,l){let i=st(e),s=(d,f)=>r[f]?d.route.id!==r[f].route.id:!0,u=(d,f)=>{var p;return r[f].pathname!==d.pathname||((p=r[f].route.path)===null||p===void 0?void 0:p.endsWith("*"))&&r[f].params["*"]!==d.params["*"]};return l==="data"&&(a.v3_singleFetch||o.search!==i.search)?t.filter((d,f)=>{if(!n.routes[d.route.id].hasLoader)return!1;if(s(d,f)||u(d,f))return!0;let c=a.v3_singleFetch||o.search!==i.search;if(d.route.shouldRevalidate){var R;let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((R=r[0])===null||R===void 0?void 0:R.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:c});if(typeof v=="boolean")return v}return c}):t.filter((d,f)=>{let p=n.routes[d.route.id];return(l==="assets"||p.hasLoader)&&(s(d,f)||u(d,f))})}function ot(e,t,r){let n=st(e);return Ee(t.filter(o=>r.routes[o.route.id].hasLoader&&!r.routes[o.route.id].hasClientLoader).map(o=>{let{pathname:a,search:l}=n,i=new URLSearchParams(l);return i.set("_data",o.route.id),`${a}?${i}`}))}function at(e,t){return Ee(e.map(r=>{let n=t.routes[r.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Wt(e,t){return Ee(e.map(r=>{let n=t.routes[r.route.id],o=[n.module];return n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Ee(e){return[...new Set(e)]}function Kt(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function it(e,t){let r=new Set,n=new Set(t);return e.reduce((o,a)=>{if(t&&!oe(a)&&a.as==="script"&&a.href&&n.has(a.href))return o;let i=JSON.stringify(Kt(a));return r.has(i)||(r.add(i),o.push({key:i,link:a})),o},[])}function st(e){let t=ye(e);return t.search===void 0&&(t.search=""),t}var ne;function qt(){if(ne!==void 0)return ne;let e=document.createElement("link");return ne=e.relList.supports("preload"),e=null,ne}var Zt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Qt=/[&><\u2028\u2029]/g;function G(e){return e.replace(Qt,t=>Zt[t])}function Se(e){return{__html:e}}var Ce=F(j());z();var er=-1,tr=-2,rr=-3,nr=-4,or=-5,ar=-6,ir=-7,sr="B",lr="D",ct="E",cr="M",ur="N",ut="P",dr="R",fr="S",mr="Y",hr="U",pr="Z",dt=class{promise;resolve;reject;constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};function wr(){let e=new TextDecoder,t="";return new TransformStream({transform(r,n){let o=e.decode(r,{stream:!0}),a=(t+o).split(`
`);t=a.pop()||"";for(let l of a)n.enqueue(l)},flush(r){t&&r.enqueue(t)}})}var Qr=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:void 0;function Le(e){let{hydrated:t,values:r}=this;if(typeof e=="number")return lt.call(this,e);if(!Array.isArray(e)||!e.length)throw new SyntaxError;let n=r.length;for(let o of e)r.push(o);return t.length=r.length,lt.call(this,n)}function lt(e){let{hydrated:t,values:r,deferred:n,plugins:o}=this,a,l=[[e,s=>{a=s}]],i=[];for(;l.length>0;){let[s,u]=l.pop();switch(s){case ir:u(void 0);continue;case or:u(null);continue;case tr:u(NaN);continue;case ar:u(1/0);continue;case rr:u(-1/0);continue;case nr:u(-0);continue}if(t[s]){u(t[s]);continue}let h=r[s];if(!h||typeof h!="object"){t[s]=h,u(h);continue}if(Array.isArray(h))if(typeof h[0]=="string"){let[d,f,p]=h;switch(d){case lr:u(t[s]=new Date(f));continue;case hr:u(t[s]=new URL(f));continue;case sr:u(t[s]=BigInt(f));continue;case dr:u(t[s]=new RegExp(f,p));continue;case mr:u(t[s]=Symbol.for(f));continue;case fr:let c=new Set;t[s]=c;for(let y=1;y<h.length;y++)l.push([h[y],_=>{c.add(_)}]);u(c);continue;case cr:let R=new Map;t[s]=R;for(let y=1;y<h.length;y+=2){let _=[];l.push([h[y+1],w=>{_[1]=w}]),l.push([h[y],w=>{_[0]=w}]),i.push(()=>{R.set(_[0],_[1])})}u(R);continue;case ur:let v=Object.create(null);t[s]=v;for(let y of Object.keys(f).reverse()){let _=[];l.push([f[y],w=>{_[1]=w}]),l.push([Number(y.slice(1)),w=>{_[0]=w}]),i.push(()=>{v[_[0]]=_[1]})}u(v);continue;case ut:if(t[f])u(t[s]=t[f]);else{let y=new dt;n[f]=y,u(t[s]=y.promise)}continue;case ct:let[,g,S]=h,E=S&&be&&be[S]?new be[S](g):new Error(g);t[s]=E,u(E);continue;case pr:u(t[s]=t[f]);continue;default:if(Array.isArray(o)){let y=[],_=h.slice(1);for(let w=0;w<_.length;w++){let x=_[w];l.push([x,b=>{y[w]=b}])}i.push(()=>{for(let w of o){let x=w(h[0],...y);if(x){u(t[s]=x.value);return}}throw new SyntaxError});continue}throw new SyntaxError}}else{let d=[];t[s]=d;for(let f=0;f<h.length;f++){let p=h[f];p!==er&&l.push([p,c=>{d[f]=c}])}u(d);continue}else{let d={};t[s]=d;for(let f of Object.keys(h).reverse()){let p=[];l.push([h[f],c=>{p[1]=c}]),l.push([Number(f.slice(1)),c=>{p[0]=c}]),i.push(()=>{d[p[0]]=p[1]})}u(d);continue}}for(;i.length>0;)i.pop()();return a}async function ft(e,t){let{plugins:r}=t??{},n=new dt,o=e.pipeThrough(wr()).getReader(),a={values:[],hydrated:[],deferred:{},plugins:r},l=await yr.call(a,o),i=n.promise;return l.done?n.resolve():i=Rr.call(a,o).then(n.resolve).catch(s=>{for(let u of Object.values(a.deferred))u.reject(s);n.reject(s)}),{done:i.then(()=>o.closed),value:l.value}}async function yr(e){let t=await e.read();if(!t.value)throw new SyntaxError;let r;try{r=JSON.parse(t.value)}catch{throw new SyntaxError}return{done:t.done,value:Le.call(this,r)}}async function Rr(e){let t=await e.read();for(;!t.done;){if(!t.value)continue;let r=t.value;switch(r[0]){case ut:{let n=r.indexOf(":"),o=Number(r.slice(1,n)),a=this.deferred[o];if(!a)throw new Error(`Deferred ID ${o} not found in stream`);let l=r.slice(n+1),i;try{i=JSON.parse(l)}catch{throw new SyntaxError}let s=Le.call(this,i);a.resolve(s);break}case ct:{let n=r.indexOf(":"),o=Number(r.slice(1,n)),a=this.deferred[o];if(!a)throw new Error(`Deferred ID ${o} not found in stream`);let l=r.slice(n+1),i;try{i=JSON.parse(l)}catch{throw new SyntaxError}let s=Le.call(this,i);a.reject(s);break}default:throw new SyntaxError}t=await e.read()}}var ae=Symbol("SingleFetchRedirect");z();function ht(e){return e.headers.get("X-Remix-Catch")!=null}function gr(e){return e.headers.get("X-Remix-Error")!=null}function vr(e){return W(e)&&e.status>=400&&e.headers.get("X-Remix-Error")==null&&e.headers.get("X-Remix-Catch")==null&&e.headers.get("X-Remix-Response")==null}function pt(e){return e.headers.get("X-Remix-Redirect")!=null}function wt(e){var t;return!!((t=e.headers.get("Content-Type"))!==null&&t!==void 0&&t.match(/text\/remix-deferred/))}function W(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yt(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}async function Oe(e,t,r=0){let n=new URL(e.url);n.searchParams.set("_data",t),r>0&&await new Promise(i=>setTimeout(i,5**r*10));let o=await K(e),a=window.__remixRevalidation,l=await fetch(n.href,o).catch(i=>{if(typeof a=="number"&&a===window.__remixRevalidation&&i?.name==="TypeError"&&r<3)return Oe(e,t,r+1);throw i});if(gr(l)){let i=await l.json(),s=new Error(i.message);return s.stack=i.stack,s}if(vr(l)){let i=await l.text(),s=new Error(i);return s.stack=void 0,s}return l}async function K(e){let t={signal:e.signal};if(e.method!=="GET"){t.method=e.method;let r=e.headers.get("Content-Type");r&&/\bapplication\/json\b/.test(r)?(t.headers={"Content-Type":r},t.body=JSON.stringify(await e.json())):r&&/\btext\/plain\b/.test(r)?(t.headers={"Content-Type":r},t.body=await e.text()):r&&/\bapplication\/x-www-form-urlencoded\b/.test(r)?t.body=new URLSearchParams(await e.text()):t.body=await e.formData()}return t}var _r="__deferred_promise:";async function Rt(e){if(!e)throw new Error("parseDeferredReadableStream requires stream argument");let t,r={};try{let n=xr(e),a=(await n.next()).value;if(!a)throw new Error("no critical data");let l=JSON.parse(a);if(typeof l=="object"&&l!==null)for(let[i,s]of Object.entries(l))typeof s!="string"||!s.startsWith(_r)||(t=t||{},t[i]=new Promise((u,h)=>{r[i]={resolve:d=>{u(d),delete r[i]},reject:d=>{h(d),delete r[i]}}}));return(async()=>{try{for await(let i of n){let[s,...u]=i.split(":"),h=u.join(":"),d=JSON.parse(h);if(s==="data")for(let[f,p]of Object.entries(d))r[f]&&r[f].resolve(p);else if(s==="error")for(let[f,p]of Object.entries(d)){let c=new Error(p.message);c.stack=p.stack,r[f]&&r[f].reject(c)}}for(let[i,s]of Object.entries(r))s.reject(new Be(`Deferred ${i} will never be resolved`))}catch(i){for(let s of Object.values(r))s.reject(i)}})(),new Ve({...l,...t})}catch(n){for(let o of Object.values(r))o.reject(n);throw n}}async function*xr(e){let t=e.getReader(),r=[],n=[],o=!1,a=new TextEncoder,l=new TextDecoder,i=async()=>{if(n.length>0)return n.shift();for(;!o&&n.length===0;){let u=await t.read();if(u.done){o=!0;break}r.push(u.value);try{let d=l.decode(mt(...r)).split(`

`);if(d.length>=2&&(n.push(...d.slice(0,-1)),r=[a.encode(d.slice(-1).join(`

`))]),n.length>0)break}catch{continue}}return n.length>0||r.length>0&&(n=l.decode(mt(...r)).split(`

`).filter(h=>h),r=[]),n.shift()},s=await i();for(;s;)yield s,s=await i()}function mt(...e){let t=new Uint8Array(e.reduce((n,o)=>n+o.length,0)),r=0;for(let n of e)t.set(n,r),r+=n.length;return t}function vt(e,t,r){return async({request:n,matches:o,fetcherKey:a})=>n.method!=="GET"?Er(n,o):a?br(n,o):Sr(e,t,r(),n,o)}async function Er(e,t){let r=t.find(a=>a.shouldLoad);C(r,"No action match found");let n,o=await r.resolve(async a=>await a(async()=>{let i=q(e.url),s=await K(e),{data:u,status:h}=await Ne(i,s);return n=h,ke(u,r.route.id)}));return W(o.result)||Y(o.result)?{[r.route.id]:o}:{[r.route.id]:{type:o.type,result:ze(o.result,n)}}}async function Sr(e,t,r,n,o){let a=new Set,l=!1,i=o.map(()=>gt()),s=Promise.all(i.map(c=>c.promise)),u=gt(),h=xt(q(n.url)),d=await K(n),f={},p=Promise.all(o.map(async(c,R)=>c.resolve(async v=>{if(i[R].resolve(),!c.shouldLoad){var g;if(!r.state.initialized)return;if(c.route.id in r.state.loaderData&&e.routes[c.route.id].hasLoader&&(g=t[c.route.id])!==null&&g!==void 0&&g.shouldRevalidate){l=!0;return}}if(e.routes[c.route.id].hasClientLoader){e.routes[c.route.id].hasLoader&&(l=!0);try{let S=await _t(v,h,d,c.route.id);f[c.route.id]={type:"data",result:S}}catch(S){f[c.route.id]={type:"error",result:S}}return}e.routes[c.route.id].hasLoader&&a.add(c.route.id);try{let S=await v(async()=>{let E=await u.promise;return Et(E,c.route.id)});f[c.route.id]={type:"data",result:S}}catch(S){f[c.route.id]={type:"error",result:S}}})));if(await s,(!r.state.initialized||a.size===0)&&!window.__remixHdrActive)u.resolve({});else try{l&&a.size>0&&h.searchParams.set("_routes",o.filter(R=>a.has(R.route.id)).map(R=>R.route.id).join(","));let c=await Ne(h,d);u.resolve(c.data)}catch(c){u.reject(c)}return await p,f}async function br(e,t){let r=t.find(o=>o.shouldLoad);C(r,"No fetcher match found");let n=await r.resolve(async o=>{let a=xt(q(e.url)),l=await K(e);return _t(o,a,l,r.route.id)});return{[r.route.id]:n}}function _t(e,t,r,n){return e(async()=>{let o=new URL(t);o.searchParams.set("_routes",n);let{data:a}=await Ne(o,r);return Et(a,n)})}function xt(e){let t=e.searchParams.getAll("index");e.searchParams.delete("index");let r=[];for(let n of t)n&&r.push(n);for(let n of r)e.searchParams.append("index",n);return e}function q(e){let t=typeof e=="string"?new URL(e,window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}async function Ne(e,t){let r=await fetch(e,t);if(new Set([100,101,204,205]).has(r.status))return!t.method||t.method==="GET"?{status:r.status,data:{}}:{status:r.status,data:{data:null}};C(r.body,"No response body to decode");try{let o=await $e(r.body,window);return{status:r.status,data:o.value}}catch(o){throw console.error(o),new Error(`Unable to decode turbo-stream response from URL: ${e.toString()}`)}}function $e(e,t){return ft(e,{plugins:[(r,...n)=>{if(r==="SanitizedError"){let[o,a,l]=n,i=Error;o&&o in t&&typeof t[o]=="function"&&(i=t[o]);let s=new i(a);return s.stack=l,{value:s}}if(r==="ErrorResponse"){let[o,a,l]=n;return{value:new T(a,l,o)}}if(r==="SingleFetchRedirect")return{value:{[ae]:n[0]}}},(r,n)=>{if(r==="SingleFetchFallback")return{value:void 0};if(r==="SingleFetchClassInstance")return{value:n}}]})}function Et(e,t){let r=e[ae];return r?ke(r,t):e[t]!==void 0?ke(e[t],t):null}function ke(e,t){if("error"in e)throw e.error;if("redirect"in e){let r={};throw e.revalidate&&(r["X-Remix-Revalidate"]="yes"),e.reload&&(r["X-Remix-Reload-Document"]="yes"),e.replace&&(r["X-Remix-Replace"]="yes"),ee(e.redirect,{status:e.status,headers:r})}else{if("data"in e)return e.data;throw new Error(`No response found for routeId "${t}"`)}}function gt(){let e,t,r=new Promise((n,o)=>{e=async a=>{n(a);try{await r}catch{}},t=async a=>{o(a);try{await r}catch{}}});return{promise:r,resolve:e,reject:t}}z();var Ct=F(j());var I=F(j());z();J();var O=F(j());J();var ie=class extends O.Component{constructor(t){super(t),this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||r.error,location:r.location}}render(){return this.state.error?O.createElement(Me,{error:this.state.error,isOutsideRemixApp:!0}):this.props.children}};function Me({error:e,isOutsideRemixApp:t}){console.error(e);let r=O.createElement("script",{dangerouslySetInnerHTML:{__html:`
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `}});if(Y(e))return O.createElement(se,{title:"Unhandled Thrown Response!"},O.createElement("h1",{style:{fontSize:"24px"}},e.status," ",e.statusText),r);let n;if(e instanceof Error)n=e;else{let o=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);n=new Error(o)}return O.createElement(se,{title:"Application Error!",isOutsideRemixApp:t},O.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),O.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},n.stack),r)}function se({title:e,renderScripts:t,isOutsideRemixApp:r,children:n}){var o;let{routeModules:a}=A();return(o=a.root)!==null&&o!==void 0&&o.Layout&&!r?n:O.createElement("html",{lang:"en"},O.createElement("head",null,O.createElement("meta",{charSet:"utf-8"}),O.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),O.createElement("title",null,e)),O.createElement("body",null,O.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},n,t?O.createElement(Ae,null):null)))}var De=F(j());function St(){return De.createElement(se,{title:"Loading...",renderScripts:!0},De.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `}}))}function Lt(e){let t={};return Object.values(e).forEach(r=>{let n=r.parentId||"";t[n]||(t[n]=[]),t[n].push(r)}),t}function Lr(e,t,r){let n=kt(t),o=t.HydrateFallback&&(!r||e.id==="root")?t.HydrateFallback:e.id==="root"?St:void 0,a=t.ErrorBoundary?t.ErrorBoundary:e.id==="root"?()=>I.createElement(Me,{error:ge()}):void 0;return e.id==="root"&&t.Layout?{...n?{element:I.createElement(t.Layout,null,I.createElement(n,null))}:{Component:n},...a?{errorElement:I.createElement(t.Layout,null,I.createElement(a,null))}:{ErrorBoundary:a},...o?{hydrateFallbackElement:I.createElement(t.Layout,null,I.createElement(o,null))}:{HydrateFallback:o}}:{Component:n,ErrorBoundary:a,HydrateFallback:o}}function Ot(e,t,r,n,o,a){return V(t,r,n,o,a,"",Lt(t),e)}function le(e,t,r){if(r){let l=`You cannot call ${e==="action"?"serverAction()":"serverLoader()"} in SPA Mode (routeId: "${t.id}")`;throw console.error(l),new T(400,"Bad Request",new Error(l),!0)}let o=`You are trying to call ${e==="action"?"serverAction()":"serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;if(e==="loader"&&!t.hasLoader||e==="action"&&!t.hasAction)throw console.error(o),new T(400,"Bad Request",new Error(o),!0)}function Pe(e,t){let r=e==="clientAction"?"a":"an",n=`Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;throw console.error(n),new T(405,"Method Not Allowed",new Error(n),!0)}function V(e,t,r,n,o,a="",l=Lt(e),i){return(l[a]||[]).map(s=>{let u=t[s.id];async function h(E,y,_){if(typeof _=="function")return await _();let w=await Cr(E,s);return y?Nr(w):w}function d(E,y,_){return s.hasLoader?h(E,y,_):Promise.resolve(null)}function f(E,y,_){if(!s.hasAction)throw Pe("action",s.id);return h(E,y,_)}async function p(E){let y=t[s.id],_=y?_e(s,y):Promise.resolve();try{return E()}finally{await _}}let c={id:s.id,index:s.index,path:s.path};if(u){var R,v,g;Object.assign(c,{...c,...Lr(s,u,o),handle:u.handle,shouldRevalidate:bt(n,u,s.id,i)});let E=r==null||(R=r.loaderData)===null||R===void 0?void 0:R[s.id],y=r==null||(v=r.errors)===null||v===void 0?void 0:v[s.id],_=i==null&&(((g=u.clientLoader)===null||g===void 0?void 0:g.hydrate)===!0||!s.hasLoader);c.loader=async({request:w,params:x},b)=>{try{return await p(async()=>(C(u,"No `routeModule` available for critical-route loader"),u.clientLoader?u.clientLoader({request:w,params:x,async serverLoader(){if(le("loader",s,o),_){if(E!==void 0)return E;if(y!==void 0)throw y;return null}return d(w,!0,b)}}):o?null:d(w,!1,b)))}finally{_=!1}},c.loader.hydrate=Fe(s,u,o),c.action=({request:w,params:x},b)=>p(async()=>{if(C(u,"No `routeModule` available for critical-route action"),!u.clientAction){if(o)throw Pe("clientAction",s.id);return f(w,!1,b)}return u.clientAction({request:w,params:x,async serverAction(){return le("action",s,o),f(w,!0,b)}})})}else s.hasClientLoader||(c.loader=({request:E},y)=>p(()=>o?Promise.resolve(null):d(E,!1,y))),s.hasClientAction||(c.action=({request:E},y)=>p(()=>{if(o)throw Pe("clientAction",s.id);return f(E,!1,y)})),c.lazy=async()=>{let E=await kr(s,t),y={...E};if(E.clientLoader){let _=E.clientLoader;y.loader=(w,x)=>_({...w,async serverLoader(){return le("loader",s,o),d(w.request,!0,x)}})}if(E.clientAction){let _=E.clientAction;y.action=(w,x)=>_({...w,async serverAction(){return le("action",s,o),f(w.request,!0,x)}})}return{...y.loader?{loader:y.loader}:{},...y.action?{action:y.action}:{},hasErrorBoundary:y.hasErrorBoundary,shouldRevalidate:bt(n,y,s.id,i),handle:y.handle,Component:y.Component,ErrorBoundary:y.ErrorBoundary}};let S=V(e,t,r,n,o,s.id,l,i);return S.length>0&&(c.children=S),c})}function bt(e,t,r,n){if(n)return Or(r,t.shouldRevalidate,n);if(e.v3_singleFetch&&t.shouldRevalidate){let o=t.shouldRevalidate;return a=>o({...a,defaultShouldRevalidate:!0})}return t.shouldRevalidate}function Or(e,t,r){let n=!1;return o=>n?t?t(o):o.defaultShouldRevalidate:(n=!0,r.has(e))}async function kr(e,t){let r=await re(e,t);return await _e(e,r),{Component:kt(r),ErrorBoundary:r.ErrorBoundary,clientAction:r.clientAction,clientLoader:r.clientLoader,handle:r.handle,links:r.links,meta:r.meta,shouldRevalidate:r.shouldRevalidate}}async function Cr(e,t){let r=await Oe(e,t.id);if(r instanceof Error)throw r;if(pt(r))throw $r(r);if(ht(r))throw r;return wt(r)&&r.body?await Rt(r.body):r}function Nr(e){if(yt(e))return e.data;if(W(e)){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.json():e.text()}return e}function $r(e){let t=parseInt(e.headers.get("X-Remix-Status"),10)||302,r=e.headers.get("X-Remix-Redirect"),n={},o=e.headers.get("X-Remix-Revalidate");o&&(n["X-Remix-Revalidate"]=o);let a=e.headers.get("X-Remix-Reload-Document");a&&(n["X-Remix-Reload-Document"]=a);let l=e.headers.get("X-Remix-Replace");return l&&(n["X-Remix-Replace"]=l),ee(r,{status:t,headers:n})}function kt(e){if(e.default==null)return;if(!(typeof e.default=="object"&&Object.keys(e.default).length===0))return e.default}function Fe(e,t,r){return r&&e.id!=="root"||t.clientLoader!=null&&(t.clientLoader.hydrate===!0||e.hasLoader!==!0)}var ce=new Set,Mr=1e3,ue=new Set,Ar=7680;function de(e,t){return e.v3_lazyRouteDiscovery===!0&&!t}function Nt(e,t){let r=new Set(t.state.matches.map(l=>l.route.id)),n=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(n.pop();n.length>0;)o.push(`/${n.join("/")}`),n.pop();o.forEach(l=>{let i=U(t.routes,l,t.basename);i&&i.forEach(s=>r.add(s.route.id))});let a=[...r].reduce((l,i)=>Object.assign(l,{[i]:e.routes[i]}),{});return{...e,routes:a}}function $t(e,t,r,n,o){if(de(r,n))return async({path:a,patch:l,signal:i})=>{ue.has(a)||await At([a],e,t,r,n,o,l,i)}}function Mt(e,t,r,n,o){Ct.useEffect(()=>{var a;if(!de(n,o)||((a=navigator.connection)===null||a===void 0?void 0:a.saveData)===!0)return;function l(d){let f=d.tagName==="FORM"?d.getAttribute("action"):d.getAttribute("href");if(!f)return;let p=new URL(f,window.location.origin);ue.has(p.pathname)||ce.add(p.pathname)}async function i(){let d=Array.from(ce.keys()).filter(f=>ue.has(f)?(ce.delete(f),!1):!0);if(d.length!==0)try{await At(d,t,r,n,o,e.basename,e.patchRoutes)}catch(f){console.error("Failed to fetch manifest patches",f)}}document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach(d=>l(d)),i();let s=Pr(i,100);function u(d){return d.nodeType===Node.ELEMENT_NODE}let h=new MutationObserver(d=>{let f=new Set;d.forEach(p=>{[p.target,...p.addedNodes].forEach(c=>{u(c)&&((c.tagName==="A"&&c.getAttribute("data-discover")||c.tagName==="FORM"&&c.getAttribute("data-discover"))&&f.add(c),c.tagName!=="A"&&c.querySelectorAll("a[data-discover], form[data-discover]").forEach(R=>f.add(R)))})}),f.forEach(p=>l(p)),s()});return h.observe(document.documentElement,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["data-discover","href","action"]}),()=>h.disconnect()},[n,o,t,r,e])}async function At(e,t,r,n,o,a,l,i){let s=`${a??"/"}/__manifest`.replace(/\/+/g,"/"),u=new URL(s,window.location.origin);if(e.sort().forEach(c=>u.searchParams.append("p",c)),u.searchParams.set("version",t.version),u.toString().length>Ar){ce.clear();return}let h;try{let c=await fetch(u,{signal:i});if(c.ok){if(c.status>=400)throw new Error(await c.text())}else throw new Error(`${c.status} ${c.statusText}`);h=await c.json()}catch(c){if(i!=null&&i.aborted)return;throw c}let d=new Set(Object.keys(t.routes)),f=Object.values(h).reduce((c,R)=>d.has(R.id)?c:Object.assign(c,{[R.id]:R}),{});Object.assign(t.routes,f),e.forEach(c=>Dr(c,ue));let p=new Set;Object.values(f).forEach(c=>{(!c.parentId||!f[c.parentId])&&p.add(c.parentId)}),p.forEach(c=>l(c||null,V(f,r,null,n,o,c)))}function Dr(e,t){if(t.size>=Mr){let r=t.values().next().value;typeof r=="string"&&t.delete(r)}t.add(e)}function Pr(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}function Pt(){let e=m.useContext(Ye);return C(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function me(){let e=m.useContext(Ge);return C(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Q=m.createContext(void 0);Q.displayName="Remix";function A(){let e=m.useContext(Q);return C(e,"You must render this element inside a <Remix> element"),e}function Ft(e,t){let[r,n]=m.useState(!1),[o,a]=m.useState(!1),{onFocus:l,onBlur:i,onMouseEnter:s,onMouseLeave:u,onTouchStart:h}=t,d=m.useRef(null);m.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let c=v=>{v.forEach(g=>{a(g.isIntersecting)})},R=new IntersectionObserver(c,{threshold:.5});return d.current&&R.observe(d.current),()=>{R.disconnect()}}},[e]);let f=()=>{e==="intent"&&n(!0)},p=()=>{e==="intent"&&(n(!1),a(!1))};return m.useEffect(()=>{if(r){let c=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(c)}}},[r]),[o,d,{onFocus:Z(l,f),onBlur:Z(i,p),onMouseEnter:Z(s,f),onMouseLeave:Z(u,p),onTouchStart:Z(h,f)}]}var je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Te(e,t,r){return e==="render"&&!t&&!r?"true":void 0}var jt=m.forwardRef(({to:e,prefetch:t="none",discover:r="render",...n},o)=>{let a=typeof e=="string"&&je.test(e),l=te(e),[i,s,u]=Ft(t,n);return m.createElement(m.Fragment,null,m.createElement(Qe,L({},n,u,{ref:Ut(o,s),to:e,"data-discover":Te(r,a,n.reloadDocument)})),i&&!a?m.createElement(he,{page:l}):null)});jt.displayName="NavLink";var Tt=m.forwardRef(({to:e,prefetch:t="none",discover:r="render",...n},o)=>{let a=typeof e=="string"&&je.test(e),l=te(e),[i,s,u]=Ft(t,n);return m.createElement(m.Fragment,null,m.createElement(Ze,L({},n,u,{ref:Ut(o,s),to:e,"data-discover":Te(r,a,n.reloadDocument)})),i&&!a?m.createElement(he,{page:l}):null)});Tt.displayName="Link";var It=m.forwardRef(({discover:e="render",...t},r)=>{let n=typeof t.action=="string"&&je.test(t.action);return m.createElement(et,L({},t,{ref:r,"data-discover":Te(e,n,t.reloadDocument)}))});It.displayName="Form";function Z(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ie(e,t,r){if(r&&!fe)return[e[0]];if(t){let n=e.findIndex(o=>t[o.route.id]!==void 0);return e.slice(0,n+1)}return e}function Fr(){let{isSpaMode:e,manifest:t,routeModules:r,criticalCss:n}=A(),{errors:o,matches:a}=me(),l=Ie(a,o,e),i=m.useMemo(()=>rt(l,r,t),[l,r,t]);return m.createElement(m.Fragment,null,n?m.createElement("style",{dangerouslySetInnerHTML:{__html:n}}):null,i.map(({key:s,link:u})=>oe(u)?m.createElement(he,L({key:s},u)):m.createElement("link",L({key:s},u))))}function he({page:e,...t}){let{router:r}=Pt(),n=m.useMemo(()=>U(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?m.createElement(Tr,L({page:e,matches:n},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function jr(e){let{manifest:t,routeModules:r}=A(),[n,o]=m.useState([]);return m.useEffect(()=>{let a=!1;return nt(e,t,r).then(l=>{a||o(l)}),()=>{a=!0}},[e,t,r]),n}function Tr({page:e,matches:t,...r}){let n=B(),{future:o,manifest:a,routeModules:l}=A(),{loaderData:i,matches:s}=me(),u=m.useMemo(()=>xe(e,t,s,a,n,o,"data"),[e,t,s,a,n,o]),h=m.useMemo(()=>{if(!o.v3_singleFetch)return ot(e,u,a);if(e===n.pathname+n.search+n.hash)return[];let c=new Set,R=!1;if(t.forEach(g=>{var S;a.routes[g.route.id].hasLoader&&(!u.some(E=>E.route.id===g.route.id)&&g.route.id in i&&(S=l[g.route.id])!==null&&S!==void 0&&S.shouldRevalidate||a.routes[g.route.id].hasClientLoader?R=!0:c.add(g.route.id))}),c.size===0)return[];let v=q(e);return R&&c.size>0&&v.searchParams.set("_routes",t.filter(g=>c.has(g.route.id)).map(g=>g.route.id).join(",")),[v.pathname+v.search]},[o.v3_singleFetch,i,n,a,u,t,e,l]),d=m.useMemo(()=>xe(e,t,s,a,n,o,"assets"),[e,t,s,a,n,o]),f=m.useMemo(()=>at(d,a),[d,a]),p=jr(d);return m.createElement(m.Fragment,null,h.map(c=>m.createElement("link",L({key:c,rel:"prefetch",as:"fetch",href:c},r))),f.map(c=>m.createElement("link",L({key:c,rel:"modulepreload",href:c},r))),p.map(({key:c,link:R})=>m.createElement("link",L({key:c},R))))}function Ir(){let{isSpaMode:e,routeModules:t}=A(),{errors:r,matches:n,loaderData:o}=me(),a=B(),l=Ie(n,r,e),i=null;r&&(i=r[l[l.length-1].route.id]);let s=[],u=null,h=[];for(let d=0;d<l.length;d++){let f=l[d],p=f.route.id,c=o[p],R=f.params,v=t[p],g=[],S={id:p,data:c,meta:[],params:f.params,pathname:f.pathname,handle:f.route.handle,error:i};if(h[d]=S,v!=null&&v.meta?g=typeof v.meta=="function"?v.meta({data:c,params:R,location:a,matches:h,error:i}):Array.isArray(v.meta)?[...v.meta]:v.meta:u&&(g=[...u]),g=g||[],!Array.isArray(g))throw new Error("The route at "+f.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);S.meta=g,h[d]=S,s=[...g],u=s}return m.createElement(m.Fragment,null,s.flat().map(d=>{if(!d)return null;if("tagName"in d){let{tagName:f,...p}=d;return Hr(f)?m.createElement(f,L({key:JSON.stringify(p)},p)):(console.warn(`A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`),null)}if("title"in d)return m.createElement("title",{key:"title"},String(d.title));if("charset"in d&&(d.charSet??=d.charset,delete d.charset),"charSet"in d&&d.charSet!=null)return typeof d.charSet=="string"?m.createElement("meta",{key:"charSet",charSet:d.charSet}):null;if("script:ld+json"in d)try{let f=JSON.stringify(d["script:ld+json"]);return m.createElement("script",{key:`script:ld+json:${f}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:f}})}catch{return null}return m.createElement("meta",L({key:JSON.stringify(d)},d))}))}function Hr(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}function Ht(e){return m.createElement(We,e)}var fe=!1;function Ae(e){let{manifest:t,serverHandoffString:r,abortDelay:n,serializeError:o,isSpaMode:a,future:l,renderMeta:i}=A(),{router:s,static:u,staticContext:h}=Pt(),{matches:d}=me(),f=de(l,a);i&&(i.didRenderScripts=!0);let p=Ie(d,null,a);m.useEffect(()=>{fe=!0},[]);let c=(w,x)=>{let b;return o&&x instanceof Error?b=o(x):b=x,`${JSON.stringify(w)}:__remixContext.p(!1, ${G(JSON.stringify(b))})`},R=(w,x,b)=>{let N;try{N=JSON.stringify(b)}catch(X){return c(x,X)}return`${JSON.stringify(x)}:__remixContext.p(${G(N)})`},v=(w,x,b)=>{let N;return o&&b instanceof Error?N=o(b):N=b,`__remixContext.r(${JSON.stringify(w)}, ${JSON.stringify(x)}, !1, ${G(JSON.stringify(N))})`},g=(w,x,b)=>{let N;try{N=JSON.stringify(b)}catch(X){return v(w,x,X)}return`__remixContext.r(${JSON.stringify(w)}, ${JSON.stringify(x)}, ${G(N)})`},S=[],E=m.useMemo(()=>{var w;let x=l.v3_singleFetch?"window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());":"",b=h?`window.__remixContext = ${r};${x}`:" ",N=l.v3_singleFetch?void 0:h?.activeDeferreds;b+=N?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof n=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(N).map(([M,D])=>{let Bt=new Set(D.pendingKeys),Vt=D.deferredKeys.map(P=>{if(Bt.has(P))return S.push(m.createElement(Dt,{key:`${M} | ${P}`,deferredData:D,routeId:M,dataKey:P,scriptProps:e,serializeData:g,serializeError:v})),`${JSON.stringify(P)}:__remixContext.n(${JSON.stringify(M)}, ${JSON.stringify(P)})`;{let we=D.data[P];return typeof we._error<"u"?c(P,we._error):R(M,P,we._data)}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(M)}], {${Vt}});`}).join(`
`)+(S.length>0?`__remixContext.a=${S.length};`:""):"";let X=u?`${(w=t.hmr)!==null&&w!==void 0&&w.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${f?"":`import ${JSON.stringify(t.url)}`};
${p.map((M,D)=>`import * as route${D} from ${JSON.stringify(t.routes[M.route.id].module)};`).join(`
`)}
${f?`window.__remixManifest = ${JSON.stringify(Nt(t,s),null,2)};`:""}
window.__remixRouteModules = {${p.map((M,D)=>`${JSON.stringify(M.route.id)}:route${D}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`:" ";return m.createElement(m.Fragment,null,m.createElement("script",L({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:Se(b),type:void 0})),m.createElement("script",L({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:Se(X),type:"module",async:!0})))},[]);if(!u&&typeof __remixContext=="object"&&__remixContext.a)for(let w=0;w<__remixContext.a;w++)S.push(m.createElement(Dt,{key:w,scriptProps:e,serializeData:g,serializeError:v}));let y=p.map(w=>{let x=t.routes[w.route.id];return(x.imports||[]).concat([x.module])}).flat(1),_=fe?[]:t.entry.imports.concat(y);return fe?null:m.createElement(m.Fragment,null,f?null:m.createElement("link",{rel:"modulepreload",href:t.url,crossOrigin:e.crossOrigin}),m.createElement("link",{rel:"modulepreload",href:t.entry.module,crossOrigin:e.crossOrigin}),Jr(_).map(w=>m.createElement("link",{key:w,rel:"modulepreload",href:w,crossOrigin:e.crossOrigin})),E,S)}function Dt({dataKey:e,deferredData:t,routeId:r,scriptProps:n,serializeData:o,serializeError:a}){return typeof document>"u"&&t&&e&&r&&C(t.pendingKeys.includes(e),`Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`),m.createElement(m.Suspense,{fallback:typeof document>"u"&&t&&e&&r?null:m.createElement("script",L({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&t&&e&&r?m.createElement(Ht,{resolve:t.data[e],errorElement:m.createElement(Ur,{dataKey:e,routeId:r,scriptProps:n,serializeError:a}),children:l=>m.createElement("script",L({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o(r,e,l)}}))}):m.createElement("script",L({},n,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function Ur({dataKey:e,routeId:t,scriptProps:r,serializeError:n}){let o=ve();return m.createElement("script",L({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n(t,e,o)}}))}function Jr(e){return[...new Set(e)]}function Ut(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}z();function Jt(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,o]of t)if(o&&o.__type==="RouteErrorResponse")r[n]=new T(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let a=window[o.__subType];if(typeof a=="function")try{let l=new a(o.message);l.stack=o.stack,r[n]=l}catch{}}if(r[n]==null){let a=new Error(o.message);a.stack=o.stack,r[n]=a}}else r[n]=o;return r}var H,$,He=!1;var Ue,ro=new Promise(e=>{Ue=e}).catch(()=>{});function zr(e){if(!$){if(window.__remixContext.future.v3_singleFetch){if(!H){let i=window.__remixContext.stream;C(i,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,H=$e(i,window).then(s=>{window.__remixContext.state=s.value,H.value=!0}).catch(s=>{H.error=s})}if(H.error)throw H.error;if(!H.value)throw H}let a=V(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),l;if(!window.__remixContext.isSpaMode){l={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let i=U(a,window.location,window.__remixContext.basename);if(i)for(let s of i){let u=s.route.id,h=window.__remixRouteModules[u],d=window.__remixManifest.routes[u];h&&Fe(d,h,window.__remixContext.isSpaMode)&&(h.HydrateFallback||!d.hasLoader)?l.loaderData[u]=void 0:d&&!d.hasLoader&&(l.loaderData[u]=null)}l&&l.errors&&(l.errors=Jt(l.errors))}$=Xe({routes:a,history:Je(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:l,mapRouteProperties:Ke,dataStrategy:window.__remixContext.future.v3_singleFetch?vt(window.__remixManifest,window.__remixRouteModules,()=>$):void 0,patchRoutesOnNavigation:$t(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),$.state.initialized&&(He=!0,$.initialize()),$.createRoutesForHMR=Ot,window.__remixRouter=$,Ue&&Ue($)}let[t,r]=k.useState(void 0),[n,o]=k.useState($.state.location);return k.useLayoutEffect(()=>{He||(He=!0,$.initialize())},[]),k.useLayoutEffect(()=>$.subscribe(a=>{a.location!==n&&o(a.location)}),[n]),Mt($,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),k.createElement(k.Fragment,null,k.createElement(Q.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:t,isSpaMode:window.__remixContext.isSpaMode}},k.createElement(ie,{location:n},k.createElement(qe,{router:$,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?k.createElement(k.Fragment,null):null)}J();var pe=F(j());J();var zt="positions";function Br({getKey:e,...t}){let{isSpaMode:r}=A(),n=B(),o=Re();tt({getKey:e,storageKey:zt});let a=pe.useMemo(()=>{if(!e)return null;let i=e(n,o);return i!==n.key?i:null},[]);if(r)return null;let l=((i,s)=>{if(!window.history.state||!window.history.state.key){let u=Math.random().toString(32).slice(2);window.history.replaceState({key:u},"")}try{let h=JSON.parse(sessionStorage.getItem(i)||"{}")[s||window.history.state.key];typeof h=="number"&&window.scrollTo(0,h)}catch(u){console.error(u),sessionStorage.removeItem(i)}}).toString();return pe.createElement("script",L({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${JSON.stringify(zt)}, ${JSON.stringify(a)})`}}))}export{Tt as a,Fr as b,Ir as c,Ae as d,zr as e,Br as f};
/*! Bundled license information:

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/single-fetch.js:
  (**
   * @remix-run/server-runtime v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/single-fetch.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/fallback.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/fog-of-war.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v2.15.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
