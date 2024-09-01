"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4223],{128:(f,g,l)=>{l.d(g,{Q:()=>c});var d=l(8256),m=l(529);let c=(()=>{class u{constructor(t){this.http=t,this.base_url="https://escrow.devdexsoftware.com",this.login_url=this.base_url+"/login",this.sendEmail=this.base_url+"/send_email",this.signup_url=this.base_url+"/sign_up",this.update_profile_url=this.base_url+"/update_profile",this.recipient_url=this.base_url+"/retrieve_recipients",this.openPort_url=this.base_url+"/open_serialPort",this.open_single_box_url=this.base_url+"/open_single_box",this.sms_url=this.base_url+"/sendMsg",this.save_trans_url=this.base_url+"/save_transactions",this.save_seller_trans_url=this.base_url+"/save_seller_transactions",this.retrieve_trans_url=this.base_url+"/retrieve_user_transactions",this.retrieve_trans_pending_url=this.base_url+"/retrieve_transactions_pending",this.retrieve_trans_joined_url=this.base_url+"/retrieve_transactions_joined",this.retrieve_trans_pending_email_url=this.base_url+"/retrieve_transactions_pending_with_person_email",this.retrieve_seller_trans_url=this.base_url+"/retrieve_seller_transactions",this.retrieve_trans_id_url=this.base_url+"/retrieve_transactions_with_transId",this.join_seller_trans_url=this.base_url+"/join_seller_transactions",this.join_buyer_trans_url=this.base_url+"/join_buyer_transactions",this.retrieve_join_seller_trans_url=this.base_url+"/retrieve_join_seller_transactions",this.retrieve_join_buyer_trans_url=this.base_url+"/retrieve_join_buyer_transactions",this.open_box_url=this.base_url+"/open_locker"}login(t){return new Promise((n,r)=>{this.http.post(this.login_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}send_Email(t){return new Promise((n,r)=>{this.http.post(this.sendEmail,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}signup(t){return new Promise((n,r)=>{this.http.post(this.signup_url,t).subscribe(i=>(console.log("RESOLVED:::",n(i)),n(i)),i=>{r(i)})})}update_profile(t){return new Promise((n,r)=>{this.http.post(this.update_profile_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}save_trans(t){return new Promise((n,r)=>{this.http.post(this.save_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}save_seller_trans(t){return new Promise((n,r)=>{this.http.post(this.save_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_trans(t){return new Promise((n,r)=>{this.http.post(this.retrieve_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_trans_pending(t){return new Promise((n,r)=>{this.http.post(this.retrieve_trans_pending_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_trans_joined(t){return new Promise((n,r)=>{this.http.post(this.retrieve_trans_joined_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_trans_pending_email(t){return new Promise((n,r)=>{this.http.post(this.retrieve_trans_pending_email_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_trans_with_transId(t){return new Promise((n,r)=>{this.http.post(this.retrieve_trans_id_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}join_seller(t){return new Promise((n,r)=>{this.http.post(this.join_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}join_buyer(t){return new Promise((n,r)=>{this.http.post(this.join_buyer_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_join_seller(t){return new Promise((n,r)=>{this.http.post(this.retrieve_join_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_join_buyer(t){return new Promise((n,r)=>{this.http.post(this.retrieve_join_buyer_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_seller_trans(t){return new Promise((n,r)=>{this.http.post(this.retrieve_seller_trans_url,t).subscribe(e=>(console.log("RESOLVED:::",n(e)),n(e)),e=>{r(e)})})}retrieve_recipient(){return new Promise((t,n)=>{this.http.get(this.recipient_url).subscribe(r=>(console.log("RESOLVED:::",t(r)),t(r)),r=>{n(r)})})}openPort(){return new Promise((t,n)=>{this.http.get(this.openPort_url).subscribe(r=>(console.log("RESOLVED:::",t(r)),t(r)),r=>{n(r)})})}openSingleBox(t){return new Promise((n,r)=>{this.http.post(this.open_single_box_url,t).subscribe(i=>(console.log("RESOLVED:::",n(i)),n(i)),i=>{r(i)})})}openBox(t){return new Promise((n,r)=>{this.http.post(this.open_box_url,t).subscribe(i=>(console.log("RESOLVED:::",n(i)),n(i)),i=>{r(i)})})}sendSms(t){return new Promise((n,r)=>{this.http.post(this.sms_url,t).subscribe(i=>(console.log("RESOLVED:::",n(i)),n(i)),i=>{r(i)})})}}return u.\u0275fac=function(t){return new(t||u)(d.LFG(m.eN))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},4223:(f,g,l)=>{l.r(g),l.d(g,{RecipientPageModule:()=>P});var d=l(6895),m=l(433),c=l(4556),u=l(1407),p=l(7582),t=l(8256),n=l(128),r=l(7793);const e=[{path:"",component:(()=>{class o{constructor(s,a,_,b,v){this.alertCtrl=s,this.router=a,this._form=_,this.api=b,this.loadingCtrl=v,this.ammount=0,this.funds=0,this.public_key="pk_live_caabde47a485606dc025e27220d3c03548aa40f2",this.channels=["bank","card","ussd","qr","mobile_money"],this.random_id=`ref-${Math.ceil(1e14*Math.random())}`}ngOnInit(){console.log("random_id",this.random_id),this.person_name=localStorage.getItem("person_name"),this.person_email=localStorage.getItem("email"),this.item_quantity=localStorage.getItem("item_quantity"),this.amount=localStorage.getItem("amount"),this.total=this.item_quantity*this.amount}payment(){this.router.navigateByUrl("/app/tabs/locker-type")}paymentInit(){return(0,p.mG)(this,void 0,void 0,function*(){console.log("Payment initialized")})}paymentDone(s){return(0,p.mG)(this,void 0,void 0,function*(){console.log("RESPNSE AFTER PAYMENT"+JSON.stringify(s)),"success"==s.status&&this.router.navigateByUrl("/app/tabs/locker-type")})}paymentCancel(){return(0,p.mG)(this,void 0,void 0,function*(){this.router.navigateByUrl("/app/tabs/locker-type")})}retrieve_reci(){return(0,p.mG)(this,void 0,void 0,function*(){this.api.retrieve_recipient().then(a=>{this.loadingCtrl.dismiss().then(()=>(0,p.mG)(this,void 0,void 0,function*(){console.log("results:::",JSON.parse(JSON.stringify(a)));var _=JSON.parse(JSON.stringify(a));console.log("results:::",_.user_details),this.recipients=_.user_details}))}).catch(a=>(0,p.mG)(this,void 0,void 0,function*(){this.loadingCtrl.dismiss().then(()=>(0,p.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({message:"Something went wrong. Please try again",buttons:[{text:"Cancel",role:"cancel"}]})).present()}))})),(yield this.loadingCtrl.create()).present()})}home(){this.router.navigateByUrl("/app/tabs/locker-type")}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(c.Br),t.Y36(u.F0),t.Y36(m.qu),t.Y36(n.Q),t.Y36(c.HT))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-recipient"]],decls:20,vars:9,consts:[["slot","start"],["defaultHref",""],[1,"text-container"],[1,"headerFont"],[1,"emptyTrans"],["src","../assets/img/toPy.png",1,"moveCenter"],[1,"headerFontc"],[1,"subFontsc"],[1,"btn-positions"],[3,"key","email","amount","ref","channels","currency","close","callback"],["color","primary-contrast",1,"whitee",3,"click"]],template:function(s,a){1&s&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA()()(),t.TgZ(4,"ion-content")(5,"div",2)(6,"h3",3),t._uU(7,"Your synerdoc Buyer Transaction "),t.qZA()(),t.TgZ(8,"div",4),t._UZ(9,"img",5),t.qZA(),t.TgZ(10,"div",2)(11,"h3",6),t._uU(12,"Accepted "),t.qZA(),t.TgZ(13,"p",7),t._uU(14),t.qZA()(),t.TgZ(15,"div",8)(16,"angular4-paystack",9),t.NdJ("close",function(){return a.paymentCancel()})("callback",function(b){return a.paymentDone(b)}),t._uU(17,"Pay with Mobile Money/Card"),t.qZA(),t.TgZ(18,"ion-button",10),t.NdJ("click",function(){return a.home()}),t._uU(19," Go Home"),t.qZA()()()),2&s&&(t.xp6(14),t.hij("Yaay! Transaction has been sent to for ",a.person_name,". Please proceed to payment."),t.xp6(2),t.Tol("btn-primary2"),t.Q6J("key","pk_live_caabde47a485606dc025e27220d3c03548aa40f2")("email",a.person_email)("amount",100*a.total)("ref",a.random_id)("channels",a.channels)("currency","GHS"))},dependencies:[c.oU,c.YG,c.Sm,c.W2,c.Gu,c.sr,c.cs,r.W8],styles:[".text-container[_ngcontent-%COMP%]{margin-top:10%;margin-bottom:0%}.headerFont[_ngcontent-%COMP%]{text-align:left;font-size:25px;padding-left:10px;font-family:Clash;color:#006aff}.subFonts[_ngcontent-%COMP%]{text-align:left;padding-left:5%;color:#576b74}.headerFontc[_ngcontent-%COMP%]{text-align:center;font-size:25px;padding-left:10px;color:#3cb3b5}.subFontsc[_ngcontent-%COMP%]{text-align:center;padding-left:5%;color:#576b74;padding-right:5%}.btn-positions[_ngcontent-%COMP%]{padding-bottom:10%}.emptyTrans[_ngcontent-%COMP%]{display:flex;background:rgba(237,246,246,.4196078431);align-items:center;width:100%;padding:0;border-radius:50%;margin-left:0%;margin-top:8%}ion-button[_ngcontent-%COMP%]{--background: #006AFF;--background-hover: #006AFF;--background-activated: #006AFF;--background-focused: #006AFF;--color: rgb(255, 255, 255);--border-radius: 30px;--border-style: solid;--border-width: 1px;--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}button.btn-primary2[_ngcontent-%COMP%], .btn-primary2[_ngcontent-%COMP%]{background:#006AFF;color:#fff;border-radius:30px;border-style:solid;border-width:1px;padding-top:23px;padding-bottom:23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}button[_ngcontent-%COMP%]{padding:23px 0;border:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;cursor:pointer;background:#006AFF;color:#fff;border-radius:30px;border-style:solid;border-width:1px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.whitee[_ngcontent-%COMP%]{--background: #ffffff;--background-hover: #ffffff;--background-activated: #ffffff;--background-focused: #ffffff;--color: #006AFF;--border-radius: 30px;--border-style: solid;--border-width: 1px;--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%;margin-top:22%}.moveCenter2[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:150px}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%}.txtLeft[_ngcontent-%COMP%]{margin-left:6%;color:#1d4355;font-size:20px;margin-bottom:0%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-card-header[_ngcontent-%COMP%]{--background: #1D4355;--color: rgb(255, 255, 255)}ion-card-title[_ngcontent-%COMP%], ion-card-subtitle[_ngcontent-%COMP%]{--color: rgb(255, 255, 255);font-size:19px}ion-footer[_ngcontent-%COMP%]{background:white;border-color:#fff}ion-card-header[_ngcontent-%COMP%] + .card-content-md[_ngcontent-%COMP%], .card-content-ios[_ngcontent-%COMP%]{padding-top:24px}"]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(e),u.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,m.u5,c.Pc,r.QQ,y]}),o})()}}]);