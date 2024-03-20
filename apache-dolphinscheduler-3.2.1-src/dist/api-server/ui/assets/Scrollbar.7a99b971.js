import{d as Te,am as Fe,a4 as Ne,g as le,f as $,i as de,h as ie,l as Be,m as Ve,U as Ae,a as R,n as x,R as Ge,e as qe,b as Je,s as Ke,t as E,V as Qe,an as Ze,T as Se,F as en}from"./index.851b5188.js";import{f as nn}from"./fade-in.cssr.55dfcced.js";import{V as Re}from"./VResizeObserver.6721b9ea.js";function tn(r){return r.composedPath()[0]||null}const xe=Te({render(){var r,a;return(a=(r=this.$slots).default)===null||a===void 0?void 0:a.call(r)}});function ae(r){return r.composedPath()[0]}const on={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function rn(r,a,c){if(r==="mousemoveoutside"){const b=i=>{a.contains(ae(i))||c(i)};return{mousemove:b,touchstart:b}}else if(r==="clickoutside"){let b=!1;const i=p=>{b=!a.contains(ae(p))},f=p=>{!b||a.contains(ae(p))||c(p)};return{mousedown:i,mouseup:f,touchstart:i,touchend:f}}return console.error(`[evtd/create-trap-handler]: name \`${r}\` is invalid. This could be a bug of evtd.`),{}}function He(r,a,c){const b=on[r];let i=b.get(a);i===void 0&&b.set(a,i=new WeakMap);let f=i.get(c);return f===void 0&&i.set(c,f=rn(r,a,c)),f}function ln(r,a,c,b){if(r==="mousemoveoutside"||r==="clickoutside"){const i=He(r,a,c);return Object.keys(i).forEach(f=>{oe(f,document,i[f],b)}),!0}return!1}function an(r,a,c,b){if(r==="mousemoveoutside"||r==="clickoutside"){const i=He(r,a,c);return Object.keys(i).forEach(f=>{q(f,document,i[f],b)}),!0}return!1}function sn(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const r=new WeakMap,a=new WeakMap;function c(){r.set(this,!0)}function b(){r.set(this,!0),a.set(this,!0)}function i(n,t,s){const u=n[t];return n[t]=function(){return s.apply(n,arguments),u.apply(n,arguments)},n}function f(n,t){n[t]=Event.prototype[t]}const p=new WeakMap,O=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function C(){var n;return(n=p.get(this))!==null&&n!==void 0?n:null}function M(n,t){O!==void 0&&Object.defineProperty(n,"currentTarget",{configurable:!0,enumerable:!0,get:t!=null?t:O.get})}const m={bubble:{},capture:{}},g={};function I(){const n=function(t){const{type:s,eventPhase:u,bubbles:v}=t,y=ae(t);if(u===2)return;const P=u===1?"capture":"bubble";let B=y;const S=[];for(;B===null&&(B=window),S.push(B),B!==window;)B=B.parentNode||null;const z=m.capture[s],k=m.bubble[s];if(i(t,"stopPropagation",c),i(t,"stopImmediatePropagation",b),M(t,C),P==="capture"){if(z===void 0)return;for(let W=S.length-1;W>=0&&!r.has(t);--W){const U=S[W],V=z.get(U);if(V!==void 0){p.set(t,U);for(const X of V){if(a.has(t))break;X(t)}}if(W===0&&!v&&k!==void 0){const X=k.get(U);if(X!==void 0)for(const re of X){if(a.has(t))break;re(t)}}}}else if(P==="bubble"){if(k===void 0)return;for(let W=0;W<S.length&&!r.has(t);++W){const U=S[W],V=k.get(U);if(V!==void 0){p.set(t,U);for(const X of V){if(a.has(t))break;X(t)}}}}f(t,"stopPropagation"),f(t,"stopImmediatePropagation"),M(t)};return n.displayName="evtdUnifiedHandler",n}function j(){const n=function(t){const{type:s,eventPhase:u}=t;if(u!==2)return;const v=g[s];v!==void 0&&v.forEach(y=>y(t))};return n.displayName="evtdUnifiedWindowEventHandler",n}const _=I(),F=j();function L(n,t){const s=m[n];return s[t]===void 0&&(s[t]=new Map,window.addEventListener(t,_,n==="capture")),s[t]}function N(n){return g[n]===void 0&&(g[n]=new Set,window.addEventListener(n,F)),g[n]}function J(n,t){let s=n.get(t);return s===void 0&&n.set(t,s=new Set),s}function Z(n,t,s,u){const v=m[t][s];if(v!==void 0){const y=v.get(n);if(y!==void 0&&y.has(u))return!0}return!1}function ee(n,t){const s=g[n];return!!(s!==void 0&&s.has(t))}function ne(n,t,s,u){let v;if(typeof u=="object"&&u.once===!0?v=z=>{T(n,t,v,u),s(z)}:v=s,ln(n,t,v,u))return;const P=u===!0||typeof u=="object"&&u.capture===!0?"capture":"bubble",B=L(P,n),S=J(B,t);if(S.has(v)||S.add(v),t===window){const z=N(n);z.has(v)||z.add(v)}}function T(n,t,s,u){if(an(n,t,s,u))return;const y=u===!0||typeof u=="object"&&u.capture===!0,P=y?"capture":"bubble",B=L(P,n),S=J(B,t);if(t===window&&!Z(t,y?"bubble":"capture",n,s)&&ee(n,s)){const k=g[n];k.delete(s),k.size===0&&(window.removeEventListener(n,F),g[n]=void 0)}S.has(s)&&S.delete(s),S.size===0&&B.delete(t),B.size===0&&(window.removeEventListener(n,_,P==="capture"),m[P][n]=void 0)}return{on:ne,off:T}}const{on:oe,off:q}=sn(),cn=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function un(){return cn}function dn(r){const a={isDeactivated:!1};let c=!1;return Fe(()=>{if(a.isDeactivated=!1,!c){c=!0;return}r()}),Ne(()=>{a.isDeactivated=!0,c||(c=!0)}),a}const fn=le("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[$(">",[le("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[$("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),$(">",[le("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),$(">, +",[le("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[de("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[$(">",[ie("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),de("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[$(">",[ie("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),de("disabled",[$(">",[ie("scrollbar",{pointerEvents:"none"})])]),$(">",[ie("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[nn(),$("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),hn=Object.assign(Object.assign({},Be.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),ye=Te({name:"Scrollbar",props:hn,inheritAttrs:!1,setup(r){const{mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedRtlRef:b}=Ve(r),i=Ae("Scrollbar",b,a),f=R(null),p=R(null),O=R(null),C=R(null),M=R(null),m=R(null),g=R(null),I=R(null),j=R(null),_=R(null),F=R(null),L=R(0),N=R(0),J=R(!1),Z=R(!1);let ee=!1,ne=!1,T,n,t=0,s=0,u=0,v=0;const y=un(),P=x(()=>{const{value:e}=I,{value:o}=m,{value:l}=_;return e===null||o===null||l===null?0:Math.min(e,l*e/o+r.size*1.5)}),B=x(()=>`${P.value}px`),S=x(()=>{const{value:e}=j,{value:o}=g,{value:l}=F;return e===null||o===null||l===null?0:l*e/o+r.size*1.5}),z=x(()=>`${S.value}px`),k=x(()=>{const{value:e}=I,{value:o}=L,{value:l}=m,{value:d}=_;if(e===null||l===null||d===null)return 0;{const w=l-e;return w?o/w*(d-P.value):0}}),W=x(()=>`${k.value}px`),U=x(()=>{const{value:e}=j,{value:o}=N,{value:l}=g,{value:d}=F;if(e===null||l===null||d===null)return 0;{const w=l-e;return w?o/w*(d-S.value):0}}),V=x(()=>`${U.value}px`),X=x(()=>{const{value:e}=I,{value:o}=m;return e!==null&&o!==null&&o>e}),re=x(()=>{const{value:e}=j,{value:o}=g;return e!==null&&o!==null&&o>e}),Pe=x(()=>{const{trigger:e}=r;return e==="none"||J.value}),Ee=x(()=>{const{trigger:e}=r;return e==="none"||Z.value}),A=x(()=>{const{container:e}=r;return e?e():p.value}),Me=x(()=>{const{content:e}=r;return e?e():O.value}),fe=dn(()=>{r.container||he({top:L.value,left:N.value})}),ze=()=>{fe.isDeactivated||G()},We=e=>{if(fe.isDeactivated)return;const{onResize:o}=r;o&&o(e),G()},he=(e,o)=>{if(!r.scrollable)return;if(typeof e=="number"){K(o!=null?o:0,e,0,!1,"auto");return}const{left:l,top:d,index:w,elSize:H,position:D,behavior:h,el:Y,debounce:te=!0}=e;(l!==void 0||d!==void 0)&&K(l!=null?l:0,d!=null?d:0,0,!1,h),Y!==void 0?K(0,Y.offsetTop,Y.offsetHeight,te,h):w!==void 0&&H!==void 0?K(0,w*H,H,te,h):D==="bottom"?K(0,Number.MAX_SAFE_INTEGER,0,!1,h):D==="top"&&K(0,0,0,!1,h)},Ce=(e,o)=>{if(!r.scrollable)return;const{value:l}=A;!l||(typeof e=="object"?l.scrollBy(e):l.scrollBy(e,o||0))};function K(e,o,l,d,w){const{value:H}=A;if(!!H){if(d){const{scrollTop:D,offsetHeight:h}=H;if(o>D){o+l<=D+h||H.scrollTo({left:e,top:o+l-h,behavior:w});return}}H.scrollTo({left:e,top:o,behavior:w})}}function Le(){Ye(),$e(),G()}function ke(){se()}function se(){Xe(),De()}function Xe(){n!==void 0&&window.clearTimeout(n),n=window.setTimeout(()=>{Z.value=!1},r.duration)}function De(){T!==void 0&&window.clearTimeout(T),T=window.setTimeout(()=>{J.value=!1},r.duration)}function Ye(){T!==void 0&&window.clearTimeout(T),J.value=!0}function $e(){n!==void 0&&window.clearTimeout(n),Z.value=!0}function Oe(e){const{onScroll:o}=r;o&&o(e),ve()}function ve(){const{value:e}=A;e&&(L.value=e.scrollTop,N.value=e.scrollLeft*(i!=null&&i.value?-1:1))}function Ie(){const{value:e}=Me;e&&(m.value=e.offsetHeight,g.value=e.offsetWidth);const{value:o}=A;o&&(I.value=o.offsetHeight,j.value=o.offsetWidth);const{value:l}=M,{value:d}=C;l&&(F.value=l.offsetWidth),d&&(_.value=d.offsetHeight)}function be(){const{value:e}=A;e&&(L.value=e.scrollTop,N.value=e.scrollLeft*(i!=null&&i.value?-1:1),I.value=e.offsetHeight,j.value=e.offsetWidth,m.value=e.scrollHeight,g.value=e.scrollWidth);const{value:o}=M,{value:l}=C;o&&(F.value=o.offsetWidth),l&&(_.value=l.offsetHeight)}function G(){!r.scrollable||(r.useUnifiedContainer?be():(Ie(),ve()))}function we(e){var o;return!(!((o=f.value)===null||o===void 0)&&o.contains(tn(e)))}function je(e){e.preventDefault(),e.stopPropagation(),ne=!0,oe("mousemove",window,ge,!0),oe("mouseup",window,pe,!0),s=N.value,u=i!=null&&i.value?window.innerWidth-e.clientX:e.clientX}function ge(e){if(!ne)return;T!==void 0&&window.clearTimeout(T),n!==void 0&&window.clearTimeout(n);const{value:o}=j,{value:l}=g,{value:d}=S;if(o===null||l===null)return;const H=(i!=null&&i.value?window.innerWidth-e.clientX-u:e.clientX-u)*(l-o)/(o-d),D=l-o;let h=s+H;h=Math.min(D,h),h=Math.max(h,0);const{value:Y}=A;if(Y){Y.scrollLeft=h*(i!=null&&i.value?-1:1);const{internalOnUpdateScrollLeft:te}=r;te&&te(h)}}function pe(e){e.preventDefault(),e.stopPropagation(),q("mousemove",window,ge,!0),q("mouseup",window,pe,!0),ne=!1,G(),we(e)&&se()}function Ue(e){e.preventDefault(),e.stopPropagation(),ee=!0,oe("mousemove",window,ce,!0),oe("mouseup",window,ue,!0),t=L.value,v=e.clientY}function ce(e){if(!ee)return;T!==void 0&&window.clearTimeout(T),n!==void 0&&window.clearTimeout(n);const{value:o}=I,{value:l}=m,{value:d}=P;if(o===null||l===null)return;const H=(e.clientY-v)*(l-o)/(o-d),D=l-o;let h=t+H;h=Math.min(D,h),h=Math.max(h,0);const{value:Y}=A;Y&&(Y.scrollTop=h)}function ue(e){e.preventDefault(),e.stopPropagation(),q("mousemove",window,ce,!0),q("mouseup",window,ue,!0),ee=!1,G(),we(e)&&se()}Ge(()=>{const{value:e}=re,{value:o}=X,{value:l}=a,{value:d}=M,{value:w}=C;d&&(e?d.classList.remove(`${l}-scrollbar-rail--disabled`):d.classList.add(`${l}-scrollbar-rail--disabled`)),w&&(o?w.classList.remove(`${l}-scrollbar-rail--disabled`):w.classList.add(`${l}-scrollbar-rail--disabled`))}),qe(()=>{r.container||G()}),Je(()=>{T!==void 0&&window.clearTimeout(T),n!==void 0&&window.clearTimeout(n),q("mousemove",window,ce,!0),q("mouseup",window,ue,!0)});const _e=Be("Scrollbar","-scrollbar",fn,Ze,r,a),me=x(()=>{const{common:{cubicBezierEaseInOut:e,scrollbarBorderRadius:o,scrollbarHeight:l,scrollbarWidth:d},self:{color:w,colorHover:H}}=_e.value;return{"--n-scrollbar-bezier":e,"--n-scrollbar-color":w,"--n-scrollbar-color-hover":H,"--n-scrollbar-border-radius":o,"--n-scrollbar-width":d,"--n-scrollbar-height":l}}),Q=c?Ke("scrollbar",void 0,me,r):void 0;return Object.assign(Object.assign({},{scrollTo:he,scrollBy:Ce,sync:G,syncUnifiedContainer:be,handleMouseEnterWrapper:Le,handleMouseLeaveWrapper:ke}),{mergedClsPrefix:a,rtlEnabled:i,containerScrollTop:L,wrapperRef:f,containerRef:p,contentRef:O,yRailRef:C,xRailRef:M,needYBar:X,needXBar:re,yBarSizePx:B,xBarSizePx:z,yBarTopPx:W,xBarLeftPx:V,isShowXBar:Pe,isShowYBar:Ee,isIos:y,handleScroll:Oe,handleContentResize:ze,handleContainerResize:We,handleYScrollMouseDown:Ue,handleXScrollMouseDown:je,cssVars:c?void 0:me,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender})},render(){var r;const{$slots:a,mergedClsPrefix:c,triggerDisplayManually:b,rtlEnabled:i,internalHoistYRail:f}=this;if(!this.scrollable)return(r=a.default)===null||r===void 0?void 0:r.call(a);const p=this.trigger==="none",O=()=>E("div",{ref:"yRailRef",class:[`${c}-scrollbar-rail`,`${c}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},E(p?xe:Se,p?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?E("div",{class:`${c}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),C=()=>{var m,g;return(m=this.onRender)===null||m===void 0||m.call(this),E("div",en(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${c}-scrollbar`,this.themeClass,i&&`${c}-scrollbar--rtl`],style:this.cssVars,onMouseenter:b?void 0:this.handleMouseEnterWrapper,onMouseleave:b?void 0:this.handleMouseLeaveWrapper}),[this.container?(g=a.default)===null||g===void 0?void 0:g.call(a):E("div",{role:"none",ref:"containerRef",class:[`${c}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},E(Re,{onResize:this.handleContentResize},{default:()=>E("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${c}-scrollbar-content`,this.contentClass]},a)})),f?null:O(),this.xScrollable&&E("div",{ref:"xRailRef",class:[`${c}-scrollbar-rail`,`${c}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},E(p?xe:Se,p?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?E("div",{class:`${c}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},M=this.container?C():E(Re,{onResize:this.handleContainerResize},{default:C});return f?E(Qe,null,M,O()):M}}),pn=ye,mn=ye;export{pn as N,xe as W,mn as X,q as a,tn as g,oe as o,dn as u};
