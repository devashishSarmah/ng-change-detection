import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1AComponent } from './component1-a.component';

describe('Component1AComponent', () => {
  let component: Component1AComponent;
  let fixture: ComponentFixture<Component1AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component1AComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
