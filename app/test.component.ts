import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div>
      TestComponent {{ this.tab }} content; timer: {{ timer }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit, OnDestroy {
  private intervalId;

  timer = 0;

  @Input() tab: number;

  constructor(
    private zone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.timer++;
        changeDetectorRef.detectChanges();
      }, 1000);
    });
  }

  public ngOnInit() {
    console.log(`>>> TestComponent ${this.tab} initialized`);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
