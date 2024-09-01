import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApisService } from "../apis.service"
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  loginVal: any;;
  jsonBody: any;
  results_body = [];
  constructor(public alertCtrl: AlertController, public router: Router, public _form: FormBuilder, public api: ApisService, public loadingCtrl: LoadingController) {

    this.loginForm = this._form.group(
      {
      
        userName: ["", Validators.compose([Validators.required])],
        password: ["", Validators.compose([Validators.required])]

      },

    );
  }

  ngOnInit() {
  }
  hashPassword(plainPassword: string): string {
    // Define the salt rounds (the number of times the password will be hashed)
    const saltRounds = 10;

    // Generate a salt
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password with the salt
    const hashedPassword = bcrypt.hashSync(plainPassword, salt);

    return hashedPassword;
  }



  async login() {



    this.loginVal = JSON.stringify(this.loginForm.value);
    this.jsonBody = JSON.parse(this.loginVal);


    // Parse the JSON string back into an object
    const loginData = JSON.parse(this.loginVal);

    // Access the userName property
    const userName = loginData.userName;
    const password = loginData.password;


    const hashedPassword = this.hashPassword(password);



    const params = {
      "userName": userName
    }

    this.api.login(params).then((result) => {

      this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))

        console.log("USer password:::", code[0].password)
        console.log('Hashed Password:', hashedPassword);


        if (hashedPassword == code[0].password) {
          localStorage.setItem("userName", userName)
          this.router.navigateByUrl('/app/tabs/locker-type');
        }
        else {
          this.router.navigateByUrl('/app/tabs/locker-type');
          const alert = await this.alertCtrl.create({
            message: "Incorrect username or Password",
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
              },
            ],
          });
          alert.present();
        }


      });

    })
    const loading = await this.loadingCtrl.create();
    loading.present();

  }

  signup() {
    this.router.navigateByUrl('/signup')
  }



}

