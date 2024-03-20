import{d as M,a as z,ao as at,t as o,y as nt,A as pe,bu as rt,n as N,F as ot,V as st,N as it,v as lt,x as dt,P as ct,g as i,i as x,f as w,h as _,Q as bt,m as ft,l as he,w as G,B as ut,z as E,R as vt,s as pt,bS as ht,J as Y,q as L,G as gt,bT as mt,D as xt,H as yt}from"./index.851b5188.js";import{A as wt}from"./Add.3164a73d.js";import{u as le}from"./use-compitable.ae5454ac.js";import{f as q}from"./flatten.05a2e46f.js";import{u as Rt}from"./use-merged-state.e40d3a9f.js";import{t as K}from"./throttle.821ebb8d.js";import{c as Ct,a as de,o as St}from"./Popover.30015336.js";import{r as ce,c as H}from"./resolve-slot.9e6a0162.js";import{V as be}from"./VResizeObserver.6721b9ea.js";const zt=de(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[de("&::-webkit-scrollbar",{width:0,height:0})]),Pt=M({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=at();return zt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ct,ssr:c}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var b;(b=e.value)===null||b===void 0||b.scrollTo(...d)}})},render(){return o("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Z=nt("n-tabs"),ge={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},It=M({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ge,setup(e){const n=pe(Z,null);return n||rt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Tt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ct(ge,["displayDirective"])),Q=M({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Tt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:u,closableRef:d,tabStyleRef:b,tabChangeIdRef:v,onBeforeLeaveRef:m,triggerRef:R,handleAdd:y,activateTab:p,handleClose:h}=pe(Z);return{trigger:R,mergedClosable:N(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?d.value:f}),style:b,clsPrefix:n,value:c,type:u,handleClose(f){f.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){y();return}const{name:f}=e,g=++v.id;if(f!==c.value){const{value:C}=m;C?Promise.resolve(C(e.name,c.value)).then(S=>{S&&v.id===g&&p(f)}):p(f)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:u,label:d,tab:b,value:v,mergedClosable:m,style:R,trigger:y,$slots:{default:p}}=this,h=d!=null?d:b;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:c,"data-name":c,"data-disabled":u?!0:void 0},ot({class:[`${n}-tabs-tab`,v===c&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,m&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?void 0:R},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(st,null,o("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),o(it,{clsPrefix:n},{default:()=>o(wt,null)})):p?p():typeof h=="object"?h:lt(h!=null?h:c)),m&&this.type==="card"?o(dt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),$t=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[x("segment-type",[i("tabs-rail",[w("&.transition-disabled","color: red;",[i("tabs-tab",`
 transition: none;
 `)])])]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),x("flex",[i("tabs-nav",{width:"100%"},[i("tabs-wrapper",{width:"100%"},[i("tabs-tab",{marginRight:0})])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[_("prefix, suffix",`
 display: flex;
 align-items: center;
 `),_("prefix","padding-right: 16px;"),_("suffix","padding-left: 16px;")]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x("shadow-before",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),x("shadow-after",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),w("&::before",`
 left: 0;
 `),w("&::after",`
 right: 0;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("disabled",{cursor:"not-allowed"}),_("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),_("label",`
 display: flex;
 align-items: center;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),x("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),x("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),x("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),x("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[x("line-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),x("card-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[x("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[_("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),bt("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),x("closable","padding-right: 6px;"),x("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),x("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),At=Object.assign(Object.assign({},he.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Dt=M({name:"Tabs",props:At,setup(e,{slots:n}){var c,u,d,b;const{mergedClsPrefixRef:v,inlineThemeDisabled:m}=ft(e),R=he("Tabs","-tabs",$t,ht,e,v),y=z(null),p=z(null),h=z(null),f=z(null),g=z(null),C=z(!0),S=z(!0),l=le(e,["labelSize","size"]),$=le(e,["activeName","value"]),P=z((u=(c=$.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&u!==void 0?u:n.default?(b=(d=q(n.default())[0])===null||d===void 0?void 0:d.props)===null||b===void 0?void 0:b.name:null),T=Rt($,P),ee={id:0},me=N(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});G(T,()=>{ee.id=0,F(),te()});function V(){var t;const{value:a}=T;return a===null?null:(t=y.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function xe(t){if(e.type==="card")return;const{value:a}=p;if(!!a&&t){const r=`${v.value}-tabs-bar--disabled`,{barWidth:s}=e;if(t.dataset.disabled==="true"?a.classList.add(r):a.classList.remove(r),typeof s=="number"&&t.offsetWidth>=s){const A=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${A}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function F(){if(e.type==="card")return;const t=V();t&&xe(t)}function te(t){var a;const r=(a=g.value)===null||a===void 0?void 0:a.$el;if(!r)return;const s=V();if(!s)return;const{scrollLeft:A,offsetWidth:B}=r,{offsetLeft:k,offsetWidth:D}=s;A>k?r.scrollTo({top:0,left:k,behavior:"smooth"}):k+D>A+B&&r.scrollTo({top:0,left:k+D-B,behavior:"smooth"})}const O=z(null);let U=0,W=null;function ye(t){const a=O.value;if(a){U=t.getBoundingClientRect().height;const r=`${U}px`,s=()=>{a.style.height=r,a.style.maxHeight=r};W?(s(),W(),W=null):W=s}}function we(t){const a=O.value;if(a){const r=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${r}px`,a.style.height=`${Math.max(U,r)}px`};W?(W(),W=null,s()):W=s}}function Re(){const t=O.value;t&&(t.style.maxHeight="",t.style.height="")}const ae={value:[]},ne=z("next");function Ce(t){const a=T.value;let r="next";for(const s of ae.value){if(s===a)break;if(s===t){r="prev";break}}ne.value=r,Se(t)}function Se(t){const{onActiveNameChange:a,onUpdateValue:r,"onUpdate:value":s}=e;a&&H(a,t),r&&H(r,t),s&&H(s,t),P.value=t}function ze(t){const{onClose:a}=e;a&&H(a,t)}function re(){const{value:t}=p;if(!t)return;const a="transition-disabled";t.classList.add(a),F(),t.classList.remove(a)}let oe=0;function Pe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||oe===t.contentRect.width)return;oe=t.contentRect.width;const{type:r}=e;(r==="line"||r==="bar")&&re(),r!=="segment"&&X((a=g.value)===null||a===void 0?void 0:a.$el)}const Te=K(Pe,64);G([()=>e.justifyContent,()=>e.size],()=>{Y(()=>{const{type:t}=e;(t==="line"||t==="bar")&&re()})});const I=z(!1);function $e(t){var a;const{target:r,contentRect:{width:s}}=t,A=r.parentElement.offsetWidth;if(!I.value)A<s&&(I.value=!0);else{const{value:B}=f;if(!B)return;A-s>B.$el.offsetWidth&&(I.value=!1)}X((a=g.value)===null||a===void 0?void 0:a.$el)}const Ae=K($e,64);function We(){const{onAdd:t}=e;t&&t(),Y(()=>{const a=V(),{value:r}=g;!a||!r||r.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function X(t){if(!t)return;const{scrollLeft:a,scrollWidth:r,offsetWidth:s}=t;C.value=a<=0,S.value=a+s>=r}const _e=K(t=>{X(t.target)},64);ut(Z,{triggerRef:E(e,"trigger"),tabStyleRef:E(e,"tabStyle"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:E(e,"onBeforeLeave"),activateTab:Ce,handleClose:ze,handleAdd:We}),St(()=>{F(),te()}),vt(()=>{const{value:t}=h;if(!t)return;const{value:a}=v,r=`${a}-tabs-nav-scroll-wrapper--shadow-before`,s=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(r):t.classList.add(r),S.value?t.classList.remove(s):t.classList.add(s)});const se=z(null);G(T,()=>{if(e.type==="segment"){const t=se.value;t&&Y(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Le={syncBarPosition:()=>{F()}},ie=N(()=>{const{value:t}=l,{type:a}=e,r={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${r}`,{self:{barColor:A,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:D,tabColor:Be,tabBorderColor:Ee,paneTextColor:je,tabFontWeight:ke,tabBorderRadius:Fe,tabFontWeightActive:Oe,colorSegment:Ie,fontWeightStrong:De,tabColorSegment:He,closeSize:Ne,closeIconSize:Me,closeColorHover:Ve,closeColorPressed:Ue,closeBorderRadius:Xe,[L("panePadding",t)]:Ge,[L("tabPadding",s)]:Ye,[L("tabGap",s)]:qe,[L("tabTextColor",a)]:Ke,[L("tabTextColorActive",a)]:Je,[L("tabTextColorHover",a)]:Qe,[L("tabTextColorDisabled",a)]:Ze,[L("tabFontSize",t)]:et},common:{cubicBezierEaseInOut:tt}}=R.value;return{"--n-bezier":tt,"--n-color-segment":Ie,"--n-bar-color":A,"--n-tab-font-size":et,"--n-tab-text-color":Ke,"--n-tab-text-color-active":Je,"--n-tab-text-color-disabled":Ze,"--n-tab-text-color-hover":Qe,"--n-pane-text-color":je,"--n-tab-border-color":Ee,"--n-tab-border-radius":Fe,"--n-close-size":Ne,"--n-close-icon-size":Me,"--n-close-color-hover":Ve,"--n-close-color-pressed":Ue,"--n-close-border-radius":Xe,"--n-close-icon-color":B,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":D,"--n-tab-color":Be,"--n-tab-font-weight":ke,"--n-tab-font-weight-active":Oe,"--n-tab-padding":Ye,"--n-tab-gap":qe,"--n-pane-padding":Ge,"--n-font-weight-strong":De,"--n-tab-color-segment":He}}),j=m?pt("tabs",N(()=>`${l.value[0]}${e.type[0]}`),ie,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:T,renderedNames:new Set,tabsRailElRef:se,tabsPaneWrapperRef:O,tabsElRef:y,barElRef:p,addTabInstRef:f,xScrollInstRef:g,scrollWrapperElRef:h,addTabFixed:I,tabWrapperStyle:me,handleNavResize:Te,mergedSize:l,handleScroll:_e,handleTabsResize:Ae,cssVars:m?void 0:ie,themeClass:j==null?void 0:j.themeClass,animationDirection:ne,renderNameListRef:ae,onAnimationBeforeLeave:ye,onAnimationEnter:we,onAnimationAfterEnter:Re,onRender:j==null?void 0:j.onRender},Le)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:u,mergedSize:d,renderNameListRef:b,onRender:v,$slots:{default:m,prefix:R,suffix:y}}=this;v==null||v();const p=m?q(m()).filter(l=>l.type.__TAB_PANE__===!0):[],h=m?q(m()).filter(l=>l.type.__TAB__===!0):[],f=!h.length,g=n==="card",C=n==="segment",S=!g&&!C&&this.justifyContent;return b.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${d}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},ce(R,l=>l&&o("div",{class:`${e}-tabs-nav__prefix`},l)),C?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},f?p.map((l,$)=>(b.value.push(l.props.name),o(Q,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),l.children?{default:l.children.tab}:void 0))):h.map((l,$)=>(b.value.push(l.props.name),$===0?l:ve(l)))):o(be,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(Pt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),f?p.map((P,T)=>(b.value.push(P.props.name),J(o(Q,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!S||S==="center"||S==="start"||S==="end")}),P.children?{default:P.children.tab}:void 0)))):h.map((P,T)=>(b.value.push(P.props.name),J(T!==0&&!S?ve(P):P))),!c&&u&&g?ue(u,(f?p.length:h.length)!==0):null,S?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let $=l;return g&&u&&($=o(be,{onResize:this.handleTabsResize},{default:()=>l})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$,g?o("div",{class:`${e}-tabs-pad`}):null,g?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&u&&g?ue(u,!0):null,ce(y,l=>l&&o("div",{class:`${e}-tabs-nav__suffix`},l))),f&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},fe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):fe(p,this.mergedValue,this.renderedNames)))}});function fe(e,n,c,u,d,b,v){const m=[];return e.forEach(R=>{const{name:y,displayDirective:p,"display-directive":h}=R.props,f=C=>p===C||h===C,g=n===y;if(R.key!==void 0&&(R.key=y),g||f("show")||f("show:lazy")&&c.has(y)){c.has(y)||c.add(y);const C=!f("if");m.push(C?gt(R,[[yt,g]]):R)}}),v?o(mt,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:b},{default:()=>m}):m}function ue(e,n){return o(Q,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function ve(e){const n=xt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function J(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{It as N,Dt as a};
