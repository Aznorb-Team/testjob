import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowBindingComponent } from './table-row-binding.component';

describe('TableRowBindingComponent', () => {
  let component: TableRowBindingComponent;
  let fixture: ComponentFixture<TableRowBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableRowBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
