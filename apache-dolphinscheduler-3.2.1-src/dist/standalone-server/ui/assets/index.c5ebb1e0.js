import{u as h,aL as w,a as c,t as l,d as z,at as R,e as k,w as T,ba as D,c as o,al as _}from"./index.851b5188.js";import{u as P}from"./index.73124cc7.js";import{d as V,a as U}from"./index.71fea87c.js";import{p as M}from"./common.ee372ad3.js";import{D as O,C as p,c as W}from"./column-width-config.4c11a147.js";import{E as j}from"./EditOutlined.e0b6da4a.js";import{D as E}from"./DeleteOutlined.07e1d3fe.js";import{f as N}from"./index.d671386a.js";import{d as H}from"./Selection.28a32045.js";import{N as u}from"./Space.f9ece73f.js";import{N as S}from"./Tooltip.52cb9ce9.js";import{N as g}from"./Button.4e249408.js";import{N as y}from"./Icon.afc45566.js";import{N as I}from"./Popconfirm.013915ef.js";import q from"./environment-modal.a4945ecb.js";import{C as b}from"./index.6c124806.js";import{S as x}from"./index.94a7e931.js";import{S as L}from"./SearchOutlined.3b9a5586.js";import{N as G,a as B}from"./DataTable.0e9ec324.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./VResizeObserver.6721b9ea.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./index.7a579f81.js";import"./use-locale.f8ac8f2c.js";import"./use-form-item.bb4d7ada.js";import"./Suffix.21a8a87f.js";import"./is-browser.45c3bd93.js";import"./get-slot.80096ab3.js";import"./keysOf.ab13e590.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./Card.19bc42e2.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./index.2d754617.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./Input.79ba0d48.js";import"./Select.3e0f2c28.js";import"./ArrowDown.45f9e719.js";import"./Checkbox.98b84c16.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Forward.bddcd6d4.js";function A(){const{t:e}=h(),a=r=>{t.showModalRef=!0,t.statusRef=1,t.row=r},f=r=>{r.columns=[{title:"#",key:"index",render:(n,s)=>s+1,...p.index},{title:e("security.environment.environment_name"),key:"name",className:"environment-name",...p.name},{title:e("security.environment.environment_config"),key:"config",...p.note},{title:e("security.environment.environment_desc"),key:"description",...p.note},{title:e("security.environment.worker_groups"),key:"workerGroups",...p.tag,render:n=>l(u,null,{default:()=>n.workerGroups.map(s=>l(H,{type:"success",size:"small"},{default:()=>s}))})},{title:e("security.environment.create_time"),key:"createTime",...p.time},{title:e("security.environment.update_time"),key:"updateTime",...p.time},{title:e("security.environment.operation"),key:"operation",...p.operation(2),render(n){return l(u,null,{default:()=>[l(S,{},{trigger:()=>l(g,{circle:!0,type:"info",size:"small",class:"edit",onClick:()=>{a(n)}},{icon:()=>l(y,null,{default:()=>l(j)})}),default:()=>e("security.environment.edit")}),l(I,{onPositiveClick:()=>{m(n)}},{trigger:()=>l(S,{},{trigger:()=>l(g,{circle:!0,type:"error",size:"small",class:"delete"},{icon:()=>l(y,null,{default:()=>l(E)})}),default:()=>e("security.environment.delete")}),default:()=>e("security.environment.delete_confirm")})]})}}],r.tableWidth&&(r.tableWidth=W(r.columns))},t=w({columns:[],tableWidth:O,tableData:[],page:c(1),pageSize:c(10),searchVal:c(null),totalPage:c(1),showModalRef:c(!1),statusRef:c(0),row:{},loadingRef:c(!1)}),m=r=>{V({environmentCode:r.code}).then(()=>{d({pageSize:t.pageSize,pageNo:t.tableData.length===1&&t.page>1?t.page-1:t.page,searchVal:t.searchVal})})},d=r=>{if(t.loadingRef)return;t.loadingRef=!0;const{state:n}=P(U({...r}).then(s=>{t.tableData=s.totalList.map((i,v)=>(i.createTime=N(M(i.createTime),"yyyy-MM-dd HH:mm:ss"),i.updateTime=N(M(i.updateTime),"yyyy-MM-dd HH:mm:ss"),{...i})),t.totalPage=s.totalPage,t.loadingRef=!1}),{});return n};return{variables:t,getTableData:d,createColumns:f}}function F(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}const nt=z({name:"environment-manage",setup(){var C;const{t:e}=h(),{variables:a,getTableData:f,createColumns:t}=A(),m=()=>{f({pageSize:a.pageSize,pageNo:a.page,searchVal:a.searchVal})},d=()=>{a.page=1,m()},r=()=>{a.page=1,m()},n=()=>{a.showModalRef=!0,a.statusRef=0},s=()=>{a.showModalRef=!1},i=()=>{a.showModalRef=!1,m()},v=(C=R())==null?void 0:C.appContext.config.globalProperties.trim;return k(()=>{t(a),m()}),T(h().locale,()=>{t(a)}),{t:e,...D(a),requestData:m,onCancelModal:s,onConfirmModal:i,onUpdatePageSize:d,handleModalChange:n,onSearch:r,trim:v}},render(){let e;const{t:a,requestData:f,onUpdatePageSize:t,onCancelModal:m,onConfirmModal:d,handleModalChange:r,onSearch:n,loadingRef:s}=this;return o(u,{vertical:!0},{default:()=>[o(b,null,{default:()=>[o(u,{justify:"space-between"},{default:()=>[o(g,{size:"small",type:"primary",onClick:r,class:"btn-create-environment"},F(e=a("security.environment.create_environment"))?e:{default:()=>[e]}),o(u,null,{default:()=>[o(x,{value:this.searchVal,"onUpdate:value":i=>this.searchVal=i,placeholder:a("security.environment.search_tips"),onSearch:n},null),o(g,{size:"small",type:"primary",onClick:n},{default:()=>[o(y,null,{default:()=>[o(L,null,null)]})]})]})]})]}),o(b,{title:a("menu.environment_manage")},{default:()=>[o(u,{vertical:!0},{default:()=>[o(G,{loading:s,"row-class-name":"items",columns:this.columns,data:this.tableData,scrollX:this.tableWidth},null),o(u,{justify:"center"},{default:()=>[o(B,{page:this.page,"onUpdate:page":i=>this.page=i,"page-size":this.pageSize,"onUpdate:page-size":i=>this.pageSize=i,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:f,onUpdatePageSize:t},null)]})]})]}),o(q,{showModalRef:this.showModalRef,statusRef:this.statusRef,row:this.row,onCancelModal:m,onConfirmModal:d},null)]})}});export{nt as default};