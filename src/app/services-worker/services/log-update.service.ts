import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log('current version is:');
      console.log(event.current);
      console.log('available version is:');
      console.log(event.available);
      // document.location.reload()
    });
    updates.activated.subscribe(event => {
      console.log('old version was:');
      console.log(event.previous);
      console.log('new version is:');
      console.log(event.current);
      // document.location.reload()
    });
  }

}
