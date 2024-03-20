import{u as N,bt as w,aL as z,a as s,t as u,d as _,at as C,w as k,e as D,ba as R,c as o,z as P,al as U}from"./index.851b5188.js";import{u as T}from"./index.73124cc7.js";import{l as V,m as v}from"./index.59799c67.js";import{D as j,C as l,c as L}from"./column-width-config.4c11a147.js";import{E as O}from"./EditOutlined.e0b6da4a.js";import{D as W}from"./DeleteOutlined.07e1d3fe.js";import{N as b}from"./Tooltip.52cb9ce9.js";import{N as f}from"./Button.4e249408.js";import{N as F}from"./Popconfirm.013915ef.js";import{N as c}from"./Space.f9ece73f.js";import{C as y}from"./index.6c124806.js";import q from"./function-modal.9a74b62c.js";import{S as x}from"./index.94a7e931.js";import{S as I}from"./SearchOutlined.3b9a5586.js";import{N as M}from"./Icon.afc45566.js";import{N as E,a as A}from"./DataTable.0e9ec324.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./use-locale.f8ac8f2c.js";import"./keysOf.ab13e590.js";import"./get-slot.80096ab3.js";import"./index.7a579f81.js";import"./Card.19bc42e2.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./CloudUploadOutlined.ffad40df.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Input.79ba0d48.js";import"./Suffix.21a8a87f.js";import"./InputGroup.205f411e.js";import"./TreeSelect.5a0f3466.js";import"./Checkbox.98b84c16.js";import"./Selection.28a32045.js";import"./Upload.62ae1afa.js";import"./Add.3164a73d.js";import"./Image.2f947741.js";import"./ArrowDown.45f9e719.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Select.3e0f2c28.js";import"./Forward.bddcd6d4.js";function B(){const{t:e}=N(),n=w(),t=z({columns:[],tableWidth:j,row:{},tableData:[],id:s(Number(n.currentRoute.value.params.id)||-1),fullName:s(String(n.currentRoute.value.query.prefix||"")),page:s(1),pageSize:s(10),searchVal:s(),totalPage:s(1),showRef:s(!1),loadingRef:s(!1)}),a=r=>{r.columns=[{title:"#",key:"id",render:(i,p)=>p+1,...l.index},{title:e("resource.function.udf_function_name"),key:"funcName",...l.name},{title:e("resource.function.user_name"),...l.userName,key:"userName"},{title:e("resource.function.class_name"),key:"className",...l.name},{title:e("resource.function.type"),key:"type",...l.type},{title:e("resource.function.description"),key:"description",...l.note},{title:e("resource.function.jar_package"),key:"resourceName",...l.name},{title:e("resource.function.update_time"),key:"updateTime",...l.time},{title:e("resource.function.operation"),key:"operation",...l.operation(2),render:i=>u(c,null,{default:()=>[u(b,{},{trigger:()=>u(f,{circle:!0,type:"info",size:"tiny",class:"btn-edit",onClick:()=>{h(i)}},{icon:()=>u(O)}),default:()=>e("resource.function.edit")}),u(F,{onPositiveClick:()=>{g(i.id,i.fullName)}},{trigger:()=>u(b,{},{trigger:()=>u(f,{circle:!0,type:"error",size:"tiny",class:"btn-delete"},{icon:()=>u(W)}),default:()=>e("resource.function.delete")}),default:()=>e("resource.function.delete_confirm")})]})}],r.tableWidth&&(r.tableWidth=L(r.columns))},m=r=>{if(t.loadingRef)return;t.loadingRef=!0;const{state:i}=T(V({...r}).then(p=>{t.totalPage=p.totalPage,t.tableData=p.totalList.map(d=>({...d})),t.loadingRef=!1}),{total:0,table:[]});return i},h=r=>{t.showRef=!0,t.row=r},g=(r,i)=>{t.tableData.length===1&&t.page>1&&(t.page-=1),v(r,{fullName:i}).then(()=>m({fullName:t.fullName,id:t.id,pageSize:t.pageSize,pageNo:t.page,searchVal:t.searchVal}))};return{variables:t,createColumns:a,getTableData:m}}const G="_table_h4zft_17",H={table:G};function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}const nt=_({name:"function-manage",setup(){var d;const{variables:e,createColumns:n,getTableData:t}=B(),a=()=>{t({id:e.id,fullName:e.fullName,pageSize:e.pageSize,pageNo:e.page,searchVal:e.searchVal})},m=()=>{a()},h=()=>{e.page=1,a()},g=()=>{e.page=1,a()},r=S=>{S.value=!0},i=()=>{e.row={},r(P(e,"showRef"))},p=(d=C())==null?void 0:d.appContext.config.globalProperties.trim;return k(N().locale,()=>{n(e)}),D(()=>{n(e),a()}),{requestData:a,handleSearch:g,handleUpdateList:m,handleCreateFolder:i,handleChangePageSize:h,...R(e),trim:p}},render(){let e;const{t:n}=N(),{loadingRef:t}=this;return o(c,{vertical:!0},{default:()=>[o(y,null,{default:()=>[o(c,{justify:"space-between"},{default:()=>[o(f,{type:"primary",size:"small",onClick:this.handleCreateFolder,class:"btn-create-udf-function"},X(e=n("resource.function.create_udf_function"))?e:{default:()=>[e]}),o(c,null,{default:()=>[o(x,{placeholder:n("resource.function.enter_keyword_tips"),value:this.searchVal,"onUpdate:value":a=>this.searchVal=a,onSearch:this.handleSearch},null),o(f,{type:"primary",size:"small",onClick:this.handleSearch},{default:()=>[o(M,null,{default:()=>[o(I,null,null)]})]})]})]})]}),o(y,{title:n("resource.function.udf_function")},{default:()=>[o(c,{vertical:!0},{default:()=>[o(E,{loading:t,columns:this.columns,data:this.tableData,striped:!0,size:"small",class:H.table,"row-class-name":"items",scrollX:this.tableWidth},null),o(c,{justify:"center"},{default:()=>[o(A,{page:this.page,"onUpdate:page":a=>this.page=a,"page-size":this.pageSize,"onUpdate:page-size":a=>this.pageSize=a,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:this.requestData,onUpdatePageSize:this.handleChangePageSize},null)]})]})]}),o(q,{row:this.row,"onUpdate:row":a=>this.row=a,show:this.showRef,"onUpdate:show":a=>this.showRef=a,onUpdateList:this.handleUpdateList},null)]})}});export{nt as default};