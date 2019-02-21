import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private about = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.about = this.getAbout().about;
  }

  getAbout() {
    return this.config.getConfig();
  }



}
