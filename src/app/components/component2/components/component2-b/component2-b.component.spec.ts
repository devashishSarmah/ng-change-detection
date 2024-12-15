import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2BComponent } from './component2-b.component';

describe('Component2BComponent', () => {
  let component: Component2BComponent;
  let fixture: ComponentFixture<Component2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component2BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
