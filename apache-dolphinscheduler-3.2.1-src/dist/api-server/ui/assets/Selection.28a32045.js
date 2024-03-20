import{d as Q,ao as We,e as de,am as Ht,a4 as Wt,n as D,a as M,_ as Kt,t as g,F as Dt,J as Ke,M as jt,b as Vt,g as F,h as R,f as Z,m as De,l as oe,A as Gt,af as Ut,s as Pe,N as qt,ap as Yt,q as j,aq as Zt,ar as Xt,ae as $,i as G,Q as te,B as Jt,z as se,U as Qt,x as eo,y as to,as as oo,w as ye,R as no,V as ro,v as re}from"./index.851b5188.js";import{V as $e,r as _e}from"./VResizeObserver.6721b9ea.js";import{c as je,a as ae,N as lo}from"./Popover.30015336.js";import{d as Be,p as le}from"./index.7a579f81.js";import{b as io}from"./next-frame-once.e5ee25e8.js";import{u as so}from"./use-locale.f8ac8f2c.js";import{W as ao}from"./Scrollbar.7a99b971.js";import{r as Fe,c as co}from"./resolve-slot.9e6a0162.js";import{c as Oe}from"./use-form-item.bb4d7ada.js";import{N as uo}from"./Suffix.21a8a87f.js";function cn(e,o){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[o]!==void 0)return!0;t=t.parentElement}return!1}function ho(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Me(e){return e&-e}class fo{constructor(o,t){this.l=o,this.min=t;const n=new Array(o+1);for(let r=0;r<o+1;++r)n[r]=0;this.ft=n}add(o,t){if(t===0)return;const{l:n,ft:r}=this;for(o+=1;o<=n;)r[o]+=t,o+=Me(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:t,min:n,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=o*n;for(;o>0;)s+=t[o],o-=Me(o);return s}getBound(o){let t=0,n=this.l;for(;n>t;){const r=Math.floor((t+n)/2),s=this.sum(r);if(s>o){n=r;continue}else if(s<o){if(t===r)return this.sum(t+1)<=o?t+1:r;t=r}else return r}return t}}let ie;function vo(){return ie===void 0&&("matchMedia"in window?ie=window.matchMedia("(pointer:coarse)").matches:ie=!1),ie}let we;function Ae(){return we===void 0&&(we="chrome"in window?window.devicePixelRatio:1),we}const bo=ae(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[ae("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[ae("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),dn=Q({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=We();bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:je,ssr:o}),de(()=>{const{defaultScrollIndex:f,defaultScrollKey:v}=e;f!=null?C({index:f}):v!=null&&C({key:v})});let t=!1,n=!1;Ht(()=>{if(t=!1,!n){n=!0;return}C({top:d.value,left:h})}),Wt(()=>{t=!0,n||(n=!0)});const r=D(()=>{const f=new Map,{keyField:v}=e;return e.items.forEach((P,A)=>{f.set(P[v],A)}),f}),s=M(null),i=M(void 0),l=new Map,u=D(()=>{const{items:f,itemSize:v,keyField:P}=e,A=new fo(f.length,v);return f.forEach((N,H)=>{const B=N[P],W=l.get(B);W!==void 0&&A.add(H,W)}),A}),c=M(0);let h=0;const d=M(0),w=Kt(()=>Math.max(u.value.getBound(d.value-Be(e.paddingTop))-1,0)),y=D(()=>{const{value:f}=i;if(f===void 0)return[];const{items:v,itemSize:P}=e,A=w.value,N=Math.min(A+Math.ceil(f/P+1),v.length-1),H=[];for(let B=A;B<=N;++B)H.push(v[B]);return H}),C=(f,v)=>{if(typeof f=="number"){I(f,v,"auto");return}const{left:P,top:A,index:N,key:H,position:B,behavior:W,debounce:V=!0}=f;if(P!==void 0||A!==void 0)I(P,A,W);else if(N!==void 0)x(N,W,V);else if(H!==void 0){const q=r.value.get(H);q!==void 0&&x(q,W,V)}else B==="bottom"?I(0,Number.MAX_SAFE_INTEGER,W):B==="top"&&I(0,0,W)};let k,S=null;function x(f,v,P){const{value:A}=u,N=A.sum(f)+Be(e.paddingTop);if(!P)s.value.scrollTo({left:0,top:N,behavior:v});else{k=f,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{k=void 0,S=null},16);const{scrollTop:H,offsetHeight:B}=s.value;if(N>H){const W=A.get(f);N+W<=H+B||s.value.scrollTo({left:0,top:N+W-B,behavior:v})}else s.value.scrollTo({left:0,top:N,behavior:v})}}function I(f,v,P){s.value.scrollTo({left:f,top:v,behavior:P})}function E(f,v){var P,A,N;if(t||e.ignoreItemResize||T(v.target))return;const{value:H}=u,B=r.value.get(f),W=H.get(B),V=(N=(A=(P=v.borderBoxSize)===null||P===void 0?void 0:P[0])===null||A===void 0?void 0:A.blockSize)!==null&&N!==void 0?N:v.contentRect.height;if(V===W)return;V-e.itemSize===0?l.delete(f):l.set(f,V-e.itemSize);const Y=V-W;if(Y===0)return;H.add(B,Y);const U=s.value;if(U!=null){if(k===void 0){const X=H.sum(B);U.scrollTop>X&&U.scrollBy(0,Y)}else if(B<k)U.scrollBy(0,Y);else if(B===k){const X=H.sum(B);V+X>U.scrollTop+U.offsetHeight&&U.scrollBy(0,Y)}L()}c.value++}const b=!vo();let m=!1;function z(f){var v;(v=e.onScroll)===null||v===void 0||v.call(e,f),(!b||!m)&&L()}function O(f){var v;if((v=e.onWheel)===null||v===void 0||v.call(e,f),b){const P=s.value;if(P!=null){if(f.deltaX===0&&(P.scrollTop===0&&f.deltaY<=0||P.scrollTop+P.offsetHeight>=P.scrollHeight&&f.deltaY>=0))return;f.preventDefault(),P.scrollTop+=f.deltaY/Ae(),P.scrollLeft+=f.deltaX/Ae(),L(),m=!0,io(()=>{m=!1})}}}function _(f){if(t||T(f.target)||f.contentRect.height===i.value)return;i.value=f.contentRect.height;const{onResize:v}=e;v!==void 0&&v(f)}function L(){const{value:f}=s;f!=null&&(d.value=f.scrollTop,h=f.scrollLeft)}function T(f){let v=f;for(;v!==null;){if(v.style.display==="none")return!0;v=v.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:D(()=>{const{itemResizable:f}=e,v=le(u.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":v,minHeight:f?v:"",paddingTop:le(e.paddingTop),paddingBottom:le(e.paddingBottom)}]}),visibleItemsStyle:D(()=>(c.value,{transform:`translateY(${le(u.value.sum(w.value))})`})),viewportItems:y,listElRef:s,itemsElRef:M(null),scrollTo:C,handleListResize:_,handleListScroll:z,handleListWheel:O,handleItemResize:E}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return g($e,{onResize:this.handleListResize},{default:()=>{var r,s;return g("div",Dt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?g("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[g(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const l=i[o],u=t.get(l),c=this.$slots.default({item:i,index:u})[0];return e?g($e,{key:l,onResize:h=>this.handleItemResize(l,h)},{default:()=>c}):(c.key=l,c)})})]):(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)])}})}}),J="v-hidden",go=ae("[v-hidden]",{display:"none!important"}),Le=Q({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const t=M(null),n=M(null);function r(){const{value:i}=t,{getCounter:l,getTail:u}=e;let c;if(l!==void 0?c=l():c=n.value,!i||!c)return;c.hasAttribute(J)&&c.removeAttribute(J);const{children:h}=i,d=i.offsetWidth,w=[],y=o.tail?u==null?void 0:u():null;let C=y?y.offsetWidth:0,k=!1;const S=i.children.length-(o.tail?1:0);for(let I=0;I<S-1;++I){if(I<0)continue;const E=h[I];if(k){E.hasAttribute(J)||E.setAttribute(J,"");continue}else E.hasAttribute(J)&&E.removeAttribute(J);const b=E.offsetWidth;if(C+=b,w[I]=b,C>d){const{updateCounter:m}=e;for(let z=I;z>=0;--z){const O=S-1-z;m!==void 0?m(O):c.textContent=`${O}`;const _=c.offsetWidth;if(C-=w[z],C+_<=d||z===0){k=!0,I=z-1,y&&(I===-1?(y.style.maxWidth=`${d-_}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");break}}}}const{onUpdateOverflow:x}=e;k?x!==void 0&&x(!0):(x!==void 0&&x(!1),c.setAttribute(J,""))}const s=We();return go.mount({id:"vueuc/overflow",head:!0,anchorMetaName:je,ssr:s}),de(r),{selfRef:t,counterRef:n,sync:r}},render(){const{$slots:e}=this;return Ke(this.sync),g("div",{class:"v-overflow",ref:"selfRef"},[jt(e,"default"),e.counter?e.counter():g("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function po(e,o){o&&(de(()=>{const{value:t}=e;t&&_e.registerHandler(t,o)}),Vt(()=>{const{value:t}=e;t&&_e.unregisterHandler(t)}))}const mo=Q({name:"Empty",render(){return g("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),g("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),un=Q({props:{onFocus:Function,onBlur:Function},setup(e){return()=>g("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ne(e){return Array.isArray(e)?e:[e]}const ze={STOP:"STOP"};function Ve(e,o){const t=o(e);e.children!==void 0&&t!==ze.STOP&&e.children.forEach(n=>Ve(n,o))}function Co(e,o={}){const{preserveGroup:t=!1}=o,n=[],r=t?i=>{i.isLeaf||(n.push(i.key),s(i.children))}:i=>{i.isLeaf||(i.isGroup||n.push(i.key),s(i.children))};function s(i){i.forEach(r)}return s(e),n}function yo(e,o){const{isLeaf:t}=e;return t!==void 0?t:!o(e)}function wo(e){return e.children}function xo(e){return e.key}function ko(){return!1}function So(e,o){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(o(e)))}function Io(e){return e.disabled===!0}function zo(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function xe(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function ke(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function Po(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)||t.add(n)}),Array.from(t)}function To(e,o){const t=new Set(e);return o.forEach(n=>{t.has(n)&&t.delete(n)}),Array.from(t)}function Ro(e){return(e==null?void 0:e.type)==="group"}function hn(e){const o=new Map;return e.forEach((t,n)=>{o.set(t.key,n)}),t=>{var n;return(n=o.get(t))!==null&&n!==void 0?n:null}}class Eo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function $o(e,o,t,n){return ce(o.concat(e),t,n,!1)}function _o(e,o){const t=new Set;return e.forEach(n=>{const r=o.treeNodeMap.get(n);if(r!==void 0){let s=r.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function Bo(e,o,t,n){const r=ce(o,t,n,!1),s=ce(e,t,n,!0),i=_o(e,t),l=[];return r.forEach(u=>{(s.has(u)||i.has(u))&&l.push(u)}),l.forEach(u=>r.delete(u)),r}function Se(e,o){const{checkedKeys:t,keysToCheck:n,keysToUncheck:r,indeterminateKeys:s,cascade:i,leafOnly:l,checkStrategy:u,allowNotLoaded:c}=e;if(!i)return n!==void 0?{checkedKeys:Po(t,n),indeterminateKeys:Array.from(s)}:r!==void 0?{checkedKeys:To(t,r),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=o;let d;r!==void 0?d=Bo(r,t,o,c):n!==void 0?d=$o(n,t,o,c):d=ce(t,o,c,!1);const w=u==="parent",y=u==="child"||l,C=d,k=new Set,S=Math.max.apply(null,Array.from(h.keys()));for(let x=S;x>=0;x-=1){const I=x===0,E=h.get(x);for(const b of E){if(b.isLeaf)continue;const{key:m,shallowLoaded:z}=b;if(y&&z&&b.children.forEach(T=>{!T.disabled&&!T.isLeaf&&T.shallowLoaded&&C.has(T.key)&&C.delete(T.key)}),b.disabled||!z)continue;let O=!0,_=!1,L=!0;for(const T of b.children){const f=T.key;if(!T.disabled){if(L&&(L=!1),C.has(f))_=!0;else if(k.has(f)){_=!0,O=!1;break}else if(O=!1,_)break}}O&&!L?(w&&b.children.forEach(T=>{!T.disabled&&C.has(T.key)&&C.delete(T.key)}),C.add(m)):_&&k.add(m),I&&y&&C.has(m)&&C.delete(m)}}return{checkedKeys:Array.from(C),indeterminateKeys:Array.from(k)}}function ce(e,o,t,n){const{treeNodeMap:r,getChildren:s}=o,i=new Set,l=new Set(e);return e.forEach(u=>{const c=r.get(u);c!==void 0&&Ve(c,h=>{if(h.disabled)return ze.STOP;const{key:d}=h;if(!i.has(d)&&(i.add(d),l.add(d),zo(h.rawNode,s))){if(n)return ze.STOP;if(!t)throw new Eo}})}),l}function Fo(e,{includeGroup:o=!1,includeSelf:t=!0},n){var r;const s=n.treeNodeMap;let i=e==null?null:(r=s.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return l.treeNode=null,l;for(;i;)!i.ignored&&(o||!i.isGroup)&&l.treeNodePath.push(i),i=i.parent;return l.treeNodePath.reverse(),t||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(u=>u.key),l}function Oo(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Mo(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r+1)%n]:r===t.length-1?null:t[r+1]}function He(e,o,{loop:t=!1,includeDisabled:n=!1}={}){const r=o==="prev"?Ao:Mo,s={reverse:o==="prev"};let i=!1,l=null;function u(c){if(c!==null){if(c===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!c.disabled||n)&&!c.ignored&&!c.isGroup){l=c;return}if(c.isGroup){const h=Te(c,s);h!==null?l=h:u(r(c,t))}else{const h=r(c,!1);if(h!==null)u(h);else{const d=Lo(c);d!=null&&d.isGroup?u(r(d,t)):t&&u(r(c,!0))}}}}return u(e),l}function Ao(e,o){const t=e.siblings,n=t.length,{index:r}=e;return o?t[(r-1+n)%n]:r===0?null:t[r-1]}function Lo(e){return e.parent}function Te(e,o={}){const{reverse:t=!1}=o,{children:n}=e;if(n){const{length:r}=n,s=t?r-1:0,i=t?-1:r,l=t?-1:1;for(let u=s;u!==i;u+=l){const c=n[u];if(!c.disabled&&!c.ignored)if(c.isGroup){const h=Te(c,o);if(h!==null)return h}else return c}}return null}const No={getChild(){return this.ignored?null:Te(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return He(this,"next",e)},getPrev(e={}){return He(this,"prev",e)}};function Ho(e,o){const t=o?new Set(o):void 0,n=[];function r(s){s.forEach(i=>{n.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&r(i.children)})}return r(e),n}function Wo(e,o){const t=e.key;for(;o;){if(o.key===t)return!0;o=o.parent}return!1}function Ge(e,o,t,n,r,s=null,i=0){const l=[];return e.forEach((u,c)=>{var h;const d=Object.create(n);if(d.rawNode=u,d.siblings=l,d.level=i,d.index=c,d.isFirstChild=c===0,d.isLastChild=c+1===e.length,d.parent=s,!d.ignored){const w=r(u);Array.isArray(w)&&(d.children=Ge(w,o,t,n,r,d,i+1))}l.push(d),o.set(d.key,d),t.has(i)||t.set(i,[]),(h=t.get(i))===null||h===void 0||h.push(d)}),l}function fn(e,o={}){var t;const n=new Map,r=new Map,{getDisabled:s=Io,getIgnored:i=ko,getIsGroup:l=Ro,getKey:u=xo}=o,c=(t=o.getChildren)!==null&&t!==void 0?t:wo,h=o.ignoreEmptyChildren?b=>{const m=c(b);return Array.isArray(m)?m.length?m:null:m}:c,d=Object.assign({get key(){return u(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return yo(this.rawNode,h)},get shallowLoaded(){return So(this.rawNode,h)},get ignored(){return i(this.rawNode)},contains(b){return Wo(this,b)}},No),w=Ge(e,n,r,d,h);function y(b){if(b==null)return null;const m=n.get(b);return m&&!m.isGroup&&!m.ignored?m:null}function C(b){if(b==null)return null;const m=n.get(b);return m&&!m.ignored?m:null}function k(b,m){const z=C(b);return z?z.getPrev(m):null}function S(b,m){const z=C(b);return z?z.getNext(m):null}function x(b){const m=C(b);return m?m.getParent():null}function I(b){const m=C(b);return m?m.getChild():null}const E={treeNodes:w,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:h,getFlattenedNodes(b){return Ho(w,b)},getNode:y,getPrev:k,getNext:S,getParent:x,getChild:I,getFirstAvailableNode(){return Oo(w)},getPath(b,m={}){return Fo(b,m,E)},getCheckedKeys(b,m={}){const{cascade:z=!0,leafOnly:O=!1,checkStrategy:_="all",allowNotLoaded:L=!1}=m;return Se({checkedKeys:xe(b),indeterminateKeys:ke(b),cascade:z,leafOnly:O,checkStrategy:_,allowNotLoaded:L},E)},check(b,m,z={}){const{cascade:O=!0,leafOnly:_=!1,checkStrategy:L="all",allowNotLoaded:T=!1}=z;return Se({checkedKeys:xe(m),indeterminateKeys:ke(m),keysToCheck:b==null?[]:Ne(b),cascade:O,leafOnly:_,checkStrategy:L,allowNotLoaded:T},E)},uncheck(b,m,z={}){const{cascade:O=!0,leafOnly:_=!1,checkStrategy:L="all",allowNotLoaded:T=!1}=z;return Se({checkedKeys:xe(m),indeterminateKeys:ke(m),keysToUncheck:b==null?[]:Ne(b),cascade:O,leafOnly:_,checkStrategy:L,allowNotLoaded:T},E)},getNonLeafKeys(b={}){return Co(w,b)}};return E}const Ko=F("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[R("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[R("description",`
 margin-top: 8px;
 `)])]),R("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),R("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Do=Object.assign(Object.assign({},oe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),vn=Q({name:"Empty",props:Do,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=De(e),n=oe("Empty","-empty",Ko,Yt,e,o),{localeRef:r}=so("Empty"),s=Gt(Ut,null),i=D(()=>{var h,d,w;return(h=e.description)!==null&&h!==void 0?h:(w=(d=s==null?void 0:s.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||w===void 0?void 0:w.description}),l=D(()=>{var h,d;return((d=(h=s==null?void 0:s.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||d===void 0?void 0:d.renderIcon)||(()=>g(mo,null))}),u=D(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:d},self:{[j("iconSize",h)]:w,[j("fontSize",h)]:y,textColor:C,iconColor:k,extraTextColor:S}}=n.value;return{"--n-icon-size":w,"--n-font-size":y,"--n-bezier":d,"--n-text-color":C,"--n-icon-color":k,"--n-extra-text-color":S}}),c=t?Pe("empty",D(()=>{let h="";const{size:d}=e;return h+=d[0],h}),u,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:l,localizedDescription:D(()=>i.value||r.value.description),cssVars:t?void 0:u,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),g("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?g("div",{class:`${o}-empty__icon`},e.icon?e.icon():g(qt,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?g("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?g("div",{class:`${o}-empty__extra`},e.extra()):null)}}),jo=e=>{const{textColor2:o,primaryColorHover:t,primaryColorPressed:n,primaryColor:r,infoColor:s,successColor:i,warningColor:l,errorColor:u,baseColor:c,borderColor:h,opacityDisabled:d,tagColor:w,closeIconColor:y,closeIconColorHover:C,closeIconColorPressed:k,borderRadiusSmall:S,fontSizeMini:x,fontSizeTiny:I,fontSizeSmall:E,fontSizeMedium:b,heightMini:m,heightTiny:z,heightSmall:O,heightMedium:_,closeColorHover:L,closeColorPressed:T,buttonColor2Hover:f,buttonColor2Pressed:v,fontWeightStrong:P}=e;return Object.assign(Object.assign({},Xt),{closeBorderRadius:S,heightTiny:m,heightSmall:z,heightMedium:O,heightLarge:_,borderRadius:S,opacityDisabled:d,fontSizeTiny:x,fontSizeSmall:I,fontSizeMedium:E,fontSizeLarge:b,fontWeightStrong:P,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:f,colorPressedCheckable:v,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:n,border:`1px solid ${h}`,textColor:o,color:w,colorBordered:"rgb(250, 250, 252)",closeIconColor:y,closeIconColorHover:C,closeIconColorPressed:k,closeColorHover:L,closeColorPressed:T,borderPrimary:`1px solid ${$(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:$(r,{alpha:.12}),colorBorderedPrimary:$(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:$(r,{alpha:.12}),closeColorPressedPrimary:$(r,{alpha:.18}),borderInfo:`1px solid ${$(s,{alpha:.3})}`,textColorInfo:s,colorInfo:$(s,{alpha:.12}),colorBorderedInfo:$(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:$(s,{alpha:.12}),closeColorPressedInfo:$(s,{alpha:.18}),borderSuccess:`1px solid ${$(i,{alpha:.3})}`,textColorSuccess:i,colorSuccess:$(i,{alpha:.12}),colorBorderedSuccess:$(i,{alpha:.1}),closeIconColorSuccess:i,closeIconColorHoverSuccess:i,closeIconColorPressedSuccess:i,closeColorHoverSuccess:$(i,{alpha:.12}),closeColorPressedSuccess:$(i,{alpha:.18}),borderWarning:`1px solid ${$(l,{alpha:.35})}`,textColorWarning:l,colorWarning:$(l,{alpha:.15}),colorBorderedWarning:$(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:$(l,{alpha:.12}),closeColorPressedWarning:$(l,{alpha:.18}),borderError:`1px solid ${$(u,{alpha:.23})}`,textColorError:u,colorError:$(u,{alpha:.1}),colorBorderedError:$(u,{alpha:.08}),closeIconColorError:u,closeIconColorHoverError:u,closeIconColorPressedError:u,closeColorHoverError:$(u,{alpha:.12}),closeColorPressedError:$(u,{alpha:.18})})},Vo={name:"Tag",common:Zt,self:jo},Go=Vo,Uo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},qo=F("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[G("strong",`
 font-weight: var(--n-font-weight-strong);
 `),R("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),R("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),R("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),R("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),G("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[R("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),R("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),G("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),G("icon, avatar",[G("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),G("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),G("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[te("disabled",[Z("&:hover","background-color: var(--n-color-hover-checkable);",[te("checked","color: var(--n-text-color-hover-checkable);")]),Z("&:active","background-color: var(--n-color-pressed-checkable);",[te("checked","color: var(--n-text-color-pressed-checkable);")])]),G("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[te("disabled",[Z("&:hover","background-color: var(--n-color-checked-hover);"),Z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Yo=Object.assign(Object.assign(Object.assign({},oe.props),Uo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Zo=to("n-tag"),Ie=Q({name:"Tag",props:Yo,setup(e){const o=M(null),{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:s}=De(e),i=oe("Tag","-tag",qo,Go,e,n);Jt(Zo,{roundRef:se(e,"round")});function l(y){if(!e.disabled&&e.checkable){const{checked:C,onCheckedChange:k,onUpdateChecked:S,"onUpdate:checked":x}=e;S&&S(!C),x&&x(!C),k&&k(!C)}}function u(y){if(e.triggerClickOnClose||y.stopPropagation(),!e.disabled){const{onClose:C}=e;C&&co(C,y)}}const c={setTextContent(y){const{value:C}=o;C&&(C.textContent=y)}},h=Qt("Tag",s,n),d=D(()=>{const{type:y,size:C,color:{color:k,textColor:S}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:I,closeMargin:E,closeMarginRtl:b,borderRadius:m,opacityDisabled:z,textColorCheckable:O,textColorHoverCheckable:_,textColorPressedCheckable:L,textColorChecked:T,colorCheckable:f,colorHoverCheckable:v,colorPressedCheckable:P,colorChecked:A,colorCheckedHover:N,colorCheckedPressed:H,closeBorderRadius:B,fontWeightStrong:W,[j("colorBordered",y)]:V,[j("closeSize",C)]:q,[j("closeIconSize",C)]:Y,[j("fontSize",C)]:U,[j("height",C)]:X,[j("color",y)]:ue,[j("textColor",y)]:he,[j("border",y)]:fe,[j("closeIconColor",y)]:ne,[j("closeIconColorHover",y)]:ve,[j("closeIconColorPressed",y)]:be,[j("closeColorHover",y)]:ge,[j("closeColorPressed",y)]:pe}}=i.value;return{"--n-font-weight-strong":W,"--n-avatar-size-override":`calc(${X} - 8px)`,"--n-bezier":x,"--n-border-radius":m,"--n-border":fe,"--n-close-icon-size":Y,"--n-close-color-pressed":pe,"--n-close-color-hover":ge,"--n-close-border-radius":B,"--n-close-icon-color":ne,"--n-close-icon-color-hover":ve,"--n-close-icon-color-pressed":be,"--n-close-icon-color-disabled":ne,"--n-close-margin":E,"--n-close-margin-rtl":b,"--n-close-size":q,"--n-color":k||(t.value?V:ue),"--n-color-checkable":f,"--n-color-checked":A,"--n-color-checked-hover":N,"--n-color-checked-pressed":H,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":P,"--n-font-size":U,"--n-height":X,"--n-opacity-disabled":z,"--n-padding":I,"--n-text-color":S||he,"--n-text-color-checkable":O,"--n-text-color-checked":T,"--n-text-color-hover-checkable":_,"--n-text-color-pressed-checkable":L}}),w=r?Pe("tag",D(()=>{let y="";const{type:C,size:k,color:{color:S,textColor:x}={}}=e;return y+=C[0],y+=k[0],S&&(y+=`a${Oe(S)}`),x&&(y+=`b${Oe(x)}`),t.value&&(y+="c"),y}),d,e):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:h,mergedClsPrefix:n,contentRef:o,mergedBordered:t,handleClick:l,handleCloseClick:u,cssVars:r?void 0:d,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender})},render(){var e,o;const{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:s}={},round:i,onRender:l,$slots:u}=this;l==null||l();const c=Fe(u.avatar,d=>d&&g("div",{class:`${t}-tag__avatar`},d)),h=Fe(u.icon,d=>d&&g("div",{class:`${t}-tag__icon`},d));return g("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:i,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:h,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||c,g("span",{class:`${t}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?g(eo,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:i,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${t}-tag__border`,style:{borderColor:s}}):null)}}),Xo=Z([F("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[F("base-loading",`
 color: var(--n-loading-color);
 `),F("base-selection-tags","min-height: var(--n-height);"),R("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),R("state-border",`
 z-index: 1;
 border-color: #0000;
 `),F("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[R("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),F("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[R("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),F("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[R("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),F("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[F("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[R("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),R("render-label",`
 color: var(--n-text-color);
 `)]),te("disabled",[Z("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),F("base-selection-label","background-color: var(--n-color-active);"),F("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[R("arrow",`
 color: var(--n-arrow-color-disabled);
 `),F("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),R("render-label",`
 color: var(--n-text-color-disabled);
 `)]),F("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),F("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),F("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[R("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),R("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[R("state-border",`border: var(--n-border-${e});`),te("disabled",[Z("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),F("base-selection-label",`background-color: var(--n-color-active-${e});`),F("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),F("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),F("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),F("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[R("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),bn=Q({name:"InternalSelection",props:Object.assign(Object.assign({},oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const o=M(null),t=M(null),n=M(null),r=M(null),s=M(null),i=M(null),l=M(null),u=M(null),c=M(null),h=M(null),d=M(!1),w=M(!1),y=M(!1),C=oe("InternalSelection","-internal-selection",Xo,oo,e,se(e,"clsPrefix")),k=D(()=>e.clearable&&!e.disabled&&(y.value||e.active)),S=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=D(()=>{const a=e.selectedOption;if(!!a)return a[e.labelField]}),I=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function E(){var a;const{value:p}=o;if(p){const{value:K}=t;K&&(K.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((a=c.value)===null||a===void 0||a.sync()))}}function b(){const{value:a}=h;a&&(a.style.display="none")}function m(){const{value:a}=h;a&&(a.style.display="inline-block")}ye(se(e,"active"),a=>{a||b()}),ye(se(e,"pattern"),()=>{e.multiple&&Ke(E)});function z(a){const{onFocus:p}=e;p&&p(a)}function O(a){const{onBlur:p}=e;p&&p(a)}function _(a){const{onDeleteOption:p}=e;p&&p(a)}function L(a){const{onClear:p}=e;p&&p(a)}function T(a){const{onPatternInput:p}=e;p&&p(a)}function f(a){var p;(!a.relatedTarget||!(!((p=n.value)===null||p===void 0)&&p.contains(a.relatedTarget)))&&z(a)}function v(a){var p;!((p=n.value)===null||p===void 0)&&p.contains(a.relatedTarget)||O(a)}function P(a){L(a)}function A(){y.value=!0}function N(){y.value=!1}function H(a){!e.active||!e.filterable||a.target!==t.value&&a.preventDefault()}function B(a){_(a)}function W(a){if(a.key==="Backspace"&&!V.value&&!e.pattern.length){const{selectedOptions:p}=e;p!=null&&p.length&&B(p[p.length-1])}}const V=M(!1);let q=null;function Y(a){const{value:p}=o;if(p){const K=a.target.value;p.textContent=K,E()}e.ignoreComposition&&V.value?q=a:T(a)}function U(){V.value=!0}function X(){V.value=!1,e.ignoreComposition&&T(q),q=null}function ue(a){var p;w.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,a)}function he(a){var p;w.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,a)}function fe(){var a,p;if(e.filterable)w.value=!1,(a=i.value)===null||a===void 0||a.blur(),(p=t.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:K}=r;K==null||K.blur()}else{const{value:K}=s;K==null||K.blur()}}function ne(){var a,p,K;e.filterable?(w.value=!1,(a=i.value)===null||a===void 0||a.focus()):e.multiple?(p=r.value)===null||p===void 0||p.focus():(K=s.value)===null||K===void 0||K.focus()}function ve(){const{value:a}=t;a&&(m(),a.focus())}function be(){const{value:a}=t;a&&a.blur()}function ge(a){const{value:p}=l;p&&p.setTextContent(`+${a}`)}function pe(){const{value:a}=u;return a}function Ue(){return t.value}let me=null;function Ce(){me!==null&&window.clearTimeout(me)}function qe(){e.disabled||e.active||(Ce(),me=window.setTimeout(()=>{I.value&&(d.value=!0)},100))}function Ye(){Ce()}function Ze(a){a||(Ce(),d.value=!1)}ye(I,a=>{a||(d.value=!1)}),de(()=>{no(()=>{const a=i.value;!a||(a.tabIndex=e.disabled||w.value?-1:0)})}),po(n,e.onResize);const{inlineThemeDisabled:Re}=e,Ee=D(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:p},self:{borderRadius:K,color:Xe,placeholderColor:Je,textColor:Qe,paddingSingle:et,paddingMultiple:tt,caretColor:ot,colorDisabled:nt,textColorDisabled:rt,placeholderColorDisabled:lt,colorActive:it,boxShadowFocus:st,boxShadowActive:at,boxShadowHover:ct,border:dt,borderFocus:ut,borderHover:ht,borderActive:ft,arrowColor:vt,arrowColorDisabled:bt,loadingColor:gt,colorActiveWarning:pt,boxShadowFocusWarning:mt,boxShadowActiveWarning:Ct,boxShadowHoverWarning:yt,borderWarning:wt,borderFocusWarning:xt,borderHoverWarning:kt,borderActiveWarning:St,colorActiveError:It,boxShadowFocusError:zt,boxShadowActiveError:Pt,boxShadowHoverError:Tt,borderError:Rt,borderFocusError:Et,borderHoverError:$t,borderActiveError:_t,clearColor:Bt,clearColorHover:Ft,clearColorPressed:Ot,clearSize:Mt,arrowSize:At,[j("height",a)]:Lt,[j("fontSize",a)]:Nt}}=C.value;return{"--n-bezier":p,"--n-border":dt,"--n-border-active":ft,"--n-border-focus":ut,"--n-border-hover":ht,"--n-border-radius":K,"--n-box-shadow-active":at,"--n-box-shadow-focus":st,"--n-box-shadow-hover":ct,"--n-caret-color":ot,"--n-color":Xe,"--n-color-active":it,"--n-color-disabled":nt,"--n-font-size":Nt,"--n-height":Lt,"--n-padding-single":et,"--n-padding-multiple":tt,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":lt,"--n-text-color":Qe,"--n-text-color-disabled":rt,"--n-arrow-color":vt,"--n-arrow-color-disabled":bt,"--n-loading-color":gt,"--n-color-active-warning":pt,"--n-box-shadow-focus-warning":mt,"--n-box-shadow-active-warning":Ct,"--n-box-shadow-hover-warning":yt,"--n-border-warning":wt,"--n-border-focus-warning":xt,"--n-border-hover-warning":kt,"--n-border-active-warning":St,"--n-color-active-error":It,"--n-box-shadow-focus-error":zt,"--n-box-shadow-active-error":Pt,"--n-box-shadow-hover-error":Tt,"--n-border-error":Rt,"--n-border-focus-error":Et,"--n-border-hover-error":$t,"--n-border-active-error":_t,"--n-clear-size":Mt,"--n-clear-color":Bt,"--n-clear-color-hover":Ft,"--n-clear-color-pressed":Ot,"--n-arrow-size":At}}),ee=Re?Pe("internal-selection",D(()=>e.size[0]),Ee,e):void 0;return{mergedTheme:C,mergedClearable:k,patternInputFocused:w,filterablePlaceholder:S,label:x,selected:I,showTagsPanel:d,isComposing:V,counterRef:l,counterWrapperRef:u,patternInputMirrorRef:o,patternInputRef:t,selfRef:n,multipleElRef:r,singleElRef:s,patternInputWrapperRef:i,overflowRef:c,inputTagElRef:h,handleMouseDown:H,handleFocusin:f,handleClear:P,handleMouseEnter:A,handleMouseLeave:N,handleDeleteOption:B,handlePatternKeyDown:W,handlePatternInputInput:Y,handlePatternInputBlur:he,handlePatternInputFocus:ue,handleMouseEnterCounter:qe,handleMouseLeaveCounter:Ye,handleFocusout:v,handleCompositionEnd:X,handleCompositionStart:U,onPopoverUpdateShow:Ze,focus:ne,focusInput:ve,blur:fe,blurInput:be,updateCounter:ge,getCounter:pe,getTail:Ue,renderLabel:e.renderLabel,cssVars:Re?void 0:Ee,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:o,size:t,disabled:n,filterable:r,maxTagCount:s,bordered:i,clsPrefix:l,onRender:u,renderTag:c,renderLabel:h}=this;u==null||u();const d=s==="responsive",w=typeof s=="number",y=d||w,C=g(ao,null,{default:()=>g(uo,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var S,x;return(x=(S=this.$slots).arrow)===null||x===void 0?void 0:x.call(S)}})});let k;if(o){const{labelField:S}=this,x=v=>g("div",{class:`${l}-base-selection-tag-wrapper`,key:v.value},c?c({option:v,handleClose:()=>this.handleDeleteOption(v)}):g(Ie,{size:t,closable:!v.disabled,disabled:n,onClose:()=>this.handleDeleteOption(v),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(v,!0):re(v[S],v,!0)})),I=(w?this.selectedOptions.slice(0,s):this.selectedOptions).map(x),E=r?g("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},g("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:n,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),g("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,b=d?()=>g("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},g(Ie,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:n})):void 0;let m;if(w){const v=this.selectedOptions.length-s;v>0&&(m=g("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},g(Ie,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:n},{default:()=>`+${v}`})))}const z=d?r?g(Le,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>I,counter:b,tail:()=>E}):g(Le,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>I,counter:b}):w?I.concat(m):I,O=y?()=>g("div",{class:`${l}-base-selection-popover`},d?I:this.selectedOptions.map(x)):void 0,_=y?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,T=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?g("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},g("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,f=r?g("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},z,d?null:E,C):g("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:n?void 0:0},z,C);k=g(ro,null,y?g(lo,Object.assign({},_,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>f,default:O}):f,T)}else if(r){const S=this.pattern||this.isComposing,x=this.active?!S:!this.selected,I=this.active?!1:this.selected;k=g("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},g("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:n,disabled:n,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),I?g("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},g("div",{class:`${l}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):null,x?g("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},g("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,C)}else k=g("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?g("div",{class:`${l}-base-selection-input`,title:ho(this.label),key:"input"},g("div",{class:`${l}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):re(this.label,this.selectedOption,!0))):g("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},g("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),C);return g("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,i?g("div",{class:`${l}-base-selection__border`}):null,i?g("div",{class:`${l}-base-selection__state-border`}):null)}});export{un as F,vn as N,dn as V,hn as a,bn as b,fn as c,Ie as d,Ho as f,ho as g,cn as h,po as u};
