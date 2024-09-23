import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'pw-side-page-2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
  :host {
    display: block;
    padding: 16px;
  }
  `,
  template: `
  <h4>I listen to ActivatedRoute.queryParams</h4>
  <p>The value of <strong>Foo</strong> = {{$params()?.['foo']}}</p>
  <button (click)="onChangeFoo()">Chang Foo</button>
  <p style="color: red">See the console logs</p>
  `
})
export class SidePage2Component {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  $params = toSignal(this.activatedRoute.queryParams);

  constructor() {
    effect(() => {
      console.log(this.$params())
    });
    this.activatedRoute.queryParams.pipe(takeUntilDestroyed()).subscribe(params => {
      console.log({queryParams: params});
    });
    this.activatedRoute.params.pipe(takeUntilDestroyed()).subscribe(params => {
      console.log({params});
    });
  }

  onChangeFoo() {
    this.router.navigate(['', {outlets: {sidebar: [{foo: this.getRandomString()}]}}])
  }

  getRandomString() {
    return Math.random().toString(36).substring(2, 7);
  }
}
