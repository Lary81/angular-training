import { SecurityService } from '../security.service';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  // let securityServiceStub = {
  //   isAuthenticated: false,
  //   login(user: string, password: string) {
  //     this.isAuthenticated = true
  //   }
  // }
  let securityService
  let securityServiceSpy
  let h1Element


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [SecurityService]
      // providers: [
      //   { provide: SecurityService, useValue: securityServiceStub }
      // ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    securityService = fixture.debugElement.injector.get(SecurityService)
    securityServiceSpy = spyOn(securityService, "login")
      .and.returnValue(Promise.resolve(true))

    component = fixture.componentInstance;
    h1Element = fixture.debugElement.query(By.css('h1'))
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    let text = "Hello"
    component.text = text
    fixture.detectChanges()
    expect(h1Element.nativeElement.textContent).toContain(text);
  });

  it('should authenticate on init', () => {
    expect(securityService.login).toHaveBeenCalledTimes(1)
  });

  it('should emit onSayHello event', () => {
    let result = ""
    component.name = "Jan"
    component.onSayHello.subscribe((name) => result = name)
    h1Element.triggerEventHandler('click', null)
    expect(result).toEqual("Jan")
  });

});
