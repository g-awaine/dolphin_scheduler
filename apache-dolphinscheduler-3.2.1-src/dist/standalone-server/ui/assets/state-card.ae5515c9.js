import{u as n,d as u,c as t}from"./index.851b5188.js";import{P as s}from"./Pie.ebb56fe6.js";import{C as d}from"./index.6c124806.js";import{N as c,a as i}from"./Grid.3ae564e0.js";import{N as f}from"./DataTable.0e9ec324.js";import{N as y}from"./DatePicker.b69ef36a.js";import"./index.8b7b126b.js";import"./Card.19bc42e2.js";import"./resolve-slot.9e6a0162.js";import"./index.7a579f81.js";import"./keysOf.ab13e590.js";import"./utils.f449ed5c.js";import"./is-browser.45c3bd93.js";import"./VResizeObserver.6721b9ea.js";import"./flatten.05a2e46f.js";import"./get-slot.80096ab3.js";import"./next-frame-once.e5ee25e8.js";import"./ArrowDown.45f9e719.js";import"./format-length.d7d829b3.js";import"./Button.4e249408.js";import"./use-form-item.bb4d7ada.js";import"./Scrollbar.7a99b971.js";import"./fade-in.cssr.55dfcced.js";import"./Checkbox.98b84c16.js";import"./use-merged-state.e40d3a9f.js";import"./RadioGroup.c3ead4f3.js";import"./Radio.fc32ca3b.js";import"./Popover.30015336.js";import"./index.e739cd60.js";import"./use-false-until-truthy.5d7093c9.js";import"./_baseMap.9542141b.js";import"./get.aa32335f.js";import"./use-compitable.ae5454ac.js";import"./Suffix.21a8a87f.js";import"./Dropdown.4af83811.js";import"./Icon.afc45566.js";import"./ChevronRight.d6536995.js";import"./Selection.28a32045.js";import"./use-locale.f8ac8f2c.js";import"./fade-in-scale-up.cssr.5737b1c6.js";import"./use-keyboard.f4d2f0c0.js";import"./Ellipsis.b13f7726.js";import"./Tooltip.52cb9ce9.js";import"./Input.79ba0d48.js";import"./Select.3e0f2c28.js";import"./index.3ef69258.js";import"./Forward.bddcd6d4.js";import"./typeof.b54b2da3.js";import"./index.d671386a.js";function D(){const{t:r}=n();return{columnsRef:[{title:"#",key:"index",render:(o,e)=>e+1},{title:r("home.number"),key:"number"},{title:r("home.state"),key:"state"}]}}const h={title:{type:String},date:{type:Array},tableData:{type:Array,default:()=>[]},chartData:{type:Array,default:()=>[]},loadingRef:{type:Boolean,default:!1}},ct=u({name:"StateCard",props:h,emits:["updateDatePickerValue"],setup(r,a){return{onUpdateDatePickerValue:e=>{a.emit("updateDatePickerValue",e)}}},render(){const{title:r,date:a,tableData:o,chartData:e,onUpdateDatePickerValue:m,loadingRef:p}=this,{columnsRef:l}=D();return t(d,{title:r,style:{minHeight:"820px"}},{default:()=>t(c,{"x-gap":12,cols:2},{default:()=>[t(i,null,{default:()=>[e.length>0&&t(s,{data:e},null)]}),t(i,null,{default:()=>[o&&t(f,{loading:p,columns:l,data:o,striped:!0,size:"small"},null)]})]}),"header-extra":()=>t(y,{"default-value":a,onUpdateValue:m,size:"small",type:"datetimerange",clearable:!0},null)})}});export{ct as default};
