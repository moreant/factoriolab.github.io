import{a as nt,b as ot,d as at}from"./chunk-H2NVZVID.js";import{Aa as f,Ba as S,Be as tt,Ce as et,Ea as g,Ee as it,Gd as G,Ia as o,Ja as a,Jc as F,Ka as m,Ld as U,Ma as y,Na as b,Oa as s,Oc as L,Pc as q,Sd as J,Td as K,Va as u,Vd as Q,Wa as v,X as P,Xa as M,Xc as N,_ as p,aa as k,ba as E,bc as A,eb as O,ed as Z,fa as h,ga as C,gd as $,hb as c,ib as _,jb as B,je as W,ob as D,qa as n,r as R,rc as V,sc as X,ua as I,ue as Y,xb as H,xc as z,xd as T,ya as d,zb as j}from"./chunk-CEDVTZ56.js";var pt=(t,e)=>({time:t,cost:e});function mt(t,e){t&1&&(o(0,"div",7),m(1,"i",8),o(2,"span"),u(3),c(4,"translate"),a()()),t&2&&(n(3),v(_(4,1,"app.error")))}function ct(t,e){if(t&1){let i=y();o(0,"p-dialog",1),d(1,mt,5,3,"ng-template",2),o(2,"div",3)(3,"div"),u(4),c(5,"translate"),a(),o(6,"div",4),u(7),a(),o(8,"div",5)(9,"button",6),c(10,"translate"),b("click",function(){h(i);let r=s();return C(r.reset())}),a()()()()}if(t&2){let i=s();f("visible",!0)("modal",!0)("draggable",!1)("resizable",!1)("closable",!1)("closeOnEscape",!1),n(4),v(_(5,10,"app.errorDetail")),n(3),v(e),n(2),f("label",_(10,12,"reset"))("loading",i.isResetting)}}function dt(t,e){t&1&&m(0,"p-tabMenu",14),t&2&&f("model",e)}function ft(t,e){if(t&1&&(o(0,"div"),u(1),c(2,"translate"),a()),t&2){let i,l=s(4);n(),M(" ",B(2,1,"app.simplexSolved",O(4,pt,l.result().time,(i=l.result().cost)==null?null:i.toPrecision(2)))," ")}}function ut(t,e){if(t&1&&(o(0,"div"),u(1),c(2,"translate"),a()),t&2){let i=s(4);n(),M(" ",_(2,1,"options.simplexResultType."+i.result().resultType)," ")}}function _t(t,e){if(t&1&&(o(0,"div",16),d(1,ft,3,7,"div")(2,ut,3,3),o(3,"span"),u(4),a()()),t&2){let i=s(3);n(),g(1,i.result().resultType===i.SimplexResultType.Solved?1:2),n(3),v(i.contentSvc.version)}}function gt(t,e){if(t&1&&(m(0,"lab-objectives"),o(1,"p-card",13),c(2,"translate"),d(3,dt,1,1,"p-tabMenu",14),c(4,"async"),m(5,"router-outlet"),d(6,_t,5,2,"ng-template",15),a()),t&2){let i,l=s(2);n(),f("header",_(2,2,"app.factory")),n(2),g(3,(i=_(4,4,l.tabItems$))?3:-1,i)}}function vt(t,e){t&1&&(o(0,"div",17),m(1,"p-progressSpinner"),a())}function xt(t,e){if(t&1){let i=y();m(0,"lab-settings",9),o(1,"div",10),b("click",function(){h(i);let r=s();return C(r.contentSvc.toggleSettings())}),a(),o(2,"div",11)(3,"main",12),d(4,gt,7,6)(5,vt,2,0),a()()}if(t&2){let i=s();f("active",i.contentSvc.settingsActive())("hidden",i.contentSvc.settingsXlHidden()),n(),S("active",i.contentSvc.settingsActive()),n(),S("settings-xl-hidden",i.contentSvc.settingsXlHidden()),n(2),g(4,i.mod()?4:5)}}var rt=(()=>{let e=class e{constructor(){this.contentSvc=p(Z),this.ngZone=p(I),this.ref=p(D),this.router=p(X),this.store=p(F),this.errorSvc=p(U),this.translateSvc=p(L),this.gameInfo=this.store.selectSignal(T.getGameInfo),this.mod=this.store.selectSignal(T.getMod),this.result=this.store.selectSignal(G.getMatrixResult),this.isResetting=!1,this.tabItems$=this.contentSvc.lang$.pipe(R(()=>[{label:this.translateSvc.instant("app.list"),icon:"fa-solid fa-list",routerLink:"list",queryParamsHandling:"preserve"},{label:this.translateSvc.instant("app.flow"),icon:"fa-solid fa-diagram-project",routerLink:"flow",queryParamsHandling:"preserve"},{label:this.translateSvc.instant("app.data"),icon:"fa-solid fa-database",routerLink:"data",queryParamsHandling:"preserve"}])),this.SimplexResultType=A}reset(){this.isResetting=!0,setTimeout(()=>{this.ngZone.run(()=>{this.errorSvc.message.set(null),this.router.navigateByUrl(this.gameInfo().route),this.store.dispatch(new $.ResetAction),this.isResetting=!1})},10)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=k({type:e,selectors:[["lab-main"]],decls:3,vars:3,consts:[[3,"sticky","settingsXlHidden"],[3,"visible","modal","draggable","resizable","closable","closeOnEscape"],["pTemplate","header"],[1,"p-error"],[1,"mt-4"],[1,"text-end","mt-4"],["pButton","","pRipple","","type","button",3,"click","label","loading"],[1,"p-dialog-title","p-error"],[1,"fa-solid","fa-circle-exclamation","me-2"],[3,"active","hidden"],[1,"layout-mask",3,"click"],[1,"layout-content"],[1,"px-sm-4","py-4"],["styleClass","mt-4",3,"header"],[3,"model"],["pTemplate","footer"],[1,"d-flex","align-items-center","justify-content-between"],[1,"d-flex","flex-column","align-items-center","mt-5"]],template:function(r,x){if(r&1&&(m(0,"lab-header",0),d(1,ct,11,14,"p-dialog",1)(2,xt,6,7)),r&2){let w;f("sticky",x.contentSvc.scrollTop()>16)("settingsXlHidden",x.contentSvc.settingsXlHidden()),n(),g(1,(w=x.errorSvc.message())?1:2,w)}},dependencies:[N,V,K,Y,Q,tt,J,et,W,nt,ot,H,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}main[_ngcontent-%COMP%]{overflow-x:hidden}.layout-content[_ngcontent-%COMP%]{transition:margin .4s cubic-bezier(.05,.74,.2,.99);margin-left:320px;padding-top:4rem}@media (max-width: 1199.98px){.layout-content[_ngcontent-%COMP%]{margin-left:0;padding-top:6rem}}@media (min-width: 1200px){.layout-content.settings-xl-hidden[_ngcontent-%COMP%]{margin-left:0}}@media (max-width: 1199.98px){.layout-mask.active[_ngcontent-%COMP%]{position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;background-color:var(--maskbg)}}"],changeDetection:0});let t=e;return t})();var ht=[{path:"",component:rt,children:[{path:"list",loadComponent:()=>import("./chunk-HP4KX3GR.js").then(t=>t.ListComponent)},{path:"flow",loadComponent:()=>import("./chunk-XTF2JIC5.js").then(t=>t.FlowComponent)},{path:"data",loadChildren:()=>import("./chunk-H2SDONQ3.js").then(t=>t.DataModule)}]}],lt=z.forChild(ht);var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=P({imports:[j,it,at,lt]});let t=e;return t})();export{Yt as MainModule};
