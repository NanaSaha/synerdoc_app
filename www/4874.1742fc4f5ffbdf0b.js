"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4874],{128:(m,d,a)=>{a.d(d,{Q:()=>s});var _=a(8256),b=a(529);let s=(()=>{class g{constructor(e){this.http=e,this.base_url="https://escrow.devdexsoftware.com",this.login_url=this.base_url+"/login",this.sendEmail=this.base_url+"/send_email",this.signup_url=this.base_url+"/sign_up",this.update_profile_url=this.base_url+"/update_profile",this.recipient_url=this.base_url+"/retrieve_recipients",this.openPort_url=this.base_url+"/open_serialPort",this.open_single_box_url=this.base_url+"/open_single_box",this.sms_url=this.base_url+"/sendMsg",this.save_trans_url=this.base_url+"/save_transactions",this.save_seller_trans_url=this.base_url+"/save_seller_transactions",this.retrieve_trans_url=this.base_url+"/retrieve_user_transactions",this.retrieve_trans_pending_url=this.base_url+"/retrieve_transactions_pending",this.retrieve_trans_joined_url=this.base_url+"/retrieve_transactions_joined",this.retrieve_trans_pending_email_url=this.base_url+"/retrieve_transactions_pending_with_person_email",this.retrieve_seller_trans_url=this.base_url+"/retrieve_seller_transactions",this.retrieve_trans_id_url=this.base_url+"/retrieve_transactions_with_transId",this.join_seller_trans_url=this.base_url+"/join_seller_transactions",this.join_buyer_trans_url=this.base_url+"/join_buyer_transactions",this.retrieve_join_seller_trans_url=this.base_url+"/retrieve_join_seller_transactions",this.retrieve_join_buyer_trans_url=this.base_url+"/retrieve_join_buyer_transactions",this.open_box_url=this.base_url+"/open_locker"}login(e){return new Promise((t,o)=>{this.http.post(this.login_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}send_Email(e){return new Promise((t,o)=>{this.http.post(this.sendEmail,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}signup(e){return new Promise((t,o)=>{this.http.post(this.signup_url,e).subscribe(i=>(console.log("RESOLVED:::",t(i)),t(i)),i=>{o(i)})})}update_profile(e){return new Promise((t,o)=>{this.http.post(this.update_profile_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}save_trans(e){return new Promise((t,o)=>{this.http.post(this.save_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}save_seller_trans(e){return new Promise((t,o)=>{this.http.post(this.save_seller_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_trans(e){return new Promise((t,o)=>{this.http.post(this.retrieve_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_trans_pending(e){return new Promise((t,o)=>{this.http.post(this.retrieve_trans_pending_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_trans_joined(e){return new Promise((t,o)=>{this.http.post(this.retrieve_trans_joined_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_trans_pending_email(e){return new Promise((t,o)=>{this.http.post(this.retrieve_trans_pending_email_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_trans_with_transId(e){return new Promise((t,o)=>{this.http.post(this.retrieve_trans_id_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}join_seller(e){return new Promise((t,o)=>{this.http.post(this.join_seller_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}join_buyer(e){return new Promise((t,o)=>{this.http.post(this.join_buyer_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_join_seller(e){return new Promise((t,o)=>{this.http.post(this.retrieve_join_seller_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_join_buyer(e){return new Promise((t,o)=>{this.http.post(this.retrieve_join_buyer_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_seller_trans(e){return new Promise((t,o)=>{this.http.post(this.retrieve_seller_trans_url,e).subscribe(n=>(console.log("RESOLVED:::",t(n)),t(n)),n=>{o(n)})})}retrieve_recipient(){return new Promise((e,t)=>{this.http.get(this.recipient_url).subscribe(o=>(console.log("RESOLVED:::",e(o)),e(o)),o=>{t(o)})})}openPort(){return new Promise((e,t)=>{this.http.get(this.openPort_url).subscribe(o=>(console.log("RESOLVED:::",e(o)),e(o)),o=>{t(o)})})}openSingleBox(e){return new Promise((t,o)=>{this.http.post(this.open_single_box_url,e).subscribe(i=>(console.log("RESOLVED:::",t(i)),t(i)),i=>{o(i)})})}openBox(e){return new Promise((t,o)=>{this.http.post(this.open_box_url,e).subscribe(i=>(console.log("RESOLVED:::",t(i)),t(i)),i=>{o(i)})})}sendSms(e){return new Promise((t,o)=>{this.http.post(this.sms_url,e).subscribe(i=>(console.log("RESOLVED:::",t(i)),t(i)),i=>{o(i)})})}}return g.\u0275fac=function(e){return new(e||g)(_.LFG(b.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4874:(m,d,a)=>{a.r(d),a.d(d,{BoxPageModule:()=>x});var _=a(6895),b=a(433),s=a(4556),g=a(1407),p=a(7582),e=a(9711),t=a(8256),o=a(128);const n=[{path:"",component:(()=>{class r{constructor(l,u,h,P,O){this.alertCtrl=l,this.router=u,this.api=h,this.loadingCtrl=P,this.modalCtrl=O}ngOnInit(){}recipient(l){console.log("box nume ",l),this.router.navigateByUrl("/recipient"),localStorage.setItem("lockerNum",l)}toPayment(){this.router.navigateByUrl("/recipient")}getDirection(){return(0,p.mG)(this,void 0,void 0,function*(){console.log("Modal"),yield(yield this.modalCtrl.create({component:e.r,breakpoints:[0,.3,.5,.8],initialBreakpoint:.6})).present()})}openPortt(){return(0,p.mG)(this,void 0,void 0,function*(){this.api.openPort().then(u=>{this.loadingCtrl.dismiss().then(()=>(0,p.mG)(this,void 0,void 0,function*(){console.log("results:::",JSON.parse(JSON.stringify(u)));var h=JSON.parse(JSON.stringify(u));console.log("results:::",h.resp_desc)}))}),(yield this.loadingCtrl.create()).present()})}}return r.\u0275fac=function(l){return new(l||r)(t.Y36(s.Br),t.Y36(g.F0),t.Y36(o.Q),t.Y36(s.HT),t.Y36(s.IN))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-box"]],decls:94,vars:0,consts:[["slot","start"],["defaultHref",""],[1,"main-sec"],[1,"noschedulecontainer"],[1,"schedulecontainer2"],["src","../assets/img/anita3.png"],[1,"text-content"],[1,"headFontTrans"],[1,"subFontTrans"],["size","6"],[1,"whitee_g",3,"click"],[1,"whitee_g"],[2,"padding-top","5%"],[2,"font-size","12px","padding-left","5%"],[1,"schedulecontainer"],[2,"font-size","10px"],[2,"font-size","10px","float","right"],[1,"statusSt"],["slot","start",2,"background-color","#EA580C"],["slot","start",2,"background-color","#FFE9DD","color","rgb(36, 36, 36)"],[2,"padding-top","10%"],["src","../assets/img/anita.png"],["src","../assets/img/anita2.png"]],template:function(l,u){1&l&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t._uU(4," Patient Details "),t.qZA()(),t.TgZ(5,"ion-content")(6,"div",2)(7,"div",3)(8,"div",4),t._UZ(9,"img",5),t.TgZ(10,"div",6)(11,"h4",7),t._uU(12,"Kofi Peprah"),t.qZA(),t.TgZ(13,"p",8),t._uU(14,"Dzorwulu Airport Area"),t.qZA()()()(),t.TgZ(15,"ion-row")(16,"ion-button"),t._uU(17," End Driving"),t.qZA(),t.TgZ(18,"ion-col",9)(19,"ion-button",10),t.NdJ("click",function(){return u.getDirection()}),t._uU(20," Get Direction"),t.qZA()(),t.TgZ(21,"ion-col",9)(22,"ion-button",11),t._uU(23," Service Note"),t.qZA()()(),t.TgZ(24,"ion-row",12)(25,"ion-col",9)(26,"h4",13),t._uU(27,"Latest Service"),t.qZA()()(),t.TgZ(28,"div",14)(29,"ion-row",12)(30,"ion-col",9)(31,"h4",15),t._uU(32,"25 Sept 24"),t.qZA()(),t.TgZ(33,"ion-col",9)(34,"h4",16),t._uU(35,"4:34pm"),t.qZA()()(),t.TgZ(36,"div",4)(37,"div",6)(38,"h4",7),t._uU(39,"SN - Skilled Nurse"),t.qZA()()(),t.TgZ(40,"div",17),t._uU(41," Status "),t.TgZ(42,"ion-badge",18),t._uU(43,"Verified"),t.qZA(),t.TgZ(44,"ion-badge",18),t._uU(45,"Approved"),t.qZA(),t.TgZ(46,"ion-badge",19),t._uU(47,"Unverified"),t.qZA(),t.TgZ(48,"ion-badge",19),t._uU(49,"Pending"),t.qZA()()(),t.TgZ(50,"ion-row",20)(51,"ion-col",9)(52,"h4",13),t._uU(53,"Sept 2024"),t.qZA()(),t._UZ(54,"ion-col",9),t.qZA(),t.TgZ(55,"div",14)(56,"h4",15),t._uU(57,"25 Sept 24"),t.qZA(),t.TgZ(58,"div",4),t._UZ(59,"img",21),t.TgZ(60,"div",6)(61,"h4",7),t._uU(62,"Anita Shades"),t.qZA(),t.TgZ(63,"p",8),t._uU(64,"1111 South Long Ave Hillside NJ 07205"),t.qZA()(),t.TgZ(65,"p",7)(66,"ion-badge",18),t._uU(67,"HHA"),t.qZA()()()(),t.TgZ(68,"div",14)(69,"h4",15),t._uU(70,"16 Sept 24"),t.qZA(),t.TgZ(71,"div",4),t._UZ(72,"img",22),t.TgZ(73,"div",6)(74,"h4",7),t._uU(75,"Michael Apalolo"),t.qZA(),t.TgZ(76,"p",8),t._uU(77,"Dzorwulu Airport Area"),t.qZA()(),t.TgZ(78,"p",7)(79,"ion-badge",18),t._uU(80,"SN"),t.qZA()()()(),t.TgZ(81,"div",14)(82,"h4",15),t._uU(83,"16 Sept 24"),t.qZA(),t.TgZ(84,"div",4),t._UZ(85,"img",5),t.TgZ(86,"div",6)(87,"h4",7),t._uU(88,"Kofi Peprah"),t.qZA(),t.TgZ(89,"p",8),t._uU(90,"Dzorwulu Airport Area"),t.qZA()(),t.TgZ(91,"p",7)(92,"ion-badge",18),t._uU(93,"PA"),t.qZA()()()()()())},dependencies:[s.oU,s.yp,s.YG,s.Sm,s.wI,s.W2,s.Gu,s.Nd,s.sr,s.cs],styles:[".moveCenter[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:30%}.schedulecontainer[_ngcontent-%COMP%]{border-radius:15px;align-items:flex-start;padding:18px 17px 4px 8px;margin:13px;background:white}.noschedulecontainer[_ngcontent-%COMP%]{align-items:flex-start;padding:18px 17px 4px 8px;margin:13px}.schedulecontainer2[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.main-sec[_ngcontent-%COMP%]{background-color:#f6f6f6;height:100%;position:relative}.transH1[_ngcontent-%COMP%]{color:#fff;padding:20%;font-weight:800;font-size:25px}.imgTxt[_ngcontent-%COMP%]{color:#fff}.imgTxblock[_ngcontent-%COMP%]{display:flex;align-items:center}.notblock[_ngcontent-%COMP%]{display:flex;background:white;align-items:center;width:78%;padding:4px;border-radius:50%}.engaged[_ngcontent-%COMP%]{padding-left:20px;line-height:0px}.engaged-right[_ngcontent-%COMP%]{line-height:0px}ion-slides[_ngcontent-%COMP%]{width:100%}.cardd[_ngcontent-%COMP%]{width:100%!important}.moveCenter2[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:150px}.btnsTxt[_ngcontent-%COMP%]{margin-top:10%}.txtLeft[_ngcontent-%COMP%]{float:left;margin-left:6%;color:#006aff;font-size:16px;margin-bottom:3%}#pushLeft[_ngcontent-%COMP%]{float:right;margin-right:10%;font-style:italic}ion-card-header[_ngcontent-%COMP%]{--background: #1D4355;--color: rgb(255, 255, 255)}ion-card-title[_ngcontent-%COMP%], ion-card-subtitle[_ngcontent-%COMP%]{--color: rgb(255, 255, 255);font-size:19px}ion-footer[_ngcontent-%COMP%]{background:white;border-color:#fff}ion-card-header[_ngcontent-%COMP%] + .card-content-md[_ngcontent-%COMP%], .card-content-ios[_ngcontent-%COMP%]{padding-top:24px}.top-left-image[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.bottom-right-image[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}.moveRow[_ngcontent-%COMP%]{padding-top:12%}.text-container[_ngcontent-%COMP%]{margin-top:15%;margin-bottom:0%;color:#fff}.headerFont[_ngcontent-%COMP%]{text-align:center;font-size:45px;padding-left:10px;font-family:Clash}.subFonts[_ngcontent-%COMP%]{text-align:center;padding-left:10px}.whitee_g[_ngcontent-%COMP%]{--background: #ffffff;--background-hover: #ffffff --background-activated: #ffffff --background-focused: #ffffff;--color: #000000;font-weight:900;--border-radius: 19px;--border-color: #ffffff;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:0;text-transform:none}.statusSt[_ngcontent-%COMP%]{padding-top:20%}.whitee_gg[_ngcontent-%COMP%]{--background: #E8EEEE;--background-hover: #E8EEEE --background-activated: #E8EEEE --background-focused: #E8EEEE;--color: #3A8D4F;--border-radius: 19px;--border-color: #E8EEEE;--padding-top: 23px;--padding-bottom: 23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:0;text-transform:none}button.payment[_ngcontent-%COMP%]{background:#E8EEEE;color:#3a8d4f;border-radius:19px;border-style:solid;border-color:#e8eeee;border-width:1px;padding-top:23px;padding-bottom:23px;width:90%;display:block;margin-left:auto;margin-right:auto;margin-top:0;text-transform:none}ion-button[_ngcontent-%COMP%]{--background: #006AFF;--background-hover: #006AFF;--background-focused: #006AFF;--color: rgb(255, 255, 255);--border-radius: 30px;--padding-top: 23px;--padding-bottom: 25px;width:90%;display:block;margin:1px auto 18px;text-transform:none}.emptyTrans[_ngcontent-%COMP%]{display:flex;background:rgba(237,246,246,.4196078431);align-items:center;width:50%;padding:0;border-radius:50%;margin-left:23%;margin-top:10%}.crossImg[_ngcontent-%COMP%]{padding:10% 30%}.container[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.subFontsc[_ngcontent-%COMP%]{color:#0c292a;font-size:20px;text-align:left;margin-bottom:8%}.subFontTrans[_ngcontent-%COMP%]{color:#576b74;font-size:12px;text-align:left;margin-bottom:8%}.scheduleBox[_ngcontent-%COMP%]{background-color:#fff;padding:5px;margin:12px;border-radius:12px}.headFontTrans[_ngcontent-%COMP%]{color:#0c292a;font-size:16px;text-align:left;font-weight:900}.headFont[_ngcontent-%COMP%]{text-align:left;color:#576b74;font-size:14px}.itemized[_ngcontent-%COMP%]{border-radius:11px!important;height:100%;border-width:1px;border-style:solid;border-color:#b3c6c6;width:90%;margin-left:4%;padding:0 0 10%;margin-top:5%}.itemizedHis[_ngcontent-%COMP%]{border-radius:11px!important;height:100%;border-width:1px;border-style:solid;border-color:#b3c6c6;width:90%;margin-left:4%;padding:21px;margin-top:5%}.left-text[_ngcontent-%COMP%]{color:#576b74;font-size:12px;margin-left:6%}.left-textHeader[_ngcontent-%COMP%]{color:#0c292a;font-size:16px;margin-left:6%}.right-text[_ngcontent-%COMP%]{margin-left:auto;margin-right:0;color:#006aff;font-size:12px;padding-right:8%;float:right}.right-Img[_ngcontent-%COMP%]{margin-top:19%;margin-left:auto;margin-right:0;color:#3cb3b5;font-size:16px;padding-right:8%;float:right}.forSlides[_ngcontent-%COMP%]{padding-bottom:5%}.text-content[_ngcontent-%COMP%]{flex-grow:1;padding:4px 4px 4px 13px}h4[_ngcontent-%COMP%]{margin:0 0 5px}p[_ngcontent-%COMP%]{margin:0}ion-progress-bar[_ngcontent-%COMP%]{--background: #CCDEDE;margin-top:9px;--progress-background: #3CB3B5;margin-left:5%;width:90%}.horizontal-layout[_ngcontent-%COMP%]{display:flex;justify-content:space-between}ion-modal#example-modal[_ngcontent-%COMP%]{--width: fit-content;--min-width: 250px;--height: fit-content;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal#example-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:20px 20px 10px}ion-modal#example-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:6px;width:48px;height:48px;padding:4px 0;color:#aaa}ion-modal#example-modal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-bottom:10px}"]}),r})()}];let f=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(n),g.Bz]}),r})(),x=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[_.ez,b.u5,s.Pc,f]}),r})()}}]);