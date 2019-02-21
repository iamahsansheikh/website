import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private footer = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.footer = this.getFooter().footer;
  }

  getFooter(){
    return this.config.getConfig();
  }

}
