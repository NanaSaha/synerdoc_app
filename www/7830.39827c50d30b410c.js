"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7830],{7830:(M,f,r)=>{r.r(f),r.d(f,{SellerDetailsPageModule:()=>S});var _=r(6895),l=r(433),n=r(4556),p=r(1407),s=r(7582),b=r(6730),e=r(8256),v=r(128);function x(t,g){1&t&&e._UZ(0,"ion-datetime",23)}function C(t,g){1&t&&e._UZ(0,"ion-datetime",23)}const y=[{path:"",component:(()=>{class t{constructor(o,i,a,c,d,m){this.alertCtrl=o,this.router=i,this._form=a,this.api=c,this.loadingCtrl=d,this.modalCtrl=m,this.results_body=[],this.signupForm=this._form.group({seller_name:["",l.kI.compose([l.kI.required])],seller_email:["",l.kI.compose([l.kI.required])],seller_phone_number:["",l.kI.compose([l.kI.required])],fees:["10"],paid_by:["",l.kI.compose([l.kI.required])]})}ngOnInit(){var o=localStorage.getItem("title"),i=localStorage.getItem("name");localStorage.getItem("item_type"),localStorage.getItem("amount"),localStorage.getItem("description"),console.log("title "+o,"name "+i)}signup(){return(0,s.mG)(this,void 0,void 0,function*(){this.loginVal=JSON.stringify(this.signupForm.value),this.jsonBody=JSON.parse(this.loginVal),console.log("THIS IS THE login raw values VALUES"+this.loginVal),console.log("JOSN BODY"+this.jsonBody),this.api.signup(this.jsonBody).then(i=>{this.loadingCtrl.dismiss().then(()=>(0,s.mG)(this,void 0,void 0,function*(){console.log("results:::",JSON.parse(JSON.stringify(i)));var a=JSON.parse(JSON.stringify(i));console.log("results:::",a.resp_code),"000"==a.resp_code?this.router.navigateByUrl("/login"):(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))}).catch(i=>(0,s.mG)(this,void 0,void 0,function*(){this.loadingCtrl.dismiss().then(()=>(0,s.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))})),(yield this.loadingCtrl.create()).present()})}preview(){return(0,s.mG)(this,void 0,void 0,function*(){var o=localStorage.getItem("title"),i=localStorage.getItem("name"),c=(localStorage.getItem("item_type"),localStorage.getItem("amount")),d=localStorage.getItem("description"),m=localStorage.getItem("buyer_id");this.loginVal=JSON.stringify(this.signupForm.value),this.jsonBody=JSON.parse(this.loginVal),console.log("THIS IS THE login raw values VALUES"+this.loginVal),console.log("seller_name"+this.jsonBody.seller_name),console.log("seller_email"+this.jsonBody.seller_email),console.log("seller_phone_number"+this.jsonBody.seller_phone_number),console.log("fees"+this.jsonBody.fees),console.log("paid_by"+this.jsonBody.paid_by),console.log("title "+o,"name "+i),console.log("buyer_id "+m),this.params={seller_name:this.jsonBody.seller_name,seller_email:this.jsonBody.seller_email,seller_phone:this.jsonBody.seller_phone_number,amount:c,fees:this.jsonBody.fees,item_name:i,item_description:d,transaction_title:o,paid_by:this.jsonBody.paid_by,buyer_id:m,status:"pending"},this.api.save_trans(this.params).then(u=>{this.loadingCtrl.dismiss().then(()=>(0,s.mG)(this,void 0,void 0,function*(){console.log("results:::",JSON.parse(JSON.stringify(u)));var h=JSON.parse(JSON.stringify(u));console.log("results:::",h.resp_code),"000"==h.resp_code?(this.router.navigateByUrl("/transaction-preview"),(yield this.alertCtrl.create({message:"Transaction Successfully Created",buttons:[{text:"Cancel",role:"cancel"}]})).present()):(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))}).catch(u=>(0,s.mG)(this,void 0,void 0,function*(){this.loadingCtrl.dismiss().then(()=>(0,s.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))})),(yield this.loadingCtrl.create()).present()})}save(){return(0,s.mG)(this,void 0,void 0,function*(){console.log("Modal"),yield(yield this.modalCtrl.create({component:b.X,breakpoints:[0,.3,.5,.8],initialBreakpoint:.6})).present()})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(n.Br),e.Y36(p.F0),e.Y36(l.qu),e.Y36(v.Q),e.Y36(n.HT),e.Y36(n.IN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-seller-details"]],decls:84,vars:2,consts:[["slot","start"],["defaultHref",""],["size","3"],["size","9"],[2,"font-size","10px"],["size","3",3,"click"],[1,"direct_service_row2"],[1,"c3"],[1,"schedulecontainer"],[1,"schedulecontainer2"],[1,"text-content"],[2,"font-size","10px","text-align","left"],[1,"headFontTrans"],[1,"subFontTrans"],["slot","start",2,"background-color","#ffffff","color","black"],["label","Floating label","label-placement","floating"],["value","apple"],["value","banana"],["value","orange"],[1,"c4"],[1,"schedulecontainerb"],["datetime","datetime"],[3,"keepContentsMounted"],["id","datetime"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-row"),e._UZ(5,"ion-col",2),e.TgZ(6,"ion-col",3)(7,"ion-row",4)(8,"ion-col",5),e.NdJ("click",function(){return i.save()}),e._uU(9," Save "),e.qZA(),e.TgZ(10,"ion-col",5),e.NdJ("click",function(){return i.save()}),e._uU(11," Delete "),e.qZA(),e.TgZ(12,"ion-col",5),e.NdJ("click",function(){return i.save()}),e._uU(13," Complete "),e.qZA(),e.TgZ(14,"ion-col",5),e.NdJ("click",function(){return i.save()}),e._uU(15," Upload "),e.qZA()()()()()(),e.TgZ(16,"ion-content")(17,"div",6)(18,"div",7)(19,"div",8)(20,"div",9)(21,"div",10)(22,"h4",11),e._uU(23,"25 Sept 24"),e.qZA(),e.TgZ(24,"h4",12),e._uU(25,"Anita Shades"),e.qZA(),e.TgZ(26,"p",13),e._uU(27,"HHA-Hourly | Home Health Aide Visit (8E86) 07205"),e.qZA()(),e.TgZ(28,"p",12)(29,"ion-badge",14),e._uU(30,"HHA"),e.qZA()()()(),e.TgZ(31,"div",8)(32,"div",9)(33,"div",10)(34,"h4",11),e._uU(35,"Section: Tap below to select"),e.qZA()()()(),e.TgZ(36,"ion-item")(37,"ion-select",15)(38,"ion-select-option",16),e._uU(39,"Care Need Task - Fall Risk"),e.qZA(),e.TgZ(40,"ion-select-option",17),e._uU(41,"Patient Header"),e.qZA(),e.TgZ(42,"ion-select-option",18),e._uU(43,"Narrative"),e.qZA()()()()(),e.TgZ(44,"div",6)(45,"div",19)(46,"div",20)(47,"div",9)(48,"div",10)(49,"h4",11),e._uU(50,"Associate"),e.qZA(),e.TgZ(51,"h4",12),e._uU(52,"Heidy Grace"),e.qZA()()()(),e._UZ(53,"hr"),e.TgZ(54,"div",20)(55,"div",9)(56,"div",10)(57,"h4",11),e._uU(58,"Associate Discipline"),e.qZA(),e.TgZ(59,"h4",12),e._uU(60,"Home Health Aide"),e.qZA()()()()()(),e.TgZ(61,"div",6)(62,"div",19)(63,"div",20)(64,"div",9)(65,"div",10)(66,"h4",11),e._uU(67,"Actual Time In "),e.qZA(),e.TgZ(68,"h4",12),e._uU(69,"Time"),e._UZ(70,"ion-datetime-button",21),e.TgZ(71,"ion-modal",22),e.YNc(72,x,1,0,"ng-template"),e.qZA()()()()(),e._UZ(73,"hr"),e.TgZ(74,"div",20)(75,"div",9)(76,"div",10)(77,"h4",11),e._uU(78,"Actual Time Out"),e.qZA(),e.TgZ(79,"h4",12),e._uU(80,"Time "),e._UZ(81,"ion-datetime-button",21),e.TgZ(82,"ion-modal",22),e.YNc(83,C,1,0,"ng-template"),e.qZA()()()()()()()()),2&o&&(e.xp6(71),e.Q6J("keepContentsMounted",!0),e.xp6(11),e.Q6J("keepContentsMounted",!0))},dependencies:[n.oU,n.yp,n.Sm,n.wI,n.W2,n.x4,n.Mj,n.Gu,n.Ie,n.Nd,n.t9,n.n0,n.sr,n.ki,n.QI,n.cs],styles:["[_nghost-%COMP%]{--border-radius: 4px !important}.schedulecontainer[_ngcontent-%COMP%]{border-radius:15px;align-items:flex-start;padding:0 0 0 11px;margin:13px;color:#fff}.schedulecontainerb[_ngcontent-%COMP%]{border-radius:15px;align-items:flex-start;padding:0 0 0 11px;margin:13px;color:#000}.noschedulecontainer[_ngcontent-%COMP%]{align-items:flex-start;padding:18px 17px 4px 8px;margin:13px}ion-item[_ngcontent-%COMP%]::part(native){--border-radius: 11px !important;height:50px;gap:4px;border-width:1px;border-style:solid;border-color:#00357e;background:#00357E!important;color:#fff;width:80%;margin-left:8%;margin-bottom:8%}.subFontTrans[_ngcontent-%COMP%]{font-size:12px;text-align:left;margin-bottom:8%}.headFontTrans[_ngcontent-%COMP%]{font-size:16px;text-align:left;font-weight:900}.headFont[_ngcontent-%COMP%]{text-align:left;color:#576b74;font-size:14px}.text-content[_ngcontent-%COMP%]{flex-grow:1;padding:4px 4px 4px 13px}.schedulecontainer2[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:80%}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%}.txtLeft[_ngcontent-%COMP%]{margin-left:10%;color:#1d4355;font-size:30px;margin-bottom:10%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-button[_ngcontent-%COMP%]{--background: #224d0e;--background-hover: #224d0e;--background-activated: #224d0e;--background-focused: #224d0e;--color: rgb(255, 255, 255);--border-radius: 5px;--border-color: #224d0e;--border-style: solid;--border-width: 1px;--box-shadow: 0 2px 6px 0 rgb(0, 0, 0, .25);--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:70%;height:76%;display:block;margin-left:auto;margin-right:auto;margin-top:22px}.side-image[_ngcontent-%COMP%]{width:100%;margin-top:0%}.BigText[_ngcontent-%COMP%]{font-size:24px;font-weight:700;letter-spacing:-.1px;line-height:30px;margin-bottom:2px;margin-top:.5rem}.card-ios[_ngcontent-%COMP%], .card-md[_ngcontent-%COMP%]{border-radius:12px!important}.direct_service_row2[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:scroll;-webkit-overflow-scrolling:touch;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none;overflow:hidden;transition:all .2s cubic-bezier(.175,.885,.32,1.275);width:100%;flex-wrap:wrap;margin-top:0%;margin-bottom:5%}.c3[_ngcontent-%COMP%]{width:95%;box-shadow:0 4px 8px rgba(0,0,0,.2);margin-top:5%;background-image:linear-gradient(to right top,#006AFF,#006AFF,#006AFF)!important;text-align:center;border-radius:8px;margin-left:2.5%;margin-right:2.5%}.c4[_ngcontent-%COMP%]{width:95%;box-shadow:0 4px 8px rgba(0,0,0,.2);margin-top:5%;background-image:linear-gradient(to right top,#ffffff,#ffffff,#ffffff)!important;text-align:center;border-radius:8px;margin-left:2.5%;margin-right:2.5%;color:#000}.align-col[_ngcontent-%COMP%]{text-align:left}.fboldness[_ngcontent-%COMP%]{font-weight:900;color:#fff}.item-md[_ngcontent-%COMP%]{padding-left:16px;padding-right:0;position:relative;font-size:1.6rem;font-weight:400;text-transform:none;background-color:rgba(255,255,255,0);box-shadow:none;transition:background-color .3s cubic-bezier(.4,0,.2,1)}.ionic-selectable-md[_ngcontent-%COMP%]   .ionic-selectable-icon-inner[_ngcontent-%COMP%]{color:#fff}.item-label-floating[_ngcontent-%COMP%]   .ionic-selectable-value[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;min-height:19px;color:#fff}.item-input[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%], .item-select[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%], .item-datetime[_ngcontent-%COMP%]   .label-md[_ngcontent-%COMP%]{color:#fff}@media (min-width: 600px){.c3[_ngcontent-%COMP%]{width:95%;box-shadow:0 4px 8px rgba(0,0,0,.2);margin-top:5%;background-image:linear-gradient(to right top,#728129,#14500e,#4a4a48)!important;text-align:center;border-radius:8px;margin-left:20%;margin-right:20%;height:300px}.align-col[_ngcontent-%COMP%]{text-align:center;line-height:1;margin:7% 0 0}.ptag[_ngcontent-%COMP%]{text-align:center}.BigText[_ngcontent-%COMP%]{font-size:24px;font-weight:700;letter-spacing:-.1px;line-height:30px;margin-bottom:2px;margin-top:.5rem;text-align:center}.radioo[_ngcontent-%COMP%]{margin-left:30%;margin-right:30%}.comm[_ngcontent-%COMP%]{margin-left:30%;margin-right:0%;width:40%}.align-col[_ngcontent-%COMP%]{text-align:center;line-height:1;margin-top:6%}.bordline[_ngcontent-%COMP%]{border:2px dashed black;margin:10px 30%}}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(y),p.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.ez,l.u5,l.UX,n.Pc,P]}),t})()}}]);