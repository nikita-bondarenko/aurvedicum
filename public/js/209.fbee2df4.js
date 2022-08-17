"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[209],{7028:function(e,n,a){a.d(n,{FH:function(){return q},Dq:function(){return P},ET:function(){return E},Jx:function(){return H},m8:function(){return U},r:function(){return D},Bg:function(){return j},rk:function(){return z}});var t=a(4870),i=a(3396),s=a(2555),o=a(4920),r=a(9829),c=a(7139),u=a(86);const l={class:"page"},p=["src"],g={class:"page__header"},d={class:"page__body"},_={class:"page__section-header"},m={class:"page__section-body"},f={class:"text__part"};var y={__name:"BasePageItem",props:["data"],setup(e){const n=e;return(a,s)=>((0,i.wg)(),(0,i.iD)("div",l,[e.data.filename?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"page__image",src:".."+(0,t.SU)(u.Ie)+n.data.filename,alt:"Иллюстрация к странице"},null,8,p)):(0,i.kq)("",!0),(0,i._)("h1",g,(0,c.zw)(e.data.header),1),(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.data.body,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"page__section"},[(0,i._)("h2",_,(0,c.zw)(e.header),1),(0,i._)("ul",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.body,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"page__section-item text"},[(0,i._)("p",f,(0,c.zw)(e.value),1)])))),128))])])))),128))])]))}};const w=y;var h=w,B=a(4460),k=a(8707),v=a(6866);const{fetchWithParams:I,fetch:S}=(0,o.Z)(),Z=e=>{const n=(0,t.iH)({limit:8,page:1}),a=document.body.clientWidth;a<=1240&&a>600&&(n.value.limit=6),a<=600&&(n.value.limit=4);const s=(0,k.Z)(),o=(0,t.iH)({pagination:{pages:1},items:[]}),r=()=>I("get",e,n.value).then((e=>{o.value=e.data,console.log(e.data)}));return r(),(0,i.YP)((()=>n.value),(()=>r())),{editors:s,store:B.h,data:o,config:n,IMAGE_STORE:u.Ie}},b=(e,n)=>{const a=(0,t.iH)({body:[{id:1,body:[]}]});return S("get",""+(n+(e.params.id?"/"+e.params.id:""))).then((e=>{a.value=e.data,console.log(a.value)})),{store:B.h,data:a,IMAGE_STORE:u.Ie}},D={components:{PaginationBase:s.Z,BaseSpinner:r.Z},setup(){return Z("api/news")}},P={components:{PaginationBase:s.Z,BaseSpinner:r.Z},setup(){return Z("api/articles")}},j={components:{BaseSpinner:r.Z,BasePageItem:h},setup(){return b((0,v.yj)(),"api/news")}},E={components:{BaseSpinner:r.Z,BasePageItem:h},setup(){return b((0,v.yj)(),"api/articles")}},H={components:{BaseSpinner:r.Z},setup(){return b((0,v.yj)(),"api/contacts")}},z={components:{BaseSpinner:r.Z,BasePageItem:h},setup(){return b((0,v.yj)(),"api/additions/y6UUIoAFey")}},q={components:{BaseSpinner:r.Z,BasePageItem:h},setup(){return b((0,v.yj)(),"api/additions/IFzSsu4pWy")}},U={components:{BaseSpinner:r.Z,BasePageItem:h},setup(){return b((0,v.yj)(),"api/additions/iRBFYXsvtb")}}},4209:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var t=a(3396),i=a(7139);const s={class:"container content info"},o={key:1,class:"empty-error"},r={class:"info__list"},c=["src"],u={class:"info__title"},l={class:"info__pub"},p=(0,t.Uk)("Опубликованно: ");function g(e,n,a,g,d,_){const m=(0,t.up)("BaseSpinner"),f=(0,t.up)("router-link"),y=(0,t.up)("PaginationBase");return(0,t.wg)(),(0,t.iD)("main",s,[e.store.isLoading?((0,t.wg)(),(0,t.j4)(m,{key:0})):(0,t.kq)("",!0),0!==e.data.items.length||e.store.isLoading?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("p",o," Список пуст ")),(0,t._)("ul",r,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data.items,(n=>((0,t.wg)(),(0,t.iD)("li",{key:n.id,class:"info__item"},[(0,t.Wm)(f,{to:{name:"newsItem",params:{id:n.id}}},{default:(0,t.w5)((()=>[(0,t._)("img",{src:e.IMAGE_STORE+n.filename,alt:"Иллюстрация к новости",class:"info__image"},null,8,c),(0,t._)("h4",u,(0,i.zw)(n.header),1)])),_:2},1032,["to"]),(0,t._)("span",l,[p,(0,t._)("b",null,(0,i.zw)(e.editors.editDate(n.created)),1)])])))),128))]),e.data.pagination.pages>1?((0,t.wg)(),(0,t.j4)(y,{key:2,class:"info__pagination",config:e.config,"onUpdate:config":n[0]||(n[0]=n=>e.config=n),pagination:e.data.pagination},null,8,["config","pagination"])):(0,t.kq)("",!0)])}var d=a(7028),_=(0,t.aZ)(d.r),m=a(89);const f=(0,m.Z)(_,[["render",g]]);var y=f}}]);
//# sourceMappingURL=209.fbee2df4.js.map