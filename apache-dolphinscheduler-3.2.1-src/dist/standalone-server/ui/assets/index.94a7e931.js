import{d as s,u as c,c as p,bb as h}from"./index.851b5188.js";import{N as i}from"./Input.79ba0d48.js";const u={placeholder:{type:String,required:!1}},f=s({name:"Search",props:u,emits:["search","clear"],setup(a,t){const{t:o}=c(),l=r=>{var e;t.emit("search",((e=r.target)==null?void 0:e.value)||"")},n=r=>{var e;t.emit("clear",((e=r.target)==null?void 0:e.value)||"")};return()=>p(i,{size:"small",clearable:!0,placeholder:a.placeholder?a.placeholder:o("input_search.placeholder"),onKeydown:h(l,["enter"]),onClear:n},null)}});export{f as S};
