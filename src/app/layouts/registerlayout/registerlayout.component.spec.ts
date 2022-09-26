import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterlayoutComponent } from './registerlayout.component';

describe('RegisterlayoutComponent', () => {
  let component: RegisterlayoutComponent;
  let fixture: ComponentFixture<RegisterlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
