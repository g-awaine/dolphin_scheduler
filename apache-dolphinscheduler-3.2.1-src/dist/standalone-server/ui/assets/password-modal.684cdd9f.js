import{u as P,bq as R,aL as v,a as _,d as N,at as b,w as y,ba as I,c as o}from"./index.851b5188.js";import{l as g}from"./lodash.68b7405b.js";import{u as D}from"./index.58f13220.js";import{M as S}from"./index.e69e8738.js";import{N as C}from"./Form.9f7fa8c1.js";import{N as p}from"./FormItem.f5b3f80b.js";import{N as f}from"./Input.79ba0d48.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./index.8acb741a.js";import"./Button.4e249408.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./resolve-slot.9e6a0162.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./index.7a579f81.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./utils.f449ed5c.js";import"./index.3ef69258.js";import"./Space.f9ece73f.js";import"./get-slot.80096ab3.js";import"./format-length.d7d829b3.js";import"./get.aa32335f.js";import"./use-locale.f8ac8f2c.js";import"./use-merged-state.e40d3a9f.js";import"./Suffix.21a8a87f.js";function U(){const{t:r}=P(),n=R().getUserInfo.userType==="ADMIN_USER",i={userName:"",userPassword:"",confirmPassword:""},s=v({formRef:_(),formData:{...i},saving:!1,loading:!1});function u(a,e){return!!s.formRef.model.userPassword&&s.formRef.model.userPassword.startsWith(e)&&s.formRef.model.userPassword.length>=e.length}function m(a,e){return e===s.formRef.model.userPassword}const l={userPassword:{trigger:["input","blur"],required:!0,validator(a,e){if(!e||!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]+$)[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9A-Za-z]{6,22}$/.test(e))return new Error(r("security.user.user_password_tips"))}},confirmPassword:[{trigger:["input","blur"],required:!0},{validator:u,message:r("security.user.confirm_password_tips"),trigger:["input"]},{validator:m,message:r("security.user.confirm_password_tips"),trigger:["blur","password-input"]}]};return{state:s,formRules:l,IS_ADMIN:n,onReset:()=>{s.formData={...i}},onSave:async a=>{try{if(await s.formRef.validate(),s.saving)return!1;s.saving=!0;const e={...g.exports.pick(a,["id","userName","tenantId","email","queue","phone","state"]),userPassword:s.formData.userPassword};return await D(e),s.saving=!1,!0}catch{return s.saving=!1,!1}},onSetValues:a=>{s.formData={...g.exports.pick(a,["userName"]),userPassword:"",confirmPassword:""}}}}const $={show:{type:Boolean,default:!1},currentRecord:{type:Object,default:{}}},dr=N({name:"password-modal",props:$,emits:["cancel","update"],setup(r,t){var a;const{t:c}=P(),{state:n,IS_ADMIN:i,formRules:s,onReset:u,onSave:m,onSetValues:l}=U(),d=()=>{u(),t.emit("cancel")},w=async()=>{var e;(e=r.currentRecord)!=null&&e.id&&!await m(r.currentRecord)||(d(),t.emit("update"))},h=(a=b())==null?void 0:a.appContext.config.globalProperties.trim;return y(()=>r.show,()=>{var e;r.show&&((e=r.currentRecord)==null?void 0:e.id)&&l(r.currentRecord)}),{t:c,...I(n),IS_ADMIN:i,formRules:s,onCancel:d,onConfirm:w,trim:h}},render(){const{t:r}=this;return o(S,{show:this.show,title:r("security.user.reset_password"),onCancel:this.onCancel,confirmLoading:this.loading,onConfirm:this.onConfirm,confirmClassName:"btn-submit",cancelClassName:"btn-cancel"},{default:()=>[o(C,{ref:"formRef",model:this.formData,rules:this.formRules,labelPlacement:"left",labelAlign:"left",labelWidth:150},{default:()=>[o(p,{label:r("security.user.username"),path:"userName"},{default:()=>[o(f,{allowInput:this.trim,class:"input-username",value:this.formData.userName,"onUpdate:value":t=>this.formData.userName=t,minlength:3,maxlength:39,disabled:!0,placeholder:r("security.user.username_tips")},null)]}),o(p,{label:r("security.user.user_password"),path:"userPassword"},{default:()=>[o(f,{allowInput:this.trim,class:"input-password",type:"password",value:this.formData.userPassword,"onUpdate:value":t=>this.formData.userPassword=t,placeholder:r("security.user.user_password_tips")},null)]}),o(p,{label:r("password.confirm_password"),path:"confirmPassword"},{default:()=>[o(f,{allowInput:this.trim,type:"password",value:this.formData.confirmPassword,"onUpdate:value":t=>this.formData.confirmPassword=t,placeholder:r("password.confirm_password_tips")},null)]})]})]})}});export{dr as PasswordModal,dr as default};
