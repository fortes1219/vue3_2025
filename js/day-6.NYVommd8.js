import{u as E,a as C,c as F}from"./element-plus.CKozIfrw.js";import{r as f,G as I,q as V,o as n,_ as i,Z as u,V as T,a as _,a2 as p,a1 as m,c as h,F as S,ap as G,p as B,x as D,I as $,u as d,a3 as y}from"./vendor.NXPq8Yx5.js";import{u as j}from"./goods.DglZLIIm.js";import"./request.CKPoFkx_.js";const N=Symbol("goods-filter");function O(){const o=f(""),s=f(""),t=f(""),a={type:e=>o.value=e,keyword:e=>s.value=e,spec:e=>t.value=e};return I(N,{activeType:o,searchText:s,specText:t,updateFilter:({type:e,keyword:r,spec:c})=>{e!==void 0&&a.type(e),r!==void 0&&a.keyword(r),c!==void 0&&a.spec(c)}}),{activeType:o,searchText:s,specText:t}}const P={class:"mt-3"},q={class:"mt-2 space-x-2"},L={__name:"goodsCard",props:{goods:{type:Object,required:!0}},setup(o){const s=o,{updateFilter:t}=V(N),a=()=>{t({type:s.goods.GoodsType.Alias})},l=()=>{t({keyword:s.goods.Name})},e=r=>{t({spec:s.goods.GoodsSpecs[r].Specs})};return(r,c)=>{const g=E,k=C,w=F;return n(),i(w,{shadow:"hover"},{default:u(()=>{var v;return[T(g,{src:(v=o.goods.ImageUrls[0])==null?void 0:v.Url,fit:"cover",class:"w-full h-48 object-cover"},null,8,["src"]),_("div",P,[_("h3",{class:"text-lg font-bold cursor-pointer hover:text-blue-500",onClick:l},p(o.goods.Name),1),T(k,{class:"mt-2 cursor-pointer",onClick:a},{default:u(()=>[m(p(o.goods.GoodsType.Name),1)]),_:1}),_("div",q,[(n(!0),h(S,null,G(o.goods.GoodsSpecs,(x,b)=>(n(),i(k,{key:x.ID,class:"mt-2 cursor-pointer",size:"small",type:"info",onClick:K=>e(b)},{default:u(()=>[m(p(x.Specs),1)]),_:2},1032,["onClick"]))),128))])])]}),_:1})}}},U={class:"p-4"},z={class:"flex items-center gap-2 mb-4"},A={class:"grid grid-cols-4 gap-4"},J={__name:"day-6",setup(o){const s=j(),{activeType:t,searchText:a,specText:l}=O();return B([t,a,l],([e,r,c])=>{console.log("過濾條件更新：",{type:e,keyword:r,spec:c})}),D(async()=>{await $(),s.getProductList()}),(e,r)=>{const c=C;return n(),h("div",U,[_("div",z,[d(a)?(n(),i(c,{key:0},{default:u(()=>[m("關鍵字: "+p(d(a)),1)]),_:1})):y("",!0),d(t)?(n(),i(c,{key:1},{default:u(()=>[m("類型: "+p(d(t)),1)]),_:1})):y("",!0),d(l)?(n(),i(c,{key:2},{default:u(()=>[m("規格: "+p(d(l)),1)]),_:1})):y("",!0)]),_("div",A,[(n(!0),h(S,null,G(d(s).getProducts,g=>(n(),i(L,{key:g.ID,goods:g},null,8,["goods"]))),128))])])}}};export{J as default};
