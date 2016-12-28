import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import {QuickStartPage} from "../quick-start-page/quick-start-page";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage; 
  // Above line calls the HomePage class in the Pages\ folder
  // The HomePage class connects to Google's FireBase by making     	//HTTP calls
  tab2Root: any = AboutPage;
  tab3Root: any = QuickStartPage;

  constructor() 
  {
	//Not required for the purpose
  }
}
