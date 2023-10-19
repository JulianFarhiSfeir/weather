"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[629],{3629:(D,m,c)=>{c.r(m),c.d(m,{CurrentConditionsComponent:()=>H});var n=c(9227),p=c(6223),v=c(5046);let f=(()=>{var e;class r{constructor(t){this.locationService=t}alreadyExist(){return t=>this.locationService.has(t.value)?{alreadyExist:"The zip code entry already exists"}:null}length(t){return o=>{const a=o?.value?.length;return o.dirty&&a>0&&a!==t?{length:"The zip code must be contains 5 characters"}:null}}required(){return t=>t.dirty&&!t?.value?{required:"The zip code field has to be filled"}:null}}return(e=r).\u0275fac=function(t){return new(t||e)(n.LFG(v.a))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),r})();var d=c(6814);let b=(()=>{var e;class r{transform(t){return Object.values(t)[0]}}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Yjl({name:"formErrorsMessage",type:e,pure:!0,standalone:!0}),r})();function T(e,r){if(1&e&&(n.ynx(0),n._uU(1),n.ALo(2,"formErrorsMessage"),n.BQk()),2&e){const i=r.ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,1,i)," ")}}const y=function(e,r){return{"has-error":e,"has-success":r}};let x=(()=>{var e;class r{constructor(t){this.validators=t,this.addLocation=new n.vpe,this.form=new p.cw({zipcode:new p.NI("",[this.validators.alreadyExist(),this.validators.length(5),this.validators.required()])})}submit(){this.addLocation.emit(this.form.value.zipcode),this.form.reset()}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(f))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-zipcode-entry"]],outputs:{addLocation:"addLocation"},standalone:!0,features:[n._Bn([],[f]),n.jDz],decls:13,vars:7,consts:[[1,"well"],["novalidate","",3,"formGroup","ngClass","ngSubmit"],[1,"form-group"],["for","zipcode"],["type","text","id","zipcode","formControlName","zipcode","placeholder","Enter a zipcode",1,"form-control"],[1,"message","invalid-feedback"],[4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return o.submit()}),n.TgZ(2,"h2"),n._uU(3,"Search the USA weather conditions"),n.qZA(),n.TgZ(4,"div",2)(5,"label",3),n._uU(6,"Zipcode"),n.qZA(),n._UZ(7,"input",4),n.qZA(),n.TgZ(8,"p",5),n.YNc(9,T,3,3,"ng-container",6),n.qZA(),n._UZ(10,"br"),n.TgZ(11,"button",7),n._uU(12," Add location "),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("formGroup",o.form)("ngClass",n.WLB(4,y,o.form.invalid&&o.form.dirty,o.form.valid&&o.form.dirty)),n.xp6(8),n.Q6J("ngIf",o.form.controls.zipcode.errors),n.xp6(2),n.Q6J("disabled",o.form.disabled||o.form.invalid||o.form.pristine))},dependencies:[p.u5,p._Y,p.Fj,p.JJ,p.JL,p.UX,p.sg,p.u,d.O5,b,d.mk],styles:[".message[_ngcontent-%COMP%]{margin-bottom:0;padding:5px 0;min-height:30px}"]}),r})();function Z(e,r){if(1&e&&(n.TgZ(0,"div",1),n.Hsn(1),n.qZA()),2&e){const i=n.oxw();n.Q6J("hidden",i.closed)}}const w=["*"];let g=(()=>{var e;class r{constructor(){this.selected=!1,this.closed=!1}}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tab-panel"]],inputs:{selected:"selected",header:"header"},standalone:!0,features:[n.jDz],ngContentSelectors:w,decls:1,vars:1,consts:[["class","content",3,"hidden",4,"ngIf"],[1,"content",3,"hidden"]],template:function(t,o){1&t&&(n.F$t(),n.YNc(0,Z,2,1,"div",0)),2&t&&n.Q6J("ngIf",o.selected)},dependencies:[d.O5],styles:[".content[_ngcontent-%COMP%]{padding:20px;border-right:1px solid #ddd;border-left:1px solid #ddd;border-bottom:1px solid #ddd}"]}),r})();var L=c(3075),h=c(7099),l=c(7927),A=c(1993);const M=function(e){return{active:e}};function z(e,r){if(1&e){const i=n.EpF();n.TgZ(0,"li",3)(1,"a",4),n.NdJ("click",function(o){n.CHM(i);const a=n.oxw().$implicit,s=n.oxw();return n.KtG(s.showTabPanel(o,a))}),n.TgZ(2,"span"),n._uU(3),n.qZA()(),n.TgZ(4,"span",5),n.NdJ("click",function(){n.CHM(i);const o=n.oxw(),a=o.index,s=o.$implicit,u=n.oxw();return n.KtG(u.closeTab(a,s))}),n._uU(5,"\xd7"),n.qZA()()}if(2&e){const i=n.oxw().$implicit;n.Q6J("hidden",i.closed)("ngClass",n.VKq(3,M,i.selected)),n.xp6(3),n.Oqu(i.header)}}function F(e,r){if(1&e&&(n.ynx(0),n.YNc(1,z,6,5,"li",2),n.BQk()),2&e){const i=r.$implicit;n.xp6(1),n.Q6J("ngIf",!i.closed)}}const S=["*"];let E=(()=>{var e;class r{constructor(t){this.destroyRef=t,this.currentTabIndex=0,this.close=new n.vpe}closeTab(t,o){this.close.emit(t),o.closed=!0,this.currentTabIndex=Math.max(t-1,0),o.selected&&(this.tabs[this.currentTabIndex].selected=!0)}updateTabs(){0!==this.tabPanels?.length&&(this.tabs=this.tabPanels.toArray(),this.tabs.every(t=>!t.selected)&&(this.tabs[this.currentTabIndex].selected=!0))}ngAfterContentInit(){this.tabPanels.changes.pipe((0,L.O)(""),(0,h.g)(0),(0,l.b)(()=>this.updateTabs()),(0,A.sL)(this.destroyRef)).subscribe()}showTabPanel(t,o){t.preventDefault(),this.show(o)}show(t){this.tabPanels.forEach((o,a)=>{if(o===t)return o.selected=!0,void(this.currentTabIndex=a);o.selected=!1})}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(n.ktI))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-tabs"]],contentQueries:function(t,o,a){if(1&t&&n.Suo(a,g,4),2&t){let s;n.iGM(s=n.CRH())&&(o.tabPanels=s)}},outputs:{close:"close"},standalone:!0,features:[n.jDz],ngContentSelectors:S,decls:3,vars:1,consts:[[1,"nav","nav-tabs"],[4,"ngFor","ngForOf"],["class","nav-item",3,"hidden","ngClass",4,"ngIf"],[1,"nav-item",3,"hidden","ngClass"],["href","#",1,"nav-link",3,"click"],[1,"close",3,"click"]],template:function(t,o){1&t&&(n.F$t(),n.TgZ(0,"ul",0),n.YNc(1,F,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&t&&(n.xp6(1),n.Q6J("ngForOf",o.tabs))},dependencies:[d.sg,d.mk,d.O5],styles:[".nav-item[_ngcontent-%COMP%]{position:relative}.nav-link[_ngcontent-%COMP%]{padding-right:23px}.close[_ngcontent-%COMP%]{position:absolute;top:0;right:6px}"]}),r})();const I=["*"];let J=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-condition-card"]],inputs:{condition:"condition"},standalone:!0,features:[n.jDz],ngContentSelectors:I,decls:17,vars:19,consts:[[1,"well","flex"],["width","200","height","200",3,"alt","ngSrc"]],template:function(t,o){1&t&&(n.F$t(),n.TgZ(0,"div",0)(1,"div")(2,"h3"),n._uU(3),n.qZA(),n.TgZ(4,"h4"),n._uU(5),n.qZA(),n.TgZ(6,"h4"),n._uU(7,"Temperatures today:"),n.qZA(),n.TgZ(8,"p"),n._uU(9),n.ALo(10,"number"),n.ALo(11,"number"),n.ALo(12,"number"),n.qZA(),n.Hsn(13),n.qZA(),n.TgZ(14,"div"),n._UZ(15,"img",1),n.ALo(16,"titlecase"),n.qZA()()),2&t&&(n.xp6(3),n.AsE("",o.condition.name," (",o.condition.zipcode,")"),n.xp6(2),n.hij("Current conditions: ",o.condition.main,""),n.xp6(4),n.lnq(" Current ",n.xi3(10,8,o.condition.temp.current,".0-0")," - Max ",n.xi3(11,11,o.condition.temp.max,".0-0")," - Min ",n.xi3(12,14,o.condition.temp.min,".0-0")," "),n.xp6(6),n.MGl("alt","Condition icon : ",n.lcZ(16,17,o.condition.main),""),n.Q6J("ngSrc",o.condition.icon))},dependencies:[d.rS,d.Zd,d.JJ],styles:["[_nghost-%COMP%]{display:block}.close[_ngcontent-%COMP%]{cursor:pointer}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),r})(),P=(()=>{var e;class r{transform(t){return`${t.name} (${t.zipcode})`}}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Yjl({name:"conditionTabLabel",type:e,pure:!0,standalone:!0}),r})();var _=c(6177);class O{constructor({zipcode:r,name:i,main:t,temp:o,icon:a}){this.zipcode=r,this.name=i,this.main=t,this.temp=o,this.icon=a}}var Q=c(2413),U=c(9193),N=c(5253),k=c(1746);let C=(()=>{var e;class r{constructor(t,o){this.weatherManager=t,this.router=o,this.message=(0,n.tdS)(""),this.currentConditionsByZip=(0,n.Flj)(()=>this.weatherManager.getCurrentConditions()().map(s=>new O({name:s.data.name,main:s.data.weather[0].main,zipcode:s.zipcode,temp:{current:s.data.main.temp,min:s.data.main.temp_min,max:s.data.main.temp_max},icon:this.weatherManager.getWeatherIcon(s.data.weather[0].id)}))),this.conditions=this.currentConditionsByZip,this.errorMessage=this.message.asReadonly()}removeLocation(t){const o=this.currentConditionsByZip().find((a,s)=>s===t);o&&this.weatherManager.removeCurrentConditions(o.zipcode)}addLocation(t){this.weatherManager.addCurrentConditions(t).pipe((0,Q.K)(o=>(0,U.of)(o).pipe((0,l.b)(()=>this.message.set(o.message)),(0,h.g)(3e3),(0,l.b)(()=>this.message.set(""))))).subscribe()}navigate(t){return(0,N.D)(this.router.navigate(["/forecast",t]))}}return(e=r).\u0275fac=function(t){return new(t||e)(n.LFG(k.a),n.LFG(_.F0))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),r})();function Y(e,r){if(1&e&&(n.TgZ(0,"div",5),n._uU(1),n.qZA()),2&e){const i=n.oxw();n.xp6(1),n.hij(" ",i.message()," ")}}const j=function(e){return["/forecast",e]};function q(e,r){if(1&e){const i=n.EpF();n.TgZ(0,"app-tab-panel",9),n.ALo(1,"conditionTabLabel"),n.TgZ(2,"app-condition-card",10),n.NdJ("click",function(o){const s=n.CHM(i).$implicit,u=n.oxw(3);return n.KtG(u.navigate(o,s.zipcode))}),n.TgZ(3,"p")(4,"a",11),n._uU(5),n.qZA()()()()}if(2&e){const i=r.$implicit;n.Q6J("header",n.lcZ(1,4,i)),n.xp6(2),n.Q6J("condition",i),n.xp6(2),n.Q6J("routerLink",n.VKq(6,j,i.zipcode)),n.xp6(1),n.hij(" Show 5-day forecast for ",i.name,"")}}function B(e,r){if(1&e){const i=n.EpF();n.TgZ(0,"app-tabs",7),n.NdJ("close",function(o){n.CHM(i);const a=n.oxw(2);return n.KtG(a.removeLocation(o))}),n.YNc(1,q,6,8,"app-tab-panel",8),n.qZA()}if(2&e){const i=n.oxw().ngIf,t=n.oxw();n.xp6(1),n.Q6J("ngForOf",i)("ngForTrackBy",t.trackConditions)}}function G(e,r){if(1&e&&(n.ynx(0),n.YNc(1,B,2,2,"app-tabs",6),n.BQk()),2&e){const i=r.ngIf;n.oxw();const t=n.MAs(5);n.xp6(1),n.Q6J("ngIf",null==i?null:i.length)("ngIfElse",t)}}function $(e,r){1&e&&(n.TgZ(0,"div",12),n._uU(1," No conditions loaded, please enter an USA zip code "),n.qZA())}let H=(()=>{var e;class r{constructor(t){this.currentConditionsService=t,this.message=this.currentConditionsService.errorMessage,this.conditions=this.currentConditionsService.conditions}trackConditions(t,o){return o.zipcode}addLocation(t){this.currentConditionsService.addLocation(t)}removeLocation(t){this.currentConditionsService.removeLocation(t)}navigate(t,o){t.target instanceof HTMLAnchorElement||this.currentConditionsService.navigate(o).subscribe()}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(C))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-current-conditions"]],standalone:!0,features:[n._Bn([],[C]),n.jDz],decls:6,vars:2,consts:[[1,"container-fluid"],["class","alert alert-danger message",4,"ngIf"],[3,"addLocation"],[4,"ngIf"],["noData",""],[1,"alert","alert-danger","message"],[3,"close",4,"ngIf","ngIfElse"],[3,"close"],[3,"header",4,"ngFor","ngForOf","ngForTrackBy"],[3,"header"],[3,"condition","click"],[3,"routerLink"],[1,"alert","alert-info"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,Y,2,1,"div",1),n.TgZ(2,"app-zipcode-entry",2),n.NdJ("addLocation",function(s){return o.addLocation(s)}),n.qZA(),n.YNc(3,G,2,2,"ng-container",3),n.YNc(4,$,2,0,"ng-template",null,4,n.W1O),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",o.message()),n.xp6(2),n.Q6J("ngIf",o.conditions()))},dependencies:[x,E,J,g,d.sg,P,d.O5,_.rH],styles:[".no-data[_ngcontent-%COMP%]{display:flex;font-size:20px}.message[_ngcontent-%COMP%]{position:absolute;top:20px;width:250px;left:calc(50% - 125px)}app-condition-card[_ngcontent-%COMP%]{cursor:pointer}"]}),r})()}}]);