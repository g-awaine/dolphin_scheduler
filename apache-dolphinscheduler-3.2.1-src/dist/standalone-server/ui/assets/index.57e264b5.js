import{s as e}from"./service.4be3af67.js";function a(t){return e({url:"/tenants",method:"get",params:t})}function u(t){return e({url:"/tenants",method:"post",data:t})}function s(){return e({url:"/tenants/list",method:"get"})}function o(t){return e({url:"/tenants/verify-code",method:"get",params:t})}function i(t,n){return e({url:`/tenants/${n.id}`,method:"put",data:t})}function d(t){return e({url:`/tenants/${t}`,method:"delete"})}export{a,u as c,d,s as q,i as u,o as v};
