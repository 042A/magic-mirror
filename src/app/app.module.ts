import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { FeedService } from './feed.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { YoutubeComponent } from './youtube/youtube.component';
import { SafePipe } from './pipe/safe-url.pipe';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    YoutubeComponent,
    SafePipe,
    NewsComponent
  ],
  imports: [
    BrowserModule, HttpModule, YoutubePlayerModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
