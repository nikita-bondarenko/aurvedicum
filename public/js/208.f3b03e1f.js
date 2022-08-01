"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[208],{9412:function(a,e,l){l.d(e,{Z:function(){return u}});var s=l(3396),i=l(7139),t=l(4870),n=l(8707),c=l(4920),_={__name:"OrderBasketItem",props:["item"],setup(a){const e=a,{getProduct:l}=(0,c.Z)(),_=(0,t.iH)({}),{editVolumeFormat:r,editNumberFormat:u}=(0,n.Z)(),o=(0,t.iH)(!0),m=(0,t.iH)(!1);l({id:e.item.productId}).then((a=>{_.value=a.data})).catch((()=>m.value=!0)).then((()=>o.value=!1));const d=(0,s.Fl)((()=>_.value.volumes?r(_.value.volumes.find((a=>a.id===e.item.volumeId)).volume):""));return(e,l)=>((0,s.wg)(),(0,s.iD)("li",{class:(0,i.C_)(["cart__order",{"spinner-small":o.value,"loading-error":m.value}])},[(0,s._)("h3",null,(0,i.zw)(_.value.name),1),(0,s._)("b",null,(0,i.zw)((0,t.SU)(u)(a.item.price))+" ₽",1),(0,s._)("span",null,"Объем/вес:  "+(0,i.zw)((0,t.SU)(d)),1),(0,s._)("span",null,"Колличество: "+(0,i.zw)((0,t.SU)(u)(a.item.quantity))+" шт.",1)],2))}};const r=_;var u=r},9208:function(a,e,l){l.r(e),l.d(e,{default:function(){return ea}});var s=l(3396),i=l(4870),t=l(7139),n=l(6866),c=l(4460),_=l(4920),r=l(9205),u=l(2555),o=l(9412),m=l(8707);const d={class:"content container"},v={class:"content__top"},k={key:0,class:"breadcrumbs"},p={class:"breadcrumbs__item"},b=(0,s.Uk)(" Меню "),g={class:"breadcrumbs__item"},y=(0,s.Uk)(" Заказы "),w=(0,s._)("li",{class:"breadcrumbs__item"},[(0,s._)("span",{class:"breadcrumbs__link"}," Информация о заказе ")],-1),f={key:1,class:"breadcrumbs"},h={class:"breadcrumbs__item"},U=(0,s.Uk)(" Каталог "),z={class:"breadcrumbs__item"},S=(0,s.Uk)(" Корзина "),D=(0,s._)("li",{class:"breadcrumbs__item"},[(0,s._)("span",{class:"breadcrumbs__link"}," Оформление заказа ")],-1),I={key:2,class:"content__title"},C={key:3,class:"content__title"},H={class:"cart"},O={key:1,class:"loading-error"},P={key:2,class:"cart__form form",action:"#",method:"POST"},Z={class:"cart__field"},F={key:0,class:"cart__message"},j={class:"dictionary"},q={class:"dictionary__item"},N=(0,s._)("span",{class:"dictionary__key"}," Получатель ",-1),W={class:"dictionary__value"},M={class:"dictionary__item"},T=(0,s._)("span",{class:"dictionary__key"}," Адрес доставки ",-1),x={class:"dictionary__value"},A={class:"dictionary__item"},B=(0,s._)("span",{class:"dictionary__key"}," Телефон ",-1),E={class:"dictionary__value"},K={class:"dictionary__item"},Q=(0,s._)("span",{class:"dictionary__key"}," Email ",-1),V={class:"dictionary__value"},Y={class:"dictionary__item"},G=(0,s._)("span",{class:"dictionary__key"}," Способ доставки ",-1),J={class:"dictionary__value"},L={class:"cart__orders"},R={class:"cart__total"},X=(0,s.Uk)(" Доставка: ");var $={__name:"OrderInfoPage",setup(a){const{deliveryPriceText:e,pluralizeProductAmount:l,editNumberFormat:$}=(0,m.Z)(),{getOrder:aa}=(0,_.Z)(),ea=(0,n.tv)(),la=(0,n.yj)(),sa=localStorage.getItem("orderId");sa||(ea.push({name:"catalog"}),c.h.setCatalogPathName());const ia=(0,i.iH)(!0),ta=(0,i.iH)(!1),na=(0,i.iH)({}),ca=(0,i.iH)({limit:5,page:1,pages:1});aa(sa).then((a=>{na.value=a.data,ca.value.pages=Math.ceil(na.value.basket.items.length/ca.value.limit)})).catch((()=>ta.value=!0)).then((()=>ia.value=!1));const _a=(0,s.Fl)((()=>na.value.basket.items.slice(ca.value.limit*(ca.value.page-1),ca.value.limit*ca.value.page)));return(a,n)=>{const _=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("main",d,[(0,s._)("div",v,["adminOrderInfo"===(0,i.SU)(la).name?((0,s.wg)(),(0,s.iD)("ul",k,[(0,s._)("li",p,[(0,s.Wm)(_,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[b])),_:1})]),(0,s._)("li",g,[(0,s.Wm)(_,{to:{name:"adminOrders"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[y])),_:1})]),w])):((0,s.wg)(),(0,s.iD)("ul",f,[(0,s._)("li",h,[(0,s.Wm)(_,{onClick:(0,i.SU)(c.h).setCatalogPathName,to:{name:"catalog"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[U])),_:1},8,["onClick"])]),(0,s._)("li",z,[(0,s.Wm)(_,{to:{name:"basket"},class:"breadcrumbs__link"},{default:(0,s.w5)((()=>[S])),_:1})]),D])),"adminOrderInfo"===(0,i.SU)(la).name?((0,s.wg)(),(0,s.iD)("h1",I," Заказ изменен ")):((0,s.wg)(),(0,s.iD)("h1",C,"Заказ оформлен"))]),(0,s._)("section",H,[ia.value?((0,s.wg)(),(0,s.j4)(r.Z,{key:0})):!ia.value&&ta.value?((0,s.wg)(),(0,s.iD)("div",O," Не удалось получить информацию о заказе. ")):ia.value||ta.value?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("form",P,[(0,s._)("div",Z,["adminOrderInfo"===!(0,i.SU)(la).name?((0,s.wg)(),(0,s.iD)("p",F," Благодарим за выбор нашего магазина. Наши менеджеры свяжутся с Вами в течение одного рабочего дня для уточнения деталей доставки. ")):(0,s.kq)("",!0),(0,s._)("ul",j,[(0,s._)("li",q,[N,(0,s._)("span",W,(0,t.zw)(na.value.name),1)]),(0,s._)("li",M,[T,(0,s._)("span",x,(0,t.zw)(na.value.address),1)]),(0,s._)("li",A,[B,(0,s._)("span",E,(0,t.zw)(na.value.phone),1)]),(0,s._)("li",K,[Q,(0,s._)("span",V,(0,t.zw)(na.value.email),1)]),(0,s._)("li",Y,[G,(0,s._)("span",J,(0,t.zw)(na.value.delivery.title),1)])])]),(0,s._)("div",{class:(0,t.C_)(["cart__block",{indent:ca.value.pages>1}])},[ca.value.pages>1?((0,s.wg)(),(0,s.j4)(u.Z,{key:0,config:ca.value,"onUpdate:config":n[0]||(n[0]=a=>ca.value=a),pagination:ca.value},null,8,["config","pagination"])):(0,s.kq)("",!0),(0,s._)("ul",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,i.SU)(_a),(a=>((0,s.wg)(),(0,s.j4)(o.Z,{key:a.id,item:a},null,8,["item"])))),128))]),(0,s._)("div",R,[(0,s._)("p",null,[X,(0,s._)("b",null,(0,t.zw)((0,i.SU)(e)(na.value.deliveryPrice)),1)]),(0,s._)("p",null,[(0,s.Uk)(" Итого: "+(0,t.zw)((0,i.SU)(l)(na.value.basket.itemsQuantity))+" на сумму ",1),(0,s._)("b",null,(0,t.zw)((0,i.SU)($)(na.value.price))+" ₽",1)])])],2)]))])])}}};const aa=$;var ea=aa}}]);
//# sourceMappingURL=208.f3b03e1f.js.map