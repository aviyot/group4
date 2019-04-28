import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IntushServicesService } from 'src/app/intush-services.service';

@Component({
  selector: 'app-big-pic',
  templateUrl: './big-pic.component.html',
  styleUrls: ['./big-pic.component.css']
})
export class BigPicComponent implements OnInit {
  @Input() src: string;
  @Output() closePicEvent = new EventEmitter();

  constructor(private intushServicesService: IntushServicesService) { }

  ngOnInit() {
    this.src = this.intushServicesService.bigPicSrc;
  }

  closePic() {
    this.closePicEvent.emit();
  }

}
