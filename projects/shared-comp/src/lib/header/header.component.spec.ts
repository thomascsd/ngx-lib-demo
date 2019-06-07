import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Directive, Input, HostListener, DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { HeaderLink } from '../../models/headerLink';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let linkDes: DebugElement[];
  let routerLinks: RouterLinkDirectiveStub[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, RouterLinkDirectiveStub]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Can get Title from template', () => {
    expect(component.title).toEqual('Header');
  });

  it('Can get routerLink from template', () => {
    const links: HeaderLink[] = [
      { title: 'Home', path: '/home' },
      { title: 'About', path: '/about' }
    ];

    component.links = links;
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

    expect(routerLinks.length).toEqual(2, 'have 2 routerLink');
    expect(routerLinks[0].linkParams).toBe('/home');
    expect(routerLinks[1].linkParams).toBe('/about');
  });
});
