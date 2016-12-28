import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {HomeService} from "../providers/home-service";
import {DescPage} from "../pages/desc-page/desc-page";
import {QuickStartPage} from "../pages/quick-start-page/quick-start-page";
import {QuickstartCareerService} from "../providers/quickstart-career-service";
import {QuickstartExperienceService} from "../providers/quickstart-experience-service";
import {FilterPage} from "../pages/filter-page/filter-page";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    QuickStartPage,
    HomePage,
    FilterPage,
    TabsPage,
    DescPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    QuickStartPage,
    HomePage,
    FilterPage,
    TabsPage,
    DescPage
  ],
  providers: [HomeService, QuickstartCareerService, QuickstartExperienceService]

})
export class AppModule {}
