import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogDataService } from './blog-data.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, BlogPostComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [BlogDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
