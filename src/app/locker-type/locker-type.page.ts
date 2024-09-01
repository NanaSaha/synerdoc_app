
import { Router } from '@angular/router';
// import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto'
import { AfterViewInit, OnInit, Component, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApisService } from "../apis.service"
import {
  NavController,
  LoadingController,
  ActionSheetController,
  Platform,
  AlertController
} from "@ionic/angular";
import { ModalController } from '@ionic/angular';
import { BarcodePage } from '../barcode/barcode.page';
import { BoxopenedPage } from '../boxopened/boxopened.page';

@Component({
  selector: 'app-locker-type',
  templateUrl: './locker-type.page.html',
  styleUrls: ['./locker-type.page.scss'],
})
export class LockerTypePage implements OnInit {
  @ViewChild('barCanvas')
  private barCanvas!: ElementRef;
  @ViewChild('doughnutCanvas')
  private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas')
  private lineCanvas!: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  chart: any;
  params: any;
  trans_list: any;
  trans_list_pending: any;
  user_id;
  resp_code: any;
  resp_code_pending: any;
  fullname;

  slideOpts = {
    slidesPerView: 1.6,
    initialSlide: 0,
    speed: 400,
  };

  // @Input() content: string | undefined;
  @Input() index: number | undefined;
  @Input() zIndex: number | undefined;

  @Output() cardClicked = new EventEmitter<void>();

  cards = ['Card 1', 'Card 2', 'Card 3'];
  backgroundColors = ['#001A3F', '#9FACBE', '#ffff']; // Add more colors as needed


  zIndices = this.cards.map((_, index) => index);

  topOffsets = this.cards.map((_, index) => index * 30);

  clickedCardIndex: number | null = null;
  

  progressBarValue: number = 20;
  constructor(private modalCtrl: ModalController, public alertCtrl: AlertController, public router: Router, public _form: FormBuilder, public api: ApisService, public loadingCtrl: LoadingController) {
    
    

    this.user_id = localStorage.getItem("user_id")
    this.fullname = localStorage.getItem("fullname")

    console.log("fullname", this.fullname)
   

  }

  // bringToFront() {
  //  // this.zIndex = 100;

  //   this.cardClicked.emit();

    
  // }

  getZIndex(index: number): number {

   
    return this.zIndices[index];
  }

  bringCardToFront(index: number) {

   
    // const maxZIndex = Math.max(...this.zIndices);


    // this.zIndices[index] = maxZIndex + 1;

    // return `${index * 35}px`;

    // // this.reduceOffset(index);
    

    // console.log("Card to front", this.zIndices[index])

    const maxZIndex = Math.max(...this.zIndices);
    this.zIndices = this.zIndices.map((z, i) => (i === index ? maxZIndex + 1 : z));
    this.clickedCardIndex = index;
  }

  // getTopOffset(index: number): string {
  //   return `${index * 15}px`; // Adjust the vertical offset as needed
  // }

    getTopOffset(index: number): string {
    if (index === this.clickedCardIndex) {
      return `${this.topOffsets[index] + 55}px`; // Reduce the vertical offset for the clicked card
    }
    return `${this.topOffsets[index]}px`;
    }
  
  // reduceWidth2(index: number): string {
  //   if (index === this.clickedCardIndex) {
  //     return `${100}%`; 
  //   }

  //     if (index === 1) {
  //       return `${85}%`;
  //     }
  //     else if (index === 2) {
        
  //   }
  //   return `${this.topOffsets[index]}px`;
  // }
  
 

  // reduceWidth(indexx: number): string {

  //   if (indexx === this.clickedCardIndex) {
  //     return `${this.topOffsets[indexx] + 55}px`;
  //   }
  //   // else {

  //   //   if (indexx === 1) {
  //   //     return `${85}%`;
  //   //   }
  //   //   else if (indexx === 2) {
  //   //     return `${90}%`;
  //   //   }

  //   //   else if (indexx === 3) {
  //   //     return `${95}%`;
  //   //   }

  //   //   else if (indexx === 4) {
  //   //     return `${97}%`;
  //   //   }

