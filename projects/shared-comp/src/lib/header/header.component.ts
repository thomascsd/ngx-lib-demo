import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderLink } from '../../models/headerLink';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() buttonText = 'action';
  @Input() buttonVisible = false;
  @Input() signInButtonVisible = false;
  @Input() links: HeaderLink[] = [];
  @Input() title = 'Header';
  @Output() clicked = new EventEmitter<any>();
  @Output() logedIn = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onclick(evt: Event) {
    evt.preventDefault();
    this.clicked.emit();
  }

  onLogedIn(evt: Event) {
    evt.preventDefault();
    this.logedIn.emit();
  }
}
