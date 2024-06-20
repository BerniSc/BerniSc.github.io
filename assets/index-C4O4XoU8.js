var Ue=Object.defineProperty;var Ve=(t,e,n)=>e in t?Ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>Ve(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function P(){}const Ye=t=>t;function He(t,e){for(const n in e)t[n]=e[n];return t}function Se(t){return t()}function _e(){return Object.create(null)}function x(t){t.forEach(Se)}function he(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Je(t){return Object.keys(t).length===0}function Le(t,e,n,l){if(t){const o=Oe(t,e,n,l);return t[0](o)}}function Oe(t,e,n,l){return t[1]&&l?He(n.ctx.slice(),t[1](l(e))):n.ctx}function Pe(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],r=Math.max(e.dirty.length,o.length);for(let i=0;i<r;i+=1)s[i]=e.dirty[i]|o[i];return s}return e.dirty|o}return e.dirty}function je(t,e,n,l,o,s){if(o){const r=Oe(e,n,l,s);t.p(r,o)}}function Te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function Qe(t){return t??""}const Ae=typeof window<"u";let Xe=Ae?()=>window.performance.now():()=>Date.now(),me=Ae?t=>requestAnimationFrame(t):P;const V=new Set;function Ne(t){V.forEach(e=>{e.c(t)||(V.delete(e),e.f())}),V.size!==0&&me(Ne)}function Ze(t){let e;return V.size===0&&me(Ne),{promise:new Promise(n=>{V.add(e={c:t,f:n})}),abort(){V.delete(e)}}}function A(t,e){t.appendChild(e)}function Fe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Be(t){const e=y("style");return e.textContent="/* empty */",et(Fe(t),e),e.sheet}function et(t,e){return A(t.head||t,e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function xe(t){return document.createTextNode(t)}function M(){return xe(" ")}function tt(){return xe("")}function I(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function nt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t){return Array.from(t.childNodes)}function U(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function te(t,e,n){t.classList.toggle(e,!!n)}function Ge(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}const ne=new Map;let le=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function st(t,e){const n={stylesheet:Be(e),rules:{}};return ne.set(t,n),n}function rt(t,e,n,l,o,s,r,i=0){const u=16.666/l;let c=`{
`;for(let p=0;p<=1;p+=u){const a=e+(n-e)*s(p);c+=p*100+`%{${r(a,1-a)}}
`}const m=c+`100% {${r(n,1-n)}}
}`,d=`__svelte_${ot(m)}_${i}`,f=Fe(t),{stylesheet:h,rules:_}=ne.get(f)||st(f,t);_[d]||(_[d]=!0,h.insertRule(`@keyframes ${d} ${m}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${l}ms linear ${o}ms 1 both`,le+=1,d}function ge(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),o=n.length-l.length;o&&(t.style.animation=l.join(", "),le-=o,le||it())}function it(){me(()=>{le||(ne.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),ne.clear())})}let X;function Q(t){X=t}function Ie(){if(!X)throw new Error("Function called outside component initialization");return X}function ct(t){Ie().$$.on_destroy.push(t)}function ut(){const t=Ie();return(e,n,{cancelable:l=!1}={})=>{const o=t.$$.callbacks[e];if(o){const s=Ge(e,n,{cancelable:l});return o.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function ft(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const q=[],oe=[];let Y=[];const fe=[],at=Promise.resolve();let ae=!1;function dt(){ae||(ae=!0,at.then(Re))}function Z(t){Y.push(t)}function ht(t){fe.push(t)}const ce=new Set;let K=0;function Re(){if(K!==0)return;const t=X;do{try{for(;K<q.length;){const e=q[K];K++,Q(e),mt(e.$$)}}catch(e){throw q.length=0,K=0,e}for(Q(null),q.length=0,K=0;oe.length;)oe.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];ce.has(n)||(ce.add(n),n())}Y.length=0}while(q.length);for(;fe.length;)fe.pop()();ae=!1,ce.clear(),Q(t)}function mt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function pt(t){const e=[],n=[];Y.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Y=e}let H;function _t(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function ve(t,e,n){t.dispatchEvent(Ge(`intro${n}`))}const ee=new Set;let G;function We(){G={r:0,c:[],p:G}}function ze(){G.r||x(G.c),G=G.p}function C(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function E(t,e,n,l){if(t&&t.o){if(ee.has(t))return;ee.add(t),G.c.push(()=>{ee.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const gt={duration:0};function vt(t,e,n){const l={direction:"in"};let o=e(t,n,l),s=!1,r,i,u=0;function c(){r&&ge(t,r)}function m(){const{delay:f=0,duration:h=300,easing:_=Ye,tick:g=P,css:p}=o||gt;p&&(r=rt(t,0,1,h,f,_,p,u++)),g(0,1);const a=Xe()+f,w=a+h;i&&i.abort(),s=!0,Z(()=>ve(t,!0,"start")),i=Ze(O=>{if(s){if(O>=w)return g(1,0),ve(t,!0,"end"),c(),s=!1;if(O>=a){const j=_((O-a)/h);g(j,1-j)}}return s})}let d=!1;return{start(){d||(d=!0,ge(t),he(o)?(o=o(l),_t().then(m)):m())},invalidate(){d=!1},end(){s&&(c(),s=!1)}}}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function De(t,e){E(t,1,1,()=>{e.delete(t.key)})}function Ke(t,e,n,l,o,s,r,i,u,c,m,d){let f=t.length,h=s.length,_=f;const g={};for(;_--;)g[t[_].key]=_;const p=[],a=new Map,w=new Map,O=[];for(_=h;_--;){const $=d(o,s,_),S=n($);let L=r.get(S);L?O.push(()=>L.p($,e)):(L=c(S,$),L.c()),a.set(S,p[_]=L),S in g&&w.set(S,Math.abs(_-g[S]))}const j=new Set,pe=new Set;function re($){C($,1),$.m(i,m),r.set($.key,$),m=$.first,h--}for(;f&&h;){const $=p[h-1],S=t[f-1],L=$.key,B=S.key;$===S?(m=$.first,f--,h--):a.has(B)?!r.has(L)||j.has(L)?re($):pe.has(B)?f--:w.get(L)>w.get(B)?(pe.add(L),re($)):(j.add(B),f--):(u(S,r),f--)}for(;f--;){const $=t[f];a.has($.key)||u($,r)}for(;h;)re(p[h-1]);return x(O),p}function wt(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function R(t){t&&t.c()}function N(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),Z(()=>{const s=t.$$.on_mount.map(Se).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),o.forEach(Z)}function F(t,e){const n=t.$$;n.fragment!==null&&(pt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(q.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,l,o,s,r=null,i=[-1]){const u=X;Q(t);const c=t.$$={fragment:null,ctx:[],props:s,update:P,not_equal:o,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:_e(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};r&&r(c.root);let m=!1;if(c.ctx=n?n(t,e.props||{},(d,f,...h)=>{const _=h.length?h[0]:f;return c.ctx&&o(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),m&&bt(t,d)),f}):[],c.update(),m=!0,x(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const d=lt(e.target);c.fragment&&c.fragment.l(d),d.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&C(t.$$.fragment),N(t,e.target,e.anchor),Re()}Q(u)}class D{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){F(this,1),this.$destroy=P}$on(e,n){if(!he(n))return P;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const yt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(yt);function $t(t){const e=t-1;return e*e*e+1}function kt(t,{delay:e=0,duration:n=400,easing:l=$t,axis:o="y"}={}){const s=getComputedStyle(t),r=+s.opacity,i=o==="y"?"height":"width",u=parseFloat(s[i]),c=o==="y"?["top","bottom"]:["left","right"],m=c.map(a=>`${a[0].toUpperCase()}${a.slice(1)}`),d=parseFloat(s[`padding${m[0]}`]),f=parseFloat(s[`padding${m[1]}`]),h=parseFloat(s[`margin${m[0]}`]),_=parseFloat(s[`margin${m[1]}`]),g=parseFloat(s[`border${m[0]}Width`]),p=parseFloat(s[`border${m[1]}Width`]);return{delay:e,duration:n,easing:l,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*r};${i}: ${a*u}px;padding-${c[0]}: ${a*d}px;padding-${c[1]}: ${a*f}px;margin-${c[0]}: ${a*h}px;margin-${c[1]}: ${a*_}px;border-${c[0]}-width: ${a*g}px;border-${c[1]}-width: ${a*p}px;`}}function Ct(t){let e,n;return{c(){e=y("div"),k(e,"class","water-level svelte-akekp6"),U(e,"background-color",t[0])},m(l,o){b(l,e,o)},p(l,[o]){o&1&&U(e,"background-color",l[0])},i(l){l&&(n||Z(()=>{n=vt(e,kt,{duration:1e3}),n.start()}))},o:P,d(l){l&&v(e)}}}function Et(t,e,n){let{color:l}=e;return t.$$set=o=>{"color"in o&&n(0,l=o.color)},[l]}class Mt extends D{constructor(e){super(),z(this,e,Et,Ct,W,{color:0})}}function we(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function be(t,e){let n,l,o;return l=new Mt({props:{color:e[9].color}}),{key:t,first:null,c(){n=tt(),R(l.$$.fragment),this.first=n},m(s,r){b(s,n,r),N(l,s,r),o=!0},p(s,r){e=s;const i={};r&1&&(i.color=e[9].color),l.$set(i)},i(s){o||(C(l.$$.fragment,s),o=!0)},o(s){E(l.$$.fragment,s),o=!1},d(s){s&&v(n),F(l,s)}}}function St(t){let e,n=[],l=new Map,o,s,r,i,u,c,m=se(t[0].levels);const d=f=>f[11];for(let f=0;f<m.length;f+=1){let h=we(t,m,f),_=d(h);l.set(_,n[f]=be(_,h))}return{c(){e=y("button");for(let f=0;f<n.length;f+=1)n[f].c();o=M(),s=y("div"),k(s,"class","empty-space svelte-1po1ue6"),k(e,"class",r="bottle "+t[5]+" "+(t[2]?"pouring":"")+" svelte-1po1ue6"),U(e,"height",t[3]+"px"),U(e,"width",t[4]+"px"),te(e,"selected",t[1])},m(f,h){b(f,e,h);for(let _=0;_<n.length;_+=1)n[_]&&n[_].m(e,null);A(e,o),A(e,s),i=!0,u||(c=I(e,"click",t[6]),u=!0)},p(f,[h]){h&1&&(m=se(f[0].levels),We(),n=Ke(n,h,d,1,f,m,l,e,De,be,o,we),ze()),(!i||h&36&&r!==(r="bottle "+f[5]+" "+(f[2]?"pouring":"")+" svelte-1po1ue6"))&&k(e,"class",r),(!i||h&8)&&U(e,"height",f[3]+"px"),(!i||h&16)&&U(e,"width",f[4]+"px"),(!i||h&38)&&te(e,"selected",f[1])},i(f){if(!i){for(let h=0;h<m.length;h+=1)C(n[h]);i=!0}},o(f){for(let h=0;h<n.length;h+=1)E(n[h]);i=!1},d(f){f&&v(e);for(let h=0;h<n.length;h+=1)n[h].d();u=!1,c()}}}function Lt(t,e,n){const l=ut();let{bottle:o}=e,{selected:s=!1}=e,{pouring:r=!1}=e,{id:i}=e,{height:u=200}=e,{width:c=50}=e;function m(){console.log(`Bottle ${i} was clicked`,o),l("click")}let{class:d=""}=e;return t.$$set=f=>{"bottle"in f&&n(0,o=f.bottle),"selected"in f&&n(1,s=f.selected),"pouring"in f&&n(2,r=f.pouring),"id"in f&&n(7,i=f.id),"height"in f&&n(3,u=f.height),"width"in f&&n(4,c=f.width),"class"in f&&n(5,d=f.class)},[o,s,r,u,c,d,m,i]}class Ot extends D{constructor(e){super(),z(this,e,Lt,St,W,{bottle:0,selected:1,pouring:2,id:7,height:3,width:4,class:5})}}function ye(t,e,n){const l=t.slice();return l[6]=e[n],l[8]=n,l}function $e(t,e){let n,l,o,s;function r(){return e[4](e[8])}return l=new Ot({props:{bottle:e[6],id:e[8],selected:e[8]===e[1],pouring:e[8]===e[2]}}),l.$on("click",r),{key:t,first:null,c(){n=y("div"),R(l.$$.fragment),o=M(),k(n,"class",Qe("bottle")+" svelte-1ec6et"),this.first=n},m(i,u){b(i,n,u),N(l,n,null),A(n,o),s=!0},p(i,u){e=i;const c={};u&1&&(c.bottle=e[6]),u&1&&(c.id=e[8]),u&3&&(c.selected=e[8]===e[1]),u&5&&(c.pouring=e[8]===e[2]),l.$set(c)},i(i){s||(C(l.$$.fragment,i),s=!0)},o(i){E(l.$$.fragment,i),s=!1},d(i){i&&v(n),F(l)}}}function Pt(t){let e,n=[],l=new Map,o,s=se(t[0].bottles);const r=i=>i[8];for(let i=0;i<s.length;i+=1){let u=ye(t,s,i),c=r(u);l.set(c,n[i]=$e(c,u))}return{c(){e=y("div");for(let i=0;i<n.length;i+=1)n[i].c();k(e,"class","game-board")},m(i,u){b(i,e,u);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);o=!0},p(i,[u]){u&15&&(s=se(i[0].bottles),We(),n=Ke(n,u,r,1,i,s,l,e,De,$e,null,ye),ze())},i(i){if(!o){for(let u=0;u<s.length;u+=1)C(n[u]);o=!0}},o(i){for(let u=0;u<n.length;u+=1)E(n[u]);o=!1},d(i){i&&v(e);for(let u=0;u<n.length;u+=1)n[u].d()}}}const jt=5;function Tt(t,e,n){let{gameState:l}=e,o=null,s=null;function r(c){if(o===null)n(1,o=c);else{if(!i(o,c)){n(1,o=null);return}n(2,s=o),setTimeout(()=>{n(2,s=null)},300),n(1,o=null)}}function i(c,m){const d=l.bottles[c],f=l.bottles[m],h=d.levels.length>0?d.levels[d.levels.length-1].color:null,_=f.levels.length>0?f.levels[f.levels.length-1].color:null;if(h&&(_===h||f.levels.length===0)){const g=jt-f.levels.length;let p=0;for(let a=d.levels.length-1;a>=0&&d.levels[a].color===h;a--)p++;if(p=Math.min(p,g),p===0)return!1;if(p>0){const a=d.levels.splice(d.levels.length-p,p);return f.levels=f.levels.concat(a),n(0,l={...l}),!0}}}const u=c=>r(c);return t.$$set=c=>{"gameState"in c&&n(0,l=c.gameState)},t.$$.update=()=>{t.$$.dirty&2&&console.log("I selected Bottle ",o)},[l,o,s,r,u]}class At extends D{constructor(e){super(),z(this,e,Tt,Pt,W,{gameState:0})}}function Nt(t){let e,n,l,o,s,r,i,u;const c=t[6].default,m=Le(c,t,t[5],null);return{c(){e=y("div"),n=y("div"),l=y("button"),o=M(),s=y("div"),m&&m.c(),k(l,"id","close"),k(l,"class","close svelte-1j5vmfm"),k(s,"id","modal-content"),k(s,"class","svelte-1j5vmfm"),k(n,"id","modal"),k(n,"class","svelte-1j5vmfm"),k(e,"id","topModal"),k(e,"class","window-wrap svelte-1j5vmfm"),k(e,"role","dialog"),k(e,"aria-modal","true"),te(e,"visible",t[1])},m(d,f){b(d,e,f),A(e,n),A(n,l),A(n,o),A(n,s),m&&m.m(s,null),t[8](e),r=!0,i||(u=[I(l,"click",t[7]),I(n,"click",nt(Ft)),I(e,"click",t[9])],i=!0)},p(d,[f]){m&&m.p&&(!r||f&32)&&je(m,c,d,d[5],r?Pe(c,d[5],f,null):Te(d[5]),null),(!r||f&2)&&te(e,"visible",d[1])},i(d){r||(C(m,d),r=!0)},o(d){E(m,d),r=!1},d(d){d&&v(e),m&&m.d(d),t[8](null),i=!1,x(u)}}}let J;const de={};function ke(t=""){return de[t]}const Ft=()=>{};function xt(t,e,n){let{$$slots:l={},$$scope:o}=e,s,r=!1,i,u,{closeOnEscape:c=!0}=e,{id:m=""}=e;function d(a){a.key=="Escape"&&c&&J==s&&h()}function f(a){u=a,!r&&(i=J,J=s,window.addEventListener("keydown",d),document.body.style.overflow="hidden",n(1,r=!0),document.body.appendChild(s))}function h(a){r&&(window.removeEventListener("keydown",d),J=i,J==null&&(document.body.style.overflow=""),n(1,r=!1),u&&u(a))}de[m]={show:f,close:h},ct(()=>{delete de[m],window.removeEventListener("keydown",d)});const _=()=>h();function g(a){oe[a?"unshift":"push"](()=>{s=a,n(0,s)})}const p=()=>h();return t.$$set=a=>{"closeOnEscape"in a&&n(3,c=a.closeOnEscape),"id"in a&&n(4,m=a.id),"$$scope"in a&&n(5,o=a.$$scope)},[s,r,h,c,m,o,l,_,g,p]}class Ce extends D{constructor(e){super(),z(this,e,xt,Nt,W,{closeOnEscape:3,id:4})}}function Gt(t){let e,n,l,o,s,r,i;return{c(){e=y("h1"),e.textContent="Play the Watersort Game here",n=M(),l=y("p"),l.textContent="🎉Für nur 7475€🎉",o=M(),s=y("button"),s.textContent="Long live the nested Modals"},m(u,c){b(u,e,c),b(u,n,c),b(u,l,c),b(u,o,c),b(u,s,c),r||(i=I(s,"click",t[3]),r=!0)},p:P,d(u){u&&(v(e),v(n),v(l),v(o),v(s)),r=!1,i()}}}function It(t){let e,n,l;return{c(){e=y("h2"),e.textContent="Second One",n=M(),l=y("p"),l.textContent="Yeah"},m(o,s){b(o,e,s),b(o,n,s),b(o,l,s)},p:P,d(o){o&&(v(e),v(n),v(l))}}}function Rt(t){let e,n,l,o,s,r,i,u,c,m,d,f,h,_;const g=t[0].default,p=Le(g,t,t[4],null);return c=new Ce({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),d=new Ce({props:{id:"two",$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){e=y("div"),p&&p.c(),n=M(),l=y("button"),l.textContent="Restart",o=M(),s=y("button"),s.textContent="Show the Modal",r=M(),i=y("input"),u=M(),R(c.$$.fragment),m=M(),R(d.$$.fragment),k(e,"class","card"),k(i,"type","range")},m(a,w){b(a,e,w),p&&p.m(e,null),b(a,n,w),b(a,l,w),b(a,o,w),b(a,s,w),b(a,r,w),b(a,i,w),b(a,u,w),N(c,a,w),b(a,m,w),N(d,a,w),f=!0,h||(_=[I(l,"click",t[1]),I(s,"click",t[2])],h=!0)},p(a,[w]){p&&p.p&&(!f||w&16)&&je(p,g,a,a[4],f?Pe(g,a[4],w,null):Te(a[4]),null);const O={};w&16&&(O.$$scope={dirty:w,ctx:a}),c.$set(O);const j={};w&16&&(j.$$scope={dirty:w,ctx:a}),d.$set(j)},i(a){f||(C(p,a),C(c.$$.fragment,a),C(d.$$.fragment,a),f=!0)},o(a){E(p,a),E(c.$$.fragment,a),E(d.$$.fragment,a),f=!1},d(a){a&&(v(e),v(n),v(l),v(o),v(s),v(r),v(i),v(u),v(m)),p&&p.d(a),F(c,a),F(d,a),h=!1,x(_)}}}function Wt(t,e,n){let{$$slots:l={},$$scope:o}=e;function s(u){ft.call(this,t,u)}const r=()=>ke().show(),i=()=>ke("two").show();return t.$$set=u=>{"$$scope"in u&&n(4,o=u.$$scope)},[l,s,r,i,o]}class zt extends D{constructor(e){super(),z(this,e,Wt,Rt,W,{})}}function Dt(t){let e,n,l;function o(r){t[2](r)}let s={};return t[0]!==void 0&&(s.gameState=t[0]),e=new At({props:s}),oe.push(()=>wt(e,"gameState",o)),{c(){R(e.$$.fragment)},m(r,i){N(e,r,i),l=!0},p(r,i){const u={};!n&&i&1&&(n=!0,u.gameState=r[0],ht(()=>n=!1)),e.$set(u)},i(r){l||(C(e.$$.fragment,r),l=!0)},o(r){E(e.$$.fragment,r),l=!1},d(r){F(e,r)}}}function Kt(t){let e,n;return e=new zt({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),e.$on("click",t[3]),{c(){R(e.$$.fragment)},m(l,o){N(e,l,o),n=!0},p(l,[o]){const s={};o&65&&(s.$$scope={dirty:o,ctx:l}),e.$set(s)},i(l){n||(C(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}const T=5,Ee=8;function ue(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Me(t){return t.bottles.map(e=>e.levels.map(n=>n.color).join(",")).join("|")}function qe(t,e=0,n=3,l=new Set){const o=Me(t);if(l.has(o)||e>=n)return!1;l.add(o);for(let s=0;s<t.bottles.length;s++)for(let r=0;r<t.bottles.length;r++)if(s!==r&&qt(t.bottles[s],t.bottles[r])){let i=Vt(t);Ut(i.bottles[s],i.bottles[r]);const u=Me(i);if(!l.has(u))if(e+1<n){if(qe(i,e+1,n,l))return!0}else return!0}return!1}function qt(t,e){if(t.levels.length===0)return!1;const n=t.levels[t.levels.length-1].color,l=e.levels.length>0?e.levels[e.levels.length-1].color:null,o=T-e.levels.length;return(n===l||l===null)&&o>0}function Ut(t,e){const n=t.levels[t.levels.length-1].color,l=T-e.levels.length;let o=0;for(let r=t.levels.length-1;r>=0&&t.levels[r].color===n;r--)o++;o=Math.min(o,l);const s=t.levels.splice(t.levels.length-o,o);e.levels.push(...s)}function Vt(t){return{bottles:t.bottles.map(e=>({...e,levels:[...e.levels]}))}}function Yt(t,e,n){const l=["blue","red","orange","green","purple","yellow","pink","brown"];function o(u,c=2){let m=(u-c)*T,d=[];const f=Math.max(Math.floor(m/(l.length*T)),1);console.log(f);for(let g=0;g<f;g++)for(let p of[...ue(l)]){for(let a=0;a<T;a++)d.push({color:p}),m-=1;if(console.log("Filled x Leves here"),m===0)break}for(;m>0;){let g=Math.floor(Math.random()*l.length);for(let p=0;p<T;p++)d.push({color:l[g]});m-=T}ue(d);let h=Array.from({length:u},()=>({levels:[]})),_=0;for(;d.length>0;)h[_].levels=d.splice(0,T),_++,_===u-c&&(_+=c);return ue(h),{bottles:h}}let s=o(Ee,2);function r(u){s=u,n(0,s)}const i=()=>n(0,s=o(Ee,2));return t.$$.update=()=>{if(t.$$.dirty&1){let u;console.log("Is winnable ",u=qe(s)),u||alert("Not Winnable")}},[s,o,r,i]}class Ht extends D{constructor(e){super(),z(this,e,Yt,Kt,W,{})}}function Jt(t){let e,n;return e=new Ht({}),{c(){R(e.$$.fragment)},m(l,o){N(e,l,o),n=!0},p:P,i(l){n||(C(e.$$.fragment,l),n=!0)},o(l){E(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}class Qt extends D{constructor(e){super(),z(this,e,null,Jt,W,{})}}new Qt({target:document.getElementById("app")});
