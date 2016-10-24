import { Component, OnInit } from '@angular/core';
import { HomeData } from 'home-data';
import {Home} from "../../providers/home";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Home]
})
export class HomePage implements OnInit
{
  title = "JSON Testing";
  jobs: HomeData[];


  constructor(private home: Home)
  { }

  getData(): void
  {
    this.home.getData().then(jobs => this.jobs = jobs);
  }

  ngOnInit(): void
  {
    this.getData();
  }
}
