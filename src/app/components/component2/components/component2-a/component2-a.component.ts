import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component2-a',
  standalone: true,
  imports: [],
  templateUrl: './component2-a.component.html',
  styleUrl: './component2-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2AComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('Component2AComponent: ngDoCheck');
  }
}
