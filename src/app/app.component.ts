import { Component } from '@angular/core';
import { CheckForUpdateService } from './services-worker/services/check-for-update.service';
import { CheckInstallService } from './services-worker/services/check-install.service';
import { CheckOnlineOfflineService } from './services-worker/services/check-online-offline.service';
import { DeviceService } from './services-worker/services/device.service';
import { HandleUnrecoverableStateService } from './services-worker/services/handle-unrecoverable-state.service';
import { LogUpdateService } from './services-worker/services/log-update.service';
import { PromptUpdateService } from './services-worker/services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa';

  constructor(
    private CheckForUpdateService: CheckForUpdateService,
    private HandleUnrecoverableStateService: HandleUnrecoverableStateService,
    private LogUpdateService: LogUpdateService,
    private PromptUpdateService: PromptUpdateService,
    private CheckOnlineOfflineService: CheckOnlineOfflineService,
    private CheckInstallService: CheckInstallService,
    private DeviceService: DeviceService
  ) { }

  get offlineMode() {
    return this.CheckOnlineOfflineService.isOffline;
  }


  get isInstalled() {
    return this.CheckInstallService.isInstalled;
  }

  installApp() {
    this.CheckInstallService.installApp();
   }
}
