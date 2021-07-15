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
  deviceType = '';
  constructor(
    private _checkForUpdateService: CheckForUpdateService,
    private _handleUnrecoverableStateService: HandleUnrecoverableStateService,
    private _logUpdateService: LogUpdateService,
    private _promptUpdateService: PromptUpdateService,
    private _checkOnlineOfflineService: CheckOnlineOfflineService,
    private _checkInstallService: CheckInstallService,
    private _deviceService: DeviceService
  ) {
    this.deviceType = `${this._deviceService.deviceType}-mode`;
  }

  get offlineMode() {
    return this._checkOnlineOfflineService.isOffline;
  }

  get isInstalled() {
    return this._checkInstallService.isInstalled;
  }

  installApp() {
    this._checkInstallService.installApp();
  }
}
