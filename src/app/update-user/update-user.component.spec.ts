import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateUserComponent } from './update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';
import { By } from '@angular/platform-browser';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule, HttpClientModule],
      declarations: [UpdateUserComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h2 Update', () => {
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toBe('Update');
  });

  it('should contain one Update button', () => {
    const btns = fixture.debugElement.queryAll(By.css('button'));
    expect(btns.length === 1).toBeTruthy();
  });

  it('button content should be Update', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.innerText).toBe('Update');
  });

  it('should contain two inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(2);
  });
});

class UsersServiceStub {
  updateUser() {
    return { status: 200 };
  }
}
