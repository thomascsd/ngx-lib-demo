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

function getRouterLinks(fixture: ComponentFixture<HeaderComponent>) {
  const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
  const routerLinks: RouterLinkDirectiveStub[] = linkDes.map(de =>
    de.injector.get(RouterLinkDirectiveStub)
  );
  return { linkDes, routerLinks };
}

function getHeaderLinks() {
  const links: HeaderLink[] = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' }
  ];
  return links;
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    const links: HeaderLink[] = getHeaderLinks();

    component.links = links;
    fixture.detectChanges();

    const { routerLinks } = getRouterLinks(fixture);

    expect(routerLinks.length).toEqual(2, 'have 2 routerLink');
    expect(routerLinks[0].linkParams).toBe('/home');
    expect(routerLinks[1].linkParams).toBe('/about');
  });

  it('Can click link from template', () => {
    const links: HeaderLink[] = getHeaderLinks();

    component.links = links;
    fixture.detectChanges();

    const { linkDes, routerLinks } = getRouterLinks(fixture);

    linkDes[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(routerLinks[0].navigatedTo).toBe('/home');
  });

  it('Can SignIn button hidden', () => {
    const ele: HTMLElement = fixture.nativeElement;
    const signIn = ele.querySelector('#signIn');

    expect(signIn).toBeNull();
  });

  it('Can action button hidden', () => {
    const ele: HTMLElement = fixture.nativeElement;
    const actionBtn = ele.querySelector('#actionBtn');

    expect(actionBtn).toBeNull();
  });

  it('Can action button has text', () => {
    component.actionButtonVisible = true;
    component.actionButtonText = 'do';
    fixture.detectChanges();

    const ele: HTMLElement = fixture.nativeElement;
    const actionBtn = ele.querySelector('#actionBtn');

    expect(actionBtn.innerHTML).toEqual('do');
  });
});
