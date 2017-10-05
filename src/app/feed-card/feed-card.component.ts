import { Component, OnInit, EventEmitter, Input, Output, NgModule } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {
   @Input() feed: any;

   clicked(inData) {
      let outData = inData.substring(9);
      this.getVideo(outData);
  }

  getVideo(videoid) {
    $('.ui.embed').embed({
      source      : 'youtube',
      id          : videoid
     });

    }

  constructor() { }
  ngOnInit() { }

}
