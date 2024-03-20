import{M as L}from"./index.e69e8738.js";import{g as B,h as O,d as M,m as S,l as k,n as g,s as K,t as v,au as V,q as C,u as R,aL as E,a as n,at as F,w as f,ba as G,c as a,ai as y}from"./index.851b5188.js";import{v as P,c as T,u as q}from"./index.41692750.js";import{a as D}from"./index.578616c5.js";import{u as U}from"./index.73124cc7.js";import{N as j}from"./Form.9f7fa8c1.js";import{N as p}from"./FormItem.f5b3f80b.js";import{N as h}from"./Input.79ba0d48.js";import{a as $}from"./Select.3e0f2c28.js";import{N as w}from"./InputGroup.205f411e.js";import"./index.8acb741a.js";import"./Button.4e249408.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./resolve-slot.9e6a0162.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./index.7a579f81.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./utils.f449ed5c.js";import"./index.3ef69258.js";import"./Space.f9ece73f.js";import"./get-slot.80096ab3.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./format-length.d7d829b3.js";import"./get.aa32335f.js";import"./use-locale.f8ac8f2c.js";import"./use-merged-state.e40d3a9f.js";import"./Suffix.21a8a87f.js";import"./use-compitable.ae5454ac.js";import"./Selection.28a32045.js";import"./Popover.30015336.js";import"./_baseMap.9542141b.js";import"./next-frame-once.e5ee25e8.js";const A=B("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[O("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),H=Object.assign(Object.assign({},k.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),_=M({name:"InputGroupLabel",props:H,setup(e){const{mergedBorderedRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:s}=S(e),c=k("Input","-input-group-label",A,V,e,t),d=g(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:l},self:{groupLabelColor:i,borderRadius:m,groupLabelTextColor:b,lineHeight:N,groupLabelBorder:I,[C("fontSize",u)]:z,[C("height",u)]:x}}=c.value;return{"--n-bezier":l,"--n-group-label-color":i,"--n-group-label-border":I,"--n-border-radius":m,"--n-group-label-text-color":b,"--n-font-size":z,"--n-line-height":N,"--n-height":x}}),r=s?K("input-group-label",g(()=>e.size[0]),d,e):void 0;return{mergedClsPrefix:t,mergedBordered:o,cssVars:s?void 0:d,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e,o,t;const{mergedClsPrefix:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${s}-input-group-label`,this.themeClass],style:this.cssVars},(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o),this.mergedBordered?v("div",{class:`${s}-input-group-label__border`}):null)}});function J(e,o){const{t}=R(),s=E({k8sNamespaceFormRef:n(),model:{id:n(-1),namespace:n(""),clusterCode:n(""),userId:n(""),limitsCpu:n(""),limitsMemory:n(""),clusterOptions:[]},saving:!1,rules:{namespace:{required:!0,trigger:["input","blur"],validator(){if(s.model.namespace==="")return new Error(t("security.k8s_namespace.k8s_namespace_tips"))}},clusterCode:{required:!0,trigger:["input","blur"],validator(){if(s.model.clusterCode==="")return new Error(t("security.k8s_namespace.k8s_cluster_tips"))}}}}),c=async l=>{if(await s.k8sNamespaceFormRef.validate(),!s.saving){s.saving=!0;try{l===0?await r():await u(),s.saving=!1}catch{s.saving=!1}}},d=()=>{const{state:l}=U(D().then(i=>{s.model.clusterOptions=i.filter(m=>m.config?!!JSON.parse(m.config).k8s:!1).map(m=>({label:m.name,value:m.code}))}),{});return l},r=()=>{P(s.model).then(()=>{T(s.model).then(()=>{s.model.namespace="",s.model.clusterCode="",s.model.limitsCpu="",s.model.limitsMemory="",s.model.userId="",o.emit("confirmModal",e.showModalRef)})})},u=()=>{q(s.model,s.model.id).then(l=>{o.emit("confirmModal",e.showModalRef)})};return{variables:s,handleValidate:c,getListData:d}}const Fe=M({name:"YarnQueueModal",props:{showModalRef:{type:Boolean,default:!1},statusRef:{type:Number,default:0},row:{type:Object,default:{}}},emits:["cancelModal","confirmModal"],setup(e,o){var i;const{variables:t,handleValidate:s,getListData:c}=J(e,o),{t:d}=R(),r=()=>{e.statusRef===0&&(t.model.namespace="",t.model.clusterCode="",t.model.limitsCpu="",t.model.limitsMemory="",t.model.userId=""),o.emit("cancelModal",e.showModalRef)},u=()=>{s(e.statusRef)},l=(i=F())==null?void 0:i.appContext.config.globalProperties.trim;return f(()=>e.showModalRef,()=>{e.showModalRef&&c()}),f(()=>e.statusRef,()=>{e.statusRef===0?(t.model.namespace="",t.model.clusterCode="",t.model.limitsCpu="",t.model.limitsMemory="",t.model.userId=""):(t.model.id=e.row.id,t.model.namespace=e.row.namespace,t.model.clusterCode=e.row.clusterCode,t.model.limitsCpu=e.row.limitsCpu+"",t.model.limitsMemory=e.row.limitsMemory+"",t.model.userId=e.row.userId)}),f(()=>e.row,()=>{t.model.id=e.row.id,t.model.namespace=e.row.namespace,t.model.clusterCode=e.row.clusterCode,t.model.limitsCpu=e.row.limitsCpu+"",t.model.limitsMemory=e.row.limitsMemory+"",t.model.userId=e.row.userId}),{t:d,...G(t),cancelModal:r,confirmModal:u,trim:l}},render(){const{t:e}=this;return a("div",null,[a(L,{title:this.statusRef===0?e("security.k8s_namespace.create_namespace"):e("security.k8s_namespace.edit_namespace"),show:this.showModalRef,onCancel:this.cancelModal,onConfirm:this.confirmModal,confirmDisabled:!this.model.namespace||this.model.clusterCode==null||this.model.clusterCode==="",confirmLoading:this.saving},{default:()=>a(j,{model:this.model,rules:this.rules,ref:"k8sNamespaceFormRef"},{default:()=>[a(p,{label:e("security.k8s_namespace.k8s_namespace"),path:"namespace"},{default:()=>[a(h,{allowInput:this.trim,placeholder:e("security.k8s_namespace.k8s_namespace_tips"),value:this.model.namespace,"onUpdate:value":o=>this.model.namespace=o,disabled:this.statusRef!==0},null)]}),a(p,{label:e("security.k8s_namespace.k8s_cluster"),path:"clusterCode"},{default:()=>[a($,{placeholder:e("security.k8s_namespace.k8s_cluster_tips"),options:this.model.clusterOptions,value:this.model.clusterCode,"onUpdate:value":o=>this.model.clusterCode=o,disabled:this.statusRef!==0},null)]}),a(p,{label:e("security.k8s_namespace.limit_cpu"),path:"limitsCpu"},{default:()=>[a(w,null,{default:()=>[a(h,{allowInput:this.trim,placeholder:e("security.k8s_namespace.limit_cpu_tips"),value:this.model.limitsCpu,"onUpdate:value":o=>this.model.limitsCpu=o},null),a(_,null,{default:()=>[y("CORE")]})]})]}),a(p,{label:e("security.k8s_namespace.limit_memory"),path:"limitsMemory"},{default:()=>[a(w,null,{default:()=>[a(h,{allowInput:this.trim,placeholder:e("security.k8s_namespace.limit_memory_tips"),value:this.model.limitsMemory,"onUpdate:value":o=>this.model.limitsMemory=o},null),a(_,null,{default:()=>[y("GB")]})]})]})]})})])}});export{Fe as default};
