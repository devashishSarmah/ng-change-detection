import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, InjectFlags, ViewRef, ɵinjectChangeDetectorRef } from '@angular/core';
import { Component1AComponent } from './components/component1-a/component1-a.component';
import { Component1BComponent } from './components/component1-b/component1-b.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [Component1AComponent, Component1BComponent],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1Component implements DoCheck {

  cdRef = ɵinjectChangeDetectorRef(InjectFlags.Default);

  constructor() {
  }

  ngDoCheck(): void {
    console.log('Component1Component: ngDoCheck');
    console.log(this.dirty((<any>this.cdRef)._lView));
  }

  triggerCD(): void {
    console.log('Component1Component: triggerCD');
  }

  dirty(_lView: any): boolean {
    return (
      !!(
        _lView[2] &
        ((1 << 6) | (1 << 10) | (1 << 13))
      ) || !!_lView[24]?.dirty
    );
  }

}
