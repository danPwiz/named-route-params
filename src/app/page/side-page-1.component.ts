import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pw-side-page-1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
  :host {
    display: block;
    padding: 16px;
  }
  `,
  template: `
  <h4>I listen to foo as a component input</h4>
  <p>The value of <strong>Foo</strong> = {{foo()}}</p>
  <button (click)="onChangeFoo()">Chang Foo</button>
  `
})
export class SidePage1Component {
  router = inject(Router);
  foo = input.required<string>();

  onChangeFoo() {
    this.router.navigate(['', {outlets: {sidebar: [{foo: this.getRandomString()}]}}])
  }

  getRandomString() {
    return Math.random().toString(36).substring(2, 7);
  }
}
