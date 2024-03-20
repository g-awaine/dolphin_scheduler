import{u as g,bt as N,aL as P,a as p,t as s,d as b,e as z,w as R,ba as w,c as r,al as y}from"./index.851b5188.js";import{q as S,d as D,P as k}from"./parameter-modal.25f9566c.js";import{D as M,C as n,c as T}from"./column-width-config.4c11a147.js";import{E as V}from"./EditOutlined.e0b6da4a.js";import{D as _}from"./DeleteOutlined.07e1d3fe.js";import{N as C}from"./Tooltip.52cb9ce9.js";import{N as h}from"./Button.4e249408.js";import{N as v}from"./Popconfirm.013915ef.js";import{N as c}from"./Space.f9ece73f.js";import{C as j}from"./index.6c124806.js";import{S as O}from"./SearchOutlined.3b9a5586.js";import{N as U}from"./Input.79ba0d48.js";import{N as W}from"./Icon.afc45566.js";import{N as L,a as q}from"./DataTable.0e9ec324.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./resolve-slot.9e6a0162.js";import"./index.7a579f81.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./utils.f449ed5c.js";import"./is-browser.45c3bd93.js";import"./index.3ef69258.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./use-form-item.bb4d7ada.js";import"./format-length.d7d829b3.js";import"./get.aa32335f.js";import"./Popover.30015336.js";import"./_baseMap.9542141b.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./use-locale.f8ac8f2c.js";import"./get-slot.80096ab3.js";import"./Suffix.21a8a87f.js";import"./ArrowDown.45f9e719.js";import"./Checkbox.98b84c16.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./Selection.28a32045.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Select.3e0f2c28.js";import"./Forward.bddcd6d4.js";function I(){const{t:e}=g(),l=N(),t=P({columns:[],tableWidth:M,row:{},tableData:[],projectCode:p(Number(l.currentRoute.value.params.projectCode)),page:p(1),pageSize:p(10),searchVal:p(),totalPage:p(1),showRef:p(!1),statusRef:p(0),loadingRef:p(!1)}),o=a=>{a.columns=[{title:"#",key:"id",...n.index,render:(i,f)=>f+1},{title:e("project.parameter.name"),key:"paramName",...n.name},{title:e("project.parameter.value"),key:"paramValue",...n.name},{title:e("project.parameter.create_time"),key:"createTime",...n.time},{title:e("project.parameter.update_time"),key:"updateTime",...n.time},{title:e("project.parameter.operation"),key:"operation",...n.operation(3),render:i=>s(c,null,{default:()=>[s(C,{},{trigger:()=>s(h,{circle:!0,type:"info",size:"small",onClick:()=>{u(i)}},{icon:()=>s(V)}),default:()=>e("project.parameter.edit")}),s(v,{onPositiveClick:()=>{d(i.code)}},{trigger:()=>s(C,{},{trigger:()=>s(h,{circle:!0,type:"error",size:"small"},{icon:()=>s(_)}),default:()=>e("project.parameter.delete")}),default:()=>e("project.parameter.delete_confirm")})]})}],a.tableWidth&&(a.tableWidth=T(a.columns))},u=a=>{t.showRef=!0,t.statusRef=1,t.row=a},m=a=>{t.loadingRef||(t.loadingRef=!0,S({...a},t.projectCode).then(i=>{t.totalPage=i.totalPage,t.tableData=i.totalList.map(f=>({...f})),t.loadingRef=!1}))},d=a=>{t.tableData.length===1&&t.page>1&&(t.page-=1),D({code:a},t.projectCode).then(()=>{window.$message.success(e("project.parameter.success")),m({pageSize:t.pageSize,pageNo:t.page,searchVal:t.searchVal})})};return{variables:t,createColumns:o,getTableData:m}}function x(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!y(e)}const Ge=b({name:"ProjectParameterList",setup(){const{variables:e,createColumns:l,getTableData:t}=I(),o=()=>{t({pageSize:e.pageSize,pageNo:e.page,searchVal:e.searchVal,projectCode:e.projectCode})},u=()=>{o()},m=()=>{e.page=1,o()},d=()=>{e.page=1,o()},a=()=>{e.showRef=!1},i=()=>{e.showRef=!1,o()},f=()=>{e.showRef=!0,e.statusRef=0};return z(()=>{l(e),o()}),R(g().locale,()=>{l(e)}),{requestData:o,handleSearch:m,handleUpdateList:u,handleChangePageSize:d,onCreateParameter:f,onCancelModal:a,onConfirmModal:i,...w(e)}},render(){let e;const{t:l}=g(),{loadingRef:t,handleSearch:o,onCreateParameter:u,onConfirmModal:m,onCancelModal:d}=this;return r(c,{vertical:!0},{default:()=>[r(j,null,{default:()=>[r(c,{justify:"space-between"},{default:()=>[r(h,{size:"small",type:"primary",onClick:u},x(e=l("project.parameter.create_parameter"))?e:{default:()=>[e]}),r(c,null,{default:()=>[r(U,{size:"small",clearable:!0,value:this.searchVal,"onUpdate:value":a=>this.searchVal=a,placeholder:l("project.parameter.name")},null),r(h,{size:"small",type:"primary",onClick:o},{default:()=>[r(W,null,{default:()=>[r(O,null,null)]})]})]})]})]}),r(j,{title:l("project.parameter.parameter_manage")},{default:()=>[r(c,{vertical:!0},{default:()=>[r(L,{loading:t,columns:this.columns,data:this.tableData,striped:!0,size:"small",scrollX:this.tableWidth},null),r(c,{justify:"center"},{default:()=>[r(q,{page:this.page,"onUpdate:page":a=>this.page=a,"page-size":this.pageSize,"onUpdate:page-size":a=>this.pageSize=a,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:this.requestData,onUpdatePageSize:this.handleChangePageSize},null)]})]})]}),r(k,{showModalRef:this.showRef,statusRef:this.statusRef,row:this.row,onCancelModal:d,onConfirmModal:m},null)]})}});export{Ge as default};