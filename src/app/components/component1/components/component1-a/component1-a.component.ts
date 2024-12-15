import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component1-a',
  standalone: true,
  imports: [],
  templateUrl: './component1-a.component.html',
  styleUrl: './component1-a.component.scss'
})
export class Component1AComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('Component1AComponent: ngDoCheck');
  }
}
