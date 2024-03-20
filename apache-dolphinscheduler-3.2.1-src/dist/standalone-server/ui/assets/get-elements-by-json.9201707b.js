import{d as b,a as G,t as s,b7 as D,b8 as q,b9 as V,aL as E,ba as B,c as N,F as O,be as f,al as T,M as w,z as L}from"./index.851b5188.js";import{N as K}from"./Form.9f7fa8c1.js";import{a as C,g as H,b as J,N as I}from"./Grid.3ae564e0.js";import{N as Y}from"./Spin.447cad15.js";import{l as d}from"./lodash.68b7405b.js";import{N as z}from"./Input.79ba0d48.js";import{N as P}from"./Radio.fc32ca3b.js";import{N as x}from"./Space.f9ece73f.js";import{N as Q}from"./RadioGroup.c3ead4f3.js";import{M as W}from"./index.2fc51a01.js";import{u as _}from"./use-form-item.bb4d7ada.js";import{D as k}from"./DeleteOutlined.07e1d3fe.js";import{N as v}from"./Button.4e249408.js";import{N as X,b as Z,c as ee}from"./FormItem.f5b3f80b.js";import{k as $}from"./index.e739cd60.js";import{N as te}from"./Switch.f95d65b1.js";import{N as oe}from"./InputNumber.cc83334e.js";import{a as re}from"./Select.3e0f2c28.js";import{a as M,N as ne}from"./Checkbox.98b84c16.js";import{N as se}from"./TreeSelect.5a0f3466.js";const ae=Object.assign(Object.assign({},H),Z),F=b({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:ae,setup(){const e=G(null);return{formItemInstRef:e,validate:(...o)=>{const{value:a}=e;if(a)return a.validate(...o)},restoreValidation:()=>{const{value:o}=e;if(o)return o.restoreValidation()}}},render(){return s(C,$(this.$.vnode.props||{},J),{default:()=>{const e=$(this.$props,ee);return s(X,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}}),ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},le=V("defs",null,null,-1),ue=V("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",fill:"currentColor"},null,-1),ce=V("path",{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",fill:"currentColor"},null,-1),de=[le,ue,ce],R=b({name:"PlusOutlined",render:function(t,r){return D(),q("svg",ie,de)}});function pe(){const e=E({formRef:G()}),t=async(...c)=>{await e.formRef.validate(...c)},r=c=>{const l=Object.keys(e.formRef.model);for(const n of l)Object.keys(c).includes(n)||delete e.formRef.model[n];o(c)},o=c=>{for(const[l,n]of Object.entries(c))e.formRef.model[l]=n};return{state:e,validate:t,setValues:o,getValues:()=>e.formRef.model,resetValues:r,restoreValidation:()=>{e.formRef.restoreValidation()}}}function j(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const me={meta:{type:Object,default:{},required:!0},layout:{type:Object},loading:{type:Boolean,default:!1}},Qe=b({name:"DSForm",props:me,setup(e,{expose:t}){const{state:r,...o}=pe();return t({...o}),{...B(r)}},render(e){let t;const{loading:r,layout:o,meta:a}=e,{elements:i=[],...c}=a;return N(Y,{show:r},{default:()=>[N(K,O(c,{rules:a.rules,ref:"formRef"}),{default:()=>[N(I,o,j(t=i.map(l=>{let n;const{span:u=24,path:p,widget:m,...h}=l;return N(F,O(h,{span:f(u)===void 0?24:f(u),path:p,key:p||String(Date.now()+Math.random())}),j(n=s(m))?n:{default:()=>[n]})}))?t:{default:()=>[t]})]})]})}});function S(e){return e?(Array.isArray(e)&&e.forEach(t=>(t!=null&&t.message||delete t.message,t)),e.message||delete e.message,e):{}}function fe(e,t){const{props:r,field:o}=d.exports.isFunction(e)?e():e;return s(z,{...r,value:t[o],onUpdateValue:a=>void(t[o]=a)})}function he(e,t){const{props:r,field:o,options:a}=d.exports.isFunction(e)?e():e;return a?s(Q,{...r,value:t[o],onUpdateValue:i=>void(t[o]=i)},()=>s(x,null,()=>f(a).map(i=>s(P,i,()=>i.label)))):s(P,{...r,value:t[o],onUpdateChecked:i=>void(t[o]=i)})}function ge(e,t){const{props:r,field:o}=d.exports.isFunction(e)?e():e;return s(W,{options:r,value:t[o],onUpdateValue:a=>void(t[o]=a)})}const be=b({name:"CustomParameters",emits:["add"],setup(e,t){const r=_({});return{onAdd:()=>void t.emit("add"),disabled:r.mergedDisabledRef}},render(){const{disabled:e,$slots:t,onAdd:r}=this;return s(x,{vertical:!0,style:{width:"100%"}},{default:()=>[w(t,"default",{disabled:e}),s(v,{circle:!0,size:"small",type:"info",class:"btn-create-custom-parameter",disabled:e,onClick:r},{icon:()=>s(R)})]})}}),ve=e=>{const t={},r={},o=(a,i,c)=>{a.forEach(l=>{const n=d.exports.isFunction(l)?l():l;if(Array.isArray(n.children)){const u={},p={};o(n.children,u,p),i[n.field]=[u],c[n.field]={type:"array",fields:p};return}else i[n.field]=n.value||null,n.validate&&(c[n.field]=S(n.validate))})};return o(e,t,r),{defaultValue:t,ruleItem:r}};function ye(e,t,r){const o=d.exports.isFunction(e)?e():e,{field:a,children:i=[]}=o,{defaultValue:c,ruleItem:l}=ve(i);r.push(l);const n=(p,m,h)=>i.map(y=>{const g=d.exports.isFunction(y)?y(m):y;return s(F,{showLabel:!!g.name,path:g.path||`${a}[${m}].${g.field}`,label:g.name,span:f(g.span),class:g.class,rule:g.rule},()=>A(g,p))});return s(be,{onAdd:()=>{r.push(l),t[a].push({...c})}},{default:({disabled:p})=>t[a].map((m,h)=>s(I,{xGap:10},()=>[...n(m,h),s(C,{span:2},()=>s(v,{circle:!0,type:"error",size:"small",disabled:p,class:"btn-delete-custom-parameter",onClick:()=>{t[a].splice(h,1),r.splice(h,1)}},{icon:()=>s(k)}))]))})}function xe(e,t){const{props:r,field:o,slots:a={}}=d.exports.isFunction(e)?e():e;return s(te,{...r,value:t[o],onUpdateValue:i=>void(t[o]=i)},{...a})}function Ne(e,t){const{props:r,field:o,slots:a={}}=d.exports.isFunction(e)?e():e;return s(oe,{...r,value:t[o],onUpdateValue:i=>void(t[o]=i)},{...a})}function Ce(e,t){const{props:r,field:o,options:a=[]}=d.exports.isFunction(e)?e():e;return s(re,{...r,value:t[o],onUpdateValue:i=>{t[o]=i,r!=null&&r.onUpdateValue&&r.onUpdateValue(i)},options:f(a)})}function Ie(e,t){const{props:r,field:o,options:a}=d.exports.isFunction(e)?e():e;return a?s(ne,{value:t[o],onUpdateValue:i=>void(t[o]=i)},()=>s(x,null,()=>f(a).map(i=>s(M,{...i})))):s(M,{...r,value:t[o],onUpdateChecked:i=>void(t[o]=i)})}function Fe(e,t){const{props:r={},field:o,options:a=[]}=d.exports.isFunction(e)?e():e;return s(se,{...r,value:t[o],onUpdateValue:i=>void(t[o]=i),options:f(a)})}const Ve=b({name:"MultiInput",emits:["add"],setup(e,t){const r=_({});return{onAdd:()=>void t.emit("add"),disabled:r.mergedDisabledRef}},render(){const{disabled:e,$slots:t,onAdd:r}=this;return s(x,{vertical:!0,style:{width:"100%"}},{default:()=>[w(t,"default",{disabled:e}),s(v,{circle:!0,size:"small",type:"info",disabled:e,onClick:r},{icon:()=>s(R)})]})}});function we(e,t,r){const{field:o}=d.exports.isFunction(e)?e():e,a=(c,l)=>{const n=d.exports.isFunction(e)?e():e;return s(F,{showLabel:!1,path:`${n.field}[${l}]`,span:f(n.span)},()=>s(z,{...n.props,value:c,onUpdateValue:u=>void(t[n.field][l]=u)}))};return s(Ve,{name:o,onAdd:()=>{t[o].push("")}},{default:({disabled:c})=>t[o].map((l,n)=>s(I,{xGap:10},()=>[a(l,n),s(C,{span:2},()=>s(v,{circle:!0,type:"error",size:"small",disabled:c,onClick:()=>{t[o].splice(n,1)}},{icon:()=>s(k)}))]))})}const _e=b({name:"MultiCondition",emits:["add"],setup(e,t){const r=_({});return{onAdd:()=>void t.emit("add"),disabled:r.mergedDisabledRef}},render(){const{disabled:e,$slots:t,onAdd:r}=this;return s(x,{vertical:!0,style:{width:"100%"}},{default:()=>[w(t,"default",{disabled:e}),s(v,{circle:!0,size:"tiny",type:"info",disabled:e,onClick:r},{icon:()=>s(R)})]})}});function ke(e,t){const r={},{field:o,children:a=[]}=d.exports.isFunction(e)?e():e;a.forEach(l=>{const n=d.exports.isFunction(l)?l():l;n.validate&&(r[n.field]=S(n.validate))});const i=(l,n)=>a.map(u=>{const p=d.exports.isFunction(u)?u():u;return s(F,{showLabel:!!u.name,label:u.name?u.name:"",path:`${t[o]}[${n}].${p.field}`,span:f(p.span)},()=>A(u,t[o][n]))});return s(_e,{name:o,onAdd:()=>{const l={};a.map(n=>{const{field:u}=d.exports.isFunction(n)?n():n;u&&(l[u]=null)}),t[o].push(l)}},{default:({disabled:l})=>t[o].map((n,u)=>s(I,{xGap:10},()=>[...i(n,u),s(C,{span:2,style:{alignSelf:"center"}},()=>s(v,{circle:!0,type:"error",size:"tiny",disabled:l,onClick:()=>{t[o].splice(u,1)}},{icon:()=>s(k)}))]))})}const U=Object.freeze(Object.defineProperty({__proto__:null,renderInput:fe,renderRadio:he,renderEditor:ge,renderCustomParameters:ye,renderSwitch:xe,renderInputNumber:Ne,renderSelect:Ce,renderCheckbox:Ie,renderTreeSelect:Fe,renderMultiInput:we,renderMultiCondition:ke},Symbol.toStringTag,{value:"Module"})),Re=["input","radio","editor","custom-parameters","custom-labels","switch","input-number","select","checkbox","tree-select","multi-input","custom","multi-condition"],A=(e,t,r)=>{const{type:o="input",widget:a,field:i}=d.exports.isFunction(e)?e():e;if(!Re.includes(o))return null;const c=`render${d.exports.upperFirst(d.exports.camelCase(o))}`;if(o==="custom")return a||null;if(o==="custom-parameters"){let l=[];return r&&!r[i]&&(l=r[i]=[]),U[c](e,t,l)}return U[c](e,t)};function We(e,t){const r={},o={},a=[];for(const i of e){const c=d.exports.isFunction(i)?i():i,{name:l,value:n,field:u,children:p,validate:m,...h}=c;(n||n===0)&&(t[u]=n,o[u]=n),m&&(r[u]=S(m));const y={showLabel:!!l,...d.exports.omit(h,["type","props","options"]),label:l,path:p?"":u,widget:()=>A(i,t,r),span:L(c,"span")};a.push(y)}return{rules:r,elements:a,initialValues:o}}export{Qe as F,We as g};