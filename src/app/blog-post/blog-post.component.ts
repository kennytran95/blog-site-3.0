import { Component } from '@angular/core';
import { BlogDataService } from '../blog-data.service';

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
}
