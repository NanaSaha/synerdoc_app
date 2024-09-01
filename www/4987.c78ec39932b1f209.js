"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{128:(b,p,l)=>{l.d(p,{Q:()=>o});var h=l(8256),a=l(529);let o=(()=>{class u{constructor(t){this.http=t,this.base_url="https://escrow.devdexsoftware.com",this.login_url=this.base_url+"/login",this.sendEmail=this.base_url+"/send_email",this.signup_url=this.base_url+"/sign_up",this.update_profile_url=this.base_url+"/update_profile",this.recipient_url=this.base_url+"/retrieve_recipients",this.openPort_url=this.base_url+"/open_serialPort",this.open_single_box_url=this.base_url+"/open_single_box",this.sms_url=this.base_url+"/sendMsg",this.save_trans_url=this.base_url+"/save_transactions",this.save_seller_trans_url=this.base_url+"/save_seller_transactions",this.retrieve_trans_url=this.base_url+"/retrieve_user_transactions",this.retrieve_trans_pending_url=this.base_url+"/retrieve_transactions_pending",this.retrieve_trans_joined_url=this.base_url+"/retrieve_transactions_joined",this.retrieve_trans_pending_email_url=this.base_url+"/retrieve_transactions_pending_with_person_email",this.retrieve_seller_trans_url=this.base_url+"/retrieve_seller_transactions",this.retrieve_trans_id_url=this.base_url+"/retrieve_transactions_with_transId",this.join_seller_trans_url=this.base_url+"/join_seller_transactions",this.join_buyer_trans_url=this.base_url+"/join_buyer_transactions",this.retrieve_join_seller_trans_url=this.base_url+"/retrieve_join_seller_transactions",this.retrieve_join_buyer_trans_url=this.base_url+"/retrieve_join_buyer_transactions",this.open_box_url=this.base_url+"/open_locker"}login(t){return new Promise((e,n)=>{this.http.post(this.login_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}send_Email(t){return new Promise((e,n)=>{this.http.post(this.sendEmail,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}signup(t){return new Promise((e,n)=>{this.http.post(this.signup_url,t).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{n(i)})})}update_profile(t){return new Promise((e,n)=>{this.http.post(this.update_profile_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}save_trans(t){return new Promise((e,n)=>{this.http.post(this.save_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}save_seller_trans(t){return new Promise((e,n)=>{this.http.post(this.save_seller_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_trans(t){return new Promise((e,n)=>{this.http.post(this.retrieve_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_trans_pending(t){return new Promise((e,n)=>{this.http.post(this.retrieve_trans_pending_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_trans_joined(t){return new Promise((e,n)=>{this.http.post(this.retrieve_trans_joined_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_trans_pending_email(t){return new Promise((e,n)=>{this.http.post(this.retrieve_trans_pending_email_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_trans_with_transId(t){return new Promise((e,n)=>{this.http.post(this.retrieve_trans_id_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}join_seller(t){return new Promise((e,n)=>{this.http.post(this.join_seller_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}join_buyer(t){return new Promise((e,n)=>{this.http.post(this.join_buyer_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_join_seller(t){return new Promise((e,n)=>{this.http.post(this.retrieve_join_seller_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_join_buyer(t){return new Promise((e,n)=>{this.http.post(this.retrieve_join_buyer_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_seller_trans(t){return new Promise((e,n)=>{this.http.post(this.retrieve_seller_trans_url,t).subscribe(r=>(console.log("RESOLVED:::",e(r)),e(r)),r=>{n(r)})})}retrieve_recipient(){return new Promise((t,e)=>{this.http.get(this.recipient_url).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{e(n)})})}openPort(){return new Promise((t,e)=>{this.http.get(this.openPort_url).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{e(n)})})}openSingleBox(t){return new Promise((e,n)=>{this.http.post(this.open_single_box_url,t).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{n(i)})})}openBox(t){return new Promise((e,n)=>{this.http.post(this.open_box_url,t).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{n(i)})})}sendSms(t){return new Promise((e,n)=>{this.http.post(this.sms_url,t).subscribe(i=>(console.log("RESOLVED:::",e(i)),e(i)),i=>{n(i)})})}}return u.\u0275fac=function(t){return new(t||u)(h.LFG(a.eN))},u.\u0275prov=h.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},4987:(b,p,l)=>{l.r(p),l.d(p,{LoginPageModule:()=>P});var h=l(6895),a=l(433),o=l(4556),u=l(1407),d=l(7582),t=l(8256),e=l(128);const i=[{path:"",component:(()=>{class s{constructor(_,c,m,v,f){this.alertCtrl=_,this.router=c,this._form=m,this.api=v,this.loadingCtrl=f,this.results_body=[],this.loginForm=this._form.group({email:[""],password:[""]})}ngOnInit(){}login(){return(0,d.mG)(this,void 0,void 0,function*(){this.router.navigateByUrl("/app/tabs/locker-type")})}signup(){this.router.navigateByUrl("/signup")}}return s.\u0275fac=function(_){return new(_||s)(t.Y36(o.Br),t.Y36(u.F0),t.Y36(a.qu),t.Y36(e.Q),t.Y36(o.HT))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-login"]],decls:28,vars:1,consts:[["slot","start"],["defaultHref",""],["src","../assets/img/main.jpg",1,"moveRight"],[1,"text-container"],[1,"headerFont"],[1,"subFonts"],[2,"color","#F25022"],[3,"formGroup"],["fill","outline",1,"moveCenter"],["placeholder","Organization ID","formControlName","email"],["placeholder","Name","formControlName","email"],["type","password","placeholder","Password","formControlName","password"],[1,"btnsTxt"],[3,"click"],[2,"text-align","center","margin","20px 20px 10px 20px","color","#F25022"]],template:function(_,c){1&_&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"div"),t._UZ(5,"img",2),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",3)(8,"h3",4),t._uU(9,"Sign In "),t.qZA(),t.TgZ(10,"p",5),t._uU(11,"By using service you are agreeing to our "),t.TgZ(12,"span",6),t._uU(13,"Terms and Privacy Statement."),t.qZA()()(),t.TgZ(14,"form",7)(15,"ion-item",8),t._UZ(16,"ion-input",9),t.qZA(),t._UZ(17,"br"),t.TgZ(18,"ion-item",8),t._UZ(19,"ion-input",10),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"ion-item",8),t._UZ(22,"ion-input",11),t.qZA(),t.TgZ(23,"div",12)(24,"ion-button",13),t.NdJ("click",function(){return c.login()}),t._uU(25,"Login"),t.qZA()()(),t.TgZ(26,"p",14),t._uU(27,"Forgot Password? "),t.qZA()()),2&_&&(t.xp6(14),t.Q6J("formGroup",c.loginForm))},dependencies:[a._Y,a.JJ,a.JL,o.oU,o.YG,o.Sm,o.W2,o.Gu,o.pK,o.Ie,o.sr,o.j9,o.cs,a.sg,a.u],styles:["[_nghost-%COMP%]{--border-radius: 4px !important}.imgMove[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;padding-bottom:20%}.text-container[_ngcontent-%COMP%]{margin-top:0%;margin-bottom:5%}.moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:90%}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%}.txtLeft[_ngcontent-%COMP%]{margin-left:10%;color:#1d4355;font-size:30px;margin-bottom:10%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-button[_ngcontent-%COMP%]{--background: #006AFF;--background-hover: #006AFF;--background-activated: #006AFF;--background-focused: #006AFF;--color: rgb(255, 255, 255);--border-radius: 30px;--border-style: solid;--border-width: 1px;--ripple-color: #224d0e;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:22px;text-transform:none}.headerFont[_ngcontent-%COMP%]{text-align:center;font-size:32px;padding-left:10px;font-weight:900;line-height:39px;width:280px;padding-top:15%}.subFonts[_ngcontent-%COMP%]{text-align:center;padding-left:10%;padding-right:10%}.moveRight[_ngcontent-%COMP%]{margin-right:5%;margin-top:0%;padding-top:0%;float:right}"]}),s})()}];let r=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.Bz.forChild(i),u.Bz]}),s})(),P=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.ez,a.u5,o.Pc,a.UX,r]}),s})()}}]);