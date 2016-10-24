import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {JOBS} from "./home-data-desc";
import {HomeData} from "../pages/home/home-data";

/*
  Generated class for the Home provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Home
{
  getData(): Promise<HomeData[]>
  {
    return Promise.resolve(JOBS);
  }


}
