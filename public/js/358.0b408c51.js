"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[358],{2702:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(3396),n=a(8256),c=a(4870),s=a(4920),o=a(1120);const i={class:"content__top"},l={class:"breadcrumbs"},d={class:"breadcrumbs__item"},u=(0,r.Uk)(" Меню "),m={class:"breadcrumbs__item"},p=(0,r.Uk)(" Товары "),_=(0,r._)("li",{class:"breadcrumbs__item"},[(0,r._)("span",{class:"breadcrumbs__link",disabled:""}," Добавление товара ")],-1);var b={__name:"AddItem",setup(e){const{fetch:t}=(0,s.Z)(),a=(0,c.iH)(JSON.parse(localStorage.getItem("createData"))||{volumes:[],categories:[],brands:[],images:[],description:[{header:"Полезные свойства",content:[],id:1},{header:"Преминение",content:[],id:2},{header:"Противопоказания",content:[],id:3},{header:"Состав",content:[],id:4}]}),b=(0,c.iH)({}),h=()=>{const e=JSON.parse(localStorage.getItem("createData"));e.description=e.description.filter((e=>e.content.some((e=>!!e.paragraph)))),e.description&&e.description.forEach((e=>{e.content=e.content.filter((e=>!!e.paragraph))})),t("post","api/products",e,"CreateLoading").then((()=>{localStorage.removeItem("createData"),o.Z.push({name:"adminProducts"})})).catch((e=>{b.value=e.response.data,a.value.description.forEach((e=>{1!==e.content.length&&(e.content=e.content.filter((e=>!!e.paragraph)))}))}))};return(0,r.YP)((()=>a.value),(e=>{localStorage.setItem("createData",JSON.stringify(e))}),{deep:!0,immediate:!0}),(e,t)=>{const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",i,[(0,r._)("ul",l,[(0,r._)("li",d,[(0,r.Wm)(c,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,r.w5)((()=>[u])),_:1})]),(0,r._)("li",m,[(0,r.Wm)(c,{to:{name:"adminProducts"},class:"breadcrumbs__link"},{default:(0,r.w5)((()=>[p])),_:1})]),_])]),(0,r.Wm)(n.Z,{text:"добавить товар",data:a.value,"onUpdate:data":t[0]||(t[0]=e=>a.value=e),onSubmit:h,formError:b.value},null,8,["data","formError"])],64)}}};const h=b;var f=h}}]);
//# sourceMappingURL=358.0b408c51.js.map