import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService implements OnDestroy {
  public activeUrl$ = new Subject<string>();

  public ngOnDestroy(): void {
    this.activeUrl$.unsubscribe();
  }
}
