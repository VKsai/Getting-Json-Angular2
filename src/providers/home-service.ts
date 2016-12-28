import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeService
{
  constructor(private http: Http)
  { }

  getFirebaseData()
  {
    return this.http.get('https://dsmp-20feb.firebaseio.com/data/jobslist/.json')
      .map((response: Response) => response.json());
  }

}
