import{d as r,c as o,al as n}from"./index.851b5188.js";import{N as a}from"./Card.19bc42e2.js";function l(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!n(t)}const d={borderBottom:"1px solid var(--n-border-color)"},i={padding:"8px 10px"},s={},c={title:{type:String},headerStyle:{type:String},headerExtraStyle:{type:String},contentStyle:{type:String}},y=r({name:"Card",props:c,render(){const{title:t,$slots:e}=this;return o(a,{title:t,size:"small",headerStyle:this.headerStyle?this.headerStyle:d,headerExtraStyle:this.headerExtraStyle?this.headerExtraStyle:s,contentStyle:this.contentStyle?this.contentStyle:i},l(e)?e:{default:()=>[e]})}}),p=y;export{p as C};