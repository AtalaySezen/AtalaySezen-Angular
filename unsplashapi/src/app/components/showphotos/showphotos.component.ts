import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/photo.service';

@Component({
  selector: 'app-showphotos',
  templateUrl: './showphotos.component.html',
  styleUrls: ['./showphotos.component.css']
})
export class ShowphotosComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  photoUrl: string = '';
  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.photoService.getPhotos().subscribe(response => {
      this.photoUrl = response.urls.regular;
      console.log(this.photoUrl);
    })
  }

  randomImage() {
    this.getImages();
  }




}
