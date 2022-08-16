"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[893],{893:function(a,e,t){t.r(e),t.d(e,{default:function(){return G}});var l=t(3396),s=t(4870),n=t(1124),i=t(9205),u=t(4920),o=t(4460),c=t(2555),d=t(7139),_=t(9242),p=t(8707);const r={class:"data-base__product admin-product"},m={class:"data-base__name"},v={class:"data-base__created"},b={class:"data-base__changed"},g=(0,l.Uk)("Изменить"),k={class:"data-base__volume volume-block"},h=(0,l.uE)('<li class="volume-block__item"><div class="volume-block__body"><span class="volume-block__header">Объем/вес</span><span class="volume-block__header">Цена</span><span class="volume-block__header">До скидки</span><span class="volume-block__header">Кол-во</span></div></li>',1),y={class:"volume-block__volume"},f={class:"volume-block__price price"},w=["onUpdate:modelValue"],U=(0,l._)("span",{class:"price__currency"},"₽",-1),I={class:"volume-block__ceil ciel"},D=["onUpdate:modelValue"],L={key:0,class:"ceil__currency"},q={class:"volume-block__quantity quantity"},H=["onUpdate:modelValue"],S=["onClick"],C=(0,l._)("svg",{width:"20",height:"20",fill:"currentColor"},[(0,l._)("path",{d:"M17 1L1 17m16 0L1 1",stroke:"#9D9D9D","stroke-width":".8"})],-1),V=[C];var P={__name:"ListItem",props:["id","pagination"],emits:["update:items","update:pagination"],setup(a,{emit:e}){const t=a,{fetch:n,fetchWithParams:i}=(0,u.Z)(),c=`api/products/${t.id}`,C=(0,p.Z)(),P=(0,s.iH)({}),W=a=>{P.value=a.data},Z=async(a,{func:e},t="ItemLoading",l={})=>{n(a,c,l,t).then((a=>e(a)))};Z("get",{func:W});const j=setInterval((()=>Z("get",{func:W},"")),1e3);(0,l.Jd)((()=>{clearInterval(j)}));const z=()=>{i("delete",c,t.pagination,"ItemLoading").then((a=>{e("update:pagination",a.data.pagination),e("update:items",a.data.items),clearInterval(j)}))},Y=((0,s.iH)(null),(0,s.iH)(null)),$=()=>{n("patch",`api/products/${t.id}`,{volumes:P.value.volumes},`${t.id}Updating`)},x=(0,s.Vh)(o.h,`is${t.id}Updating`);return(e,t)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("li",{class:(0,d.C_)(["data-base__item",{"spinner-small":(0,s.SU)(o.h).isItemLoading||(0,s.SU)(x),"loading-error":(0,s.SU)(o.h).isItemLoadingFailed}])},[(0,l._)("div",r,[(0,l._)("h3",m,(0,d.zw)(P.value.name),1),(0,l._)("span",v,"Создан: "+(0,d.zw)((0,s.SU)(C).editDate(P.value.created)),1),(0,l._)("span",b,"Изменен: "+(0,d.zw)((0,s.SU)(C).editDate(P.value.changed)),1),(0,l.Wm)(n,{class:"data-base__change-button",to:{name:"adminChangeProduct",params:{id:a.id}}},{default:(0,l.w5)((()=>[g])),_:1},8,["to"]),(0,l._)("ul",k,[h,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(P.value.volumes,(a=>((0,l.wg)(),(0,l.iD)("li",{key:a.id,class:"volume-block__item"},[(0,l._)("div",{class:(0,d.C_)(["volume-block__body",{"volume-block__body--three-items":!a.subprice}])},[(0,l._)("span",y,(0,d.zw)((0,s.SU)(C).editVolumeFormat(a.volume)),1),(0,l._)("div",f,[(0,l.wy)((0,l._)("input",{ref_for:!0,ref_key:"priceInput",ref:Y,onInput:$,type:"text",class:"price__input","onUpdate:modelValue":e=>a.price=e},null,40,w),[[_.nr,a.price,void 0,{number:!0}]]),U]),(0,l._)("div",I,[(0,l.wy)((0,l._)("input",{ref_for:!0,ref_key:"priceInput",ref:Y,onInput:$,type:"text",class:"ceil__input","onUpdate:modelValue":e=>a.subprice=e},null,40,D),[[_.nr,a.subprice,void 0,{number:!0}]]),a.subprice?((0,l.wg)(),(0,l.iD)("span",L,"₽")):(0,l.kq)("",!0)]),(0,l._)("div",q,[(0,l.wy)((0,l._)("input",{onInput:$,type:"text",class:"quantity__input","onUpdate:modelValue":e=>a.quantity=e},null,40,H),[[_.nr,a.quantity,void 0,{number:!0}]])])],2)])))),128))]),(0,l._)("button",{class:"data-base__button-del button-del",type:"button","aria-label":"Удалить товар",onClick:(0,_.iM)(z,["prevent"])},V,8,S)])],2)}}};const W=P;var Z=W;const j={class:"content__top"},z={class:"breadcrumbs"},Y={class:"breadcrumbs__item"},$=(0,l.Uk)(" Меню "),x=(0,l._)("li",{class:"breadcrumbs__item"},[(0,l._)("span",{class:"breadcrumbs__link",disabled:""}," Товары ")],-1),M={class:"content__catalog data-base"},F={class:"settings"},K={class:"catalog"},A=(0,l.Uk)("Добавить"),E={key:1,class:"data-base__empty-message"},J={class:"data-base__list"};var O={__name:"ListPage",setup(a){const{fetchWithParams:e}=(0,u.Z)(),t=(0,s.iH)({page:1,limit:6}),d=(0,s.iH)([]),_=(0,s.iH)({}),p=(a={})=>{e("get","api/products",Object.assign({},t.value,a)).then((a=>{d.value=a.data.items,_.value=a.data.pagination}))};return(0,l.YP)((()=>t.value),(()=>p()),{deep:!0}),p(),(a,e)=>{const u=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",j,[(0,l._)("ul",z,[(0,l._)("li",Y,[(0,l.Wm)(u,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[$])),_:1})]),x])]),(0,l._)("div",M,[(0,l._)("div",F,[(0,l.Wm)(n.Z,{onSubmit:e[0]||(e[0]=a=>p()),settings:t.value,"onUpdate:settings":e[1]||(e[1]=a=>t.value=a)},null,8,["settings"])]),(0,l._)("section",K,[(0,l.Wm)(u,{to:{name:"adminAddProduct"},class:"data-base__button-add"},{default:(0,l.w5)((()=>[A])),_:1}),(0,s.SU)(o.h).isLoading?((0,l.wg)(),(0,l.j4)(i.Z,{key:0})):(0,l.kq)("",!0),0!==d.value.length||(0,s.SU)(o.h).isLoading?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("p",E," Список пуст ")),(0,l._)("ul",J,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.value,(a=>((0,l.wg)(),(0,l.j4)(Z,{key:a.id,id:a.id,items:d.value,"onUpdate:items":e[2]||(e[2]=a=>d.value=a),pagination:_.value,"onUpdate:pagination":e[3]||(e[3]=a=>_.value=a)},null,8,["id","items","pagination"])))),128))]),_.value.pages>1?((0,l.wg)(),(0,l.j4)(c.Z,{key:2,class:"catalog__pagination",config:t.value,"onUpdate:config":e[4]||(e[4]=a=>t.value=a),pagination:_.value},null,8,["config","pagination"])):(0,l.kq)("",!0)])])],64)}}};const B=O;var G=B}}]);
//# sourceMappingURL=893.51fe90a1.js.map