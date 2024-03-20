import{g as O}from"./index.18b4303b.js";import{d as D,A as R,a as S,bI as L,e as P,u as B,c as n,V as _,al as V}from"./index.851b5188.js";import{u as A}from"./common.ee372ad3.js";import{N as o}from"./Button.4e249408.js";import"./service.4be3af67.js";import"./ui-setting.39219f0f.js";import"./lodash.68b7405b.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./EditOutlined.e0b6da4a.js";import"./index.d671386a.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./resolve-slot.9e6a0162.js";const l={"dag-context-menu":"_dag-context-menu_e40aw_17","menu-item":"_menu-item_e40aw_25"};function i(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const K={startDisplay:{type:Boolean,default:!1},executeTaskDisplay:{type:Boolean,default:!1},menuDisplay:{type:Boolean,default:!1},taskInstance:{type:Object,require:!0},cell:{type:Object,require:!0},visible:{type:Boolean,default:!0},left:{type:Number,default:0},top:{type:Number,default:0}},ne=D({name:"dag-context-menu",props:K,emits:["hide","start","edit","viewLog","copyTask","removeTasks","executeTask","removeTaskInstanceCache"],setup(e,a){const c=R("graph",S()),u=L(),m=Number(u.params.projectCode),d=()=>{a.emit("hide",!1)},r=()=>{var t;a.emit("start",Number((t=e.cell)==null?void 0:t.id))},k=()=>{var t;a.emit("edit",Number((t=e.cell)==null?void 0:t.id))},f=()=>{e.taskInstance&&a.emit("viewLog",e.taskInstance.id,e.taskInstance.taskType)},s=()=>{var t;a.emit("executeTask",Number((t=e.cell)==null?void 0:t.id),"TASK_ONLY")},C=()=>{var t;e.taskInstance&&a.emit("executeTask",Number((t=e.cell)==null?void 0:t.id),"TASK_POST")},b=()=>{var t;e.taskInstance&&a.emit("executeTask",Number((t=e.cell)==null?void 0:t.id),"TASK_PRE")},N=()=>{e.taskInstance&&a.emit("removeTaskInstanceCache",e.taskInstance.id)},j=()=>{var y,T,p,g;const h=(y=e.cell)==null?void 0:y.data.taskType,I=A(((T=e.cell)==null?void 0:T.data.taskName)+"_"),w=Number((p=e.cell)==null?void 0:p.id),x=(g=e.cell)==null?void 0:g.data.flag;O(1,m).then(E=>{const[$]=E;a.emit("copyTask",I,$,w,h,x,{x:e.left+100,y:e.top+100})})},v=()=>{var t,h;(t=c.value)==null||t.removeCell(e.cell),a.emit("removeTasks",[Number((h=e.cell)==null?void 0:h.id)])};return P(()=>{document.addEventListener("click",()=>{d()})}),{startRunning:r,handleEdit:k,handleCopy:j,handleDelete:v,handleViewLog:f,handleExecuteTaskOnly:s,handleExecuteTaskPOST:C,handleExecuteTaskPRE:b,handleRemoveTaskInstanceCache:N}},render(){let e,a,c,u,m,d,r,k,f;const{t:s}=B();return this.visible&&n("div",{class:l["dag-context-menu"],style:{left:`${this.left}px`,top:`${this.top}px`}},[this.startDisplay&&n(o,{class:`${l["menu-item"]}`,onClick:this.startRunning},i(e=s("project.node.start"))?e:{default:()=>[e]}),this.menuDisplay&&n(_,null,[n(o,{class:`${l["menu-item"]}`,onClick:this.handleEdit},i(a=s("project.node.edit"))?a:{default:()=>[a]}),n(o,{class:`${l["menu-item"]}`,onClick:this.handleCopy},i(c=s("project.node.copy"))?c:{default:()=>[c]}),n(o,{class:`${l["menu-item"]}`,onClick:this.handleDelete},i(u=s("project.node.delete"))?u:{default:()=>[u]})]),this.taskInstance&&n(_,null,[n(o,{class:`${l["menu-item"]}`,onClick:this.handleViewLog},i(m=s("project.node.view_log"))?m:{default:()=>[m]}),n(o,{class:`${l["menu-item"]}`,onClick:this.handleRemoveTaskInstanceCache},i(d=s("project.task.remove_task_cache"))?d:{default:()=>[d]})]),this.executeTaskDisplay&&n(_,null,[n(o,{class:`${l["menu-item"]}`,onClick:this.handleExecuteTaskOnly},i(r=s("project.workflow.current_node_execution_task"))?r:{default:()=>[r]}),n(o,{class:`${l["menu-item"]}`,onClick:this.handleExecuteTaskPOST},i(k=s("project.workflow.backward_execution_task"))?k:{default:()=>[k]}),n(o,{class:`${l["menu-item"]}`,onClick:this.handleExecuteTaskPRE},i(f=s("project.workflow.forward_execution_task"))?f:{default:()=>[f]})])])}});export{ne as default};
