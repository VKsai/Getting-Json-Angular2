import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuickstartCareerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuickstartCareerService {

  constructor(public http: Http) {
    console.log('Hello QuickstartCareerService Provider');
  }

  getFirebaseCareerData()
  {
    return this.http.get('https://dsmp-20feb.firebaseio.com/user_qualification/data/careers/.json')
      .map((response: Response) => response.json());
  }

}
