import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from '../popup/order-menu/order-menu.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orders = [{
    "date": "Today, 8 Aug 2022",
    "order":[{
      "id":"01",
      "image": "001.jpg",
      "title":"Hamburger",
      "amount":"55.40",
      "transId":"58745212",
      "time":"20 Min",
      "status":"CONFIRM"
    },
    {
      "id":"02",
      "image": "002.jpg",
      "title":"Deep dish pizza",
      "amount":"48.50",
      "transId":"45784125",
      "time":"45 Min",
      "status":"CANCELED"
    },
    {
      "id":"03",
      "image": "003.jpg",
      "title":"Bacon wrapped shrimp",
      "amount":"23.08",
      "transId":"23081980",
      "time":"10 Min",
      "status":"CONFIRM"
    }
  ]
  },
  {
    "date": "7 Aug 2022",
    "order":[{
      "id":"04",
      "image": "004.jpg",
      "title":"Hamburger",
      "amount":"55.40",
      "transId":"58745212",
      "time":"23 Min",
      "status":"CONFIRM"
    },
    {
      "id":"05",
      "image": "005.jpg",
      "title":"Deep dish pizza",
      "amount":"48.50",
      "transId":"45784125",
      "time":"30 Min",
      "status":"CANCELED"
    },
    {
      "id":"06",
      "image": "006.jpg",
      "title":"Bacon wrapped shrimp",
      "amount":"23.08",
      "transId":"23081980",
      "time":"05 Min",
      "status":"CONFIRM"
    }
  ]
  },
  {
    "date": "7 Aug 2022",
    "order":[{
      "id":"07",
      "image": "007.jpg",
      "title":"Hamburger",
      "amount":"55.40",
      "transId":"58745212",
      "time":"26 Min",
      "status":"CONFIRM"
    },
    {
      "id":"08",
      "image": "008.jpg",
      "title":"Deep dish pizza",
      "amount":"48.50",
      "transId":"45784125",
      "time":"1 Hour",
      "status":"CANCELED"
    },
    {
      "id":"03",
      "image": "003.jpg",
      "title":"Bacon wrapped shrimp",
      "amount":"23.08",
      "transId":"23081980",
      "time":"10 Min",
      "status":"CANCELED"
    }
  ]
  }]


  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  segmentChanged(ev){
    console.log(ev.detail.value);
  }
  async presentPopover(ev){
    const popover = await this.popoverController.create({
      component:OrderMenuPage, //postavljane ordermenu za tri tackice
      event:ev,
      mode:'ios',
      translucent:true
    });
    await popover.present();
  } //popover tri tackice na order page
}
