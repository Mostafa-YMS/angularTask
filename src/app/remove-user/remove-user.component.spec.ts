import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserComponent } from './remove-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../users.service';

describe('RemoveUserComponent', () => {
  let component: RemoveUserComponent;
  let fixture: ComponentFixture<RemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, RouterTestingModule],
      declarations: [RemoveUserComponent],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class UsersServiceStub {
  deleteUser(id: String) {
    return { status: 204 };
  }
}
