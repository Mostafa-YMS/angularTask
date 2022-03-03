import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserComponent } from './single-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';
import { By } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';

describe('SingleUserComponent', () => {
  let component: SingleUserComponent;
  let fixture: ComponentFixture<SingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [SingleUserComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain one image', () => {
    const img = fixture.debugElement.queryAll(By.css('img'));
    expect(img.length).toBe(1);
  });

  it('should contain h2', () => {
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toBe('Ahmed Khaled');
  });

  it('should contain p', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('ahmed@gmail.com');
  });

  it('should contain button with content Update', () => {
    const btn = fixture.debugElement.query(By.css('button'));
    expect(btn.nativeElement.innerText).toBe('Update');
  });
});

class UsersServiceStub {
  getSingleUser(id: String) {
    return new BehaviorSubject<any>({
      data: {
        first_name: 'Ahmed',
        last_name: 'Khaled',
        email: 'ahmed@gmail.com',
        avatar: 'img',
      },
    });
  }
}
