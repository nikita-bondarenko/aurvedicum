"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[343],{7028:function(e,n,a){a.d(n,{FH:function(){return F},Dq:function(){return j},ET:function(){return H},Jx:function(){return E},m8:function(){return Y},r:function(){return b},Bg:function(){return D},rk:function(){return z}});var t=a(4870),s=a(3396),i=a(2555),r=a(4920),o=a(9205),u=a(7139),c=a(86);const p={class:"page"},l=["src"],d={class:"page__header"},g={class:"page__body"},m={class:"page__section-header"},_={class:"page__section-body"},y={class:"text__part"};var f={__name:"BasePageItem",props:["data"],setup(e){const n=e;return(a,i)=>((0,s.wg)(),(0,s.iD)("div",p,[e.data.filename?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"page__image",src:".."+(0,t.SU)(c.Ie)+n.data.filename,alt:"Иллюстрация к странице"},null,8,l)):(0,s.kq)("",!0),(0,s._)("h1",d,(0,u.zw)(e.data.header),1),(0,s._)("ul",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.data.body,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id,class:"page__section"},[(0,s._)("h2",m,(0,u.zw)(e.header),1),(0,s._)("ul",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.body,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id,class:"page__section-item text"},[(0,s._)("p",y,(0,u.zw)(e.value),1)])))),128))])])))),128))])]))}};const B=f;var h=B,v=a(4460),w=a(8707),I=a(6866);const{fetchWithParams:Z,fetch:S}=(0,r.Z)(),k=e=>{const n=(0,t.iH)({limit:8,page:1}),a=document.body.clientWidth;a<=1240&&a>600&&(n.value.limit=6),a<=600&&(n.value.limit=4);const i=(0,w.Z)(),r=(0,t.iH)({pagination:{pages:1},items:[]}),o=()=>Z("get",e,n.value).then((e=>{r.value=e.data,console.log(e.data)}));return o(),(0,s.YP)((()=>n.value),(()=>o())),{editors:i,store:v.h,data:r,config:n,IMAGE_STORE:c.Ie}},P=(e,n)=>{const a=(0,t.iH)({body:[{id:1,body:[]}]});return S("get",""+(n+(e.params.id?"/"+e.params.id:""))).then((e=>{a.value=e.data,console.log(a.value)})),{store:v.h,data:a,IMAGE_STORE:c.Ie}},b={components:{PaginationBase:i.Z,BaseSpinner:o.Z},setup(){return k("api/news")}},j={components:{PaginationBase:i.Z,BaseSpinner:o.Z},setup(){return k("api/articles")}},D={components:{BaseSpinner:o.Z,BasePageItem:h},setup(){return P((0,I.yj)(),"api/news")}},H={components:{BaseSpinner:o.Z,BasePageItem:h},setup(){return P((0,I.yj)(),"api/articles")}},E={components:{BaseSpinner:o.Z},setup(){return P((0,I.yj)(),"api/contacts")}},z={components:{BaseSpinner:o.Z,BasePageItem:h},setup(){return P((0,I.yj)(),"api/additions/y6UUIoAFey")}},F={components:{BaseSpinner:o.Z,BasePageItem:h},setup(){return P((0,I.yj)(),"api/additions/IFzSsu4pWy")}},Y={components:{BaseSpinner:o.Z,BasePageItem:h},setup(){return P((0,I.yj)(),"api/additions/iRBFYXsvtb")}}},1343:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});var t=a(3396);const s={class:"container content"};function i(e,n,a,i,r,o){const u=(0,t.up)("BaseSpinner"),c=(0,t.up)("BasePageItem");return(0,t.wg)(),(0,t.iD)("main",s,[e.store.isLoading?((0,t.wg)(),(0,t.j4)(u,{key:0})):((0,t.wg)(),(0,t.j4)(c,{key:1,data:e.data},null,8,["data"]))])}var r=a(7028),o=(0,t.aZ)(r.rk),u=a(89);const c=(0,u.Z)(o,[["render",i]]);var p=c}}]);
//# sourceMappingURL=343.101be1ce.js.map