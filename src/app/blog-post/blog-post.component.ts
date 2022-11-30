import { Component } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import {
  faHeart,
  faComment,
  faShare,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  constructor(service: BlogDataService) {
    this.posts = service.getBlogData();
  }
  posts;
  faHeart = faHeart;
  faComment = faComment;
  faShare = faShare;
  faRetweet = faRetweet;
}
