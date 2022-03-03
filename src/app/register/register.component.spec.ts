import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersService } from '../users.service';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, MatDialogModule],
      declarations: [RegisterComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h2 register', () => {
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toBe('Register');
  });

  it('should contain one button', () => {
    const btns = fixture.debugElement.queryAll(By.css('button'));
    expect(btns.length === 1).toBeTruthy();
  });

  it('button content should be Register', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.innerText).toBe('Register');
  });

  it('should contain two inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
  });
});

class UsersServiceStub {
  craeteUser() {
    return { status: 201 };
  }
}
