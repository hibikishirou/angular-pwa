import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable()
export class HandleUnrecoverableStateService {
  constructor(updates: SwUpdate) {
    updates.unrecoverable.subscribe(event => {
      console.log('HandleUnrecoverableStateService');
      console.log(event);
    });
  }
}
