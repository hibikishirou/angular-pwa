import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class DeviceService {
  deviceType: 'tablet' | 'mobile' | 'desktop' | 'unknown' | string = '';
  os = '';
  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.getDeviceInfo();
  }

  getDeviceInfo() {
    this.deviceType = this.deviceService.deviceType;
    this.os = this.deviceService.os;
  }
}
