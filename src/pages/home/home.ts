import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QueryPage } from '../query/query';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  clickAction(value: string): void {
    switch (value) {
      case "Mechanical":
           this.navCtrl.push(QueryPage);
           break;
      case "Acconting": 
           this.navCtrl.push(QueryPage);          
           break;
      case "ACRepair":
           this.navCtrl.push(QueryPage);
           break;
      case "Carpenter":
           this.navCtrl.push(QueryPage);
           break;
      case "Construction":
           this.navCtrl.push(QueryPage);
           break;
      case "Cooler/fan":
           this.navCtrl.push(QueryPage);
           break;
      case "Beauty/salon":
           this.navCtrl.push(QueryPage);
           break;
      case "Microwave":
           this.navCtrl.push(QueryPage);
           break;
      case "Computer":
           this.navCtrl.push(QueryPage);
           break;     
      case "Painter":
           this.navCtrl.push(QueryPage);
           break;
      case "Refrigerator":
           this.navCtrl.push(QueryPage);
           break;
    }
  }
}
