import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [disabled]="value">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; border: none; font-size: 5em; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
