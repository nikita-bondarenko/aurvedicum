"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[46],{2392:function(e,t,a){a.d(t,{Z:function(){return B}});var l=a(3396),n=a(7139),i=a(4870),s=a(9242);function o(e,t,a,i,s,o){const u=(0,l.up)("DeleteButton");return e.open?((0,l.wg)(),(0,l.j4)(l.lR,{key:0,to:"#teleport-target"},[(0,l._)("div",{class:(0,n.C_)([{"out-content":e.isOutContent},"teleport-blackout"])},null,2),(0,l._)("div",{class:"teleport-modal",onClick:t[2]||(t[2]=(...t)=>e.onOutsideClick&&e.onOutsideClick(...t))},[(0,l._)("div",{ref:"contentElement",onMouseleave:t[0]||(t[0]=t=>e.isOutContent=!0),onMouseenter:t[1]||(t[1]=t=>e.isOutContent=!1),class:"teleport-modal__content"},[(0,l.WI)(e.$slots,"default"),(0,l.Wm)(u,{class:"teleport-modal__close",onClick:e.doClose},null,8,["onClick"])],544)])])):(0,l.kq)("",!0)}const u=(0,i.iH)(new Set);function c(){const{uid:e}=(0,l.FN)(),t=(0,i.iH)(!1),a=()=>{t.value=!0,u.value.add(e)},n=()=>{t.value=!1,u.value.delete(e)},s=(0,l.Fl)((()=>!!u.value.size)),o=()=>{s.value?s.value&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth+"px",document.body.style.overflow="hidden"):(document.body.style.overflow=null,document.body.style.paddingRight=null)};return(0,l.YP)(s,(()=>{o()})),{doOpen:a,doClose:n,isOpen:t,isSomeOpen:(0,l.Fl)((()=>u.value.size))}}const r={type:"button",class:"close"},d=(0,l.uE)('<svg width="20" height="20" fill="currentColor"><g id="color"></g><g id="hair"></g><g id="skin"></g><g id="skin-shadow"></g><g id="line"><line x1="0" x2="20" y1="0" y2="20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></line><line x1="20" x2="0" y1="0" y2="20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></line></g></svg>',1),_=[d];var m={__name:"DeleteButton",setup(e){return(e,t)=>((0,l.wg)(),(0,l.iD)("button",r,_))}};const v=m;var p=v,g=(0,l.aZ)({props:{open:{type:Boolean}},emits:["update:open"],components:{DeleteButton:p},setup(e,{emit:t}){const a=(0,i.iH)(null),{doOpen:n,doClose:s}=c(),o=(0,i.iH)(!0),u=()=>{t("update:open",!1),s()},r=e=>{e.target!==a.value&&e.target.contains(a.value)&&u()};return(0,l.YP)((()=>e.open),(e=>{e?n():u()}),{immediate:!0}),{isOutContent:o,onOutsideClick:r,doClose:u,contentElement:a}}}),b=a(89);const w=(0,b.Z)(g,[["render",o]]);var k=w;const y={key:0,class:"error"},h={key:1,class:"good-message"};var C={__name:"BaseMessage",props:{open:{type:Boolean,default:!1},text:{type:String,default:""},type:{type:String,default:"error"}},emits:["update:open"],setup(e,{emit:t}){const a=e,s=(0,l.Fl)({get(){return a.open},set(e){return t("update:open",e),e}});return(t,a)=>((0,l.wg)(),(0,l.j4)(k,{open:(0,i.SU)(s),"onUpdate:open":a[0]||(a[0]=e=>(0,i.dq)(s)?s.value=e:null)},{default:(0,l.w5)((()=>["error"===e.type?((0,l.wg)(),(0,l.iD)("div",y,(0,n.zw)(e.text),1)):((0,l.wg)(),(0,l.iD)("div",h,(0,n.zw)(e.text),1))])),_:1},8,["open"]))}};const f=C;var x=f,D=a(6866);const U={class:"form__counter counter"},H={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 52.161 52.161",style:{"enable-background":"new 0 0 52.161 52.161"},"xml:space":"preserve"},S=(0,l._)("g",null,[(0,l._)("path",{class:"button__minus--icon",d:"M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875 h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z"})],-1),q=[S],z={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"45.402px",height:"45.402px",viewBox:"0 0 45.402 45.402",style:{"enable-background":"new 0 0 45.402 45.402"},"xml:space":"preserve"},P=(0,l._)("g",null,[(0,l._)("path",{class:"button__plus--icon",d:"M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"})],-1),I=[P];var O={__name:"BaseCounter",props:["quantity","volume"],emits:["update:quantity"],setup(e,{emit:t}){const a=e,o=(0,i.iH)(!1),u=(0,i.iH)(!1),c=(0,D.yj)(),r=(0,l.Fl)({get(){return a.quantity},set(e){return e>a.volume.quantity&&!u.value&&"item"===c.name||a.volume.quantity<=0&&!u.value?(o.value=!0,void(u.value=!1)):(u.value=!1,void t("update:quantity",e))}}),d=()=>{r.value-1>0&&(u.value=!0,r.value-=1)};return(e,t)=>((0,l.wg)(),(0,l.iD)("div",U,[(0,l._)("button",{onClick:d,type:"button",class:"counter__button button__minus","aria-label":"Убрать один товар"},[((0,l.wg)(),(0,l.iD)("svg",H,q))]),(0,l.wy)((0,l._)("input",{class:(0,n.C_)({"input--disabled":"basket"===(0,i.SU)(c).name}),type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.dq)(r)?r.value=e:null)},null,2),[[s.nr,(0,i.SU)(r)]]),(0,l._)("button",{type:"button","aria-label":"Добавить один товар",class:"counter__button button__plus",onClick:t[1]||(t[1]=e=>r.value+=1)},[((0,l.wg)(),(0,l.iD)("svg",z,I))]),(0,l.Wm)(x,{open:o.value,"onUpdate:open":t[2]||(t[2]=e=>o.value=e),text:"item"===(0,i.SU)(c).name?"Вы можете установить только значение, не превышающее количество товара в наличии.":"Не получилось изменить количество товара в корзине. Товар закончился."},null,8,["open","text"])]))}};const W=O;var B=W},4046:function(e,t,a){a.r(t),a.d(t,{default:function(){return ge}});var l=a(3396),n=a(4870),i=a(7139),s=a(9242),o=a(86),u=a(6866),c=a(4460);const r={id:"catalog",class:"catalog"};function d(e,t,a,n,i,s){const o=(0,l.up)("BaseSpinner"),u=(0,l.up)("CatalogItems"),c=(0,l.up)("PaginationBase");return(0,l.wg)(),(0,l.iD)("div",(0,l.dG)(e.$attrs,{class:"content__catalog catalog-view"}),[(0,l._)("section",r,[e.isLoading?((0,l.wg)(),(0,l.j4)(o,{key:0})):((0,l.wg)(),(0,l.j4)(u,{key:1,items:e.localItems},null,8,["items"])),e.localPagination.pages>1?((0,l.wg)(),(0,l.j4)(c,{key:2,class:"catalog__pagination",config:e.localConfig,"onUpdate:config":t[0]||(t[0]=t=>e.localConfig=t),pagination:e.localPagination},null,8,["config","pagination"])):(0,l.kq)("",!0)])],16)}var _=a(6793),m=(0,l.aZ)(_.ps),v=a(89);const p=(0,v.Z)(m,[["render",d]]);var g=p,b=a(4920),w=a(8707),k=a(3088),y=a(2392),h=a(9205);const C={class:"content container"},f={class:"content__top"},x={key:0,class:"breadcrumbs"},D={class:"breadcrumbs__item"},U=(0,l.Uk)(" Меню "),H={class:"breadcrumbs__item"},S=(0,l.Uk)(" Заказы "),q={class:"breadcrumbs__item"},z=(0,l.Uk)(" Изменение заказа "),P={class:"breadcrumbs__item"},I=(0,l.Uk)(" Каталог "),O={class:"breadcrumbs__item"},W={class:"breadcrumbs__link",disabled:""},B={key:1,class:"breadcrumbs"},j={class:"breadcrumbs__item"},Y=(0,l.Uk)(" Каталог "),Z={class:"breadcrumbs__item"},M={class:"breadcrumbs__link",disabled:""},F={key:1,class:"failed-loading"},K={key:2,class:"item"},N={class:"item__pics pics"},T={key:0,class:"pics__list"},E=["onClick"],L=["src"],V={class:"item__info"},R={class:"item__title"},$={class:"item__form"},A=["onSubmit"],G={class:"item__row item__row--center"},J={class:"item__price-block"},Q={key:0,class:"item__subprice"},X={class:"item__row item__brand-volume"},ee={class:"item__brand"},te=(0,l._)("legend",{class:"form__legend"},"Бренд",-1),ae={class:"brand-list"},le={class:"brand-list__text"},ne={class:"item__volume"},ie=(0,l._)("legend",{class:"form__legend"},"Объем/вес",-1),se={key:1,class:"brand-list__item"},oe=(0,l._)("div",{class:"button__subtext"},"Товар добавлен",-1),ue={class:"item__desc"},ce={class:"tabs"},re=["onClick"],de={class:"item__content"},_e={class:"item__recomend"},me=(0,l._)("h3",{class:"item__title"},"Рекомендуем также",-1);var ve={__name:"ItemPage",setup(e){const t=(0,u.tv)(),a=(0,u.yj)().params.id,{getProductData:r,addToBasket:d}=(0,b.Z)(),_=(0,n.iH)({description:[]}),m=(0,n.iH)(""),v=(0,n.iH)(""),p=(0,n.iH)({}),ve=(0,n.iH)(!0),pe=(0,n.iH)(!1),ge=(0,n.iH)(!1),be=(0,n.iH)(!1),we=(0,n.iH)(!0),ke=(0,n.iH)(1),ye=(0,n.iH)(!1),he=(0,n.iH)(!1),Ce=(0,n.iH)({}),{editNumberFormat:fe,pluralizeProductAmount:xe}=(0,w.Z)();r(a).then((e=>{_.value=e,_.value.volumes[0]&&(ye.value=1===_.value.volumes.length,v.value=_.value.volumes[0].id,p.value=_.value.volumes[0]),_.value.images[0]&&(Ce.value=_.value.images[0]),_.value.description.length&&(m.value=_.value.description[0])})).catch((()=>{pe.value=!0,t.push({name:"notFound"})})).then((()=>ve.value=!1));const De=setInterval((()=>{r(a).then((e=>{_.value=e,p.value=_.value.volumes.find((e=>e.id===v.value))}))}),200);(0,l.Jd)((()=>clearInterval(De)));const Ue=e=>{m.value=_.value.description.find((t=>t.id===e))};let He;(0,l.YP)((()=>p.value),(e=>{v.value=e.id,he.value=!!e.subprice,be.value=0===e.quantity,we.value=e.quantity<ke.value}),{deep:!0}),(0,l.YP)((()=>ke.value),(e=>{we.value=e<=0,clearTimeout(He),e<=0&&(He=setTimeout((()=>ke.value=1),2e3))}),{immediate:!0});const Se=e=>e.id===m.value.id,qe=async()=>{d({quantity:ke.value,productId:_.value.id,volumeId:p.value.id,isAdd:!0})};return(0,l.YP)((()=>c.h.basketCounterLoading),(e=>{e||(ge.value=!0,setTimeout((()=>ge.value=!1),1e3))})),(e,t)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("main",C,[(0,l._)("div",f,[(0,n.SU)(c.h).isOrderedBasket?((0,l.wg)(),(0,l.iD)("ul",x,[(0,l._)("li",D,[(0,l.Wm)(a,{to:{name:"adminMenu"},class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[U])),_:1})]),(0,l._)("li",H,[(0,l.Wm)(a,{to:{name:"adminOrders"},class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[S])),_:1})]),(0,l._)("li",q,[(0,l.Wm)(a,{to:(0,n.SU)(c.h).page,class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[z])),_:1},8,["to"])]),(0,l._)("li",P,[(0,l.Wm)(a,{to:{name:"catalog"},class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[I])),_:1})]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value.categories,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"breadcrumbs__item",key:e.id},[(0,l.Wm)(a,{to:{name:"catalog",params:{categoryId:e.categoryId}},onClick:(0,n.SU)(c.h).setCatalogPathName,class:"breadcrumbs__link",href:"#"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to","onClick"])])))),128)),(0,l._)("li",O,[(0,l._)("span",W,(0,i.zw)(_.value.name),1)])])):((0,l.wg)(),(0,l.iD)("ul",B,[(0,l._)("li",j,[(0,l.Wm)(a,{to:{name:"catalog"},onClick:(0,n.SU)(c.h).setCatalogPathName,class:"breadcrumbs__link"},{default:(0,l.w5)((()=>[Y])),_:1},8,["onClick"])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value.categories,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"breadcrumbs__item",key:e.id},[(0,l.Wm)(a,{to:{name:"catalog",params:{categoryId:e.categoryId}},onClick:(0,n.SU)(c.h).setCatalogPathName,class:"breadcrumbs__link",href:"#"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to","onClick"])])))),128)),(0,l._)("li",Z,[(0,l._)("span",M,(0,i.zw)(_.value.name),1)])]))]),ve.value&&!pe.value?((0,l.wg)(),(0,l.j4)(h.Z,{key:0})):pe.value?((0,l.wg)(),(0,l.iD)("div",F," Не удалось загрузить информацию о товаре, попробуйте перезагрузить страницу. ")):((0,l.wg)(),(0,l.iD)("section",K,[(0,l._)("div",N,[(0,l._)("div",{class:"pics__wrapper",style:(0,i.j5)({background:`no-repeat center/contain url('${(0,n.SU)(o.Ie)+Ce.value.filename}') transparent`})},[_.value.images.length>1?((0,l.wg)(),(0,l.iD)("ul",T,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value.images,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"pics__item",key:e.id},[(0,l._)("a",{href:"",onClick:(0,s.iM)((t=>Ce.value=e),["prevent"]),class:(0,i.C_)(["pics__link",{"pics__link--current":e.id===Ce.value.id}])},[(0,l._)("img",{alt:"Изображение товара",src:(0,n.SU)(o.Ie)+e.filename},null,8,L)],10,E)])))),128))])):(0,l.kq)("",!0)],4)]),(0,l._)("div",V,[(0,l._)("h2",R,(0,i.zw)(_.value.name),1),(0,l._)("div",$,[(0,l._)("form",{class:"form",action:"#",method:"POST",onSubmit:(0,s.iM)(qe,["prevent"])},[(0,l._)("div",{class:(0,i.C_)(["item__quantity",{"item__quantity--error":be.value}])},(0,i.zw)((0,n.SU)(xe)(p.value.quantity))+" в наличии ",3),(0,l._)("div",G,[(0,l.Wm)(y.Z,{class:(0,i.C_)({disabled:0===p.value.quantity}),quantity:ke.value,"onUpdate:quantity":t[0]||(t[0]=e=>ke.value=e),volume:p.value},null,8,["class","quantity","volume"]),(0,l._)("div",J,[(0,l._)("b",{class:(0,i.C_)(["item__price",{"item__price--center":!he.value}])},(0,i.zw)((0,n.SU)(fe)(p.value.price))+" ₽ ",3),p.value.subprice?((0,l.wg)(),(0,l.iD)("span",Q,(0,i.zw)((0,n.SU)(fe)(p.value.subprice))+" ₽ ",1)):(0,l.kq)("",!0)])]),(0,l._)("div",X,[(0,l._)("div",ee,[te,(0,l._)("ul",ae,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value.brands,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"brand-list__item",key:e.id},[(0,l._)("span",le,(0,i.zw)(e.title),1)])))),128))])]),(0,l._)("div",ne,[ie,ye.value?((0,l.wg)(),(0,l.iD)("span",se,(0,i.zw)(p.value.volume),1)):((0,l.wg)(),(0,l.j4)(k.Z,{key:0,items:_.value.volumes,volume:p.value,"onUpdate:volume":t[1]||(t[1]=e=>p.value=e)},null,8,["items","volume"]))])]),(0,l._)("button",{class:(0,i.C_)(["button button--primery",{"button-error":we.value,"spinner-small":(0,n.SU)(c.h).basketCounterLoading,"button--added":ge.value}]),type:"submit"},[oe,(0,l.Uk)(" "+(0,i.zw)(we.value?"Недопустимое количество товара":"В корзину"),1)],2)],40,A)])]),(0,l.wy)((0,l._)("div",ue,[(0,l._)("ul",ce,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value.description,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"tabs__item",key:e.id},[(0,l._)("a",{onClick:(0,s.iM)((t=>Ue(e.id)),["prevent"]),class:(0,i.C_)(["tabs__link",{"tabs__link--current":Se(e)}])},(0,i.zw)(e.header),11,re)])))),128))]),(0,l._)("div",de,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.value.content,(e=>((0,l.wg)(),(0,l.iD)("p",{key:e.id},(0,i.zw)(e.paragraph),1)))),128))])],512),[[s.F8,_.value.description.length>0]]),(0,l._)("div",_e,[me,(0,l.Wm)(g,{recomend:_.value.recomend},null,8,["recomend"])])]))])}}};const pe=ve;var ge=pe}}]);
//# sourceMappingURL=46.71a42921.js.map