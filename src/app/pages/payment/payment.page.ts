import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  payment=[];
  constructor(public loadingController: LoadingController,private service: AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllPayments().subscribe((res)=> {
        this.payment = res.document.records;
        console.log(this.payment);
        this.loadingController.dismiss();
      });
    });
  }
  
  async presentLoading(){
    const loading = await this.loadingController.create({
      message:"Please wait ..",
    });
    await loading.present();
  }
}
