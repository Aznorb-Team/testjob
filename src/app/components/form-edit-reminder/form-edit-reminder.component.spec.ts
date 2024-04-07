import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditReminderComponent } from './form-edit-reminder.component';

describe('FormEditReminderComponent', () => {
  let component: FormEditReminderComponent;
  let fixture: ComponentFixture<FormEditReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditReminderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
