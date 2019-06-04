import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() twitterUrl = '';
  @Input() gitHubUrl = '';

  constructor() {}

  ngOnInit() {}
}
