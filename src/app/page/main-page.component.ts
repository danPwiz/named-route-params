import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pw-main-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink
  ],
  styles: `
  :host {
    display: block;
    padding: 16px;
  }
  `,
  template: `
    <h4>Main Page (primary outlet)</h4>
    <ul>
      <li>
        <a [routerLink]="['', {outlets: {sidebar: ['page-1', {foo: 'boo'}]}}]">Open side page with query params as input</a>
        <span style="color: green; margin-left: 16px">I work perfectly</span>
      </li>
      <li>
        <a [routerLink]="['', {outlets: {sidebar: ['page-2', {foo: 'boo'}]}}]">Open side page with ActivatedRoute queryParams</a>
        <span style="color: red; margin-left: 16px">I don't work</span>
      </li>
    </ul>
  `
})
export class MainPageComponent {
}
