import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2AComponent } from './component2-a.component';

describe('Component2AComponent', () => {
  let component: Component2AComponent;
  let fixture: ComponentFixture<Component2AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component2AComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
