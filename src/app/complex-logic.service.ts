import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DomListenerService } from './dom-listener.service';

@Injectable({
  providedIn: 'root',
})
export class ComplexLogicService {
  constructor(
    private route: ActivatedRoute,
    private domService: DomListenerService
  ) {
    this.logAutoEvent();
  }
  buildEventMessage(message: string, params: string[] = []): string {
    const meta = this.route.snapshot.paramMap.get('subTitle') ?? '';
    params.push(meta);
    return `${message}: ${params.join(',')}`;
  }
  logAutoEvent() {
    this.domService.DOMEvents$().subscribe((evt) => {
      const message = this.amplitudeStrategy(evt, this.route.snapshot);
      console.log(message);
    });
  }
  amplitudeStrategy(evt: any, snapshot: ActivatedRouteSnapshot): string {
    console.log({ snapshot });
    console.log({ evt });
    return '';
  }
}
