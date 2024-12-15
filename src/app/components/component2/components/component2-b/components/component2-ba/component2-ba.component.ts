import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component2-ba',
  standalone: true,
  imports: [],
  templateUrl: './component2-ba.component.html',
  styleUrl: './component2-ba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2BAComponent implements DoCheck {
  triggerCD(): void {
    console.log('Component2BAComponent: triggerCD');
  }

  ngDoCheck(): void {
    console.log('Component2BAComponent: ngDoCheck');
  }
}
