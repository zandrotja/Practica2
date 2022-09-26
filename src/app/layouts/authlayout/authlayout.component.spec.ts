import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlayoutComponent } from './authlayout.component';

describe('AuthlayoutComponent', () => {
  let component: AuthlayoutComponent;
  let fixture: ComponentFixture<AuthlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
