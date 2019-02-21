import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-workhistory',
  templateUrl: './workhistory.component.html',
  styleUrls: ['./workhistory.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  workhistory: any = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.workhistory = this.getWorkhistory();
    console.log(this.workhistory);
  }

  getWorkhistory() {
    return this.config.getConfig().workhistory;
  }

}
