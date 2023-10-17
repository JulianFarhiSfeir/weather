"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[404],{9404:(H,u,r)=>{r.r(u),r.d(u,{CurrentConditionsComponent:()=>q});var n=r(9227);class C{constructor({zipCode:a,name:i,main:e,temp:o,icon:s}){this.zipCode=a,this.name=i,this.main=e,this.temp=o,this.icon=s}}var d=r(285),_=r(5046);let m=(()=>{var t;class a{constructor(){this.locationService=(0,n.f3M)(_.a)}alreadyExist(){return e=>this.locationService.has(e.value)?{alreadyExist:"The zip code entry already exist"}:null}length(e){return o=>{const s=o?.value?.length;return o.dirty&&s>0&&s!==e?{length:"The zip code must be contains 5 characters"}:null}}required(){return e=>e.dirty&&!e?.value?{required:"The zip code field has to be filled"}:null}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),a})();var c=r(6814);let b=(()=>{var t;class a{transform(e){return Object.values(e)[0]}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Yjl({name:"formErrorsMessage",type:t,pure:!0,standalone:!0}),a})();function v(t,a){if(1&t&&(n.ynx(0),n._uU(1),n.ALo(2,"formErrorsMessage"),n.BQk()),2&t){const i=a.ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,1,i)," ")}}const T=function(t,a){return{"has-error":t,"has-success":a}};let Z=(()=>{var t;class a{constructor(e){this.validators=e,this.addLocation=new n.vpe,this.form=new d.cw({zipCode:new d.NI("",[this.validators.alreadyExist(),this.validators.length(5),this.validators.required()])})}submit(){this.addLocation.emit(this.form.value.zipCode),this.form.reset()}}return(t=a).\u0275fac=function(e){return new(e||t)(n.Y36(m))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-zipcode-entry"]],outputs:{addLocation:"addLocation"},standalone:!0,features:[n._Bn([m]),n.jDz],decls:11,vars:7,consts:[[1,"well"],["novalidate","",3,"formGroup","ngClass","ngSubmit"],["for","zipcode"],["type","text","id","zipcode","formControlName","zipCode","placeholder","Zipcode",1,"form-control"],[1,"message","invalid-feedback"],[4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return o.submit()}),n.TgZ(2,"h2"),n._uU(3,"Enter a zipcode"),n.qZA(),n._UZ(4,"label",2)(5,"input",3),n.TgZ(6,"p",4),n.YNc(7,v,3,3,"ng-container",5),n.qZA(),n._UZ(8,"br"),n.TgZ(9,"button",6),n._uU(10," Add location "),n.qZA()()()),2&e&&(n.xp6(1),n.Q6J("formGroup",o.form)("ngClass",n.WLB(4,T,o.form.invalid&&o.form.dirty,o.form.valid&&o.form.dirty)),n.xp6(6),n.Q6J("ngIf",o.form.controls.zipCode.errors),n.xp6(2),n.Q6J("disabled",o.form.disabled||o.form.invalid))},dependencies:[d.u5,d._Y,d.Fj,d.JJ,d.JL,d.UX,d.sg,d.u,c.O5,b,c.mk],styles:[".message[_ngcontent-%COMP%]{margin-bottom:0;padding:5px 0;min-height:30px}"]}),a})();function y(t,a){if(1&t&&(n.TgZ(0,"div",1),n.Hsn(1),n.qZA()),2&t){const i=n.oxw();n.Q6J("hidden",i.closed)}}const x=["*"];let f=(()=>{var t;class a{constructor(){this.selected=!1,this.closed=!1}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-tab-panel"]],inputs:{selected:"selected",header:"header"},standalone:!0,features:[n.jDz],ngContentSelectors:x,decls:1,vars:1,consts:[["class","content",3,"hidden",4,"ngIf"],[1,"content",3,"hidden"]],template:function(e,o){1&e&&(n.F$t(),n.YNc(0,y,2,1,"div",0)),2&e&&n.Q6J("ngIf",o.selected)},dependencies:[c.O5],styles:[".content[_ngcontent-%COMP%]{padding:20px;border-right:1px solid #ddd;border-left:1px solid #ddd;border-bottom:1px solid #ddd}"]}),a})();var w=r(3075),g=r(7099),p=r(7927),E=r(1993);const M=function(t){return{active:t}};function z(t,a){if(1&t){const i=n.EpF();n.TgZ(0,"li",3)(1,"a",4),n.NdJ("click",function(o){n.CHM(i);const s=n.oxw().$implicit,l=n.oxw();return n.KtG(l.showTabPanel(o,s))}),n.TgZ(2,"span"),n._uU(3),n.qZA()(),n.TgZ(4,"span",5),n.NdJ("click",function(){n.CHM(i);const o=n.oxw(),s=o.index,l=o.$implicit,B=n.oxw();return n.KtG(B.closeTab(s,l))}),n._uU(5,"\xd7"),n.qZA()()}if(2&t){const i=n.oxw().$implicit;n.Q6J("hidden",i.closed)("ngClass",n.VKq(3,M,i.selected)),n.xp6(3),n.Oqu(i.header)}}function A(t,a){if(1&t&&(n.ynx(0),n.YNc(1,z,6,5,"li",2),n.BQk()),2&t){const i=a.$implicit;n.xp6(1),n.Q6J("ngIf",!i.closed)}}const L=["*"];let J=(()=>{var t;class a{constructor(){this.destroyRef=(0,n.f3M)(n.ktI),this.currentTabIndex=0,this.close=new n.vpe}closeTab(e,o){this.close.emit(e),o.closed=!0,this.currentTabIndex=Math.max(e-1,0),o.selected&&(this.tabs[this.currentTabIndex].selected=!0)}updateTabs(){0!==this.tabPanels?.length&&(this.tabs=this.tabPanels.toArray(),this.tabs.every(e=>!e.selected)&&(this.tabs[this.currentTabIndex].selected=!0))}ngAfterContentInit(){this.tabPanels.changes.pipe((0,w.O)(""),(0,g.g)(0),(0,p.b)(()=>this.updateTabs()),(0,E.sL)(this.destroyRef)).subscribe()}showTabPanel(e,o){e.preventDefault(),this.show(o)}show(e){this.tabPanels.forEach((o,s)=>{if(o===e)return o.selected=!0,void(this.currentTabIndex=s);o.selected=!1})}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-tabs"]],contentQueries:function(e,o,s){if(1&e&&n.Suo(s,f,4),2&e){let l;n.iGM(l=n.CRH())&&(o.tabPanels=l)}},outputs:{close:"close"},standalone:!0,features:[n.jDz],ngContentSelectors:L,decls:3,vars:1,consts:[[1,"nav","nav-tabs"],[4,"ngFor","ngForOf"],["class","nav-item",3,"hidden","ngClass",4,"ngIf"],[1,"nav-item",3,"hidden","ngClass"],["href","#",1,"nav-link",3,"click"],[1,"close",3,"click"]],template:function(e,o){1&e&&(n.F$t(),n.TgZ(0,"ul",0),n.YNc(1,A,2,1,"ng-container",1),n.qZA(),n.Hsn(2)),2&e&&(n.xp6(1),n.Q6J("ngForOf",o.tabs))},dependencies:[c.sg,c.mk,c.O5],styles:[".nav-item[_ngcontent-%COMP%]{position:relative}.nav-link[_ngcontent-%COMP%]{padding-right:23px}.close[_ngcontent-%COMP%]{position:absolute;top:0;right:6px}"]}),a})();var h=r(2019);const F=function(t){return["/forecast",t]};let I=(()=>{var t;class a{constructor(){this.router=(0,n.f3M)(h.F0),this.clickEventEmitter=new n.vpe}click(){this.clickEventEmitter.emit(this.condition.zipCode),this.showForecast(this.condition.zipCode)}showForecast(e){this.router.navigate(["/forecast",e])}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-condition-card"]],hostBindings:function(e,o){1&e&&n.NdJ("click",function(){return o.click()})},inputs:{condition:"condition"},outputs:{clickEventEmitter:"clickEventEmitter"},standalone:!0,features:[n.jDz],decls:19,vars:23,consts:[[1,"well","flex"],[3,"routerLink"],["width","200","height","200",3,"alt","ngSrc"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div")(2,"h3"),n._uU(3),n.qZA(),n.TgZ(4,"h4"),n._uU(5),n.qZA(),n.TgZ(6,"h4"),n._uU(7,"Temperatures today:"),n.qZA(),n.TgZ(8,"p"),n._uU(9),n.ALo(10,"number"),n.ALo(11,"number"),n.ALo(12,"number"),n.qZA(),n.TgZ(13,"p")(14,"a",1),n._uU(15),n.qZA()()(),n.TgZ(16,"div"),n._UZ(17,"img",2),n.ALo(18,"titlecase"),n.qZA()()),2&e&&(n.xp6(3),n.AsE("",o.condition.name," (",o.condition.zipCode,")"),n.xp6(2),n.hij("Current conditions: ",o.condition.main,""),n.xp6(4),n.lnq(" Current ",n.xi3(10,10,o.condition.temp.current,".0-0")," - Max ",n.xi3(11,13,o.condition.temp.max,".0-0")," - Min ",n.xi3(12,16,o.condition.temp.min,".0-0")," "),n.xp6(5),n.Q6J("routerLink",n.VKq(21,F,o.condition.zipCode)),n.xp6(1),n.hij("Show 5-day forecast for ",o.condition.name,""),n.xp6(2),n.MGl("alt","Condition icon : ",n.lcZ(18,19,o.condition.main),""),n.Q6J("ngSrc",o.condition.icon))},dependencies:[h.rH,c.rS,c.Zd,c.JJ],styles:["[_nghost-%COMP%]{display:block}.close[_ngcontent-%COMP%]{cursor:pointer}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),a})(),P=(()=>{var t;class a{transform(e){return`${e.name} (${e.zipCode})`}}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Yjl({name:"conditionTabLabel",type:t,pure:!0,standalone:!0}),a})();var O=r(2413),Q=r(9193),k=r(1746);function N(t,a){if(1&t&&(n.TgZ(0,"div",5),n._uU(1),n.qZA()),2&t){const i=n.oxw();n.xp6(1),n.hij(" ",i.message()," ")}}function U(t,a){if(1&t&&(n.TgZ(0,"app-tab-panel",9),n.ALo(1,"conditionTabLabel"),n._UZ(2,"app-condition-card",10),n.qZA()),2&t){const i=a.$implicit;n.Q6J("header",n.lcZ(1,2,i)),n.xp6(2),n.Q6J("condition",i)}}function S(t,a){if(1&t){const i=n.EpF();n.TgZ(0,"app-tabs",7),n.NdJ("close",function(o){n.CHM(i);const s=n.oxw(2);return n.KtG(s.removeLocation(o))}),n.YNc(1,U,3,4,"app-tab-panel",8),n.qZA()}if(2&t){const i=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",i)}}function j(t,a){if(1&t&&(n.ynx(0),n.YNc(1,S,2,1,"app-tabs",6),n.BQk()),2&t){const i=a.ngIf;n.oxw();const e=n.MAs(5);n.xp6(1),n.Q6J("ngIf",null==i?null:i.length)("ngIfElse",e)}}function Y(t,a){1&t&&(n.TgZ(0,"div",11),n._uU(1," No conditions loaded, please enter an US zip code "),n.qZA())}let q=(()=>{var t;class a{constructor(e){this.weatherManager=e,this.message=(0,n.tdS)(""),this.currentConditionsByZip=(0,n.Flj)(()=>this.weatherManager.getCurrentConditions()().map(s=>new C({name:s.data.name,main:s.data.weather[0].main,zipCode:s.zipcode,temp:{current:s.data.main.temp,min:s.data.main.temp_min,max:s.data.main.temp_max},icon:this.weatherManager.getWeatherIcon(s.data.weather[0].id)})))}addLocation(e){this.weatherManager.addCurrentConditions(e).pipe((0,O.K)(o=>(0,Q.of)(o).pipe((0,p.b)(()=>this.message.set(o.message)),(0,g.g)(3e3),(0,p.b)(()=>this.message.set(""))))).subscribe()}removeLocation(e){const o=this.currentConditionsByZip().find((s,l)=>l===e);o&&this.weatherManager.removeCurrentConditions(o.zipCode)}}return(t=a).\u0275fac=function(e){return new(e||t)(n.Y36(k.a))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-current-conditions"]],standalone:!0,features:[n.jDz],decls:6,vars:2,consts:[[1,"container-fluid"],["class","alert alert-danger message",4,"ngIf"],[3,"addLocation"],[4,"ngIf"],["noData",""],[1,"alert","alert-danger","message"],[3,"close",4,"ngIf","ngIfElse"],[3,"close"],[3,"header",4,"ngFor","ngForOf"],[3,"header"],[3,"condition"],[1,"alert","alert-info"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.YNc(1,N,2,1,"div",1),n.TgZ(2,"app-zipcode-entry",2),n.NdJ("addLocation",function(l){return o.addLocation(l)}),n.qZA(),n.YNc(3,j,2,2,"ng-container",3),n.YNc(4,Y,2,0,"ng-template",null,4,n.W1O),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",o.message()),n.xp6(2),n.Q6J("ngIf",o.currentConditionsByZip()))},dependencies:[Z,J,I,f,c.sg,P,c.O5],styles:[".no-data[_ngcontent-%COMP%]{display:flex;font-size:20px}.message[_ngcontent-%COMP%]{position:absolute;top:20px;width:250px;left:calc(50% - 125px)}"]}),a})()}}]);