import{u as g,bI as j,aL as P,t as r,d as W,at as I,e as _,w as x,c as e}from"./index.851b5188.js";import{B as E}from"./index.8acb741a.js";import{q as L}from"./index.18b4303b.js";import{D as M,C as s,c as O}from"./column-width-config.4c11a147.js";import{P as R}from"./PlayCircleOutlined.28a7c420.js";import{E as q}from"./EditOutlined.e0b6da4a.js";import{N as B}from"./Ellipsis.b13f7726.js";import{N as S}from"./Tooltip.52cb9ce9.js";import{N}from"./Button.4e249408.js";import{N as h}from"./Icon.afc45566.js";import{N as c}from"./Space.f9ece73f.js";import{u as V}from"./use-task.8e5e3d8b.js";import A from"./start-modal.a6c81fb8.js";import{C}from"./index.6c124806.js";import{N as F}from"./detail-modal.57748ee9.js";import{S as G}from"./SearchOutlined.3b9a5586.js";import{N as b}from"./Input.79ba0d48.js";import{N as H,a as X}from"./DataTable.0e9ec324.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./get-slot.80096ab3.js";import"./index.7a579f81.js";import"./index.e69e8738.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./use-start.52d38fd8.js";import"./index.23da2c90.js";import"./index.2d754617.js";import"./index.57e264b5.js";import"./index.71fea87c.js";import"./index.b3847370.js";import"./PlusCircleOutlined.b025a581.js";import"./DeleteOutlined.07e1d3fe.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./Select.3e0f2c28.js";import"./use-locale.f8ac8f2c.js";import"./Selection.28a32045.js";import"./Suffix.21a8a87f.js";import"./Switch.f95d65b1.js";import"./detail.26980e87.js";import"./get-elements-by-json.9201707b.js";import"./Grid.3ae564e0.js";import"./Spin.447cad15.js";import"./Radio.fc32ca3b.js";import"./RadioGroup.c3ead4f3.js";import"./index.2fc51a01.js";import"./InputNumber.cc83334e.js";import"./Add.3164a73d.js";import"./Checkbox.98b84c16.js";import"./TreeSelect.5a0f3466.js";import"./index.module.4a3c8d75.js";import"./ArrowUpOutlined.284f08d8.js";import"./index.336ca31d.js";import"./task-type.dfd9250b.js";import"./index.59799c67.js";import"./index.41692750.js";import"./index.56bd039e.js";import"./index.605d19c5.js";import"./common.ee372ad3.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./index.d671386a.js";import"./index.1abd1843.js";import"./index.4701b8ec.js";import"./index.35726d3e.js";import"./ProfileOutlined.18d24d11.js";import"./ArrowDown.45f9e719.js";import"./Dropdown.4af83811.js";import"./ChevronRight.d6536995.js";import"./use-keyboard.f4d2f0c0.js";import"./Forward.bddcd6d4.js";function J(n){const{t:i}=g(),u=j(),d=Number(u.params.projectCode),m=p=>{p.columns=[{title:"#",key:"index",render:(t,l)=>l+1,...s.index},{title:i("project.task.task_name"),key:"taskName",...s.linkName,render:t=>r(E,{onClick:()=>void n(t,!0)},{default:()=>r(B,s.linkEllipsis,()=>t.taskName)})},{title:i("project.task.version"),key:"taskVersion",render:t=>r("span",null,"v"+t.taskVersion),...s.version},{title:i("project.task.workflow_name"),key:"processDefinitionName",...s.name},{title:i("project.task.task_type"),key:"taskType",...s.type},{title:i("project.task.create_time"),key:"taskCreateTime",...s.time},{title:i("project.task.update_time"),key:"taskUpdateTime",...s.time},{title:i("project.task.operation"),key:"operation",...s.operation(2),render(t){return r(c,null,{default:()=>[r(S,{},{trigger:()=>r(N,{circle:!0,type:"info",size:"small",onClick:()=>f(t)},{icon:()=>r(h,null,{default:()=>r(R)})}),default:()=>i("project.task.execute")}),r(S,{},{trigger:()=>r(N,{circle:!0,type:"info",size:"small",onClick:()=>n(t,!1)},{icon:()=>r(h,null,{default:()=>r(q)})}),default:()=>i("project.task.edit")})]})}}],p.tableWidth&&(p.tableWidth=O(p.columns))},o=P({columns:[],tableWidth:M,tableData:[],page:1,pageSize:10,searchTaskName:null,searchWorkflowName:null,totalPage:1,row:{},loading:!1,startShow:!1}),k=()=>{if(o.loading)return;o.loading=!0;const p={pageSize:o.pageSize,pageNo:o.page,searchTaskName:o.searchTaskName,searchWorkflowName:o.searchWorkflowName,taskExecuteType:"STREAM"};L(p,{projectCode:d}).then(t=>{o.tableData=[...t.totalList],o.totalPage=t.totalPage}).finally(()=>{o.loading=!1})},f=p=>{o.row=p,o.startShow=!0};return{variables:o,getTableData:k,createColumns:m}}const Le=W({name:"stream-task-definition",setup(){var y;const{t:n}=g(),i=j(),u=Number(i.params.projectCode),d=(y=I())==null?void 0:y.appContext.config.globalProperties.trim,{task:m,onToggleShow:o,onEditTask:k,onInitTask:f,onUpdateTask:p}=V(u),{variables:t,getTableData:l,createColumns:w}=J(k),z=()=>{t.page=1,l()},D=()=>{l()},U=()=>{t.page=1,l()},T=()=>{o(!1),f()},v=async a=>{await p(a.data)&&(T(),D())};return _(()=>{w(t),l()}),x(g().locale,()=>{w(t)}),()=>e(c,{vertical:!0},{default:()=>[e(C,null,{default:()=>[e(c,{justify:"end"},{default:()=>[e(b,{allowInput:d,size:"small",clearable:!0,value:t.searchTaskName,"onUpdate:value":a=>t.searchTaskName=a,placeholder:n("project.task.task_name")},null),e(b,{allowInput:d,size:"small",clearable:!0,value:t.searchWorkflowName,"onUpdate:value":a=>t.searchWorkflowName=a,placeholder:n("project.task.workflow_name")},null),e(N,{size:"small",type:"primary",onClick:z},{default:()=>[e(h,null,{default:()=>[e(G,null,null)]})]})]})]}),e(C,null,{default:()=>[e(c,{vertical:!0},{default:()=>[e(H,{loading:t.loading,columns:t.columns,data:t.tableData,scrollX:t.tableWidth},null),e(c,{justify:"center"},{default:()=>[e(X,{page:t.page,"onUpdate:page":a=>t.page=a,"page-size":t.pageSize,"onUpdate:page-size":a=>t.pageSize=a,"page-count":t.totalPage,"show-size-picker":!0,"page-sizes":[10,30,50],"show-quick-jumper":!0,onUpdatePage:l,onUpdatePageSize:U},null)]})]})]}),e(F,{show:m.taskShow,data:m.taskData,onSubmit:v,onCancel:T,projectCode:u,from:1,readonly:m.taskReadonly,saving:m.taskSaving},null),e(A,{row:t.row,"onUpdate:row":a=>t.row=a,show:t.startShow,"onUpdate:show":a=>t.startShow=a,onUpdateList:l},null)]})}});export{Le as default};