  //   //   else if (indexx === 5) {
  //   //     return `${100}%`;
  //   //   }
      
  //   //}
  
      
   
  // }



  // reduceOffset(index: number): object {

  //   console.log("reduce --->.")
  //   return {
  //     'z-index': `${index * 5}px`,
  //     'top': 100,
  //     'left': 0,
  //     'background-color': this.getBackgroundColor(index)
  //   };
  // }

  getBackgroundColor(index: number): string {
    return this.backgroundColors[index % this.backgroundColors.length];
  }

  // getLeftOffset(index: number): string {
  //   return `${index * 15}px`; // Adjust the horizontal offset as needed
  // }

  ngAfterViewInit() {
    // let ctx: any = document.getElementById("lineChart") as HTMLElement;


    // var data = {
    //   labels: ["January", "February", "March", "April", "May"],
    //   datasets: [
    //     {
    //       label: "Buyer",
    //       data: [10, 50, 25, 70, 40],
    //       backgroundColor: "blue",
    //       borderColor: "lightblue",
    //       fill: false,
    //       lineTension: 0,
    //       radius: 5
    //     },
    //     {
    //       label: "Seller",
    //       data: [20, 35, 40, 60, 50],
    //       backgroundColor: "green",
    //       borderColor: "lightgreen",
    //       fill: false,
    //       lineTension: 0,
    //       radius: 5
    //     }
    //   ]
    // };


    // // //create Chart class object
    // var chart = new Chart(ctx, {
    //   type: "bar",
    //   data: data,
    //   options: {
    //     plugins: {
    //       title: {
    //         display: true,
    //         text: 'Chart.js Bar Chart - Stacked'
    //       },
    //     },
    //     responsive: true,
    //     scales: {
    //       x: {
    //         stacked: true,
    //       },
    //       y: {
    //         stacked: true
    //       }
    //     }
    //   }
    // });



  }

  ngOnInit() {
    this.transaction_buyer();
    this.transaction_pending();
  }

  async presentModal() {
    console.log("Modal")
    const modal = await this.modalCtrl.create({
      component: BarcodePage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  async presentModal2() {
    console.log("Modal")
    const modal = await this.modalCtrl.create({
      component: BoxopenedPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }



  withdraw(){
    this.router.navigateByUrl('/withdraw');
  }

  details() {
    this.router.navigateByUrl('/box');
  }









  async transaction_buyer() {

    this.params = {
      "user_id": this.user_id
    }

    this.api.retrieve_trans(this.params).then((result) => {

      // this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)

        this.resp_code = code[0].resp_code
        console.log("Resp code:::", this.resp_code)

        var results_body = result;
        this.trans_list = results_body
        console.log("trans_list", this.trans_list);
        console.log("trans_listlenght ", this.trans_list.length);
       
      // });

    })
      .catch(async (_error) => {
        // this.loadingCtrl.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: "Something went wrong. Please try again",
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
              },
            ],
          });
          alert.present();
        // });

      })
    // const loading = await this.loadingCtrl.create();
    // loading.present();
  }



  async transaction_pending() {

    this.params = {
      "user_id": this.user_id
    }

    this.api.retrieve_trans_pending(this.params).then((result) => {

      // this.loadingCtrl.dismiss().then(async () => {

        console.log("results:::", JSON.parse(JSON.stringify(result)))
        var code = JSON.parse(JSON.stringify(result))
        console.log("results:::", code)

        this.resp_code_pending = code[0].resp_code
        console.log("Resp code:::", this.resp_code_pending)

        var results_body = result;
        this.trans_list_pending = results_body
        console.log("trans_list", this.trans_list_pending);
        console.log("trans_listlenght ", this.trans_list_pending.length);
       
      // });

    })
      .catch(async (_error) => {
        // this.loadingCtrl.dismiss().then(async () => {
          const alert = await this.alertCtrl.create({
            message: "Something went wrong. Please try again",
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
              },
            ],
          });
          alert.present();
        });

      // })
    // const loading = await this.loadingCtrl.create();
    // loading.present();
  }






  seeAll(){
    this.router.navigateByUrl('app/tabs/transhistory');
  }
  
  



}



//}
