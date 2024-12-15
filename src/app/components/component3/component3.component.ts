import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.scss'
})
export class Component3Component implements DoCheck {
  ngDoCheck(): void {
    console.log('Component3Component: ngDoCheck');
  }
}
