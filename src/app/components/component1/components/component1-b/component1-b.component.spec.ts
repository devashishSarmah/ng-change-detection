import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1BComponent } from './component1-b.component';

describe('Component1BComponent', () => {
  let component: Component1BComponent;
  let fixture: ComponentFixture<Component1BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component1BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
