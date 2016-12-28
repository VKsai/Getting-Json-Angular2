import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuickstartCareerService} from "../../providers/quickstart-career-service";
import {QuickstartExperienceService} from "../../providers/quickstart-experience-service";


/*
  Generated class for the QuickStartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quick-start-page',
  templateUrl: 'quick-start-page.html',
  providers: [QuickstartCareerService, QuickstartExperienceService]
})
export class QuickStartPage {

  careers: any[] = [];
  experience: any[] = [];

  constructor(public navCtrl: NavController, public career: QuickstartCareerService, public exp: QuickstartExperienceService) {}

  ionViewDidLoad() {
    console.log('Hello QuickStartPage Page');
  }

  ngOnInit()
  {
    this.career.getFirebaseCareerData()
      .subscribe(
        data => {
          const firebaseArrayC = [];
          for(let key in data)
          {
            firebaseArrayC.push(data[key]);
          }
          this.careers = firebaseArrayC;
          }
      );

    this.exp.getFirebaseExperiecneData()
      .subscribe(
        data => {
          const firebaseArrayE = [];
          for(let key in data)
          {
            firebaseArrayE.push(data[key]);
          }
          this.experience = firebaseArrayE;
        }
      );
  }

}
