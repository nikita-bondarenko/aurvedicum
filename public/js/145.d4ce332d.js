"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[145],{2473:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var s=t(3396),r=t(4870),n=t(1218),i=t(6866),l=t(4460),d=t(4920),c=t(9205);const u={class:"content__top"},o={class:"breadcrumbs"},m={class:"breadcrumbs__item"},b=(0,s.Uk)(" Меню "),k={class:"breadcrumbs__item"},p=(0,s.Uk)(" Заказы "),_=(0,s._)("li",{class:"breadcrumbs__item"},[(0,s._)("span",{class:"breadcrumbs__link",disabled:""}," Изменение заказа ")],-1);var h={__name:"ChangeItem",setup(e){const a=(0,i.yj)(),t=(0,i.tv)(),{fetch:h}=(0,d.Z)(),g=`api/order/${a.params.id}`,v=(0,r.iH)({}),I=(0,r.iH)({});h("get",g,{}).then((e=>{v.value=e.data,l.h.isOrderedBasket||(l.h.updateProp("basketTotalPrice",e.data.basket.totalPrice),l.h.updateProp("basketItems",e.data.basket.items),l.h.updateProp("basketItemsQuantity",e.data.basket.itemsQuantity))}));const f=()=>{const e=Object.assign({},v.value.basket,{items:l.h.basketItems,itemsQuantity:l.h.basketItemsQuantity,totalPrice:l.h.basketTotalPrice});h("patch",g,Object.assign({},v.value,{basket:e}),"OrderLoading").then((()=>{t.push({name:"adminOrderInfo"}),localStorage.setItem("orderId",a.params.id),localStorage.setItem("userAccessKey","")})).catch((e=>I.value=e.response.data))},y=()=>{h("post","api/basket/fromOrder",v.value.basket,"ChangeLoading").then((e=>{localStorage.setItem("userAccessKey",e.data),localStorage.setItem("orderedBasketId",v.value.basket.id),t.push({name:"basket"})}))};return(e,a)=>{const t=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",u,[(0,s._)("ul",o,[(0,s._)("li",m,[(0,s.Wm)(t,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[b])),_:1})]),(0,s._)("li",k,[(0,s.Wm)(t,{to:{name:"adminOrders"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[p])),_:1})]),_])]),(0,r.SU)(l.h).isLoading?((0,s.wg)(),(0,s.j4)(c.Z,{key:0})):((0,s.wg)(),(0,s.j4)(n.Z,{key:1,onSubmit:f,onChange:y,data:v.value,"onUpdate:data":a[0]||(a[0]=e=>v.value=e),error:I.value,"prime-btn-text":"Сохранить изменения"},null,8,["data","error"]))],64)}}};const g=h;var v=g}}]);
//# sourceMappingURL=145.d4ce332d.js.map