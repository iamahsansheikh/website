import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private post = {};

  constructor(private location: Location, private route: ActivatedRoute, private config: ConfigService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);

    console.log(this.post);
  }

  getPostById(id: number) {
    return this.config.getPostsByID(id);
  }

  getBack(){
    this.location.back();
  }

}
