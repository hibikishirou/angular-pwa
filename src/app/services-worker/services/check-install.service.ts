import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInstallService implements OnDestroy {
  appInstalledEvent: Observable<Event> | undefined;
  beforeInstallEvent: Observable<Event> | undefined;
  subscriptions: Subscription[] = [];

  promptEvent: any;

  private $isInstalled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  get isInstalled() {
    return this.$isInstalled.asObservable();
  }

  constructor() {
    this.handleAppIsInstallChanges();
  }

  handleAppIsInstallChanges(): void {
    this.appInstalledEvent = fromEvent(window, 'appinstalled');
    this.beforeInstallEvent = fromEvent(window, 'beforeinstallprompt');

    this.subscriptions.push(this.appInstalledEvent.subscribe(e => {
      this.$isInstalled.next(true);
    }));

    this.subscriptions.push(this.beforeInstallEvent.subscribe(e => {
      this.promptEvent = e;
      this.$isInstalled.next(false);
    }));
  }

  installApp() {
    this.promptEvent.prompt();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
