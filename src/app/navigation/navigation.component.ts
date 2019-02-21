import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private activetab = 'home';
  constructor() { }

  ngOnInit() {
  }

  getActiveTabName(tabname: string){
    this.activetab = tabname;
  }
}
