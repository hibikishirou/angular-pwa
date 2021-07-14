import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptUpdateService } from './services/prompt-update.service';
import { CheckForUpdateService } from './services/check-for-update.service';
import { HandleUnrecoverableStateService } from './services/handle-unrecoverable-state.service';
import { LogUpdateService } from './services/log-update.service';
import { CheckOnlineOfflineService } from './services/check-online-offline.service';
import { DeviceService } from './services/device.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PromptUpdateService,
    CheckForUpdateService,
    HandleUnrecoverableStateService,
    LogUpdateService,
    CheckOnlineOfflineService,
    DeviceService
  ]
})
export class ServicesWorkerModule { }
