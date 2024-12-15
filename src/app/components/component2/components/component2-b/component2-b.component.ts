import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Component2BAComponent } from './components/component2-ba/component2-ba.component';

@Component({
  selector: 'app-component2-b',
  standalone: true,
  imports: [Component2BAComponent],
  templateUrl: './component2-b.component.html',
  styleUrl: './component2-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2BComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('Component2BComponent: ngDoCheck');
  }
}
