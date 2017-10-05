import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from './../feed.service';
import { FeedEntry } from './../model/feed-entry';
import { Observable } from 'rxjs/Rx';
import { FeedCardComponent } from './../feed-card/feed-card.component';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  player: YT.Player;
  private id: string = 'MHYvNr9GSGo';

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
	}
  onStateChange(event){
    console.log('player state', event.data);
  }

  constructor (
    private feedService: FeedService
  ) {}

  // https://www.svt.se/nyheter/rss.xml

  private feedUrl: string = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2FTBJd2QgYNskwcFl83T4g';
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
