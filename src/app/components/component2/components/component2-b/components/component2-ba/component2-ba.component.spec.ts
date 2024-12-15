import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2BAComponent } from './component2-ba.component';

describe('Component2BAComponent', () => {
  let component: Component2BAComponent;
  let fixture: ComponentFixture<Component2BAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component2BAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component2BAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
