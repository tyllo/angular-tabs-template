import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content; timer: {{ timer }}
    </div>
  `,
})
export class TestComponent implements OnInit, OnDestroy {
  private intervalId;

  timer = 0;

  @Input() tab: number;

  public ngOnInit() {
    this.intervalId = setInterval(() => this.timer++, 1000);
    console.log(`>>> TestComponent ${this.tab} initialized`);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
