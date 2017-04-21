import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import {HomePage} from '../pages/home/home';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { HKOffersPage } from '../pages/hk-offers/hk-offers';
import { ShareAppPage } from '../pages/share-app/share-app';
import { HelpPage } from '../pages/help/help';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'My Profile', component: MyProfilePage },
      { title: 'HK Offers', component: HKOffersPage },
      { title: 'Share App', component: ShareAppPage },
      { title: 'Help', component: HelpPage }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
  openHelp() {
    this.nav.setRoot(HelpPage);
  }
  openMyprofile(){
    this.nav.setRoot(MyProfilePage);
  }
  openHkoffers(){
    this.nav.setRoot(HKOffersPage);
  }
  openShareapp(){
    this.nav.setRoot(ShareAppPage);
  }
  openHome(){
    this.nav.setRoot(HomePage);
  }
}
