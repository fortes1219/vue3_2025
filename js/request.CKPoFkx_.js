import{aW as c}from"./vendor.NXPq8Yx5.js";function l(r){r.headers.token=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).token:"";const o=c.create({headers:r.headers,baseURL:void 0,timeout:3e4,transformRequest:[(e=r.params)=>n(JSON.stringify(e)).data]}),n=e=>{for(const t in e)if(e.hasOwnProperty(t)){const s=e[t];(s===""||s===void 0)&&delete e[t]}return{data:encodeURIComponent(btoa(encodeURIComponent(e)))}};return o.interceptors.request.use(e=>e,e=>{console.log(e),Promise.reject(e)}),o.interceptors.response.use(e=>e,e=>{if(e.response)switch(e.response.status){case 400:console.error("400 Bad Request");break;case 404:console.error("404 Not Found");break;case 500:console.error("500 Internal Server Error");break;default:console.error(`Error: ${e.response.status}`)}else console.error("Network Error or Request Timed Out");return Promise.reject(e)}),o(r)}console.log("production");export{l as r};
