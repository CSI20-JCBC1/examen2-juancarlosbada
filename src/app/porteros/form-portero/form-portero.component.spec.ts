import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPorteroComponent } from './form-portero.component';

describe('FormPorteroComponent', () => {
  let component: FormPorteroComponent;
  let fixture: ComponentFixture<FormPorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPorteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
