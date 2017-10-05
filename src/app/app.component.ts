import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { FeedCardComponent } from './feed-card/feed-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  objDate = Date.now();
  url = 'https://www.svt.se/nyheter/lokalt/vasterbotten/hot-pa-behandlingshem-boende-stal-narkotika';

  constructor () {}
  ngOnInit() {}


}
