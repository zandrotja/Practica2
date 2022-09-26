import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitelayoutComponent } from './websitelayout.component';

describe('WebsitelayoutComponent', () => {
  let component: WebsitelayoutComponent;
  let fixture: ComponentFixture<WebsitelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitelayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
