import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
/*
  Generated class for the HKOffers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hk-offers',
  templateUrl: 'hk-offers.html'
})
export class HKOffersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HKOffersPage');
  }
clickAction(value: string): void{
        if(value == "Services") { 
        this.navCtrl.push(HomePage);
      }
}
}
