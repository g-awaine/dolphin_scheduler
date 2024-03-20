import{u as p,aL as g,a as w,be as F,bt as h,d as b,bI as y,w as C,ba as V,c as e,al as S}from"./index.851b5188.js";import{u as _}from"./index.73124cc7.js";import{v as x,u as j}from"./index.59799c67.js";import{C as E}from"./index.6c124806.js";import{M as k}from"./index.2fc51a01.js";import{s as d}from"./index.module.9c9bd97f.js";import{N as U}from"./Form.9f7fa8c1.js";import{N as q}from"./FormItem.f5b3f80b.js";import{N as c}from"./Space.f9ece73f.js";import{N as m}from"./Button.4e249408.js";import{N as z}from"./Spin.447cad15.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./Card.19bc42e2.js";import"./resolve-slot.9e6a0162.js";import"./index.7a579f81.js";import"./keysOf.ab13e590.js";import"./use-form-item.bb4d7ada.js";import"./format-length.d7d829b3.js";import"./get.aa32335f.js";import"./is-browser.45c3bd93.js";import"./flatten.05a2e46f.js";import"./get-slot.80096ab3.js";import"./fade-in.cssr.55dfcced.js";import"./use-compitable.ae5454ac.js";const R=()=>({content:""});function I(){const{t}=p(),r=()=>{o.fileForm=Object.assign(F(o.fileForm),R())},o=g({fileFormRef:w(),fileForm:R(),rules:{content:{required:!0,trigger:["input","blur"],validator(){if(o.fileForm.content==="")return new Error(t("resource.file.enter_content_tips"))}}}});return{state:o,resetForm:r}}function M(t){const{t:r}=p(),o=h();return{getResourceView:(s,a)=>_(x({skipLineNum:0,limit:3e3,fullName:s,tenantCode:a}),{alias:"",content:""}),handleUpdateContent:(s,a)=>{t.fileFormRef.validate(async l=>{l||(await j({...t.fileForm,tenantCode:a,fullName:s}),window.$message.success(r("resource.file.success")),o.go(-1))})}}}function f(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!S(t)}const ue=b({name:"ResourceEdit",setup(){const t=y(),r=h(),o=t.name,n=String(r.currentRoute.value.query.prefix||""),i=String(r.currentRoute.value.query.tenantCode||""),{state:s}=I(),{getResourceView:a,handleUpdateContent:l}=M(s),v=()=>{s.fileForm.content=u.state.value.content,l(n,i)},N=()=>{r.go(-1)},u=a(n,i);return C(()=>u.state.value.content,()=>s.fileForm.content=u.state.value.content),{componentName:o,resourceViewRef:u,handleReturn:N,handleFileContent:v,...V(s)}},render(){let t,r,o;const{t:n}=p();return e(E,{title:n("resource.file.file_details")},{default:()=>[this.resourceViewRef.isReady.value?e("div",{class:d["file-edit-content"]},[e("h2",null,[e("span",null,[this.resourceViewRef.state.value.alias])]),e(U,{rules:this.rules,ref:"fileFormRef",class:d["form-content"],disabled:this.componentName!=="resource-file-edit"},{default:()=>[e(q,{path:"content"},{default:()=>[e(k,{value:this.resourceViewRef.state.value.content,"onUpdate:value":i=>this.resourceViewRef.state.value.content=i},null)]}),e(c,null,{default:()=>[e(m,{type:"info",size:"small",text:!0,style:{marginRight:"15px"},onClick:this.handleReturn,class:"btn-cancel"},f(t=n("resource.file.return"))?t:{default:()=>[t]}),this.componentName==="resource-file-edit"&&e(m,{type:"info",size:"small",round:!0,onClick:()=>this.handleFileContent(),class:"btn-submit"},f(r=n("resource.file.save"))?r:{default:()=>[r]})]})]})]):e(c,{justify:"center"},{default:()=>[e(c,{vertical:!0},{default:()=>[e(z,{show:!0},null),e(c,null,{default:()=>[e(m,{type:"info",size:"small",text:!0,style:{marginRight:"15px"},onClick:this.handleReturn,class:"btn-cancel"},f(o=n("resource.file.return"))?o:{default:()=>[o]})]})]})]})]})}});export{ue as default};
