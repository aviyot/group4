import { Component, OnInit } from '@angular/core';


import { IntushServicesService } from 'src/app/intush-services.service';
import { Img } from 'src/app/modules/img';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {

  imgs: Img[];
  bigPicSrc: string;
  topPicSrcs: string[];


  constructor( private intushServicesService: IntushServicesService) {

    this.sortTop3();

    this.bigPicSrc = null;
  }

  ngOnInit(): void {
    this.imgs: Img[];
    this.bigPicSrc: string;
    this.topPicSrcs: string[];
  }

  showBigPic(src: string) {
    this.intushServicesService.bigPicSrc = src;
  }

  sortTop3() {
    let newTop3 = this.intushServicesService.imgs.slice(0).sort((a,b) => ( b.likes - a.likes)).slice(0,3).map(img => img.src);
    this.intushServicesService.topPicSrcs = newTop3;
  }

  closeBigPic() {
    this.intushServicesService.bigPicSrc = null;
  }
}
