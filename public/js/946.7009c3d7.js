"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[946],{2870:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var s=t(3396),r=t(4870),l=t(1218),c=t(6866),n=t(4460),i=t(4920),d=t(9205);const u={class:"container content"},o={class:"content__top"},m={key:0,class:"breadcrumbs"},b={class:"breadcrumbs__item"},_=(0,s.Uk)(" Меню "),k={class:"breadcrumbs__item"},g=(0,s.Uk)(" Заказы "),p=(0,s._)("li",{class:"breadcrumbs__item"},[(0,s._)("span",{class:"breadcrumbs__link"}," Оформление заказа ")],-1),v={key:1,class:"breadcrumbs"},h={class:"breadcrumbs__item"},f=(0,s.Uk)(" Каталог "),y={class:"breadcrumbs__item"},I=(0,s.Uk)(" Корзина "),w=(0,s._)("li",{class:"breadcrumbs__item"},[(0,s._)("a",{class:"breadcrumbs__link"}," Оформление заказа ")],-1);var S={__name:"OrderPage",setup(e){const a=(0,c.yj)(),t=(0,c.tv)(),{fetch:S}=(0,i.Z)(),O=(0,r.iH)(localStorage.getItem("orderData")?JSON.parse(localStorage.getItem("orderData")):{delivery:{},deliveryPrice:0}),U=(0,r.iH)({});(0,s.YP)((()=>O.value),(()=>{localStorage.setItem("orderData",JSON.stringify(O.value))}),{deep:!0});const D=()=>{const e=Object.assign({},O.value.basket,{items:n.h.basketItems,itemsQuantity:n.h.basketItemsQuantity,totalPrice:n.h.basketTotalPrice});S("post","api/order",Object.assign({},O.value,{basket:e},{basketId:localStorage.getItem("userAccessKey")}),"OrderLoading").then((e=>{localStorage.setItem("orderId",e.data.orderId),localStorage.setItem("userAccessKey",""),t.push({name:"orderInfo"})})).catch((e=>U.value=e.response.data))},j=()=>{t.push({name:"basket"})};return(e,t)=>{const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",o,["adminOrderAdd"===(0,r.SU)(a).name?((0,s.wg)(),(0,s.iD)("ul",m,[(0,s._)("li",b,[(0,s.Wm)(c,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[_])),_:1})]),(0,s._)("li",k,[(0,s.Wm)(c,{to:{name:"adminOrders"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[g])),_:1})]),p])):((0,s.wg)(),(0,s.iD)("ul",v,[(0,s._)("li",h,[(0,s.Wm)(c,{class:"breadcrumbs__link",to:{name:"catalog"}},{default:(0,s.w5)((()=>[f])),_:1})]),(0,s._)("li",y,[(0,s.Wm)(c,{class:"breadcrumbs__link",to:{name:"basket"}},{default:(0,s.w5)((()=>[I])),_:1})]),w]))]),(0,r.SU)(n.h).isLoading?((0,s.wg)(),(0,s.j4)(d.Z,{key:0})):((0,s.wg)(),(0,s.j4)(l.Z,{key:1,onSubmit:D,onChange:j,data:O.value,"onUpdate:data":t[0]||(t[0]=e=>O.value=e),error:U.value,"prime-btn-text":"Оформить заказ"},null,8,["data","error"]))])}}};const O=S;var U=O}}]);
//# sourceMappingURL=946.7009c3d7.js.map