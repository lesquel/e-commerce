import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIsLoginComponent } from './button-is-login.component';

describe('ButtonIsLoginComponent', () => {
  let component: ButtonIsLoginComponent;
  let fixture: ComponentFixture<ButtonIsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
