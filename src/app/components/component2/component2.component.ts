import { Component, DoCheck } from '@angular/core';
import { Component2AComponent } from "./components/component2-a/component2-a.component";
import { Component2BComponent } from './components/component2-b/component2-b.component';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [Component2AComponent, Component2BComponent],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss'
})
export class Component2Component implements DoCheck {
  ngDoCheck(): void {
    console.log('Component2Component: ngDoCheck');
  }
}
