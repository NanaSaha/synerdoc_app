"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1775],{128:(b,g,u)=>{u.d(g,{Q:()=>a});var m=u(8256),s=u(529);let a=(()=>{class _{constructor(n){this.http=n,this.base_url="https://escrow.devdexsoftware.com",this.login_url=this.base_url+"/login",this.sendEmail=this.base_url+"/send_email",this.signup_url=this.base_url+"/sign_up",this.update_profile_url=this.base_url+"/update_profile",this.recipient_url=this.base_url+"/retrieve_recipients",this.openPort_url=this.base_url+"/open_serialPort",this.open_single_box_url=this.base_url+"/open_single_box",this.sms_url=this.base_url+"/sendMsg",this.save_trans_url=this.base_url+"/save_transactions",this.save_seller_trans_url=this.base_url+"/save_seller_transactions",this.retrieve_trans_url=this.base_url+"/retrieve_user_transactions",this.retrieve_trans_pending_url=this.base_url+"/retrieve_transactions_pending",this.retrieve_trans_joined_url=this.base_url+"/retrieve_transactions_joined",this.retrieve_trans_pending_email_url=this.base_url+"/retrieve_transactions_pending_with_person_email",this.retrieve_seller_trans_url=this.base_url+"/retrieve_seller_transactions",this.retrieve_trans_id_url=this.base_url+"/retrieve_transactions_with_transId",this.join_seller_trans_url=this.base_url+"/join_seller_transactions",this.join_buyer_trans_url=this.base_url+"/join_buyer_transactions",this.retrieve_join_seller_trans_url=this.base_url+"/retrieve_join_seller_transactions",this.retrieve_join_buyer_trans_url=this.base_url+"/retrieve_join_buyer_transactions",this.open_box_url=this.base_url+"/open_locker"}login(n){return new Promise((e,o)=>{this.http.post(this.login_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}send_Email(n){return new Promise((e,o)=>{this.http.post(this.sendEmail,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}signup(n){return new Promise((e,o)=>{this.http.post(this.signup_url,n).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{o(i)})})}update_profile(n){return new Promise((e,o)=>{this.http.post(this.update_profile_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}save_trans(n){return new Promise((e,o)=>{this.http.post(this.save_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}save_seller_trans(n){return new Promise((e,o)=>{this.http.post(this.save_seller_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_trans(n){return new Promise((e,o)=>{this.http.post(this.retrieve_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_trans_pending(n){return new Promise((e,o)=>{this.http.post(this.retrieve_trans_pending_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_trans_joined(n){return new Promise((e,o)=>{this.http.post(this.retrieve_trans_joined_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_trans_pending_email(n){return new Promise((e,o)=>{this.http.post(this.retrieve_trans_pending_email_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_trans_with_transId(n){return new Promise((e,o)=>{this.http.post(this.retrieve_trans_id_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}join_seller(n){return new Promise((e,o)=>{this.http.post(this.join_seller_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}join_buyer(n){return new Promise((e,o)=>{this.http.post(this.join_buyer_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_join_seller(n){return new Promise((e,o)=>{this.http.post(this.retrieve_join_seller_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_join_buyer(n){return new Promise((e,o)=>{this.http.post(this.retrieve_join_buyer_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_seller_trans(n){return new Promise((e,o)=>{this.http.post(this.retrieve_seller_trans_url,n).subscribe(t=>(console.log("RESOLVED:::",e(t)),e(t)),t=>{o(t)})})}retrieve_recipient(){return new Promise((n,e)=>{this.http.get(this.recipient_url).subscribe(o=>(console.log("RESOLVED:::",n(o)),n(o)),o=>{e(o)})})}openPort(){return new Promise((n,e)=>{this.http.get(this.openPort_url).subscribe(o=>(console.log("RESOLVED:::",n(o)),n(o)),o=>{e(o)})})}openSingleBox(n){return new Promise((e,o)=>{this.http.post(this.open_single_box_url,n).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{o(i)})})}openBox(n){return new Promise((e,o)=>{this.http.post(this.open_box_url,n).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{o(i)})})}sendSms(n){return new Promise((e,o)=>{this.http.post(this.sms_url,n).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{o(i)})})}}return _.\u0275fac=function(n){return new(n||_)(m.LFG(s.eN))},_.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},1775:(b,g,u)=>{u.r(g),u.d(g,{TransactionPageModule:()=>t});var m=u(6895),s=u(433),a=u(4556),_=u(1407),r=u(8256),n=u(128);const o=[{path:"",component:(()=>{class l{constructor(c,p,d,f,P){this.alertCtrl=c,this.router=p,this._form=d,this.api=f,this.loadingCtrl=P,this.results_body=[],this.role=localStorage.getItem("role"),console.log("Role::",this.role),this.signupForm=this._form.group({person_name:["",s.kI.compose([s.kI.required])],person_email:["",s.kI.compose([s.kI.required])],item_name:["",s.kI.compose([s.kI.required])],item_quantity:["",s.kI.compose([s.kI.required])],amount:["",s.kI.compose([s.kI.required])],description:["",s.kI.compose([s.kI.required])]})}ngOnInit(){}fromTrans(){this.router.navigateByUrl("/box")}seller(){this.loginVal=JSON.stringify(this.signupForm.value),this.jsonBody=JSON.parse(this.loginVal),console.log("THIS IS THE login raw values VALUES"+this.loginVal),console.log("JOSN BODY"+this.jsonBody),console.log("JOSN BODY"+this.jsonBody.person_name),localStorage.setItem("trans_values",this.jsonBody),localStorage.setItem("person_name",this.jsonBody.person_name),localStorage.setItem("email",this.jsonBody.person_email),localStorage.setItem("item_name",this.jsonBody.item_name),localStorage.setItem("item_quantity",this.jsonBody.item_quantity),localStorage.setItem("amount",this.jsonBody.amount),localStorage.setItem("description",this.jsonBody.description),this.router.navigateByUrl("buyer-details")}}return l.\u0275fac=function(c){return new(c||l)(r.Y36(a.Br),r.Y36(_.F0),r.Y36(s.qu),r.Y36(n.Q),r.Y36(a.HT))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-transaction"]],decls:39,vars:2,consts:[["slot","start"],["defaultHref",""],[1,"text-container"],[1,"headerFont"],[1,"subFonts"],[3,"formGroup"],["fill","outline",1,"moveCenter"],["placeholder","Enter Item Name","formControlName","item_name"],["type","number","placeholder","Enter Item Quantity","formControlName","item_quantity"],["type","number","formControlName","amount","placeholder","Enter Item Amount","labelPlacement","floating","fill","outline"],["formControlName","description","placeholder","Enter Item Description","labelPlacement","floating","fill","outline"],[1,"warn",2,"border-width","1px"],[1,"warn"],["placeholder","Enter person's name","formControlName","person_name"],["placeholder","Enter person's email","formControlName","person_email"],[1,"btnsTxt"],[3,"disabled","click"],["slot","end","name","arrow-forward-outline"]],template:function(c,p){1&c&&(r.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),r._UZ(3,"ion-back-button",1),r.qZA()()(),r.TgZ(4,"ion-content")(5,"div",2)(6,"h3",3),r._uU(7,"synerdoc Transaction "),r.qZA(),r.TgZ(8,"p",4),r._uU(9,"Fill the form below to proceed. Provide clear comments on the terms of agreement for this transaction."),r.qZA()(),r.TgZ(10,"form",5)(11,"ion-item",6),r._UZ(12,"ion-input",7),r.qZA(),r._UZ(13,"br"),r.TgZ(14,"ion-item",6),r._UZ(15,"ion-input",8),r.qZA(),r._UZ(16,"br"),r.TgZ(17,"ion-item",6),r._UZ(18,"ion-input",9),r.qZA(),r._UZ(19,"br"),r.TgZ(20,"ion-item",6),r._UZ(21,"ion-textarea",10),r.qZA(),r._UZ(22,"br")(23,"hr",11),r.TgZ(24,"h5",12),r._uU(25,"Who do you want to do business with?"),r.qZA(),r.TgZ(26,"ion-item",6),r._UZ(27,"ion-input",13),r.qZA(),r._UZ(28,"br"),r.TgZ(29,"ion-item",6),r._UZ(30,"ion-input",14),r.qZA(),r.TgZ(31,"h5",12),r._uU(32,"An email notification will be sent to this person to join the transaction to confirm transaction"),r.qZA(),r._UZ(33,"br")(34,"br"),r.TgZ(35,"div",15)(36,"ion-button",16),r.NdJ("click",function(){return p.seller()}),r._UZ(37,"ion-icon",17),r._uU(38," Proceed"),r.qZA()()()()),2&c&&(r.xp6(10),r.Q6J("formGroup",p.signupForm),r.xp6(26),r.Q6J("disabled",!p.signupForm.valid))},dependencies:[s._Y,s.JJ,s.JL,s.sg,s.u,a.oU,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.g2,a.sr,a.as,a.j9,a.cs],styles:["[_nghost-%COMP%]{--border-radius: 4px !important}.text-container[_ngcontent-%COMP%]{margin-top:0%;margin-bottom:0%}.headerFont[_ngcontent-%COMP%]{text-align:left;font-size:25px;padding-left:10px;color:#006aff;font-family:Clash}.subFonts[_ngcontent-%COMP%]{text-align:left;padding-left:10px;color:#576b74}.warn[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%;color:#006aff}.imgMove[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}ion-button[_ngcontent-%COMP%]{--background: #006AFF;--background-hover: #006AFF;--background-activated: #006AFF;--background-focused: #006AFF;--color: rgb(255, 255, 255);--border-radius: 30px;--border-style: solid;--border-width: 1px;--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%}.txtLeft[_ngcontent-%COMP%]{margin-left:10%;color:#1d4355;font-size:30px;margin-bottom:10%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-item[_ngcontent-%COMP%]   #lng[_ngcontent-%COMP%]{height:72px!important}"]}),l})()}];let i=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[_.Bz.forChild(o),_.Bz]}),l})(),t=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[m.ez,s.u5,s.UX,a.Pc,i]}),l})()}}]);