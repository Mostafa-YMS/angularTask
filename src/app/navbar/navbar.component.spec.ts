import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: DummyComponent },
          { path: 'register', component: DummyComponent },
        ]),
      ],
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain span contain User Admin', () => {
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe('User Admin');
  });

  it('should contain one span', () => {
    const span = fixture.debugElement.queryAll(By.css('span'));
    expect(span.length).toBe(1);
  });

  it('should contain three anchor tags', () => {
    const a = fixture.debugElement.queryAll(By.css('a'));
    expect(a.length).toBe(2);
  });

  it('should contain one anchor tag after login', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const a = fixture.debugElement.queryAll(By.css('a'));
    expect(a.length).toBe(1);
  });

  it('should contain one button after login', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const button = fixture.debugElement.queryAll(By.css('button'));
    expect(button.length).toBe(1);
  });

  it('path should be login after click Login anchor', () => {
    const location = fixture.debugElement.injector.get(Location);
    const a = fixture.debugElement.queryAll(By.css('a'));
    expect(a[0].nativeElement.innerText).toBe('Login')
    a[0].nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/login');
    });
  });

  it('path should be register after click Register anchor', () => {
    const location = fixture.debugElement.injector.get(Location);
    const a = fixture.debugElement.queryAll(By.css('a'));
    expect(a[1].nativeElement.innerText).toBe('Register')
    a[1].nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/register');
    });
  });
  
});



@Component({ template: '' })
class DummyComponent {}
