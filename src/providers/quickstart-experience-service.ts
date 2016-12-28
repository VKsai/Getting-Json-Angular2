import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuickstartExperienceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuickstartExperienceService {

  constructor(public http: Http) {
    console.log('Hello QuickstartExperienceService Provider');
  }

  getFirebaseExperiecneData()
  {
    return this.http.get('https://dsmp-20feb.firebaseio.com/user_qualification/data/workExperience/.json')
      .map((response: Response) => response.json());
  }
}
