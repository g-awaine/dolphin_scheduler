import{u as f,s as c,a as u,b as l,g as S}from"./index.18b4303b.js";import{f as r}from"./detail-modal.57748ee9.js";import{aL as g}from"./index.851b5188.js";function J(n){const o={taskType:"SHELL"},a=g({taskShow:!1,taskData:{...o},taskSaving:!1,taskReadonly:!1}),i=(s,t)=>{const e=r(s);return t?{processDefinitionCode:e.processDefinitionCode,upstreamCodes:e.upstreamCodes,taskDefinitionJsonObj:JSON.stringify(e.taskDefinitionJsonObj)}:{upstreamCodes:e.upstreamCodes,taskDefinitionJsonObj:JSON.stringify(e.taskDefinitionJsonObj)}},k=async()=>(await S(1,n))[0];return{task:a,onToggleShow:s=>{a.taskShow=s},onTaskSave:async s=>{if(!a.taskSaving){a.taskSaving=!0;try{if(s.id)s.code&&await f(n,s.code,i({...s,code:s.code},!1));else{const t=await k();await c(n,i({...s,code:t},!0))}return a.taskSaving=!1,!0}catch{return a.taskSaving=!1,!1}}},onEditTask:async(s,t)=>{const e=await u(s.taskCode,n);a.taskData={...e,processName:s.processDefinitionCode},a.taskShow=!0,a.taskReadonly=t},onInitTask:()=>{a.taskData={...o},a.taskReadonly=!1},onUpdateTask:async s=>{if(a.taskSaving||!s.code)return;a.taskSaving=!0;const t={taskExecuteType:"STREAM",taskDefinitionJsonObj:JSON.stringify(r(s).taskDefinitionJsonObj)};try{return await l(n,s.code,t),a.taskSaving=!1,!0}catch{return a.taskSaving=!1,!1}}}}export{J as u};