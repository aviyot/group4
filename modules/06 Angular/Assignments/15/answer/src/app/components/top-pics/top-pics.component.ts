import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IntushServicesService } from 'src/app/intush-services.service';

@Component({
  selector: 'app-top-pics',
  templateUrl: './top-pics.component.html',
  styleUrls: ['./top-pics.component.css']
})
export class TopPicsComponent implements OnInit {

  topPicSrcs: string[];
  @Output() showImgEvent = new EventEmitter<string>();
  toggle:boolean;

  constructor(private intushServicesService: IntushServicesService) {
    this.toggle = false;
  }

  ngOnInit() {
    this.topPicSrcs = this.intushServicesService.topPicSrcs
  }

  toggleUl() {
    this.toggle= !this.toggle;
  }

  showImg(e) {
    let src:string = e.target.src;
    this.showImgEvent.emit(src);
  }

}
