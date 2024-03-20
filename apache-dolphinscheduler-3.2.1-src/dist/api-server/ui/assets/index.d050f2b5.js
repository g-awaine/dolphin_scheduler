import{u as g,aL as N,a as n,t as p,d as R,at as b,e as w,w as P,ba as k,c as o,al as D}from"./index.851b5188.js";import{u as T}from"./index.73124cc7.js";import{d as V,q as v}from"./index.b3847370.js";import{p as M}from"./common.ee372ad3.js";import{E as U}from"./EditOutlined.e0b6da4a.js";import{D as j}from"./DeleteOutlined.07e1d3fe.js";import{f as S}from"./index.d671386a.js";import{N as C}from"./Tooltip.52cb9ce9.js";import{N as f}from"./Button.4e249408.js";import{N as h}from"./Icon.afc45566.js";import{N as q}from"./Popconfirm.013915ef.js";import{N as c}from"./Space.f9ece73f.js";import O from"./alarm-group-modal.426e1d3c.js";import{C as z}from"./index.6c124806.js";import{S as A}from"./index.94a7e931.js";import{S as G}from"./SearchOutlined.3b9a5586.js";import{N as H,a as I}from"./DataTable.0e9ec324.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./use-locale.f8ac8f2c.js";import"./keysOf.ab13e590.js";import"./get-slot.80096ab3.js";import"./index.7a579f81.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./Card.19bc42e2.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./index.9bc4b0ad.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./Input.79ba0d48.js";import"./Suffix.21a8a87f.js";import"./Select.3e0f2c28.js";import"./Selection.28a32045.js";import"./ArrowDown.45f9e719.js";import"./Checkbox.98b84c16.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Forward.bddcd6d4.js";function x(){const{t}=g(),a=i=>{e.showModalRef=!0,e.statusRef=1,e.row=i},d=i=>{i.columns=[{title:"#",key:"index",render:(l,m)=>m+1},{title:t("security.alarm_group.alert_group_name"),key:"groupName"},{title:t("security.alarm_group.alarm_group_description"),key:"description"},{title:t("security.alarm_group.create_time"),key:"createTime"},{title:t("security.alarm_group.update_time"),key:"updateTime"},{title:t("security.alarm_group.operation"),key:"operation",render(l){return p(c,null,{default:()=>[p(C,{},{trigger:()=>p(f,{circle:!0,type:"info",size:"small",onClick:()=>{a(l)}},{icon:()=>p(h,null,{default:()=>p(U)})}),default:()=>t("security.alarm_group.edit")}),p(q,{onPositiveClick:()=>{s(l)}},{trigger:()=>p(C,{},{trigger:()=>p(f,{circle:!0,type:"error",size:"small"},{icon:()=>p(h,null,{default:()=>p(j)})}),default:()=>t("security.alarm_group.delete")}),default:()=>t("security.alarm_group.delete_confirm")})]})}}]},e=N({columns:[],tableData:[],page:n(1),pageSize:n(10),searchVal:n(null),totalPage:n(1),showModalRef:n(!1),statusRef:n(0),row:{},loadingRef:n(!1)}),s=i=>{V({id:i.id}).then(()=>{u({pageSize:e.pageSize,pageNo:e.tableData.length===1&&e.page>1?e.page-1:e.page,searchVal:e.searchVal})})},u=i=>{if(e.loadingRef)return;e.loadingRef=!0;const{state:l}=T(v({...i}).then(m=>{e.tableData=m.totalList.map((r,y)=>(r.createTime=S(M(r.createTime),"yyyy-MM-dd HH:mm:ss"),r.updateTime=S(M(r.updateTime),"yyyy-MM-dd HH:mm:ss"),{...r})),e.totalPage=m.totalPage,e.loadingRef=!1}),{});return l};return{variables:e,getTableData:u,createColumns:d}}function E(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!D(t)}const tt=R({name:"alarm-group-manage",setup(){var _;const{t}=g(),{variables:a,getTableData:d,createColumns:e}=x(),s=()=>{d({pageSize:a.pageSize,pageNo:a.page,searchVal:a.searchVal})},u=()=>{a.page=1,s()},i=()=>{a.page=1,s()},l=()=>{a.showModalRef=!0,a.statusRef=0},m=()=>{a.showModalRef=!1},r=()=>{a.showModalRef=!1,s()},y=(_=b())==null?void 0:_.appContext.config.globalProperties.trim;return w(()=>{e(a),s()}),P(g().locale,()=>{e(a)}),{t,...k(a),requestData:s,onCancelModal:m,onConfirmModal:r,onUpdatePageSize:u,handleModalChange:l,onSearch:i,trim:y}},render(){let t;const{t:a,requestData:d,onUpdatePageSize:e,onCancelModal:s,onConfirmModal:u,handleModalChange:i,onSearch:l,loadingRef:m}=this;return o(c,{vertical:!0},{default:()=>[o(z,null,{default:()=>[o(c,{justify:"space-between"},{default:()=>[o(f,{size:"small",type:"primary",onClick:i},E(t=a("security.alarm_group.create_alarm_group"))?t:{default:()=>[t]}),o(c,null,{default:()=>[o(A,{value:this.searchVal,"onUpdate:value":r=>this.searchVal=r,placeholder:a("security.alarm_group.search_tips"),onSearch:l},null),o(f,{size:"small",type:"primary",onClick:l},{default:()=>[o(h,null,{default:()=>[o(G,null,null)]})]})]})]})]}),o(z,{title:a("menu.alarm_group_manage")},{default:()=>[o(c,{vertical:!0},{default:()=>[o(H,{loading:m,columns:this.columns,data:this.tableData},null),o(c,{justify:"center"},{default:()=>[o(I,{page:this.page,"onUpdate:page":r=>this.page=r,"page-size":this.pageSize,"onUpdate:page-size":r=>this.pageSize=r,"page-count":this.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:d,onUpdatePageSize:e},null)]})]})]}),o(O,{showModalRef:this.showModalRef,statusRef:this.statusRef,row:this.row,onCancelModal:s,onConfirmModal:u},null)]})}});export{tt as default};