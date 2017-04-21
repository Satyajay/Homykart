import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MyOrdersPage } from '../my-orders/my-orders';
import { NotificationsPage } from '../notifications/notifications';
import { QueryPage} from '../query/query';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MyOrdersPage;
  tab3Root: any = NotificationsPage;
  tab4Root: any = QueryPage;

  constructor() {

  }
}
