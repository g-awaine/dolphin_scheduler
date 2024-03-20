import{u as p,aL as g,a as f,be as N,d as R,at as v,w,ba as y,c as t,al as _}from"./index.851b5188.js";import{M as b}from"./index.e69e8738.js";import{u as C}from"./file.74735815.js";import{f as S,g as U}from"./index.59799c67.js";import{N as D}from"./Form.9f7fa8c1.js";import{N as c}from"./FormItem.f5b3f80b.js";import{N as q}from"./Input.79ba0d48.js";import{N as I}from"./Upload.62ae1afa.js";import{N as M}from"./Button.4e249408.js";import"./index.8acb741a.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./resolve-slot.9e6a0162.js";import"./index.7a579f81.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./utils.f449ed5c.js";import"./is-browser.45c3bd93.js";import"./index.3ef69258.js";import"./Space.f9ece73f.js";import"./get-slot.80096ab3.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./use-form-item.bb4d7ada.js";import"./format-length.d7d829b3.js";import"./get.aa32335f.js";import"./use-locale.f8ac8f2c.js";import"./use-merged-state.e40d3a9f.js";import"./Suffix.21a8a87f.js";import"./Add.3164a73d.js";import"./Image.2f947741.js";import"./Tooltip.52cb9ce9.js";import"./Popover.30015336.js";import"./_baseMap.9542141b.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";const F=()=>({isReupload:!1,fullName:"",user_name:"",name:"",file:"",type:void 0,pid:-1,currentDir:"/"});function j(){const{t:e}=p(),a=()=>{o.uploadForm=Object.assign(N(o.uploadForm),F())},o=g({uploadFormRef:f(),uploadFormNameRef:f(),uploadForm:F(),saving:!1,rules:{name:{required:!0,trigger:["input","blur"],validator(){if(o.uploadForm.name==="")return new Error(e("resource.file.enter_name_tips"))}},file:{required:!0,trigger:["input","blur"],validator(){if(o.uploadForm.file==="")return new Error(e("resource.file.enter_content_tips"))}}}});return{state:o,resetForm:a}}function L(e){const{t:a}=p(),o=C();return{handleUploadFile:async(u,l,m)=>{if(await e.uploadFormRef.validate(),!e.saving){e.saving=!0;try{const r=new FormData;if(r.append("file",e.uploadForm.file),r.append("type",e.uploadForm.type),r.append("name",e.uploadForm.name),r.append("description",e.uploadForm.description),e.uploadForm.isReupload)r.append("user_name",e.uploadForm.user_name),r.append("fullName",e.uploadForm.fullName),r.append("tenantCode",e.uploadForm.user_name),await S(r);else{const n=o.getCurrentDir||"/";r.append("currentDir",n),await U(r)}window.$message.success(a("resource.file.success")),e.saving=!1,u("updateList"),l(),m()}catch{e.saving=!1}}}}}function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}const O={show:{type:Boolean,default:!1},resourceType:{type:String,default:void 0},isReupload:{type:Boolean,default:!1},name:{type:String,default:""},description:{type:String,default:""},fullName:{type:String,default:""},userName:{type:String,default:""}},be=R({name:"ResourceFileUpload",props:O,emits:["updateList","update:show"],setup(e,a){var s;const{state:o,resetForm:i}=j(),{handleUploadFile:u}=L(o),l=()=>{i(),a.emit("update:show")},m=({file:d})=>{o.uploadForm.name=d.name,o.uploadForm.file=d.file,o.uploadFormRef.validate()},r=()=>{u(a.emit,l,i)},n=()=>{o.uploadForm.name="",o.uploadForm.file=""},h=(s=v())==null?void 0:s.appContext.config.globalProperties.trim;return w(()=>e.show,()=>{o.uploadForm.type=e.resourceType,o.uploadForm.isReupload=e.isReupload,e.isReupload&&e.show&&(o.uploadForm.fullName=e.fullName,o.uploadForm.name=e.name,o.uploadForm.user_name=e.userName)}),{hideModal:l,customRequest:m,handleFile:r,removeFile:n,...y(o),trim:h}},render(){let e;const{t:a}=p();return t(b,{show:this.$props.show,title:a("resource.file.upload_files"),onCancel:this.hideModal,onConfirm:this.handleFile,confirmClassName:"btn-submit",cancelClassName:"btn-cancel",confirmLoading:this.saving},{default:()=>[t(D,{rules:this.rules,ref:"uploadFormRef"},{default:()=>[t(c,{label:a("resource.file.file_name"),path:"name",ref:"uploadFormNameRef"},{default:()=>[t(q,{allowInput:this.trim,value:this.uploadForm.name,"onUpdate:value":o=>this.uploadForm.name=o,placeholder:a("resource.file.enter_name_tips"),class:"input-file-name"},null)]}),t(c,{label:a("resource.file.upload_files"),path:"file"},{default:()=>[t(I,{value:this.uploadForm.file,"onUpdate:value":o=>this.uploadForm.file=o,customRequest:this.customRequest,class:"btn-upload",max:1,onRemove:this.removeFile},{default:()=>[t(M,null,B(e=a("resource.file.upload_files"))?e:{default:()=>[e]})]})]})]})]})}});export{be as default};
