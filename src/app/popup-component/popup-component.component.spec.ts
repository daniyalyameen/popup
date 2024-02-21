import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent } from './popup-component.component'; // Corrected import statement
import { MatFormFieldModule } from '@angular/material/form-field';

describe('PopupComponent', () => { // Corrected component namimport { MatFormFieldModule } from '@angular/material/form-field';e
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupComponent ] // Corrected component name
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
