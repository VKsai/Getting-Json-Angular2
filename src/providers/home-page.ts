import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/*
  Generated class for the HomePage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomePageService
{

  constructor(private http: Http) { }

  getJobs() {
    return this.http.get('job_data.json').map((res:Response) => res.json());
  }

}


