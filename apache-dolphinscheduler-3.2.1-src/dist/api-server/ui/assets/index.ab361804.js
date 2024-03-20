import{u as g,aL as S,a as u,t as i,d as z,at as C,e as N,w as b,ba as M,c as r,al as R}from"./index.851b5188.js";import{u as D}from"./index.73124cc7.js";import{d as P,b as V}from"./index.2d754617.js";import{E as v}from"./EditOutlined.e0b6da4a.js";import{D as T}from"./DeleteOutlined.07e1d3fe.js";import{d as U}from"./Selection.28a32045.js";import{N as m}from"./Space.f9ece73f.js";import{N as k}from"./Tooltip.52cb9ce9.js";import{N as f}from"./Button.4e249408.js";import{N as h}from"./Icon.afc45566.js";import{N as j}from"./Popconfirm.013915ef.js";import O from"./worker-group-modal.995d150a.js";import{C as _}from"./index.6c124806.js";import{S as q}from"./index.94a7e931.js";import{S as I}from"./SearchOutlined.3b9a5586.js";import{N as L,a as x}from"./DataTable.0e9ec324.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./VResizeObserver.6721b9ea.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./index.7a579f81.js";import"./use-locale.f8ac8f2c.js";import"./use-form-item.bb4d7ada.js";import"./Suffix.21a8a87f.js";import"./is-browser.45c3bd93.js";import"./get-slot.80096ab3.js";import"./keysOf.ab13e590.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./Card.19bc42e2.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./Input.79ba0d48.js";import"./Select.3e0f2c28.js";import"./ArrowDown.45f9e719.js";import"./Checkbox.98b84c16.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Forward.bddcd6d4.js";function E(){const{t}=g(),a=l=>{e.showModalRef=!0,e.statusRef=1,e.row=l},d=l=>{l.columns=[{title:"#",key:"index",render:(o,s)=>s+1},{title:t("security.worker_group.group_name"),key:"name",className:"name"},{title:t("security.worker_group.worker_addresses"),key:"addrList",render:o=>i(m,null,{default:()=>o.addrList.split(",").map(s=>i(U,{type:"success",size:"small"},{default:()=>s}))})},{title:t("security.worker_group.create_time"),key:"createTime"},{title:t("security.worker_group.update_time"),key:"updateTime"},{title:t("security.worker_group.operation"),key:"operation",render(o){return o.systemDefault?!1:i(m,null,{default:()=>[i(k,{},{trigger:()=>i(f,{circle:!0,type:"info",size:"small",class:"edit",onClick:()=>{a(o)}},{icon:()=>i(h,null,{default:()=>i(v)})}),default:()=>t("security.worker_group.edit")}),i(j,{onPositiveClick:()=>{n(o)}},{trigger:()=>i(k,{},{trigger:()=>i(f,{circle:!0,type:"error",size:"small",class:"delete"},{icon:()=>i(h,null,{default:()=>i(T)})}),default:()=>t("security.worker_group.delete")}),default:()=>t("security.worker_group.delete_confirm")})]})}}]},e=S({columns:[],tableData:[],page:u(1),pageSize:u(10),searchVal:u(null),totalPage:u(1),showModalRef:u(!1),statusRef:u(0),row:{},loadingRef:u(!1)}),n=l=>{P({id:l.id}).then(()=>{c({pageSize:e.pageSize,pageNo:e.tableData.length===1&&e.page>1?e.page-1:e.page,searchVal:e.searchVal})})},c=l=>{if(e.loadingRef)return;e.loadingRef=!0;const{state:o}=D(V({...l}).then(s=>{e.tableData=s.totalList.map((p,w)=>({...p})),e.totalPage=s.totalPage,e.loadingRef=!1}),{});return o};return{variables:e,getTableData:c,createColumns:d}}function G(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!R(t)}const Je=z({name:"worker-group-manage",setup(){var y;const{t}=g(),{variables:a,getTableData:d,createColumns:e}=E(),n=()=>{d({pageSize:a.pageSize,pageNo:a.page,searchVal:a.searchVal})},c=()=>{a.page=1,n()},l=()=>{a.page=1,n()},o=()=>{a.showModalRef=!0,a.statusRef=0},s=()=>{a.showModalRef=!1},p=()=>{a.showModalRef=!1,n()},w=(y=C())==null?void 0:y.appContext.config.globalProperties.trim;return N(()=>{e(a),n()}),b(g().locale,()=>{e(a)}),{t,...M(a),requestData:n,onCancelModal:s,onConfirmModal:p,onUpdatePageSize:c,handleModalChange:o,onSearch:l,trim:w}},render(){let t;const{t:a,requestData:d,onUpdatePageSize:e,onCancelModal:n,onConfirmModal:c,handleModalChange:l,onSearch:o,loadingRef:s}=this;return r(m,{vertical:!0},{default:()=>[r(_,null,{default:()=>[r(m,{justify:"space-between"},{default:()=>[r(f,{size:"small",type:"primary",onClick:l,class:"btn-create-worker-group"},G(t=a("security.worker_group.create_worker_group"))?t:{default:()=>[t]}),r(m,null,{default:()=>[r(q,{value:this.searchVal,"onUpdate:value":p=>this.searchVal=p,placeholder:a("security.worker_group.search_tips"),onSearch:o},null),r(f,{size:"small",type:"primary",onClick:o},{default:()=>[r(h,null,{default:()=>[r(I,null,null)]})]})]})]})]}),r(_,{title:a("menu.worker_group_manage")},{default:()=>[r(m,{vertical:!0},{default:()=>[r(L,{loading:s,"row-class-name":"items",columns:this.columns,data:this.tableData},null),r(m,{justify:"center"},{default:()=>[r(x,{page:this.page,"onUpdate:page":p=>this.page=p,"page-size":this.pageSize,"onUpdate:page-size":p=>this.pageSize=p,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:d,onUpdatePageSize:e},null)]})]})]}),r(O,{showModalRef:this.showModalRef,statusRef:this.statusRef,row:this.row,onCancelModal:n,onConfirmModal:c},null)]})}});export{Je as default};