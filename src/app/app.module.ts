import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { HKOffersPage } from '../pages/hk-offers/hk-offers';
import { ShareAppPage } from '../pages/share-app/share-app';
import { HelpPage } from '../pages/help/help';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { NotificationsPage } from '../pages/notifications/notifications';
import { QueryPage } from '../pages/query/query';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyProfilePage,
    HKOffersPage,
    ShareAppPage,
    HelpPage,
    MyOrdersPage,
    NotificationsPage,
    QueryPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyProfilePage,
    HKOffersPage,
    ShareAppPage,
    HelpPage,
    MyOrdersPage,
    NotificationsPage,
    QueryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
