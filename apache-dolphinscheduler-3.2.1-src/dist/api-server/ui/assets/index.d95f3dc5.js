import{s as k}from"./service.4be3af67.js";import{A as J,af as te,n as R,aq as Z,f as N,g as P,i as V,h as G,d as _,m as Q,a as E,e as I,w as q,z as H,l as O,s as X,t as d,bB as le,an as re,Z as se,y as ie,B as ae,T as ce,J as D,C as A,by as ue,u as de,aL as fe,$ as he,ba as me,c as K}from"./index.851b5188.js";import{M as ge}from"./index.e69e8738.js";import{D as be}from"./DownloadOutlined.2b4ed5b8.js";import{S as pe}from"./SyncOutlined.95d4ed16.js";import{F as ve,a as we}from"./FullscreenOutlined.01f40161.js";import{u as je}from"./use-locale.f8ac8f2c.js";import{f as xe}from"./fade-in-scale-up.cssr.5737b1c6.js";import{t as $e}from"./throttle.821ebb8d.js";import{N as Ce}from"./Scrollbar.7a99b971.js";import{N as Re}from"./Icon.afc45566.js";function ee(e,o){const n=J(te,null);return R(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}const Le=e=>{const{textColor2:o,fontSize:n,fontWeightStrong:t,textColor3:l}=e;return{textColor:o,fontSize:n,fontWeightStrong:t,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:l}},ye={name:"Code",common:Z,self:Le},oe=ye,Se=N([P("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[V("show-line-numbers",`
 display: flex;
 `),G("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),V("word-wrap",[N("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),N("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),N("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const o=`${e.bPrefix}code`;return[`${o} .hljs-comment,
 ${o} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${o} .hljs-doctag,
 ${o} .hljs-keyword,
 ${o} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${o} .hljs-section,
 ${o} .hljs-name,
 ${o} .hljs-selector-tag,
 ${o} .hljs-deletion,
 ${o} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${o} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${o} .hljs-string,
 ${o} .hljs-regexp,
 ${o} .hljs-addition,
 ${o} .hljs-attribute,
 ${o} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${o} .hljs-built_in,
 ${o} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${o} .hljs-attr,
 ${o} .hljs-variable,
 ${o} .hljs-template-variable,
 ${o} .hljs-type,
 ${o} .hljs-selector-class,
 ${o} .hljs-selector-attr,
 ${o} .hljs-selector-pseudo,
 ${o} .hljs-number {
 color: var(--n-hue-6);
 }`,`${o} .hljs-symbol,
 ${o} .hljs-bullet,
 ${o} .hljs-link,
 ${o} .hljs-meta,
 ${o} .hljs-selector-id,
 ${o} .hljs-title {
 color: var(--n-hue-2);
 }`,`${o} .hljs-emphasis {
 font-style: italic;
 }`,`${o} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${o} .hljs-link {
 text-decoration: underline;
 }`]}]),Fe=Object.assign(Object.assign({},O.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Te=_({name:"Code",props:Fe,setup(e,{slots:o}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Q(),r=E(null),v=n?{value:void 0}:ee(e),w=(s,f,u)=>{const{value:h}=v;return!h||!(s&&h.getLanguage(s))?null:h.highlight(u?f.trim():f,{language:s}).value},y=R(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),p=()=>{if(o.default)return;const{value:s}=r;if(!s)return;const{language:f}=e,u=e.uri?window.decodeURIComponent(e.code):e.code;if(f){const c=w(f,u,e.trim);if(c!==null){if(e.inline)s.innerHTML=c;else{const i=s.querySelector(".__code__");i&&s.removeChild(i);const a=document.createElement("pre");a.className="__code__",a.innerHTML=c,s.appendChild(a)}return}}if(e.inline){s.textContent=u;return}const h=s.querySelector(".__code__");if(h)h.textContent=u;else{const c=document.createElement("pre");c.className="__code__",c.textContent=u,s.innerHTML="",s.appendChild(c)}};I(p),q(H(e,"language"),p),q(H(e,"code"),p),n||q(v,p);const S=O("Code","-code",Se,oe,e,t),F=R(()=>{const{common:{cubicBezierEaseInOut:s,fontFamilyMono:f},self:{textColor:u,fontSize:h,fontWeightStrong:c,lineNumberTextColor:i,"mono-3":a,"hue-1":x,"hue-2":$,"hue-3":m,"hue-4":T,"hue-5":z,"hue-5-2":M,"hue-6":C,"hue-6-2":g}}=S.value,{internalFontSize:W}=e;return{"--n-font-size":W?`${W}px`:h,"--n-font-family":f,"--n-font-weight-strong":c,"--n-bezier":s,"--n-text-color":u,"--n-mono-3":a,"--n-hue-1":x,"--n-hue-2":$,"--n-hue-3":m,"--n-hue-4":T,"--n-hue-5":z,"--n-hue-5-2":M,"--n-hue-6":C,"--n-hue-6-2":g,"--n-line-number-text-color":i}}),j=l?X("code",R(()=>`${e.internalFontSize||"a"}`),F,e):void 0;return{mergedClsPrefix:t,codeRef:r,mergedShowLineNumbers:y,lineNumbers:R(()=>{let s=1;const f=[];let u=!1;for(const h of e.code)h===`
`?(u=!0,f.push(s++)):u=!1;return u||f.push(s++),f.join(`
`)}),cssVars:l?void 0:F,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){var e,o;const{mergedClsPrefix:n,wordWrap:t,mergedShowLineNumbers:l,onRender:r}=this;return r==null||r(),d("code",{class:[`${n}-code`,this.themeClass,t&&`${n}-code--word-wrap`,l&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},l?d("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))}}),ke=e=>{const{textColor2:o,modalColor:n,borderColor:t,fontSize:l,primaryColor:r}=e;return{loaderFontSize:l,loaderTextColor:o,loaderColor:n,loaderBorder:`1px solid ${t}`,loadingColor:r}},ze=le({name:"Log",common:Z,peers:{Scrollbar:re,Code:oe},self:ke}),Me=ze,Ne=_({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:je("Log").localeRef}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-log-loader`},d(se,{clsPrefix:e,strokeWidth:24,scale:.85}),d("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),ne=ie("n-log"),Ee=_({props:{line:{type:String,default:""}},setup(e){const{trimRef:o,highlightRef:n,languageRef:t,mergedHljsRef:l}=J(ne),r=E(null),v=R(()=>o.value?e.line.trim():e.line);function w(){r.value&&(r.value.innerHTML=y(t.value,v.value))}function y(p,S){const{value:F}=l;return F&&p&&F.getLanguage(p)?F.highlight(S,{language:p}).value:S}return I(()=>{n.value&&w()}),q(H(e,"line"),()=>{n.value&&w()}),{highlight:n,selfRef:r,maybeTrimmedLines:v}},render(){const{highlight:e,maybeTrimmedLines:o}=this;return d("pre",{ref:"selfRef"},e?null:o)}}),He=P("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[N("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),P("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[xe(),G("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),P("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),_e=Object.assign(Object.assign({},O.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),Be=_({name:"Log",props:_e,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=Q(e),t=E(!1),l=R(()=>e.language!==void 0),r=R(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),v=R(()=>{const{log:i}=e;return i?i.split(`
`):e.lines}),w=E(null),y=O("Log","-log",He,Me,e,o);function p(i){const a=i.target,x=a.firstElementChild;if(t.value){D(()=>{t.value=!1});return}const $=a.offsetHeight,m=a.scrollTop,T=x.offsetHeight,z=m,M=T-m-$;if(z<=e.offsetTop){const{onReachTop:C,onRequireMore:g}=e;g&&g("top"),C&&C()}if(M<=e.offsetBottom){const{onReachBottom:C,onRequireMore:g}=e;g&&g("bottom"),C&&C()}}const S=$e(F,300);function F(i){if(t.value){D(()=>{t.value=!1});return}if(w.value){const{containerRef:a,contentRef:x}=w.value;if(a&&x){const $=a.offsetHeight,m=a.scrollTop,T=x.offsetHeight,z=m,M=T-m-$,C=i.deltaY;if(z===0&&C<0){const{onRequireMore:g}=e;g&&g("top")}if(M<=0&&C>0){const{onRequireMore:g}=e;g&&g("bottom")}}}}function j(i){const{value:a}=w;if(!a)return;const{slient:x,top:$,position:m}=i;x&&(t.value=!0),$!==void 0?a.scrollTo({left:0,top:$}):(m==="bottom"||m==="top")&&a.scrollTo({position:m})}function s(i=!1){A("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),j({position:"top",slient:i})}function f(i=!1){A("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),j({position:"bottom",slient:i})}ae(ne,{languageRef:H(e,"language"),mergedHljsRef:ee(e),trimRef:H(e,"trim"),highlightRef:l});const u={scrollTo:j},h=R(()=>{const{self:{loaderFontSize:i,loaderTextColor:a,loaderColor:x,loaderBorder:$,loadingColor:m},common:{cubicBezierEaseInOut:T}}=y.value;return{"--n-bezier":T,"--n-loader-font-size":i,"--n-loader-border":$,"--n-loader-color":x,"--n-loader-text-color":a,"--n-loading-color":m}}),c=n?X("log",void 0,h,e):void 0;return Object.assign(Object.assign({},u),{mergedClsPrefix:o,scrollbarRef:w,mergedTheme:y,styleHeight:r,mergedLines:v,scrollToTop:s,scrollToBottom:f,handleWheel:S,handleScroll:p,cssVars:n?void 0:h,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:o,onRender:n}=this;return n==null||n(),d("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[d(Ce,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>d(Te,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:o.peers.Code,themeOverrides:o.peerOverrides.Code},{default:()=>this.mergedLines.map((t,l)=>d(Ee,{key:l,line:t}))})}),d(ce,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?d(Ne,{clsPrefix:e}):null})])}});function Ze(e,o){return k({url:`/projects/${o.projectCode}/task-instances`,method:"get",params:e})}function Ge(e,o){return k({url:`/projects/${o.projectCode}/task-instances/${e.id}/force-success`,method:"post"})}function Qe(e){ue.downloadFile("log/download-log",{taskInstanceId:e})}function Xe(e,o){return k({url:`projects/${e}/task-instances/${o}/stop`,method:"post"})}function eo(e,o){return k({url:`projects/${e}/task-instances/${o}/savepoint`,method:"post"})}function oo(e,o){return k({url:`projects/${e}/task-instances/${o}/remove-cache`,method:"delete"})}function no(e){return k({url:"/log/detail",method:"get",params:e})}const U=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],L=(()=>{if(typeof document>"u")return!1;const e=U[0],o={};for(const n of U)if((n==null?void 0:n[1])in document){for(const[l,r]of n.entries())o[e[l]]=r;return o}return!1})(),Y={change:L.fullscreenchange,error:L.fullscreenerror};let b={request(e=document.documentElement,o){return new Promise((n,t)=>{const l=()=>{b.off("change",l),n()};b.on("change",l);const r=e[L.requestFullscreen](o);r instanceof Promise&&r.then(l).catch(t)})},exit(){return new Promise((e,o)=>{if(!b.isFullscreen){e();return}const n=()=>{b.off("change",n),e()};b.on("change",n);const t=document[L.exitFullscreen]();t instanceof Promise&&t.then(n).catch(o)})},toggle(e,o){return b.isFullscreen?b.exit():b.request(e,o)},onchange(e){b.on("change",e)},onerror(e){b.on("error",e)},on(e,o){const n=Y[e];n&&document.addEventListener(n,o,!1)},off(e,o){const n=Y[e];n&&document.removeEventListener(n,o,!1)},raw:L};Object.defineProperties(b,{isFullscreen:{get:()=>Boolean(document[L.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return(e=document[L.fullscreenElement])!=null?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[L.fullscreenEnabled])}});L||(b={isEnabled:!1});const B=b,Pe={showModalRef:{type:Boolean,default:!1},logRef:{type:String,default:""},logLoadingRef:{type:Boolean,default:!1},row:{type:Object,default:{}},showDownloadLog:{type:Boolean,default:!1}},to=_({name:"log-modal",props:Pe,emits:["confirmModal","refreshLogs","downloadLogs"],setup(e,o){const{t:n}=de(),t=fe({isFullscreen:!1}),l=()=>{t.isFullscreen=B.isFullscreen},r=S=>()=>d(Re,null,{default:()=>d(S)}),v=()=>{t.isFullscreen=!1,o.emit("confirmModal",e.showModalRef)},w=()=>{o.emit("refreshLogs",e.row)},y=()=>{B.toggle(document.querySelectorAll(".logModalRef")[0])},p=()=>{o.emit("downloadLogs",e.row)};return I(()=>{B.on("change",l)}),he(()=>{B.on("change",l)}),{t:n,renderIcon:r,confirmModal:v,refreshLogs:w,downloadLogs:p,handleFullScreen:y,...me(t)}},render(){const{t:e,renderIcon:o,refreshLogs:n,downloadLogs:t,isFullscreen:l,handleFullScreen:r,showDownloadLog:v}=this;return K(ge,{class:"logModalRef",title:e("project.task.view_log"),show:this.showModalRef,cancelShow:!1,onConfirm:this.confirmModal,style:{width:"60%"},headerLinks:E([{text:e("project.workflow.download_log"),show:v,action:t,icon:o(be)},{text:e("project.task.refresh"),show:!0,action:n,icon:o(pe)},{text:e(l?"project.task.cancel_full_screen":"project.task.enter_full_screen"),show:!0,action:r,icon:o(l?ve:we)}])},{default:()=>[K(Be,{rows:30,log:this.logRef,loading:this.logLoadingRef,style:{height:l?"calc(100vh - 140px)":"525px"}},null)]})}});export{to as L,no as a,eo as b,Qe as d,Ge as f,Ze as q,oo as r,Xe as s};
