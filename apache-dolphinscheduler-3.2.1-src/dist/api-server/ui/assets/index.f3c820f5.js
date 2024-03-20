import{u as z,bq as _,a as T,e as N,w as U,t as r,aL as b,d as I,at as R,ba as P,c as a,al as v}from"./index.851b5188.js";import{D as L,C as u,c as O}from"./column-width-config.4c11a147.js";import{N as D}from"./Dropdown.4af83811.js";import{U as j,K as A}from"./UserOutlined.3ccd923e.js";import{E}from"./EditOutlined.e0b6da4a.js";import{D as V}from"./DeleteOutlined.07e1d3fe.js";import{d as q}from"./Selection.28a32045.js";import{N as y}from"./Tooltip.52cb9ce9.js";import{N as c}from"./Button.4e249408.js";import{N as h}from"./Icon.afc45566.js";import{N as W}from"./Popconfirm.013915ef.js";import{N as m}from"./Space.f9ece73f.js";import{q as H,i as x}from"./index.58f13220.js";import{p as S}from"./common.ee372ad3.js";import{f as M}from"./index.d671386a.js";import{UserModal as B}from"./user-detail-modal.a6a9e910.js";import{AuthorizeModal as G}from"./authorize-modal.c4c5dd2f.js";import{PasswordModal as K}from"./password-modal.684cdd9f.js";import{C}from"./index.6c124806.js";import{S as F}from"./index.94a7e931.js";import{S as X}from"./SearchOutlined.3b9a5586.js";import{N as $,a as J}from"./DataTable.0e9ec324.js";import"./lodash.68b7405b.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./ChevronRight.d6536995.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./use-keyboard.f4d2f0c0.js";import"./index.7a579f81.js";import"./use-locale.f8ac8f2c.js";import"./use-form-item.bb4d7ada.js";import"./Suffix.21a8a87f.js";import"./is-browser.45c3bd93.js";import"./keysOf.ab13e590.js";import"./get-slot.80096ab3.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./index.57e264b5.js";import"./index.a98592b7.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./Card.19bc42e2.js";import"./index.3ef69258.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./Input.79ba0d48.js";import"./Select.3e0f2c28.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./index.605d19c5.js";import"./index.56bd039e.js";import"./index.59799c67.js";import"./index.41692750.js";import"./Checkbox.98b84c16.js";import"./RadioButton.cdb434b9.js";import"./TreeSelect.5a0f3466.js";import"./ArrowDown.45f9e719.js";import"./Ellipsis.b13f7726.js";import"./Forward.bddcd6d4.js";function Q(t){const{t:e}=z(),d=_().getUserInfo.userType==="ADMIN_USER",p=T({columns:[],tableWidth:L}),n=()=>{const o=[{title:"#",key:"index",render:(i,s)=>s+1,...u.index},{title:e("security.user.username"),key:"userName",className:"name",...u.userName},{title:e("security.user.user_type"),key:"userType",render:i=>i.userType==="GENERAL_USER"?e("security.user.ordinary_user"):e("security.user.administrator"),...u.type},{title:e("security.user.tenant_code"),key:"tenantCode",...u.name},{title:e("security.user.queue"),key:"queue",width:120},{title:e("security.user.email"),key:"email",...u.name},{title:e("security.user.phone"),key:"phone",width:140},{title:e("security.user.state"),key:"state",...u.state,render:(i,s)=>r(q,{type:i.state===1?"success":"error"},{default:()=>e(`security.user.state_${i.state===1?"enabled":"disabled"}`)})},{title:e("security.user.create_time"),key:"createTime",...u.time},{title:e("security.user.update_time"),key:"updateTime",...u.time},{title:e("security.user.operation"),key:"operation",...u.operation(4),render:(i,s)=>r(m,null,{default:()=>[r(D,{trigger:"click",options:[{label:e("security.user.project"),key:"authorize_project"},{label:e("security.user.resource"),key:"authorize_resource"},{label:e("security.user.datasource"),key:"authorize_datasource"},{label:e("security.user.udf"),key:"authorize_udf"},{label:e("security.user.namespace"),key:"authorize_namespace"}],onSelect:g=>void t({rowData:i,key:g},"authorize")},()=>r(y,{trigger:"hover"},{trigger:()=>r(c,{circle:!0,type:"info",size:"small",class:"authorize"},{icon:()=>r(h,null,()=>r(j))}),default:()=>e("security.user.authorize")})),r(y,{trigger:"hover"},{trigger:()=>r(c,{circle:!0,type:"info",size:"small",class:"edit",onClick:()=>void t({rowData:i},"edit")},()=>r(h,null,()=>r(E))),default:()=>e("security.user.edit")}),d&&r(y,{trigger:"hover"},{trigger:()=>r(c,{circle:!0,type:"error",size:"small",class:"edit",onClick:()=>void t({rowData:i},"resetPassword")},()=>r(h,null,()=>r(A))),default:()=>e("security.user.reset_password")}),r(W,{onPositiveClick:()=>void t({rowData:i},"delete")},{trigger:()=>r(y,{},{trigger:()=>r(c,{circle:!0,type:"error",size:"small",class:"delete"},{icon:()=>r(h,null,{default:()=>r(V)})}),default:()=>e("security.user.delete")}),default:()=>e("security.user.delete_confirm")})]})}];p.value={columns:o,tableWidth:O(o)}};return N(()=>{n()}),U(z().locale,()=>{n()}),{columnsRef:p,createColumns:n}}function Y(){const t=b({page:1,pageSize:10,itemCount:0,searchVal:"",list:[],loading:!1,currentRecord:{},authorizeType:"authorize_project",detailModalShow:!1,authorizeModalShow:!1,passwordModalShow:!1}),e=async()=>{if(t.loading)return;t.loading=!0;const{totalList:o,total:i}=await H({pageNo:t.page,pageSize:t.pageSize,searchVal:t.searchVal});if(t.loading=!1,!o)throw Error();t.list=o.map(s=>(s.createTime=s.createTime?M(S(s.createTime),"yyyy-MM-dd HH:mm:ss"):"",s.updateTime=s.updateTime?M(S(s.updateTime),"yyyy-MM-dd HH:mm:ss"):"",s.tenantId=s.tenantId===0?null:s.tenantId,s)),t.itemCount=i},l=()=>{t.list.length===1&&t.page>1&&--t.page,e()},f=async o=>{await x({id:o}),l()},d=(o,i)=>{t.currentRecord=o.rowData,i==="edit"&&(t.detailModalShow=!0),i==="authorize"&&o.key&&(t.authorizeModalShow=!0,t.authorizeType=o.key),i==="delete"&&f(o.rowData.id),i==="resetPassword"&&(t.passwordModalShow=!0)},p=o=>{t.page=o,e()},n=o=>{t.page=1,t.pageSize=o,e()};return N(()=>{e()}),{state:t,changePage:p,changePageSize:n,updateList:l,onOperationClick:d}}function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!v(t)}const Ct=I({name:"user-manage",setup(){var w;const{t}=z(),{state:e,changePage:l,changePageSize:f,updateList:d,onOperationClick:p}=Y(),{columnsRef:n}=Q(p),o=()=>{e.detailModalShow=!0,e.currentRecord=null},i=()=>{e.detailModalShow=!1},s=()=>{e.authorizeModalShow=!1},g=()=>{e.passwordModalShow=!1},k=(w=R())==null?void 0:w.appContext.config.globalProperties.trim;return{t,columnsRef:n,...P(e),changePage:l,changePageSize:f,onAddUser:o,onUpdatedList:d,onDetailModalCancel:i,onAuthorizeModalCancel:s,onPasswordModalCancel:g,trim:k}},render(){let t;return a(m,{vertical:!0},{default:()=>{var e;return[a(C,null,{default:()=>[a(m,{justify:"space-between"},{default:()=>[a(c,{onClick:this.onAddUser,type:"primary",class:"btn-create-user",size:"small"},Z(t=this.t("security.user.create_user"))?t:{default:()=>[t]}),a(m,null,{default:()=>[a(F,{value:this.searchVal,"onUpdate:value":l=>this.searchVal=l,onSearch:this.onUpdatedList},null),a(c,{type:"primary",size:"small",onClick:this.onUpdatedList},{default:()=>[a(h,null,{default:()=>[a(X,null,null)]})]})]})]})]}),a(C,{title:this.t("menu.user_manage")},{default:()=>[a(m,{vertical:!0},{default:()=>[a($,{"row-class-name":"items",columns:this.columnsRef.columns,data:this.list,loading:this.loading,scrollX:this.columnsRef.tableWidth},null),a(m,{justify:"center"},{default:()=>[a(J,{page:this.page,"onUpdate:page":l=>this.page=l,"page-size":this.pageSize,"onUpdate:page-size":l=>this.pageSize=l,"item-count":this.itemCount,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,"on-update:page":this.changePage,"on-update:page-size":this.changePageSize},null)]})]})]}),a(B,{show:this.detailModalShow,currentRecord:this.currentRecord,onCancel:this.onDetailModalCancel,onUpdate:this.onUpdatedList},null),a(G,{show:this.authorizeModalShow,type:this.authorizeType,userId:(e=this.currentRecord)==null?void 0:e.id,onCancel:this.onAuthorizeModalCancel},null),a(K,{show:this.passwordModalShow,currentRecord:this.currentRecord,onCancel:this.onPasswordModalCancel},null)]}})}});export{Ct as default};
