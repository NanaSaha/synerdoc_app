"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1693],{128:(f,d,l)=>{l.d(d,{Q:()=>a});var m=l(8256),u=l(529);let a=(()=>{class _{constructor(t){this.http=t,this.base_url="https://escrow.devdexsoftware.com",this.login_url=this.base_url+"/login",this.sendEmail=this.base_url+"/send_email",this.signup_url=this.base_url+"/sign_up",this.update_profile_url=this.base_url+"/update_profile",this.recipient_url=this.base_url+"/retrieve_recipients",this.openPort_url=this.base_url+"/open_serialPort",this.open_single_box_url=this.base_url+"/open_single_box",this.sms_url=this.base_url+"/sendMsg",this.save_trans_url=this.base_url+"/save_transactions",this.save_seller_trans_url=this.base_url+"/save_seller_transactions",this.retrieve_trans_url=this.base_url+"/retrieve_user_transactions",this.retrieve_trans_pending_url=this.base_url+"/retrieve_transactions_pending",this.retrieve_trans_joined_url=this.base_url+"/retrieve_transactions_joined",this.retrieve_trans_pending_email_url=this.base_url+"/retrieve_transactions_pending_with_person_email",this.retrieve_seller_trans_url=this.base_url+"/retrieve_seller_transactions",this.retrieve_trans_id_url=this.base_url+"/retrieve_transactions_with_transId",this.join_seller_trans_url=this.base_url+"/join_seller_transactions",this.join_buyer_trans_url=this.base_url+"/join_buyer_transactions",this.retrieve_join_seller_trans_url=this.base_url+"/retrieve_join_seller_transactions",this.retrieve_join_buyer_trans_url=this.base_url+"/retrieve_join_buyer_transactions",this.open_box_url=this.base_url+"/open_locker"}login(t){return new Promise((r,n)=>{this.http.post(this.login_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}send_Email(t){return new Promise((r,n)=>{this.http.post(this.sendEmail,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}signup(t){return new Promise((r,n)=>{this.http.post(this.signup_url,t).subscribe(i=>(console.log("RESOLVED:::",r(i)),r(i)),i=>{n(i)})})}update_profile(t){return new Promise((r,n)=>{this.http.post(this.update_profile_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}save_trans(t){return new Promise((r,n)=>{this.http.post(this.save_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}save_seller_trans(t){return new Promise((r,n)=>{this.http.post(this.save_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_trans(t){return new Promise((r,n)=>{this.http.post(this.retrieve_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_trans_pending(t){return new Promise((r,n)=>{this.http.post(this.retrieve_trans_pending_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_trans_joined(t){return new Promise((r,n)=>{this.http.post(this.retrieve_trans_joined_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_trans_pending_email(t){return new Promise((r,n)=>{this.http.post(this.retrieve_trans_pending_email_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_trans_with_transId(t){return new Promise((r,n)=>{this.http.post(this.retrieve_trans_id_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}join_seller(t){return new Promise((r,n)=>{this.http.post(this.join_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}join_buyer(t){return new Promise((r,n)=>{this.http.post(this.join_buyer_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_join_seller(t){return new Promise((r,n)=>{this.http.post(this.retrieve_join_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_join_buyer(t){return new Promise((r,n)=>{this.http.post(this.retrieve_join_buyer_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_seller_trans(t){return new Promise((r,n)=>{this.http.post(this.retrieve_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",r(e)),r(e)),e=>{n(e)})})}retrieve_recipient(){return new Promise((t,r)=>{this.http.get(this.recipient_url).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{r(n)})})}openPort(){return new Promise((t,r)=>{this.http.get(this.openPort_url).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{r(n)})})}openSingleBox(t){return new Promise((r,n)=>{this.http.post(this.open_single_box_url,t).subscribe(i=>(console.log("RESOLVED:::",r(i)),r(i)),i=>{n(i)})})}openBox(t){return new Promise((r,n)=>{this.http.post(this.open_box_url,t).subscribe(i=>(console.log("RESOLVED:::",r(i)),r(i)),i=>{n(i)})})}sendSms(t){return new Promise((r,n)=>{this.http.post(this.sms_url,t).subscribe(i=>(console.log("RESOLVED:::",r(i)),r(i)),i=>{n(i)})})}}return _.\u0275fac=function(t){return new(t||_)(m.LFG(u.eN))},_.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},1693:(f,d,l)=>{l.r(d),l.d(d,{BuyerDetailsPageModule:()=>P});var m=l(6895),u=l(433),a=l(4556),_=l(1407),h=l(7582),t=l(8256),r=l(128);const i=[{path:"",component:(()=>{class o{constructor(c,s,g,b,y){this.alertCtrl=c,this.router=s,this._form=g,this.api=b,this.loadingCtrl=y,this.results_body=[],this.buyerForm=this._form.group({buyer_name:["",u.kI.compose([u.kI.required])],buyer_email:["",u.kI.compose([u.kI.required])],buyer_phone_number:["",u.kI.compose([u.kI.required])],fees:["10"],paid_by:["",u.kI.compose([u.kI.required])]})}ngOnInit(){this.person_email=localStorage.getItem("email"),this.person_name=localStorage.getItem("person_name"),this.item_name=localStorage.getItem("item_name"),this.item_quantity=localStorage.getItem("item_quantity"),this.amount=localStorage.getItem("amount"),this.description=localStorage.getItem("description"),this.total=this.item_quantity*this.amount,this.user_id=localStorage.getItem("user_id"),console.log("Total "+this.total),console.log("user_id "+this.user_id)}confirm(){return(0,h.mG)(this,void 0,void 0,function*(){this.params={person_name:this.person_name,person_email:this.person_email,amount:this.amount,fees:"0",item_name:this.item_name,item_description:this.description,item_quantity:this.item_quantity,user_id:this.user_id,status:"pending"},console.log("Trans Params:",this.params),this.api.save_trans(this.params).then(s=>{this.loadingCtrl.dismiss().then(()=>(0,h.mG)(this,void 0,void 0,function*(){console.log("results:::",JSON.parse(JSON.stringify(s)));var g=JSON.parse(JSON.stringify(s));console.log("results:::",g.resp_code),"000"==g.resp_code?(this.router.navigateByUrl("/box"),(yield this.alertCtrl.create({message:"Transaction Successfully Created",buttons:[{text:"Cancel",role:"cancel"}]})).present()):(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))}).catch(s=>(0,h.mG)(this,void 0,void 0,function*(){this.loadingCtrl.dismiss().then(()=>(0,h.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))})),(yield this.loadingCtrl.create()).present()})}cancle(){this.router.navigateByUrl("transaction")}}return o.\u0275fac=function(c){return new(c||o)(t.Y36(a.Br),t.Y36(_.F0),t.Y36(u.qu),t.Y36(r.Q),t.Y36(a.HT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-buyer-details"]],decls:52,vars:7,consts:[["slot","start"],["defaultHref",""],[1,"text-container"],[1,"headerFont"],[1,"subFonts"],[1,"warn"],[2,"line-height","2.2"],["size","6",1,"asshh"],["size","6",2,"color","#186a0a","font-weight","800"],[2,"border-width","1px"],[2,"color","red"],[1,"btn-positions"],[3,"click"],["color","primary-contrast",1,"whitee",3,"click"]],template:function(c,s){1&c&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA()()(),t.TgZ(4,"ion-content")(5,"div",2)(6,"h3",3),t._uU(7," Transaction Preview "),t.qZA(),t.TgZ(8,"p",4),t._uU(9,"Carefully review the synerdoc Transaction details below."),t.qZA()(),t.TgZ(10,"div",5)(11,"ion-row",6)(12,"ion-col",7),t._uU(13," Transaction Summary "),t.qZA(),t._UZ(14,"ion-col",8),t.TgZ(15,"ion-col",7),t._uU(16," Person's Name: "),t.qZA(),t.TgZ(17,"ion-col",8),t._uU(18),t.qZA(),t.TgZ(19,"ion-col",7),t._uU(20," Person's Email: "),t.qZA(),t.TgZ(21,"ion-col",8),t._uU(22),t.qZA(),t.TgZ(23,"ion-col",7),t._uU(24," Item name: "),t.qZA(),t.TgZ(25,"ion-col",8),t._uU(26),t.qZA(),t.TgZ(27,"ion-col",7),t._uU(28," Item description: "),t.qZA(),t.TgZ(29,"ion-col",8),t._uU(30),t.qZA(),t.TgZ(31,"ion-col",7),t._uU(32," Amount: "),t.qZA(),t.TgZ(33,"ion-col",8),t._uU(34),t.qZA(),t.TgZ(35,"ion-col",7),t._uU(36," Item quantity: "),t.qZA(),t.TgZ(37,"ion-col",8),t._uU(38),t.qZA()(),t._UZ(39,"hr",9),t.TgZ(40,"ion-row")(41,"ion-col",7),t._uU(42," Total: "),t.qZA(),t.TgZ(43,"ion-col",7)(44,"b",10),t._uU(45),t.qZA()()(),t._UZ(46,"br"),t.qZA(),t.TgZ(47,"div",11)(48,"ion-button",12),t.NdJ("click",function(){return s.confirm()}),t._uU(49,"Confirm"),t.qZA(),t.TgZ(50,"ion-button",13),t.NdJ("click",function(){return s.cancle()}),t._uU(51," Cancel Transaction"),t.qZA()()()),2&c&&(t.xp6(18),t.hij(" ",s.person_name," "),t.xp6(4),t.hij(" ",s.person_email," "),t.xp6(4),t.hij(" ",s.item_name," "),t.xp6(4),t.hij(" ",s.description," "),t.xp6(4),t.hij(" GHS",s.amount," "),t.xp6(4),t.hij(" ",s.item_quantity," "),t.xp6(7),t.hij("GHS ",s.total,""))},dependencies:[a.oU,a.YG,a.Sm,a.wI,a.W2,a.Gu,a.Nd,a.sr,a.cs],styles:[".text-container[_ngcontent-%COMP%]{margin-top:0%;margin-bottom:10%}.headerFont[_ngcontent-%COMP%]{text-align:left;font-size:25px;padding-left:10px;color:#224d0e}.subFonts[_ngcontent-%COMP%]{text-align:left;padding-left:10px;color:#576b74;padding-right:5%}.headerFontc[_ngcontent-%COMP%]{text-align:left;font-size:25px;padding-left:10px;color:#0c292a;font-family:Clash}.subFontsc[_ngcontent-%COMP%]{color:#576b74}.itemized[_ngcontent-%COMP%]{border-radius:11px!important;height:90px;border-width:1px;border-style:solid;border-color:#b3c6c6;width:90%;margin-left:4%;padding:6px}.moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%;margin-top:10%}.moveCenter2[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:150px}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%;margin-right:8%}.txtLeft[_ngcontent-%COMP%]{margin-left:6%;color:#1d4355;font-size:20px;margin-bottom:0%;margin-top:10%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-item[_ngcontent-%COMP%]{margin-left:5%;width:90%}ion-card-header[_ngcontent-%COMP%]{--background: #1D4355;--color: rgb(255, 255, 255)}ion-card-title[_ngcontent-%COMP%], ion-card-subtitle[_ngcontent-%COMP%]{--color: rgb(255, 255, 255)}ion-footer[_ngcontent-%COMP%]{background:white;border-color:#fff}ion-card-header[_ngcontent-%COMP%] + .card-content-md[_ngcontent-%COMP%]{padding-top:24px}ion-radio[_ngcontent-%COMP%]::part(container){width:30px;height:30px;border-radius:8px;border:2px solid #ddd}ion-radio[_ngcontent-%COMP%]::part(mark){background:none;transition:none;transform:none;border-radius:0}ion-radio.radio-checked[_ngcontent-%COMP%]::part(container){background:#006AFF;border-color:transparent}ion-radio.radio-checked[_ngcontent-%COMP%]::part(mark){width:6px;height:10px;border-width:0px 2px 2px 0px;border-style:solid;border-color:#fff;transform:rotate(45deg)}.container[_ngcontent-%COMP%]{display:flex;align-items:center}img[_ngcontent-%COMP%]{width:20%;height:20%;margin-right:10px}.text-content[_ngcontent-%COMP%]{flex-grow:1;padding:4px}h4[_ngcontent-%COMP%]{margin:0 0 5px}p[_ngcontent-%COMP%]{margin:0}ion-button[_ngcontent-%COMP%]{--background: #006AFF;--background-hover: #006AFF;--background-activated: #006AFF;--background-focused: #006AFF;--color: rgb(255, 255, 255);--border-radius: 30px;--border-style: solid;--border-width: 1px;--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.whitee[_ngcontent-%COMP%]{--background: #ffffff;--background-hover: #ffffff;--background-activated: #ffffff;--background-focused: #ffffff;--color: #006AFF;--border-radius: 30px;--border-style: solid;--border-width: 1px;border-color:#bc1c1c;--ripple-color: #bc1c1c;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.btn-positions[_ngcontent-%COMP%]{padding-bottom:10%}.pdpd[_ngcontent-%COMP%]{padding-left:5%;display:flex;align-items:center}.warn[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%;color:#006aff;background-color:beige}.infoo[_ngcontent-%COMP%]{background-color:#eef9fa;color:#808c91;padding:6%;width:90%;margin-left:5%;font-size:12px}"]}),o})()}];let e=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(i),_.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,u.u5,u.UX,a.Pc,e]}),o})()}}]);