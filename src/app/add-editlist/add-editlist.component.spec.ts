import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditlistComponent } from './add-editlist.component';

describe('AddEditlistComponent', () => {
  let component: AddEditlistComponent;
  let fixture: ComponentFixture<AddEditlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
