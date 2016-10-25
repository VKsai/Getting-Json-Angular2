import {Component, OnInit} from '@angular/core';
import {HomePageService} from "../../providers/home-page";
import { Http } from '@angular/http';

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})

export class HomePage implements OnInit
{
  public jobs;
  public jobs_error:Boolean = false;

  constructor(private hps: HomePageService) { }

  ngOnInit()
  {
    this.getJobs();
  }
  getJobs()
  {
    this.hps.getJobs().subscribe(
      data => { this.jobs = data},
      err => { this.jobs_error = true }
    );
  }
}
