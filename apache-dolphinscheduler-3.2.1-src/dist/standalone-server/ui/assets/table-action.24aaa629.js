import{d as c,b7 as p,b8 as m,b9 as f,bt as h,ba as w,u as g,c as e}from"./index.851b5188.js";import{F as S}from"./FormOutlined.42f04dba.js";import{S as C}from"./SyncOutlined.95d4ed16.js";import{C as b}from"./CloseCircleOutlined.9e282d8c.js";import{P as u}from"./PlayCircleOutlined.28a7c420.js";import{P as k}from"./PauseCircleOutlined.28d888d0.js";import{I as v}from"./InfoCircleFilled.b53f03a6.js";import{D as E}from"./DeleteOutlined.07e1d3fe.js";import{C as N}from"./ControlOutlined.a4737fde.js";import{N as i}from"./Tooltip.52cb9ce9.js";import{N as n}from"./Button.4e249408.js";import{N as o}from"./Icon.afc45566.js";import{N as R}from"./Popconfirm.013915ef.js";import{N as y}from"./Space.f9ece73f.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./resolve-slot.9e6a0162.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./use-locale.f8ac8f2c.js";import"./keysOf.ab13e590.js";import"./get-slot.80096ab3.js";import"./index.7a579f81.js";const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},P=f("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8L295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512L196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1l216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",fill:"currentColor"},null,-1),I=[P],U=c({name:"CloseOutlined",render:function(t,a){return p(),m("svg",O,I)}}),_={row:{type:Object,required:!0}},ge=c({name:"TableAction",props:_,emits:["updateList","reRun","reStore","stop","suspend","deleteInstance"],setup(r,t){const a=h();return{handleEdit:()=>{a.push({name:"workflow-instance-detail",params:{id:r.row.id},query:{code:r.row.processDefinitionCode}})},handleReRun:()=>{t.emit("reRun")},handleReStore:()=>{t.emit("reStore")},handleStop:()=>{t.emit("stop")},handleSuspend:()=>{t.emit("suspend")},handleDeleteInstance:()=>{t.emit("deleteInstance")},handleGantt:()=>{a.push({name:"workflow-instance-gantt",params:{id:r.row.id},query:{code:r.row.processDefinitionCode}})},...w(r)}},render(){var a;const{t:r}=g(),t=(a=this.row)==null?void 0:a.state;return e(y,null,{default:()=>[e(i,{trigger:"hover"},{default:()=>r("project.workflow.edit"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"info",circle:!0,class:"btn-edit",disabled:t!=="SUCCESS"&&t!=="PAUSE"&&t!=="FAILURE"&&t!=="STOP"||((l=this.row)==null?void 0:l.disabled),onClick:this.handleEdit},{default:()=>[e(o,null,{default:()=>[e(S,null,null)]})]})}}),e(i,{trigger:"hover"},{default:()=>r("project.workflow.rerun"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"info",circle:!0,onClick:this.handleReRun,class:"btn-rerun",disabled:t!=="SUCCESS"&&t!=="PAUSE"&&t!=="FAILURE"&&t!=="STOP"||((l=this.row)==null?void 0:l.disabled)},{default:()=>{var s,d;return[((s=this.row)==null?void 0:s.buttonType)==="run"?e("span",null,[(d=this.row)==null?void 0:d.count]):e(o,null,{default:()=>[e(C,null,null)]})]}})}}),e(i,{trigger:"hover"},{default:()=>r("project.workflow.recovery_failed"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"primary",circle:!0,onClick:this.handleReStore,disabled:t!=="FAILURE"||((l=this.row)==null?void 0:l.disabled)},{default:()=>{var s,d;return[((s=this.row)==null?void 0:s.buttonType)==="store"?e("span",null,[(d=this.row)==null?void 0:d.count]):e(o,null,{default:()=>[e(b,null,null)]})]}})}}),e(i,{trigger:"hover"},{default:()=>r(t==="STOP"?"project.workflow.recovery_suspend":"project.workflow.stop"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"error",circle:!0,onClick:this.handleStop,disabled:t!=="RUNNING_EXECUTION"&&t!=="STOP"||((l=this.row)==null?void 0:l.disabled)},{default:()=>[e(o,null,{default:()=>[t==="STOP"?e(u,null,null):e(U,null,null)]})]})}}),e(i,{trigger:"hover"},{default:()=>r(t==="PAUSE"?"project.workflow.recovery_suspend":"project.workflow.pause"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"warning",circle:!0,disabled:t!=="RUNNING_EXECUTION"&&t!=="PAUSE"||((l=this.row)==null?void 0:l.disabled),onClick:this.handleSuspend},{default:()=>[e(o,null,{default:()=>[t==="PAUSE"?e(u,null,null):e(k,null,null)]})]})}}),e(i,{trigger:"hover"},{default:()=>r("project.workflow.delete"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"error",circle:!0,disabled:t!=="SUCCESS"&&t!=="FAILURE"&&t!=="STOP"&&t!=="PAUSE"||((l=this.row)==null?void 0:l.disabled)},{default:()=>[e(R,{onPositiveClick:this.handleDeleteInstance},{default:()=>r("project.workflow.delete_confirm"),icon:()=>e(o,null,{default:()=>[e(v,null,null)]}),trigger:()=>e(o,null,{default:()=>[e(E,null,null)]})})]})}}),e(i,{trigger:"hover"},{default:()=>r("project.workflow.gantt"),trigger:()=>{var l;return e(n,{tag:"div",size:"small",type:"info",circle:!0,disabled:(l=this.row)==null?void 0:l.disabled,onClick:this.handleGantt},{default:()=>[e(o,null,{default:()=>[e(N,null,null)]})]})}})]})}});export{ge as default};
