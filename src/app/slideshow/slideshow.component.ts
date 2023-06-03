import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  images = ["picture1.jpg", "picture2.jpg", "picture3.jpg"];
  headlines = ["Programmieren ist kreative Magie", "Webentwicklung ist die Kunst im Cyberspace", "Code erschafft visuelle Wunder"]
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();     
  }

  updateImage(){
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000)
  }

}
