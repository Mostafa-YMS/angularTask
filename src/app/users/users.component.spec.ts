import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from '../users.service';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [UsersComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
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
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toBe('Ahmed Khaled');
  });

  it('should contain p', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('ahmed@gmail.com');
  });
});

class UsersServiceStub {
  getUsersList() {
    return new BehaviorSubject<any>({
      data: [
        {
          id: 1,
          first_name: 'Ahmed',
          last_name: 'Khaled',
          email: 'ahmed@gmail.com',
          avatar: 'img',
        },
      ],
    });
  }
}
