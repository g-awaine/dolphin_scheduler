import{_ as x}from"./lodash.68b7405b.js";import{d as w,a as g,u as b,cq as S,c as L}from"./index.851b5188.js";import{i as k}from"./index.8b7b126b.js";import{t as v}from"./common.ee372ad3.js";import"./SettingOutlined.e20148d7.js";import"./PauseCircleOutlined.28d888d0.js";import"./CloseCircleOutlined.9e282d8c.js";import"./CheckCircleOutlined.67794958.js";import"./EditOutlined.e0b6da4a.js";import"./index.d671386a.js";const N={height:{type:[String,Number],default:window.innerHeight-174},width:{type:[String,Number],default:"100%"},seriesData:{type:Array,default:()=>[]},taskList:{type:Array,default:[]}},z=w({name:"GanttChart",props:N,setup(s){const i=g(null),{t:h}=b(),a=v(h),d={};Object.keys(a).forEach(t=>d[t]=[]);const f=Object.keys(a).map(t=>({id:t,type:"custom",name:a[t].desc,renderItem:p,itemStyle:{opacity:.8,color:a[t].color,color0:a[t].color},encode:{x:[1,2],y:0},data:d[t]}));let n=Number.MAX_VALUE,l=0;s.seriesData.forEach(function(t,r){const o=Math.floor(t.startDate[0]/1e3)*1e3,e=Math.floor(t.endDate[0]/1e3)*1e3;n=n<o?n:o,l=l>e?l:e,d[t.status].push({name:t.taskName,value:[r,o,e,e-o],itemStyle:{color:a[t.status].color}})});function p(t,r){const o=r.value(0),e=r.coord([r.value(1),o]),c=r.coord([r.value(2),o]),m=r.size([0,1])[1]*.6,u=S({x:e[0],y:e[1]-m/2,width:x.max([c[0]-e[0],1])||1,height:m},{x:t.coordSys.x,y:t.coordSys.y,width:t.coordSys.width,height:t.coordSys.height});return u&&{type:"rect",transition:["shape"],shape:u,style:r.style()}}const y={title:{text:h("project.workflow.task_state"),textStyle:{fontWeight:"normal",fontSize:14},left:50},tooltip:{formatter:function(t){const r=t.data.name,o=s.seriesData.filter(c=>c.taskName===r);let e=`taskName : ${r}</br>`;return e+=`status : ${a[o[0].status].desc} (${o[0].status})</br>`,e+=`startTime : ${o[0].isoStart}</br>`,e+=`endTime : ${o[0].isoEnd}</br>`,e+=`duration : ${o[0].duration}</br>`,e}},legend:{left:150,padding:[5,5,5,5]},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"weakFilter",height:20,bottom:0,start:0,end:100,handleSize:"80%",showDetail:!1,top:"85%"},{type:"inside",filterMode:"weakFilter"}],grid:{height:"70%",top:80},xAxis:{type:"time",min:n,max:l-n>5e3?l+1e3:n+5e3,position:"top",axisTick:{show:!0},splitLine:{show:!1},axisLabel:{formatter:"{HH}:{mm}:{ss}",showMinLabel:!0,showMaxLabel:!0,hideOverlap:!0}},yAxis:{axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!1},data:s.taskList.map(t=>({value:t,textStyle:{width:130,overflow:"truncate"}}))},series:f};return k(i,y),{graphChartRef:i}},render(){const{height:s,width:i}=this;return L("div",{ref:"graphChartRef",style:{height:typeof s=="number"?s+"px":s,width:typeof i=="number"?i+"px":i}},null)}});export{z as default};
