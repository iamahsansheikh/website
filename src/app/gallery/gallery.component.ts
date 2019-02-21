import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private gallery = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.gallery = this.getGallery();
    console.log(this.gallery);
  }

  getGallery() {
    return this.config.getConfig().gallery;
  }

}
