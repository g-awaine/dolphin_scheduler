import{u as x,aL as z,a as R,bH as T,bt as O,bq as D,bI as A,d as $,bF as q,at as j,e as B,ba as V,c as o,G as F,H as b,bb as L,ai as Z,al as E}from"./index.851b5188.js";import{a as p,s as f}from"./service.4be3af67.js";import{g as P}from"./index.58f13220.js";import{u as G,a as K}from"./timezone.3b0e3399.js";import{q as S}from"./index.59799c67.js";import{u as H}from"./use-message.e3f85643.js";import{N as M}from"./Switch.f95d65b1.js";import{N as W}from"./Divider.d89d86b0.js";import{N as J}from"./Image.2f947741.js";import{N as Q}from"./Form.9f7fa8c1.js";import{N as I}from"./FormItem.f5b3f80b.js";import{N as C}from"./Input.79ba0d48.js";import{N}from"./Button.4e249408.js";import{N as X}from"./Space.f9ece73f.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./use-form-item.bb4d7ada.js";import"./use-merged-state.e40d3a9f.js";import"./resolve-slot.9e6a0162.js";import"./index.7a579f81.js";import"./fade-in.cssr.55dfcced.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./use-locale.f8ac8f2c.js";import"./Scrollbar.7a99b971.js";import"./VResizeObserver.6721b9ea.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./use-false-until-truthy.5d7093c9.js";import"./Tooltip.52cb9ce9.js";import"./Popover.30015336.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./keysOf.ab13e590.js";import"./Suffix.21a8a87f.js";import"./is-browser.45c3bd93.js";import"./get-slot.80096ab3.js";const Y="_container_1xagr_17",ee="_logo_1xagr_37",m={container:Y,"language-switch":"_language-switch_1xagr_25","login-model":"_login-model_1xagr_30",logo:ee,"logo-img":"_logo-img_1xagr_43","form-model":"_form-model_1xagr_49","oauth2-provider":"_oauth2-provider_1xagr_52"};function oe(){const{t:e,locale:i}=x(),t=z({loginFormRef:R(),loginForm:{userName:"",userPassword:"",ssoLoginUrl:""},rules:{userName:{trigger:["input","blur"],validator(){if(t.loginForm.userName==="")return new Error(e("login.userName_tips"))}},userPassword:{trigger:["input","blur"],validator(){if(t.loginForm.userPassword==="")return new Error(e("login.userPassword_tips"))}}}});return{state:t,t:e,locale:i}}function te(e){const i=T();return{handleChange:s=>{e.value=s,i.setLocales(s),p.set("language",e.value,{path:"/"})}}}function se(e){return f({url:"/login",method:"post",data:e})}function re(){return f({url:"/login/sso",method:"get"})}function ie(){return f({url:"/oauth2-provider",method:"get"})}function ae(){return f({url:"/cookies",method:"delete"})}function ne(e){const i=O(),t=D(),s=G(),a=K(),g=A(),w=()=>{e.loginFormRef.validate(async r=>{if(!r){const n=await se({...e.loginForm});await t.setSessionId(n.sessionId),await t.setSecurityConfigType(n.securityConfigType),p.set("sessionId",n.sessionId,{path:"/"});const l=await P();await t.setUserInfo(l);const u=await S({type:"FILE"}),c=await S({type:"UDF"});await t.setBaseResDir(u),await t.setBaseUdfDir(c);const h=l.timeZone?l.timeZone:"UTC";await a.setTimezone(h);const k=s.lastRoute;i.push({path:k||"home"})}})},v=()=>{ie().then(r=>{d.value=r})},d=R([]);return{handleLogin:w,handleGetOAuth2Provider:v,gotoOAuth2Page:async r=>{await ae(),window.location.href=`${r.authorizationUri}?client_id=${r.clientId}&response_type=code&redirect_uri=${r.redirectUri}?provider=${r.provider}`},oauth2Providers:d,handleRedirect:async()=>{const r=g.query.authType;if(r&&r==="oauth2"){const n=g.query.sessionId;if(n){p.set("sessionId",String(n),{path:"/"});const u=await P();await t.setUserInfo(u);const c=u.timeZone?u.timeZone:"UTC";await a.setTimezone(c),i.push("home")}const l=g.query.error;l&&window.$message.error(l)}}}}function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const Me=$({name:"login",setup(){var n;window.$message=H();const{state:e,t:i,locale:t}=oe(),{handleChange:s}=te(t),{handleLogin:a,handleGetOAuth2Provider:g,oauth2Providers:w,gotoOAuth2Page:v,handleRedirect:d}=ne(e),_=T(),y=q();y.getTheme&&y.setDarkTheme();const r=(n=j())==null?void 0:n.appContext.config.globalProperties.trim;return p.set("language",_.getLocales,{path:"/"}),B(async()=>{const l=await re();if(e.loginForm.ssoLoginUrl=l,e.loginForm.ssoLoginUrl){const u=new URL(window.location.href),c=u.searchParams.get("state"),h=u.searchParams.get("code");c&&h&&(e.loginForm.userName=c,e.loginForm.userPassword=h,a())}else e.loginForm.ssoLoginUrl="";d()}),g(),{t:i,handleChange:s,handleLogin:a,...V(e),localesStore:_,trim:r,oauth2Providers:w,gotoOAuth2Page:v}},render(){let e,i,t;return o("div",{class:m.container},[o("div",{class:m["language-switch"]},[o(M,{onUpdateValue:this.handleChange,"default-value":this.localesStore.getLocales,"checked-value":"en_US","unchecked-value":"zh_CN"},{checked:()=>"en_US",unchecked:()=>"zh_CN"})]),o("div",{class:m["login-model"]},[o("div",{class:m.logo},[o("div",{class:m["logo-img"]},null)]),F(o("div",{class:m["form-model"]},[o(Q,{rules:this.rules,ref:"loginFormRef"},{default:()=>[o(I,{label:this.t("login.userName"),"label-style":{color:"black"},path:"userName"},{default:()=>[o(C,{allowInput:this.trim,class:"input-user-name",type:"text",size:"large",value:this.loginForm.userName,"onUpdate:value":s=>this.loginForm.userName=s,placeholder:this.t("login.userName_tips"),autofocus:!0,onKeydown:L(this.handleLogin,["enter"])},null)]}),o(I,{label:this.t("login.userPassword"),"label-style":{color:"black"},path:"userPassword"},{default:()=>[o(C,{allowInput:this.trim,class:"input-password",type:"password",size:"large",value:this.loginForm.userPassword,"onUpdate:value":s=>this.loginForm.userPassword=s,placeholder:this.t("login.userPassword_tips"),onKeydown:L(this.handleLogin,["enter"])},null)]})]}),o(N,{class:"btn-login",round:!0,type:"info",disabled:!this.loginForm.userName||!this.loginForm.userPassword,style:{width:"100%"},onClick:this.handleLogin},U(e=this.t("login.login"))?e:{default:()=>[e]})]),[[b,this.loginForm.ssoLoginUrl.length===0]]),F(o("div",{class:m["form-model"]},[o("a",{href:this.loginForm.ssoLoginUrl,style:"text-decoration:none"},[o(N,{class:"btn-login-sso",round:!0,type:"info",style:{width:"100%",marginTop:"30px"},onClick:this.handleLogin},U(i=this.t("login.ssoLogin"))?i:{default:()=>[i]})])]),[[b,this.loginForm.ssoLoginUrl.length!==0]]),this.oauth2Providers.length>0&&o(W,null,U(t=this.t("login.loginWithOAuth2"))?t:{default:()=>[t]}),o(X,{class:m["oauth2-provider"],justify:"center"},{default:()=>{var s;return[(s=this.oauth2Providers)==null?void 0:s.map(a=>a.iconUri?o("div",{onClick:()=>this.gotoOAuth2Page(a)},[o(J,{"preview-disabled":!0,width:"30",src:a.iconUri},null),Z(" ")]):o(N,{onClick:()=>this.gotoOAuth2Page(a)},{default:()=>[a.provider]}))]}})])])}});export{Me as default};