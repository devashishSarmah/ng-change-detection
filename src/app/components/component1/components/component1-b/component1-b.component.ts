import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component1-b',
  standalone: true,
  imports: [],
  templateUrl: './component1-b.component.html',
  styleUrl: './component1-b.component.scss'
})
export class Component1BComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('Component1BComponent: ngDoCheck');
  }
}
