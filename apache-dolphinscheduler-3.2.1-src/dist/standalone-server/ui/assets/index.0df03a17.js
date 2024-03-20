import{u as b,t as r,aL as O,a as p,d as j,at as V,e as x,w as I,ba as W,c as a,al as R}from"./index.851b5188.js";import U from"./json-highlight.d2a0cf46.js";import{B}from"./index.8acb741a.js";import{C as u,c as q,D as L}from"./column-width-config.4c11a147.js";import{N as E}from"./Popover.30015336.js";import{E as H}from"./EditOutlined.e0b6da4a.js";import{N as F}from"./Popconfirm.013915ef.js";import{D as G}from"./DeleteOutlined.07e1d3fe.js";import{N as T}from"./Tooltip.52cb9ce9.js";import{N as y}from"./Button.4e249408.js";import{N as M}from"./Icon.afc45566.js";import{N as d}from"./Space.f9ece73f.js";import{d as J,b as Q}from"./index.56bd039e.js";import{C as P}from"./index.6c124806.js";import{S as X}from"./index.94a7e931.js";import Y from"./detail.b3d43e99.js";import A from"./source-modal.84fd6d23.js";import{S as K}from"./SearchOutlined.3b9a5586.js";import{N as Z,a as $}from"./DataTable.0e9ec324.js";import"./lodash.68b7405b.js";import"./text.f967c9a6.js";import"./use-compitable.ae5454ac.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./next-frame-once.e5ee25e8.js";import"./use-locale.f8ac8f2c.js";import"./keysOf.ab13e590.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./get-slot.80096ab3.js";import"./index.7a579f81.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./Card.19bc42e2.js";import"./Input.79ba0d48.js";import"./Suffix.21a8a87f.js";import"./index.e69e8738.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./index.module.9640d101.js";import"./Spin.447cad15.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./InputNumber.cc83334e.js";import"./Add.3164a73d.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Select.3e0f2c28.js";import"./Selection.28a32045.js";import"./ArrowDown.45f9e719.js";import"./Checkbox.98b84c16.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Forward.bddcd6d4.js";function ee(e){const{t}=b();return{getColumns:()=>{const s=[{title:"#",key:"index",render:(o,n)=>n+1,...u.index},{title:t("datasource.datasource_name"),key:"name",...u.name},{title:t("datasource.datasource_user_name"),key:"userName",...u.userName},{title:t("datasource.datasource_type"),key:"type",width:180},{title:t("datasource.datasource_parameter"),key:"parameter",width:180,render:o=>r(E,{trigger:"click"},{trigger:()=>r(B,null,{default:()=>t("datasource.click_to_view")}),default:()=>r(U,{rowData:o})})},{title:t("datasource.description"),key:"note",...u.note,render:o=>o.note||"-"},{title:t("datasource.create_time"),key:"createTime",...u.time},{title:t("datasource.update_time"),key:"updateTime",...u.time},{title:t("datasource.operation"),key:"operation",...u.operation(2),render:o=>r(d,null,{default:()=>[r(T,null,{trigger:()=>r(y,{circle:!0,type:"info",size:"small",onClick:()=>void e(o.id,"edit",o)},{default:()=>r(M,null,{default:()=>r(H)})}),default:()=>t("datasource.edit")}),r(T,null,{trigger:()=>r(F,{onPositiveClick:()=>void e(o.id,"delete"),negativeText:t("datasource.cancel"),positiveText:t("datasource.confirm")},{trigger:()=>r(y,{circle:!0,type:"error",size:"small",class:"btn-delete"},{default:()=>r(M,null,{default:()=>r(G)})}),default:()=>t("datasource.delete_confirm")}),default:()=>t("datasource.delete")})]})}];return{columns:s,tableWidth:q(s)||L}}}}function te(){const e=O({page:1,pageSize:10,itemCount:0,searchVal:p(""),list:[],loading:!1}),t=async()=>{if(e.loading)return;e.loading=!0;const i=await Q({pageNo:e.page,pageSize:e.pageSize,searchVal:e.searchVal});e.loading=!1,e.list=i.totalList,e.itemCount=i.total},l=()=>{e.list.length===1&&e.page>1&&--e.page,t()};return{data:e,changePage:i=>{e.page=i,t()},changePageSize:i=>{e.page=1,e.pageSize=i,t()},deleteRecord:async i=>{await J(i),l()},updateList:l}}function ae(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}const gt=j({name:"list",setup(){var h;const{t:e}=b(),t=p(!1),l=p(!1),s=p("MYSQL"),o=p(),n=p({columns:[],tableWidth:L}),{data:i,changePage:f,changePageSize:S,deleteRecord:v,updateList:C}=te(),{getColumns:g}=ee((c,_,D)=>{_==="edit"?(t.value=!0,o.value=c,s.value=D.type):v(c)}),N=()=>{o.value=null,l.value=!0},k=(h=V())==null?void 0:h.appContext.config.globalProperties.trim,m=c=>{s.value=c,l.value=!1,t.value=!0},w=()=>{l.value=!0},z=()=>{l.value=!1};return x(()=>{f(1),n.value=g()}),I(b().locale,()=>{n.value=g()}),{t:e,showDetailModal:t,showSourceModal:l,id:o,columns:n,...W(i),changePage:f,changePageSize:S,onCreate:N,onUpdatedList:C,trim:k,handleSelectSourceType:m,selectType:s,handleSourceModalOpen:w,handleSourceModalClose:z}},render(){let e;const{t,id:l,showDetailModal:s,showSourceModal:o,columns:n,list:i,page:f,pageSize:S,itemCount:v,loading:C,changePage:g,changePageSize:N,onCreate:k,onUpdatedList:m,handleSelectSourceType:w,selectType:z,handleSourceModalOpen:h,handleSourceModalClose:c}=this;return a(d,{vertical:!0},{default:()=>[a(P,null,{default:()=>[a(d,{justify:"space-between"},{default:()=>[a(y,{onClick:k,type:"primary",size:"small",class:"btn-create-data-source"},ae(e=t("datasource.create_datasource"))?e:{default:()=>[e]}),a(d,{justify:"end",wrap:!1},{default:()=>[a(X,{value:this.searchVal,"onUpdate:value":_=>this.searchVal=_,placeholder:t("datasource.search_input_tips"),onSearch:m},null),a(y,{type:"primary",size:"small",onClick:m},{default:()=>[a(M,null,{default:()=>[a(K,null,null)]})]})]})]})]}),a(P,{title:t("menu.datasource")},{default:()=>[a(d,{vertical:!0},{default:()=>[a(Z,{"row-class-name":"data-source-items",columns:n.columns,data:i,loading:C,striped:!0,scrollX:n.tableWidth},null),a(d,{justify:"center"},{default:()=>[a($,{page:f,"page-size":S,"item-count":v,"show-quick-jumper":!0,"show-size-picker":!0,"page-sizes":[10,30,50],"on-update:page":g,"on-update:page-size":N},null)]})]})]}),a(A,{show:o,onChange:w,onMaskClick:c},null),a(Y,{show:s,id:l,selectType:z,onCancel:()=>void(this.showDetailModal=!1),onUpdate:m,onOpen:h},null)]})}});export{gt as default};