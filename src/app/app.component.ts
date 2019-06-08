import { Component, OnInit } from '@angular/core';
import { HeaderLink } from '../../dist/shared-comp/models/headerLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  links: HeaderLink[] = [];

  ngOnInit(): void {
    this.title = 'ngx-lib-demo';
    this.links = [{ title: 'home', path: '/home' }, { title: 'links', path: '/links' }];
  }

  Login() {
    alert('login');
  }

  doAction() {
    alert('action');
  }
}
