import { Component } from '@angular/core';
import { faOtter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-site3.0';
  faOtter = faOtter;
}
