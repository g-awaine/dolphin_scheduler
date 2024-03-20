import{by as J,w as x,bI as K,a as N,e as oe,aL as Se,u as ne,t as Ne,cl as Le,d as ye,bF as De,B as te,z as j,n as U,b as we,c as D}from"./index.851b5188.js";import Ee from"./dag-toolbar.9c9c21cc.js";import be from"./dag-canvas.d99bd5b4.js";import Re from"./dag-sidebar.cd7dc382.js";import{S as G}from"./dag.module.6dc78b46.js";import{u as Ie,D as Me}from"./dag-auto-layout-modal.1ba7bfdf.js";import"./index.6abc819d.js";import{l as I}from"./lodash.68b7405b.js";import{u as xe}from"./index.73124cc7.js";import Ve from"./dag-context-menu.e22e9ab5.js";import{T as _,u as Ae}from"./task-type.dfd9250b.js";import"./gForce.3509cc7a.js";import{a as Oe,X as Pe,N as je,i as Ue}from"./dag-config.e2eb20b1.js";import"./service.4be3af67.js";import _e from"./dag-node-status.8cc86097.js";import{g as Be}from"./index.18b4303b.js";import{f as Xe,N as Ye}from"./detail-modal.57748ee9.js";import{t as Fe}from"./common.ee372ad3.js";import{a as He}from"./index.4701b8ec.js";import $e from"./version-modal.4c6e3cbb.js";import Ge from"./dag-save-modal.7b1d96ef.js";import{S as Je}from"./start-modal.f3a76e73.js";import{L as Ke,a as qe,r as ze}from"./index.d95f3dc5.js";/* empty css                 */import{u as We}from"./ui-setting.39219f0f.js";import{e as Qe}from"./index.834fe2cc.js";import"./use-text-copy.448fed4f.js";import"./use-message.e3f85643.js";import"./dag-startup-param.1d33a3fd.js";import"./index.b3847370.js";import"./index.2d754617.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./EditOutlined.e0b6da4a.js";import"./index.d671386a.js";import"./variables-view.b9866483.js";import"./index.23da2c90.js";import"./Button.4e249408.js";import"./is-browser.45c3bd93.js";import"./use-form-item.bb4d7ada.js";import"./resolve-slot.9e6a0162.js";import"./CopyOutlined.8195d297.js";import"./SearchOutlined.3b9a5586.js";import"./DownloadOutlined.2b4ed5b8.js";import"./SyncOutlined.95d4ed16.js";import"./DeleteOutlined.07e1d3fe.js";import"./FullscreenOutlined.01f40161.js";import"./InfoCircleOutlined.926adab8.js";import"./Tooltip.52cb9ce9.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./flatten.05a2e46f.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./VResizeObserver.6721b9ea.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./utils.f449ed5c.js";import"./format-length.d7d829b3.js";import"./use-merged-state.e40d3a9f.js";import"./use-compitable.ae5454ac.js";import"./next-frame-once.e5ee25e8.js";import"./Icon.afc45566.js";import"./text.f967c9a6.js";import"./Selection.28a32045.js";import"./index.7a579f81.js";import"./use-locale.f8ac8f2c.js";import"./Suffix.21a8a87f.js";import"./Select.3e0f2c28.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./index.3ef69258.js";import"./toNumber.c7e8ca68.js";import"./debounce.948fb11c.js";import"./typeof.b54b2da3.js";import"./Spin.447cad15.js";import"./ChevronRight.d6536995.js";import"./StarOutlined.2ad53855.js";import"./index.e69e8738.js";import"./index.8acb741a.js";import"./keysOf.ab13e590.js";import"./Card.19bc42e2.js";import"./Space.f9ece73f.js";import"./get-slot.80096ab3.js";import"./RadioButton.cdb434b9.js";import"./RadioGroup.c3ead4f3.js";import"./Form.9f7fa8c1.js";import"./FormItem.f5b3f80b.js";import"./InputNumber.cc83334e.js";import"./Input.79ba0d48.js";import"./Add.3164a73d.js";import"./detail.26980e87.js";import"./get-elements-by-json.9201707b.js";import"./Grid.3ae564e0.js";import"./Radio.fc32ca3b.js";import"./index.2fc51a01.js";import"./Switch.f95d65b1.js";import"./Checkbox.98b84c16.js";import"./TreeSelect.5a0f3466.js";import"./index.module.4a3c8d75.js";import"./ArrowUpOutlined.284f08d8.js";import"./index.71fea87c.js";import"./index.336ca31d.js";import"./index.59799c67.js";import"./index.41692750.js";import"./index.56bd039e.js";import"./index.605d19c5.js";import"./Ellipsis.b13f7726.js";import"./index.1abd1843.js";import"./index.35726d3e.js";import"./ProfileOutlined.18d24d11.js";import"./use-modal.a8c92e75.js";import"./index.57e264b5.js";import"./ExclamationCircleOutlined.f43290af.js";import"./Popconfirm.013915ef.js";import"./DataTable.0e9ec324.js";import"./ArrowDown.45f9e719.js";import"./Dropdown.4af83811.js";import"./use-keyboard.f4d2f0c0.js";import"./Forward.bddcd6d4.js";import"./ButtonGroup.90ec260c.js";import"./PlusCircleOutlined.b025a581.js";import"./DatePicker.b69ef36a.js";import"./throttle.821ebb8d.js";function Ze(){function o(s,v,g){const p={};v.forEach(n=>{const t=n.getTargetCellId();p[t]=!0});const d=n=>!p[n],u={};s.forEach(n=>{const t=n.id,a=g.find(m=>m.code===Number(t));a&&(u[t]=a)});const h=s.filter(n=>d(n.id)).map(n=>{const t=u[n.id];return{name:"",preTaskCode:0,preTaskVersion:0,postTaskCode:t.code,postTaskVersion:t.version||0,conditionType:"NONE",conditionParams:{}}}),i=v.map(n=>{const t=n.getLabels(),a=I.exports.get(t,["0","attrs","label","text"],""),m=n.getSourceCellId(),k=u[m],c=n.getTargetCellId(),S=u[c];return{name:a,preTaskCode:k.code,preTaskVersion:k.version||0,postTaskCode:S.code,postTaskVersion:S.version||0,conditionType:"NONE",conditionParams:{}}});return h.concat(i)}function l(s){return s.map(v=>{const g=+v.id,{x:p,y:d}=v.getPosition();return{taskCode:g,x:p,y:d}})}return{getLocations:l,getConnects:o}}function et(o){const{graph:l}=o,{buildNode:s,buildEdge:v}=se();function g(t,a){var k;const m=(k=l.value)==null?void 0:k.getCellById(t);if(m){const c=J.truncateText(a,18);m.attr("title/text",c),m.setData({taskName:a})}}function p(t,a,m,k,c={x:100,y:100}){var E;if(!_[a])return;const S=s(t,a,m,k,c);(E=l.value)==null||E.addNode(S)}function d(t){var a;(a=l.value)==null||a.removeNode(t)}const u=t=>{var k,c;const a=(k=l.value)==null?void 0:k.getCellById(t);return a?((c=l.value)==null?void 0:c.getConnectedEdges(a))||[]:[]};return{setNodeName:g,setNodeEdge:(t,a)=>{const m=u(t);m!=null&&m.length&&m.forEach(k=>{var c,S;((c=k.getTargetNode())==null?void 0:c.id)===t&&((S=l.value)==null||S.removeEdge(k))}),a.forEach(k=>{var c;(c=l.value)==null||c.addEdge(v(String(k),t))})},addNode:p,removeNode:d,getSources:t=>{const a=u(t);if(!a.length)return[];const m=[];return a.forEach(k=>{const c=k.getSourceNode();c&&c.id!==t&&m.push(Number(c.id))}),m},getTargets:t=>{const a=u(t);if(!a.length)return[];const m=[];return a.forEach(k=>{const c=k.getTargetNode();c&&c.id!==t&&m.push(Number(c.id))}),m}}}function se(){function o(g){let p=null;return g?(p=JSON.parse(g),Array.isArray(p)?p:null):p}function l(g,p,d="",u=!1){return{shape:Oe,source:{cell:g},target:{cell:p},labels:d?[d]:void 0,attrs:{line:{strokeDasharray:u?"5 5":"none"}}}}function s(g,p,d,u,h={x:100,y:100}){const i=d?J.truncateText(d,18):g;return{id:g,shape:Pe,x:h.x,y:h.y,data:{taskType:p,taskName:d||g,flag:u,taskExecuteType:_[p].taskExecuteType},attrs:{image:{"xlink:href":`/dolphinscheduler/ui/images/task-icons/${(p!=="FLINK_STREAM"?p:"FLINK").toLocaleLowerCase()}.png`},title:{text:i},rect:{fill:u==="NO"?"#f3f3f5":"#ffffff"}}}}function v(g){const p=[],d=[],u=o(g.processDefinition.locations)||[],h=g.taskDefinitionList,i=g.processTaskRelationList,n={};return h.forEach(t=>{const a=u.find(k=>k.taskCode===t.code)||{},m=s(t.code+"",t.taskType,t.name,t.flag,{x:a.x,y:a.y});p.push(m),n[String(t.code)]=t.taskType}),i.filter(t=>!!t.preTaskCode).forEach(t=>{const a=_[n[t.preTaskCode]].taskExecuteType==="STREAM"||_[n[t.postTaskCode]].taskExecuteType==="STREAM",m=l(t.preTaskCode+"",t.postTaskCode+"",t.name,a);d.push(m)}),{nodes:p,edges:d}}return{buildNode:s,buildEdge:l,buildGraph:v}}function tt(o){const{graph:l,definition:s}=o,{buildGraph:v}=se();return x([l,s],()=>{l.value&&s.value&&l.value.fromJSON(v(s.value))}),{}}function ot(o){const{readonly:l,graph:s,appendTask:v}=o,g=K(),p=Number(g.params.projectCode),d=N({x:0,y:0,type:"SHELL"});function u(n,t){if(l.value){n.preventDefault();return}d.value={x:n.offsetX,y:n.offsetY,type:t}}function h(n){if(n.stopPropagation(),n.preventDefault(),!l.value&&d.value&&s.value&&p){const{type:t,x:a,y:m}=d.value,{x:k,y:c}=s.value.clientToLocal(n.clientX,n.clientY);Be(1,p).then(E=>{const[M]=E;v(M,t,{x:k-a,y:c-m})})}}const i=n=>{n.preventDefault()};return{onDragStart:u,onDrop:h,onDragenter:i,onDragover:i,onDragleave:i}}function nt(o){const{graph:l,definition:s}=o,{addNode:v,removeNode:g,getSources:p,getTargets:d,setNodeName:u,setNodeEdge:h}=et({graph:l}),i=N((s==null?void 0:s.value)||{processDefinition:{},processTaskRelationList:[],taskDefinitionList:[]}),n=N({taskType:"SHELL",code:0,name:""}),t=N(!1);function a(r,T,e){v(r+"",T,"","YES",e),i.value.taskDefinitionList.push({code:r,taskType:T,name:""}),c({code:r,taskType:T,name:""})}function m(r,T,e,C,L,y){v(T+"",C,r,L,y);const X=i.value.taskDefinitionList.find(F=>F.code===e),Y={...I.exports.cloneDeep(X),code:T,name:r};i.value.taskDefinitionList.push(Y)}function k(r,T){i.value.taskDefinitionList=i.value.taskDefinitionList.filter(e=>!r.includes(e.code)),r.forEach(e=>{I.exports.remove(i.value.processTaskRelationList,C=>C.postTaskCode===e||C.preTaskCode===e)}),T==null||T.forEach(e=>{if(e.isEdge()){const C=e.getSourceCellId(),L=e.getTargetCellId();I.exports.remove(i.value.processTaskRelationList,y=>String(y.postTaskCode)===L&&String(y.preTaskCode)===C)}})}function c(r){n.value=r,t.value=!0}function S(r){const T=i.value.taskDefinitionList.find(e=>e.code===r);T&&(n.value=T),V(p(String(r)),r),B(r),t.value=!0}function E({data:r}){const T=Xe(r).taskDefinitionJsonObj;i.value.taskDefinitionList=i.value.taskDefinitionList.map(e=>{var C;return e.code===((C=n.value)==null?void 0:C.code)?(u(e.code+"",T.name),h(String(e.code),r.preTasks),V(r.preTasks,e.code),{...T,version:e.version,code:e.code,taskType:n.value.taskType,id:e.id}):e}),t.value=!1}function M(){t.value=!1,n.value.name||(g(String(n.value.code)),I.exports.remove(i.value.taskDefinitionList,r=>r.code===n.value.code))}function V(r,T){var e,C;(C=(e=i.value)==null?void 0:e.processTaskRelationList)!=null&&C.length&&I.exports.remove(i.value.processTaskRelationList,L=>L.postTaskCode===T),r!=null&&r.length&&r.forEach(L=>{var y;(y=i.value)==null||y.processTaskRelationList.push({postTaskCode:T,preTaskCode:L,name:"",preTaskVersion:1,postTaskVersion:1,conditionType:"NONE",conditionParams:{}})})}function B(r){d(String(r)).forEach(e=>{var C,L;(C=i.value)!=null&&C.processTaskRelationList.find(y=>y.postTaskCode===e&&y.preTaskCode===r)||(L=i.value)==null||L.processTaskRelationList.push({postTaskCode:e,preTaskCode:r,name:"",preTaskVersion:1,postTaskVersion:1,conditionType:"NONE",conditionParams:{}})})}return oe(()=>{l.value&&l.value.on("cell:dblclick",({cell:r})=>{const T=Number(r.id);S(T)})}),x(s,()=>{s.value&&(i.value=s.value)}),{currTask:n,taskModalVisible:t,processDefinition:i,taskConfirm:E,taskCancel:M,appendTask:a,editTask:S,copyTask:m,removeTasks:k}}function st(o){const{graph:l}=o,s=Se({menuVisible:!1,startModalShow:!1,logTaskId:-1,logTaskType:"",pageX:0,pageY:0,menuCell:{},showModalRef:N(!1),row:{},logRef:"",logLoadingRef:N(!0),skipLineNum:N(0),limit:N(1e3),taskCode:""}),v=()=>{var d;s.menuVisible=!1,(d=l.value)==null||d.unlockScroller()},g=d=>{s.startModalShow=!0,s.taskCode=String(d)},p=(d,u)=>{s.logTaskId=d,s.logTaskType=u,s.showModalRef=!0};return oe(()=>{l.value&&l.value.on("node:contextmenu",({cell:d,x:u,y:h})=>{s.menuCell=d;const i=l.value.localToPage(u,h);s.pageX=i.x,s.pageY=i.y,s.menuVisible=!0,l.value.lockScroller()})}),{nodeVariables:s,menuHide:v,menuStart:g,viewLog:p}}function at(o){const{graph:l}=o,s=K(),v=N([]),{t:g}=ne(),p=Ae(),d=(h,i,n)=>{var m,k;const t=Fe(g)[i],a=(m=l.value)==null?void 0:m.getCellById(h);if(a){a.removeMarkup(),a.setMarkup(je.markup.concat(Ue));const c=(k=l.value)==null?void 0:k.findViewByCell(a),S=c==null?void 0:c.find("div")[0],E=Ne(_e,{t:g,taskInstance:n,stateProps:t});Le(E,S)}};return{taskList:v,refreshTaskStatus:()=>{const h=Number(s.params.projectCode),i=Number(s.params.id);He(i,h).then(n=>{window.$message.success(g("project.workflow.refresh_status_succeeded")),v.value=n.taskList,v.value&&v.value.forEach(t=>{d(t.taskCode,t.state,t),t.dependentResult&&p.updateDependentResult(JSON.parse(t.dependentResult))})})}}}const it={instance:{type:Object,default:void 0},definition:{type:Object,default:void 0},readonly:{type:Boolean,default:!1},projectCode:{type:Number,default:0}},En=ye({name:"workflow-dag",props:it,emits:["refresh","save"],setup(o,l){const{t:s}=ne(),v=K(),g=De(),d=We().getLogTimer;te("readonly",j(o,"readonly"));const u=N();te("graph",u),l.expose(u);const{visible:h,toggle:i,formValue:n,formRef:t,submit:a,cancel:m}=Ie({graph:u}),{taskConfirm:k,taskModalVisible:c,currTask:S,taskCancel:E,appendTask:M,editTask:V,copyTask:B,processDefinition:r,removeTasks:T}=nt({graph:u,definition:j(o,"definition")}),{nodeVariables:e,menuHide:C,menuStart:L,viewLog:y}=st({graph:u}),X=U(()=>o.definition?v.name==="workflow-definition-detail"&&o.definition.processDefinition.releaseState==="ONLINE":!1),Y=U(()=>v.name==="workflow-instance-detail"),F=U(()=>o.instance?o.instance.state==="WAITING_THREAD"||o.instance.state==="SUCCESS"||o.instance.state==="PAUSE"||o.instance.state==="FAILURE"||o.instance.state==="STOP":o.definition?o.definition.processDefinition.releaseState==="OFFLINE":!1),ae=U(()=>{if(e.menuCell){const f=Number(e.menuCell.id);return W.value.find(w=>w.taskCode===f)}else return}),q=N();x(()=>c.value,()=>{if(o.instance&&c.value){const f=S.value.code;q.value=W.value.find(w=>w.taskCode===f)}});const z=N(),{taskList:W,refreshTaskStatus:A}=at({graph:u}),{onDragStart:ie,onDrop:re}=ot({graph:u,readonly:j(o,"readonly"),appendTask:M});tt({graph:u,definition:j(o,"definition")});const R=N(!1),le=f=>{typeof f=="boolean"?R.value=f:R.value=!R.value},ue=()=>{l.emit("refresh"),R.value=!1},O=N(!1),H=f=>{typeof f=="boolean"?O.value=f:O.value=!R.value},{getConnects:ce,getLocations:de}=Ze(),me=f=>{var Z,ee;const w=((Z=u.value)==null?void 0:Z.getEdges())||[],b=((ee=u.value)==null?void 0:ee.getNodes())||[];if(!b.length){window.$message.error(s("project.dag.node_not_created")),H(!1);return}const he=ce(b,w,r.value.taskDefinitionList),Ce=de(b);l.emit("save",{taskDefinitions:r.value.taskDefinitionList,saveForm:f,connects:he,locations:Ce}),H(!1)},Q=(f,w)=>{c.value=!1,y(f,w),P(d)};let $;const P=f=>{const{state:w}=xe(qe({taskInstanceId:e.logTaskId,limit:e.limit,skipLineNum:e.skipLineNum}).then(b=>{e.logRef+=b.message||"",b&&b.message!==""?(e.limit+=1e3,e.skipLineNum+=b.lineNum,P(f)):(e.logLoadingRef=!1,f!==0&&(typeof $=="number"&&clearTimeout($),$=setTimeout(()=>{e.limit+=1e3,e.skipLineNum+=1e3,P(f)},f*1e3)))}),{});return w},fe=f=>{e.logRef="",e.limit=1e3,e.skipLineNum=0,P(f)},pe=(f,w)=>{Qe({processInstanceId:Number(v.params.id),startNodeList:f,taskDependType:w},o.projectCode).then(()=>{window.$message.success(s("project.workflow.success")),setTimeout(()=>{window.location.reload()},1e3)})},ge=f=>{ze(o.projectCode,f).then(()=>{window.$message.success(s("project.workflow.success"))})},ke=()=>{J.downloadFile("log/download-log",{taskInstanceId:e.logTaskId})},ve=()=>{e.showModalRef=!1},Te=()=>{a(),o.instance&&A()};return x(()=>o.definition,()=>{o.instance&&(A(),z.value=setInterval(()=>A(),9e4))}),x(()=>e.showModalRef,()=>{e.showModalRef||(e.row={},e.logRef="",e.logLoadingRef=!0,e.skipLineNum=0,e.limit=1e3)}),we(()=>clearInterval(z.value)),()=>D("div",{class:[G.dag,G[`dag-${g.darkTheme?"dark":"light"}`]]},[D(Ee,{layoutToggle:i,instance:o.instance,definition:o.definition,onVersionToggle:le,onSaveModelToggle:H,onRemoveTasks:T,onRefresh:A},null),D("div",{class:G.content},[D(Re,{onDragStart:ie},null),D(be,{onDrop:re},null)]),D(Me,{visible:h.value,submit:Te,cancel:m,formValue:n,formRef:t},null),!!o.definition&&D($e,{isInstance:!!o.instance,row:o.definition.processDefinition,"onUpdate:row":f=>o.definition.processDefinition=f,show:R.value,"onUpdate:show":f=>R.value=f,onUpdateList:ue},null),D(Ge,{show:O.value,"onUpdate:show":f=>O.value=f,onSave:me,definition:o.definition,instance:o.instance},null),D(Ye,{readonly:o.readonly,show:c.value,projectCode:o.projectCode,processInstance:o.instance,taskInstance:q.value,onViewLog:Q,data:S.value,definition:r,onSubmit:k,onCancel:E},null),D(Ve,{startDisplay:X.value,executeTaskDisplay:Y.value,menuDisplay:F.value,taskInstance:ae.value,cell:e.menuCell,visible:e.menuVisible,left:e.pageX,top:e.pageY,onHide:C,onStart:L,onEdit:V,onCopyTask:B,onRemoveTasks:T,onViewLog:Q,onExecuteTask:pe,onRemoveTaskInstanceCache:ge},null),!!o.definition&&D(Je,{row:o.definition.processDefinition,"onUpdate:row":f=>o.definition.processDefinition=f,show:e.startModalShow,"onUpdate:show":f=>e.startModalShow=f,taskCode:e.taskCode},null),!!o.instance&&D(Ke,{showModalRef:e.showModalRef,logRef:e.logRef,row:e.row,showDownloadLog:!0,logLoadingRef:e.logLoadingRef,onConfirmModal:ve,onRefreshLogs:fe,onDownloadLogs:ke},null)])}});export{En as default};
