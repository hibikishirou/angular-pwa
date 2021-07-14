import { Injectable, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';

@Injectable()
export class CheckOnlineOfflineService implements OnDestroy {
  offlineEvent: Observable<Event> | undefined;
  onlineEvent: Observable<Event> | undefined;
  subscriptions: Subscription[] = [];
  private $isOffline: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isOffline() {
    return this.$isOffline.asObservable();
  }

  constructor(
    private toastrService: ToastrService
  ) {
    this.$isOffline.next(!window.navigator.onLine);
    this.handleAppConnectivityChanges();
  }

  handleAppConnectivityChanges(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.toastrService.success('Online');
      this.$isOffline.next(false);

    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.toastrService.error('Offline')
      this.$isOffline.next(true);
    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
