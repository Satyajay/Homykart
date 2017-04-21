import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';

@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html'
})
export class MyOrdersPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
clickAction(value: string): void{
        if(value == "Booknow") { 
        this.navCtrl.push(HomePage);
      }

}
}
