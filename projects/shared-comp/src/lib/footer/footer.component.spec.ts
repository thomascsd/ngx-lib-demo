import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('GitHub url', () => {
    const url = 'https://github.com/thomascsd';

    component.gitHubUrl = url;
    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;
    const link = ele.querySelector('#gitHubUrl');

    expect(link.tagName).toEqual('A');
    expect(link.getAttribute('href')).toEqual(url);
  });

  it('Twitter url', () => {
    const url = 'https://twitter.com/thomascsd';

    component.twitterUrl = url;
    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;
    const link = ele.querySelector('#twitterUrl');

    expect(link.tagName).toEqual('A');
    expect(link.getAttribute('href')).toEqual(url);
  });
});
