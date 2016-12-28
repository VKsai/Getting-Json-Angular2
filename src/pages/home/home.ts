import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../providers/home-service";
import {NavController, AlertController} from "ionic-angular";
import {DescPage} from "../desc-page/desc-page";
import {FilterPage} from "../filter-page/filter-page";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService] //Need to initiate your data providers //here
})
export class HomePage{

  jobsArray: any[] = []; //Blank array of type any to hold data //from HTTP calls
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(private homeService: HomeService, private nav: NavController)
  {
    this.homeService.getFirebaseData()
      .subscribe(
        data => {
          const firebaseArray = [];
          for(let key in data)
          {
            firebaseArray.push(data[key]);
          }
          this.jobsArray = firebaseArray;

        }
      );
  }




  /*ionViewDidLoad() {

    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.setFilteredItems();

    });

  }

  onSearchInput(){
    this.searching = true;
  }*/

  /*setFilteredItems() {

    this.items = this.HomeService.filterItems(this.searchTerm);

  }*/

  doPrompt() //**Don't worry about this search bar. If you don't //want it comment this portion
  {
    this.nav.push(FilterPage);
  }

  homeAction(id: number)
  {
    this.nav.push(DescPage, { param1: id});
  }

  doInfinite(infiniteScroll) //Infinite scrolling for populated //list. Please feel free to comment
 {
    console.log('Begin async operation');

    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        //this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


}
