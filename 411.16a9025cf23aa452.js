"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[411],{4411:(le,v,c)=>{c.r(v),c.d(v,{WizardComponent:()=>oe,WizardState:()=>h});var d=c(6814),e=c(5879),b=c(4221),o=c(1180),f=c(6223);const y=["rb"],C=function(n,r,a){return{"p-radiobutton-label":!0,"p-radiobutton-label-active":n,"p-disabled":r,"p-radiobutton-label-focus":a}};function I(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"label",4),e.NdJ("click",function(t){e.CHM(a);const s=e.oxw();return e.KtG(s.select(t))}),e._uU(1),e.qZA()}if(2&n){const a=e.oxw(),i=e.MAs(3);e.Tol(a.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,C,i.checked,a.disabled,a.focused)),e.uIk("for",a.inputId),e.xp6(1),e.Oqu(a.label)}}const k=function(n,r,a){return{"p-radiobutton p-component":!0,"p-radiobutton-checked":n,"p-radiobutton-disabled":r,"p-radiobutton-focused":a}},Z=function(n,r,a){return{"p-radiobutton-box":!0,"p-highlight":n,"p-disabled":r,"p-focus":a}},T={provide:f.JU,useExisting:(0,e.Gpc)(()=>A),multi:!0};let w=(()=>{var n;class r{constructor(){(0,o.Z)(this,"accessors",[])}add(i,t){this.accessors.push([i,t])}remove(i){this.accessors=this.accessors.filter(t=>t[1]!==i)}select(i){this.accessors.forEach(t=>{this.isSameGroup(t,i)&&t[1]!==i&&t[1].writeValue(i.value)})}isSameGroup(i,t){return!!i[0].control&&i[0].control.root===t.control.control.root&&i[1].name===t.name}}return n=r,(0,o.Z)(r,"\u0275fac",function(i){return new(i||n)}),(0,o.Z)(r,"\u0275prov",e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})),r})(),A=(()=>{var n;class r{constructor(i,t,s){(0,o.Z)(this,"cd",void 0),(0,o.Z)(this,"injector",void 0),(0,o.Z)(this,"registry",void 0),(0,o.Z)(this,"value",void 0),(0,o.Z)(this,"formControlName",void 0),(0,o.Z)(this,"name",void 0),(0,o.Z)(this,"disabled",void 0),(0,o.Z)(this,"label",void 0),(0,o.Z)(this,"tabindex",void 0),(0,o.Z)(this,"inputId",void 0),(0,o.Z)(this,"ariaLabelledBy",void 0),(0,o.Z)(this,"ariaLabel",void 0),(0,o.Z)(this,"style",void 0),(0,o.Z)(this,"styleClass",void 0),(0,o.Z)(this,"labelStyleClass",void 0),(0,o.Z)(this,"onClick",new e.vpe),(0,o.Z)(this,"onFocus",new e.vpe),(0,o.Z)(this,"onBlur",new e.vpe),(0,o.Z)(this,"inputViewChild",void 0),(0,o.Z)(this,"onModelChange",()=>{}),(0,o.Z)(this,"onModelTouched",()=>{}),(0,o.Z)(this,"checked",void 0),(0,o.Z)(this,"focused",void 0),(0,o.Z)(this,"control",void 0),this.cd=i,this.injector=t,this.registry=s}ngOnInit(){this.control=this.injector.get(f.a5),this.checkName(),this.registry.add(this.control,this)}handleClick(i,t,s){i.preventDefault(),!this.disabled&&(this.select(i),s&&t.focus())}select(i){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:i,value:this.value}))}writeValue(i){this.checked=i==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onModelTouched(),this.onBlur.emit(i)}onChange(i){this.select(i)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error('\n          If you define both a name and a formControlName attribute on your radio button, their values\n          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>\n        ')}}return n=r,(0,o.Z)(r,"\u0275fac",function(i){return new(i||n)(e.Y36(e.sBO),e.Y36(e.zs3),e.Y36(w))}),(0,o.Z)(r,"\u0275cmp",e.Xpm({type:n,selectors:[["p-radioButton"]],viewQuery:function(i,t){if(1&i&&e.Gf(y,5),2&i){let s;e.iGM(s=e.CRH())&&(t.inputViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:"disabled",label:"label",tabindex:"tabindex",inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[e._Bn([T])],decls:7,vars:23,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio",3,"checked","disabled","change","focus","blur"],["rb",""],[3,"ngClass","click"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"]],template:function(i,t){if(1&i){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("change",function(p){return t.onChange(p)})("focus",function(p){return t.onInputFocus(p)})("blur",function(p){return t.onInputBlur(p)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(p){e.CHM(s);const u=e.MAs(3);return e.KtG(t.handleClick(p,u,!0))}),e._UZ(5,"span",5),e.qZA()(),e.YNc(6,I,2,9,"label",6)}2&i&&(e.Tol(t.styleClass),e.Q6J("ngStyle",t.style)("ngClass",e.kEZ(15,k,t.checked,t.disabled,t.focused)),e.xp6(2),e.Q6J("checked",t.checked)("disabled",t.disabled),e.uIk("id",t.inputId)("name",t.name)("value",t.value)("tabindex",t.tabindex)("aria-checked",t.checked)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy),e.xp6(2),e.Q6J("ngClass",e.kEZ(19,Z,t.checked,t.disabled,t.focused)),e.xp6(2),e.Q6J("ngIf",t.label))},dependencies:[d.mk,d.O5,d.PC],encapsulation:2,changeDetection:0})),r})(),O=(()=>{var n;class r{}return n=r,(0,o.Z)(r,"\u0275fac",function(i){return new(i||n)}),(0,o.Z)(r,"\u0275mod",e.oAB({type:n})),(0,o.Z)(r,"\u0275inj",e.cJS({imports:[d.ez]})),r})();var g=c(4190),x=c(3259);let F=(()=>{var n;class r{}return n=r,(0,o.Z)(r,"\u0275fac",function(i){return new(i||n)}),(0,o.Z)(r,"\u0275mod",e.oAB({type:n})),(0,o.Z)(r,"\u0275inj",e.cJS({imports:[d.ez,g.Bz,x.z,g.Bz,x.z]})),r})();var j=c(2572),W=c(1254),_=c(9538),m=c(8528),B=c(707),Q=c(4532),D=c(5359),P=c(3965),V=c(4480),H=c(6160),U=c(315),q=c(8153),G=c(9515),K=c(3689);function Y(n,r){1&n&&e.GkF(0)}function $(n,r){if(1&n&&(e.ynx(0),e.YNc(1,Y,1,0,"ng-container",8),e.BQk()),2&n){e.oxw();const a=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}function X(n,r){1&n&&e.GkF(0)}function ee(n,r){if(1&n&&(e.ynx(0),e.YNc(1,X,1,0,"ng-container",8),e.BQk()),2&n){e.oxw();const a=e.MAs(11);e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}function te(n,r){1&n&&e.GkF(0)}function ie(n,r){if(1&n&&(e.ynx(0),e.YNc(1,te,1,0,"ng-container",8),e.BQk()),2&n){e.oxw();const a=e.MAs(13);e.xp6(1),e.Q6J("ngTemplateOutlet",a)}}function ne(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e._UZ(3,"p-divider"),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"button",9),e.NdJ("click",function(){e.CHM(a);const t=e.MAs(10),s=e.oxw().ngIf;return e.KtG(t.clickOpen(s.data,"item",s.itemIds))}),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"lab-picker",10,11),e.NdJ("selectId",function(t){e.CHM(a);const s=e.oxw(2);return e.KtG(s.selectId(t,s.WizardState.ItemObjective))}),e.ALo(11,"translate"),e.qZA(),e._UZ(12,"p-divider"),e.TgZ(13,"span"),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"button",12),e.NdJ("click",function(){e.CHM(a);const t=e.MAs(19),s=e.oxw().ngIf;return e.KtG(t.clickOpen(s.data,"recipe",s.recipeIds))}),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"lab-picker",10,13),e.NdJ("selectId",function(t){e.CHM(a);const s=e.oxw(2);return e.KtG(s.selectId(t,s.WizardState.RecipeObjective))}),e.ALo(20,"translate"),e.qZA(),e._UZ(21,"p-divider")}2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,7,"wizard.objectiveType")," "),e.xp6(4),e.Oqu(e.lcZ(6,9,"wizard.produceItems")),e.xp6(2),e.Q6J("label",e.lcZ(8,11,"wizard.produceItemsButton")),e.xp6(2),e.Q6J("header",e.lcZ(11,13,"wizard.produceItemsButton")),e.xp6(5),e.Oqu(e.lcZ(15,15,"wizard.runMachines")),e.xp6(2),e.Q6J("label",e.lcZ(17,17,"wizard.runMachinesButton")),e.xp6(2),e.Q6J("header",e.lcZ(20,19,"wizard.runMachinesButton")))}function ae(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e._UZ(3,"p-divider"),e.TgZ(4,"div",14)(5,"i"),e.ALo(6,"iconClass"),e.qZA(),e.TgZ(7,"span",15),e._uU(8),e.qZA()(),e.TgZ(9,"lab-input-number",16),e.NdJ("setValue",function(t){e.CHM(a);const s=e.oxw(2);return e.KtG(s.rate=t)}),e.qZA(),e.TgZ(10,"p-dropdown",17),e.NdJ("onChange",function(t){e.CHM(a);const s=e.oxw().ngIf,l=e.oxw();return e.KtG(l.setDisplayRate(t.value,s.displayRate))}),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"button",18),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2);return e.KtG(t.createItemObjective(t.id,t.rate,t.RateUnit.Items))}),e.ALo(13,"translate"),e.qZA(),e._UZ(14,"p-divider"),e.TgZ(15,"button",19),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2);return e.KtG(t.state=t.WizardState.ObjectiveType)}),e.ALo(16,"translate"),e.qZA()}if(2&n){const a=e.oxw().ngIf,i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,10,"wizard.itemObjectiveItems")),e.xp6(4),e.Tol(e.lcZ(6,12,i.id)),e.xp6(3),e.Oqu(a.data.itemEntities[i.id].name),e.xp6(1),e.Q6J("value",i.rate),e.xp6(1),e.Q6J("tooltip",e.lcZ(11,14,"objectives.selectDisplayRate"))("ngModel",a.displayRate)("options",i.displayRateOptions),e.xp6(2),e.Q6J("label",e.lcZ(13,16,"ok")),e.xp6(3),e.Q6J("label",e.lcZ(16,18,"wizard.back"))}}function se(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"div"),e._uU(1),e.ALo(2,"translate"),e.qZA(),e._UZ(3,"p-divider"),e.TgZ(4,"div",14)(5,"i"),e.ALo(6,"iconClass"),e.qZA(),e.TgZ(7,"span",15),e._uU(8),e.qZA()(),e.TgZ(9,"lab-input-number",16),e.NdJ("setValue",function(t){e.CHM(a);const s=e.oxw(2);return e.KtG(s.count=t)}),e.qZA(),e.TgZ(10,"button",18),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2);return e.KtG(t.createRecipeObjective(t.id,t.count))}),e.ALo(11,"translate"),e.qZA(),e._UZ(12,"p-divider"),e.TgZ(13,"button",19),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2);return e.KtG(t.state=t.WizardState.ObjectiveType)}),e.ALo(14,"translate"),e.qZA()}if(2&n){const a=e.oxw().ngIf,i=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,7,"wizard.recipeObjectiveMachines")),e.xp6(4),e.Tol(e.lcZ(6,9,i.id)),e.xp6(3),e.Oqu(a.data.recipeEntities[i.id].name),e.xp6(1),e.Q6J("value",i.count),e.xp6(1),e.Q6J("label",e.lcZ(11,11,"ok")),e.xp6(3),e.Q6J("label",e.lcZ(14,13,"wizard.back"))}}function re(n,r){if(1&n&&(e.TgZ(0,"p-card")(1,"div",1),e.ynx(2,2),e.YNc(3,$,2,1,"ng-container",3),e.YNc(4,ee,2,1,"ng-container",3),e.YNc(5,ie,2,1,"ng-container",3),e.BQk(),e._UZ(6,"button",4),e.ALo(7,"translate"),e.qZA(),e.YNc(8,ne,22,21,"ng-template",null,5,e.W1O),e.YNc(10,ae,17,20,"ng-template",null,6,e.W1O),e.YNc(12,se,15,15,"ng-template",null,7,e.W1O),e.qZA()),2&n){const a=e.oxw();e.xp6(2),e.Q6J("ngSwitch",a.state),e.xp6(1),e.Q6J("ngSwitchCase",a.WizardState.ObjectiveType),e.xp6(1),e.Q6J("ngSwitchCase",a.WizardState.ItemObjective),e.xp6(1),e.Q6J("ngSwitchCase",a.WizardState.RecipeObjective),e.xp6(1),e.Q6J("label",e.lcZ(7,5,"cancel"))}}var h=function(n){return n[n.ObjectiveType=0]="ObjectiveType",n[n.ItemObjective=1]="ItemObjective",n[n.RecipeObjective=2]="RecipeObjective",n}(h||{});let oe=(()=>{var n;class r{constructor(){this.store=(0,e.f3M)(b.yh),this.vm$=(0,j.a)({itemIds:this.store.select(m.lx.U4),data:this.store.select(m.Zr.pY),recipeIds:this.store.select(m.Zr.eW),displayRate:this.store.select(m.Zr.P7),rateUnitOptions:this.store.select(m.Zr.VS)}),this.id="",this.rate="1",this.count="1",this.state=h.ObjectiveType,this.displayRateOptions=_.g6,this.RateUnit=_.iK,this.WizardState=h}selectId(i,t){this.id=i,this.state=t}setDisplayRate(i,t){this.store.dispatch(new m.Zr.MO({value:i,prev:t}))}createItemObjective(i,t,s){this.store.dispatch(new m.VJ.$f({id:"0",targetId:i,value:t,unit:s,type:_.S5.Output}))}createRecipeObjective(i,t){this.store.dispatch(new m.VJ.$f({id:"0",targetId:i,value:t,unit:_.iK.Machines,type:_.S5.Output}))}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[e.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[1,"d-flex","flex-column","p-fluid"],[3,"ngSwitch"],[4,"ngSwitchCase"],["pButton","","pRipple","","type","button","icon","fa-solid fa-xmark","routerLink","/","queryParamsHandling","preserve",1,"p-button-outlined",3,"label"],["objectiveType",""],["itemObjective",""],["recipeObjective",""],[4,"ngTemplateOutlet"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",1,"mt-2",3,"label","click"],[3,"header","selectId"],["addItemObjectivePicker",""],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"label","click"],["addRecipePicker",""],[1,"d-flex","align-items-center","justify-content-center"],[1,"ms-2"],["tooltipPosition","top",1,"mt-2","w-100",3,"value","setValue"],["labDropdownTranslate","","styleClass","mt-2 h-100",3,"tooltip","ngModel","options","onChange"],["pButton","","pRipple","","type","button","icon","fa-solid fa-check","routerLink","/list",1,"mt-2",3,"label","click"],["pButton","","pRipple","","type","button","icon","fa-solid fa-arrow-left",1,"mb-2","p-button-outlined",3,"label","click"]],template:function(i,t){1&i&&(e.YNc(0,re,14,7,"p-card",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,t.vm$))},dependencies:[d.ez,d.O5,d.tP,d.RF,d.n9,d.Ov,O,F,g.rH,W.o,f.JJ,f.On,B.Hq,Q.Z,D.i,P.Lt,V.H,H.l,U.q,q.l,G.X$,K.Y],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0}),r})()}}]);