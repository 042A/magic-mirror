import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from './../feed.service';
import { FeedEntry } from './../model/feed-entry';
import { Observable } from 'rxjs/Rx';
import { FeedCardComponent } from './../feed-card/feed-card.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor (
    private feedService: FeedService
  ) {}

    private feedUrl: string = 'https://www.svt.se/nyheter/rss.xml';
  feeds: Array<FeedEntry> = [];

  ngOnInit() {
    this.refreshFeed();
  }

  refreshFeed() {
    this.feeds.length = 0;
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getFeedContent(this.feedUrl).delay(1000)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }
}
