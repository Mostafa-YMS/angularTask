import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h2 Login', () => {
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toBe('Login');
  });

  it('should contain one Login button', () => {
    const btns = fixture.debugElement.queryAll(By.css('button'));
    expect(btns.length === 1).toBeTruthy();
  });

  it('button content should be Login', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.innerText).toBe('Login');
  });

  it('should contain two inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
  });

  it('', () => {
    const location = fixture.debugElement.injector.get(Location);
    expect(location.path()).toBe('');
  });
});

class UsersServiceStub {
  login() {
    return { token: 'QpwL5tke4Pnpja7X4' };
  }
}
