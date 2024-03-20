import{d as ie,t as g,A as We,_ as Ce,v as Ge,N as rn,T as qe,g as V,h as te,i as W,f as X,Q as sn,l as ve,z as k,av as un,a as C,n as F,w as ze,b as dn,B as $e,e as cn,s as Je,Z as fn,J as vn,q as oe,m as hn,K as gn,G as mn,H as pn,aw as bn}from"./index.851b5188.js";import{f as Qe}from"./fade-in-scale-up.cssr.5737b1c6.js";import{u as Ee}from"./use-merged-state.e40d3a9f.js";import{u as yn}from"./use-locale.f8ac8f2c.js";import{u as Sn}from"./use-compitable.ae5454ac.js";import{u as On}from"./use-form-item.bb4d7ada.js";import{u as wn,V as Fn,h as he,F as Mn,N as Rn,a as xn,b as Cn,c as Tn}from"./Selection.28a32045.js";import{c as Ke}from"./index.e739cd60.js";import{i as Ne,b as kn,u as Be,V as Pn,d as zn,e as Bn}from"./Popover.30015336.js";import{r as Nn,a as _n,c as A}from"./resolve-slot.9e6a0162.js";import{N as An,g as Vn}from"./Scrollbar.7a99b971.js";import{d as In,g as Te}from"./index.7a579f81.js";import{m as Ln}from"./index.3ef69258.js";function ke(e){const l=e.filter(a=>a!==void 0);if(l.length!==0)return l.length===1?l[0]:a=>{e.forEach(r=>{r&&r(a)})}}const Dn=ie({name:"Checkmark",render(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}});function jn(e,l){return g(qe,{name:"fade-in-scale-up-transition"},{default:()=>e?g(rn,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>g(Dn)}):null})}const Ue=ie({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:a,multipleRef:r,valueSetRef:s,renderLabelRef:p,renderOptionRef:d,labelFieldRef:b,valueFieldRef:x,showCheckmarkRef:T,nodePropsRef:O,handleOptionClick:I,handleOptionMouseEnter:N}=We(Ne),P=Ce(()=>{const{value:y}=a;return y?e.tmNode.key===y.key:!1});function v(y){const{tmNode:M}=e;M.disabled||I(y,M)}function w(y){const{tmNode:M}=e;M.disabled||N(y,M)}function j(y){const{tmNode:M}=e,{value:L}=P;M.disabled||L||N(y,M)}return{multiple:r,isGrouped:Ce(()=>{const{tmNode:y}=e,{parent:M}=y;return M&&M.rawNode.type==="group"}),showCheckmark:T,nodeProps:O,isPending:P,isSelected:Ce(()=>{const{value:y}=l,{value:M}=r;if(y===null)return!1;const L=e.tmNode.rawNode[x.value];if(M){const{value:$}=s;return $.has(L)}else return y===L}),labelField:b,renderLabel:p,renderOption:d,handleMouseMove:j,handleMouseEnter:w,handleClick:v}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:a,isPending:r,isGrouped:s,showCheckmark:p,nodeProps:d,renderOption:b,renderLabel:x,handleClick:T,handleMouseEnter:O,handleMouseMove:I}=this,N=jn(a,e),P=x?[x(l,a),p&&N]:[Ge(l[this.labelField],l,a),p&&N],v=d==null?void 0:d(l),w=g("div",Object.assign({},v,{class:[`${e}-base-select-option`,l.class,v==null?void 0:v.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:a,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:p}],style:[(v==null?void 0:v.style)||"",l.style||""],onClick:ke([T,v==null?void 0:v.onClick]),onMouseenter:ke([O,v==null?void 0:v.onMouseenter]),onMousemove:ke([I,v==null?void 0:v.onMousemove])}),g("div",{class:`${e}-base-select-option__content`},P));return l.render?l.render({node:w,option:l,selected:a}):b?b({node:w,option:l,selected:a}):w}}),He=ie({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:a,nodePropsRef:r}=We(Ne);return{labelField:a,nodeProps:r,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:a,nodeProps:r,tmNode:{rawNode:s}}=this,p=r==null?void 0:r(s),d=l?l(s,!1):Ge(s[this.labelField],s,!1),b=g("div",Object.assign({},p,{class:[`${e}-base-select-group-header`,p==null?void 0:p.class]}),d);return s.render?s.render({node:b,option:s}):a?a({node:b,option:s,selected:!1}):b}}),$n=V("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[V("scrollbar",`
 max-height: var(--n-height);
 `),V("virtual-list",`
 max-height: var(--n-height);
 `),V("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[te("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),V("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),V("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),te("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),te("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),te("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),V("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),V("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[W("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),W("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),W("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),W("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),W("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),W("disabled",`
 cursor: not-allowed;
 `,[sn("selected",`
 color: var(--n-option-text-color-disabled);
 `),W("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),te("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Qe({enterScale:"0.5"})])])]),En=ie({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ve.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const l=ve("InternalSelectMenu","-internal-select-menu",$n,un,e,k(e,"clsPrefix")),a=C(null),r=C(null),s=C(null),p=F(()=>e.treeMate.getFlattenedNodes()),d=F(()=>xn(p.value)),b=C(null);function x(){const{treeMate:t}=e;let i=null;const{value:S}=e;S===null?i=t.getFirstAvailableNode():(e.multiple?i=t.getNode((S||[])[(S||[]).length-1]):i=t.getNode(S),(!i||i.disabled)&&(i=t.getFirstAvailableNode())),K(i||null)}function T(){const{value:t}=b;t&&!e.treeMate.getNode(t.key)&&(b.value=null)}let O;ze(()=>e.show,t=>{t?O=ze(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?x():T(),vn(re)):T()},{immediate:!0}):O==null||O()},{immediate:!0}),dn(()=>{O==null||O()});const I=F(()=>In(l.value.self[oe("optionHeight",e.size)])),N=F(()=>Te(l.value.self[oe("padding",e.size)])),P=F(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),v=F(()=>{const t=p.value;return t&&t.length===0});function w(t){const{onToggle:i}=e;i&&i(t)}function j(t){const{onScroll:i}=e;i&&i(t)}function y(t){var i;(i=s.value)===null||i===void 0||i.sync(),j(t)}function M(){var t;(t=s.value)===null||t===void 0||t.sync()}function L(){const{value:t}=b;return t||null}function $(t,i){i.disabled||K(i,!1)}function E(t,i){i.disabled||w(i)}function z(t){var i;he(t,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,t)}function _(t){var i;he(t,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,t)}function G(t){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,t),!e.focusable&&t.preventDefault()}function le(){const{value:t}=b;t&&K(t.getNext({loop:!0}),!0)}function ae(){const{value:t}=b;t&&K(t.getPrev({loop:!0}),!0)}function K(t,i=!1){b.value=t,i&&re()}function re(){var t,i;const S=b.value;if(!S)return;const H=d.value(S.key);H!==null&&(e.virtualScroll?(t=r.value)===null||t===void 0||t.scrollTo({index:H}):(i=s.value)===null||i===void 0||i.scrollTo({index:H,elSize:I.value}))}function Y(t){var i,S;!((i=a.value)===null||i===void 0)&&i.contains(t.target)&&((S=e.onFocus)===null||S===void 0||S.call(e,t))}function se(t){var i,S;!((i=a.value)===null||i===void 0)&&i.contains(t.relatedTarget)||(S=e.onBlur)===null||S===void 0||S.call(e,t)}$e(Ne,{handleOptionMouseEnter:$,handleOptionClick:E,valueSetRef:P,pendingTmNodeRef:b,nodePropsRef:k(e,"nodeProps"),showCheckmarkRef:k(e,"showCheckmark"),multipleRef:k(e,"multiple"),valueRef:k(e,"value"),renderLabelRef:k(e,"renderLabel"),renderOptionRef:k(e,"renderOption"),labelFieldRef:k(e,"labelField"),valueFieldRef:k(e,"valueField")}),$e(kn,a),cn(()=>{const{value:t}=s;t&&t.sync()});const ee=F(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:i},self:{height:S,borderRadius:H,color:me,groupHeaderTextColor:pe,actionDividerColor:be,optionTextColorPressed:ue,optionTextColor:de,optionTextColorDisabled:J,optionTextColorActive:B,optionOpacityDisabled:ce,optionCheckColor:Q,actionTextColor:ye,optionColorPending:Se,optionColorActive:Oe,loadingColor:we,loadingSize:Fe,optionColorActivePending:Me,[oe("optionFontSize",t)]:Re,[oe("optionHeight",t)]:xe,[oe("optionPadding",t)]:ne}}=l.value;return{"--n-height":S,"--n-action-divider-color":be,"--n-action-text-color":ye,"--n-bezier":i,"--n-border-radius":H,"--n-color":me,"--n-option-font-size":Re,"--n-group-header-text-color":pe,"--n-option-check-color":Q,"--n-option-color-pending":Se,"--n-option-color-active":Oe,"--n-option-color-active-pending":Me,"--n-option-height":xe,"--n-option-opacity-disabled":ce,"--n-option-text-color":de,"--n-option-text-color-active":B,"--n-option-text-color-disabled":J,"--n-option-text-color-pressed":ue,"--n-option-padding":ne,"--n-option-padding-left":Te(ne,"left"),"--n-option-padding-right":Te(ne,"right"),"--n-loading-color":we,"--n-loading-size":Fe}}),{inlineThemeDisabled:U}=e,D=U?Je("internal-select-menu",F(()=>e.size[0]),ee,e):void 0,q={selfRef:a,next:le,prev:ae,getPendingTmNode:L};return wn(a,e.onResize),Object.assign({mergedTheme:l,virtualListRef:r,scrollbarRef:s,itemSize:I,padding:N,flattenedNodes:p,empty:v,virtualListContainer(){const{value:t}=r;return t==null?void 0:t.listElRef},virtualListContent(){const{value:t}=r;return t==null?void 0:t.itemsElRef},doScroll:j,handleFocusin:Y,handleFocusout:se,handleKeyUp:z,handleKeyDown:_,handleMouseDown:G,handleVirtualListResize:M,handleVirtualListScroll:y,cssVars:U?void 0:ee,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},q)},render(){const{$slots:e,virtualScroll:l,clsPrefix:a,mergedTheme:r,themeClass:s,onRender:p}=this;return p==null||p(),g("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${a}-base-select-menu`,s,this.multiple&&`${a}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?g("div",{class:`${a}-base-select-menu__loading`},g(fn,{clsPrefix:a,strokeWidth:20})):this.empty?g("div",{class:`${a}-base-select-menu__empty`,"data-empty":!0},_n(e.empty,()=>[g(Rn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):g(An,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?g(Fn,{ref:"virtualListRef",class:`${a}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:d})=>d.isGroup?g(He,{key:d.key,clsPrefix:a,tmNode:d}):d.ignored?null:g(Ue,{clsPrefix:a,key:d.key,tmNode:d})}):g("div",{class:`${a}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(d=>d.isGroup?g(He,{key:d.key,clsPrefix:a,tmNode:d}):g(Ue,{clsPrefix:a,key:d.key,tmNode:d})))}),Nn(e.action,d=>d&&[g("div",{class:`${a}-base-select-menu__action`,"data-action":!0,key:"action"},d),g(Mn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function ge(e){return e.type==="group"}function Ze(e){return e.type==="ignored"}function Pe(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Kn(e,l){return{getIsGroup:ge,getIgnored:Ze,getKey(r){return ge(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[l]}}}function Un(e,l,a,r){if(!l)return e;function s(p){if(!Array.isArray(p))return[];const d=[];for(const b of p)if(ge(b)){const x=s(b[r]);x.length&&d.push(Object.assign({},b,{[r]:x}))}else{if(Ze(b))continue;l(a,b)&&d.push(b)}return d}return s(e)}function Hn(e,l,a){const r=new Map;return e.forEach(s=>{ge(s)?s[a].forEach(p=>{r.set(p[l],p)}):r.set(s[l],s)}),r}const Wn=X([V("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),V("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Qe({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Gn=Object.assign(Object.assign({},ve.props),{to:Be.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),rt=ie({name:"Select",props:Gn,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:a,namespaceRef:r,inlineThemeDisabled:s}=hn(e),p=ve("Select","-select",Wn,bn,e,l),d=C(e.defaultValue),b=k(e,"value"),x=Ee(b,d),T=C(!1),O=C(""),I=F(()=>{const{valueField:n,childrenField:o}=e,u=Kn(n,o);return Tn(re.value,u)}),N=F(()=>Hn(ae.value,e.valueField,e.childrenField)),P=C(!1),v=Ee(k(e,"show"),P),w=C(null),j=C(null),y=C(null),{localeRef:M}=yn("Select"),L=F(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:M.value.placeholder}),$=Sn(e,["items","options"]),E=[],z=C([]),_=C([]),G=C(new Map),le=F(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:o,valueField:u}=e;return m=>({[o]:String(m),[u]:m})}return n===!1?!1:o=>Object.assign(n(o),{value:o})}),ae=F(()=>_.value.concat(z.value).concat($.value)),K=F(()=>{const{filter:n}=e;if(n)return n;const{labelField:o,valueField:u}=e;return(m,c)=>{if(!c)return!1;const h=c[o];if(typeof h=="string")return Pe(m,h);const f=c[u];return typeof f=="string"?Pe(m,f):typeof f=="number"?Pe(m,String(f)):!1}}),re=F(()=>{if(e.remote)return $.value;{const{value:n}=ae,{value:o}=O;return!o.length||!e.filterable?n:Un(n,K.value,o,e.childrenField)}});function Y(n){const o=e.remote,{value:u}=G,{value:m}=N,{value:c}=le,h=[];return n.forEach(f=>{if(m.has(f))h.push(m.get(f));else if(o&&u.has(f))h.push(u.get(f));else if(c){const R=c(f);R&&h.push(R)}}),h}const se=F(()=>{if(e.multiple){const{value:n}=x;return Array.isArray(n)?Y(n):[]}return null}),ee=F(()=>{const{value:n}=x;return!e.multiple&&!Array.isArray(n)?n===null?null:Y([n])[0]||null:null}),U=On(e),{mergedSizeRef:D,mergedDisabledRef:q,mergedStatusRef:t}=U;function i(n,o){const{onChange:u,"onUpdate:value":m,onUpdateValue:c}=e,{nTriggerFormChange:h,nTriggerFormInput:f}=U;u&&A(u,n,o),c&&A(c,n,o),m&&A(m,n,o),d.value=n,h(),f()}function S(n){const{onBlur:o}=e,{nTriggerFormBlur:u}=U;o&&A(o,n),u()}function H(){const{onClear:n}=e;n&&A(n)}function me(n){const{onFocus:o}=e,{nTriggerFormFocus:u}=U;o&&A(o,n),u()}function pe(n){const{onSearch:o}=e;o&&A(o,n)}function be(n){const{onScroll:o}=e;o&&A(o,n)}function ue(){var n;const{remote:o,multiple:u}=e;if(o){const{value:m}=G;if(u){const{valueField:c}=e;(n=se.value)===null||n===void 0||n.forEach(h=>{m.set(h[c],h)})}else{const c=ee.value;c&&m.set(c[e.valueField],c)}}}function de(n){const{onUpdateShow:o,"onUpdate:show":u}=e;o&&A(o,n),u&&A(u,n),P.value=n}function J(){q.value||(de(!0),P.value=!0,e.filterable&&Le())}function B(){de(!1)}function ce(){O.value="",_.value=E}const Q=C(!1);function ye(){e.filterable&&(Q.value=!0)}function Se(){e.filterable&&(Q.value=!1,v.value||ce())}function Oe(){q.value||(v.value?e.filterable?Le():B():J())}function we(n){var o,u;!((u=(o=y.value)===null||o===void 0?void 0:o.selfRef)===null||u===void 0)&&u.contains(n.relatedTarget)||(T.value=!1,S(n),B())}function Fe(n){me(n),T.value=!0}function Me(n){T.value=!0}function Re(n){var o;!((o=w.value)===null||o===void 0)&&o.$el.contains(n.relatedTarget)||(T.value=!1,S(n),B())}function xe(){var n;(n=w.value)===null||n===void 0||n.focus(),B()}function ne(n){var o;v.value&&(!((o=w.value)===null||o===void 0)&&o.$el.contains(Vn(n))||B())}function Xe(n){if(!Array.isArray(n))return[];if(le.value)return Array.from(n);{const{remote:o}=e,{value:u}=N;if(o){const{value:m}=G;return n.filter(c=>u.has(c)||m.has(c))}else return n.filter(m=>u.has(m))}}function _e(n){fe(n.rawNode)}function fe(n){if(q.value)return;const{tag:o,remote:u,clearFilterAfterSelect:m,valueField:c}=e;if(o&&!u){const{value:h}=_,f=h[0]||null;if(f){const R=z.value;R.length?R.push(f):z.value=[f],_.value=E}}if(u&&G.value.set(n[c],n),e.multiple){const h=Xe(x.value),f=h.findIndex(R=>R===n[c]);if(~f){if(h.splice(f,1),o&&!u){const R=Ae(n[c]);~R&&(z.value.splice(R,1),m&&(O.value=""))}}else h.push(n[c]),m&&(O.value="");i(h,Y(h))}else{if(o&&!u){const h=Ae(n[c]);~h?z.value=[z.value[h]]:z.value=E}Ie(),B(),i(n[c],n)}}function Ae(n){return z.value.findIndex(u=>u[e.valueField]===n)}function Ye(n){v.value||J();const{value:o}=n.target;O.value=o;const{tag:u,remote:m}=e;if(pe(o),u&&!m){if(!o){_.value=E;return}const{onCreate:c}=e,h=c?c(o):{[e.labelField]:o,[e.valueField]:o},{valueField:f}=e;$.value.some(R=>R[f]===h[f])||z.value.some(R=>R[f]===h[f])?_.value=E:_.value=[h]}}function en(n){n.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&B(),H(),o?i([],[]):i(null,null)}function nn(n){!he(n,"action")&&!he(n,"empty")&&n.preventDefault()}function tn(n){be(n)}function Ve(n){var o,u,m,c,h;switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((o=w.value)===null||o===void 0)&&o.isComposing)){if(v.value){const f=(u=y.value)===null||u===void 0?void 0:u.getPendingTmNode();f?_e(f):e.filterable||(B(),Ie())}else if(J(),e.tag&&Q.value){const f=_.value[0];if(f){const R=f[e.valueField],{value:je}=x;e.multiple&&Array.isArray(je)&&je.some(an=>an===R)||fe(f)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;v.value&&((m=y.value)===null||m===void 0||m.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;v.value?(c=y.value)===null||c===void 0||c.next():J();break;case"Escape":v.value&&(Ln(n),B()),(h=w.value)===null||h===void 0||h.focus();break}}function Ie(){var n;(n=w.value)===null||n===void 0||n.focus()}function Le(){var n;(n=w.value)===null||n===void 0||n.focusInput()}function on(){var n;!v.value||(n=j.value)===null||n===void 0||n.syncPosition()}ue(),ze(k(e,"options"),ue);const ln={focus:()=>{var n;(n=w.value)===null||n===void 0||n.focus()},blur:()=>{var n;(n=w.value)===null||n===void 0||n.blur()}},De=F(()=>{const{self:{menuBoxShadow:n}}=p.value;return{"--n-menu-box-shadow":n}}),Z=s?Je("select",void 0,De,e):void 0;return Object.assign(Object.assign({},ln),{mergedStatus:t,mergedClsPrefix:l,mergedBordered:a,namespace:r,treeMate:I,isMounted:gn(),triggerRef:w,menuRef:y,pattern:O,uncontrolledShow:P,mergedShow:v,adjustedTo:Be(e),uncontrolledValue:d,mergedValue:x,followerRef:j,localizedPlaceholder:L,selectedOption:ee,selectedOptions:se,mergedSize:D,mergedDisabled:q,focused:T,activeWithoutMenuOpen:Q,inlineThemeDisabled:s,onTriggerInputFocus:ye,onTriggerInputBlur:Se,handleTriggerOrMenuResize:on,handleMenuFocus:Me,handleMenuBlur:Re,handleMenuTabOut:xe,handleTriggerClick:Oe,handleToggle:_e,handleDeleteOption:fe,handlePatternInput:Ye,handleClear:en,handleTriggerBlur:we,handleTriggerFocus:Fe,handleKeydown:Ve,handleMenuAfterLeave:ce,handleMenuClickOutside:ne,handleMenuScroll:tn,handleMenuKeydown:Ve,handleMenuMousedown:nn,mergedTheme:p,cssVars:s?void 0:De,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){return g("div",{class:`${this.mergedClsPrefix}-select`},g(Pn,null,{default:()=>[g(zn,null,{default:()=>g(Cn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),g(Bn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Be.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>g(qe,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,a;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),mn(g(En,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(a=this.menuProps)===null||a===void 0?void 0:a.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,s;return[(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)]},action:()=>{var r,s;return[(s=(r=this.$slots).action)===null||s===void 0?void 0:s.call(r)]}}),this.displayDirective==="show"?[[pn,this.mergedShow],[Ke,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ke,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{En as N,rt as a,Kn as c,ke as m};