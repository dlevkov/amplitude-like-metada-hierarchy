import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.domService.DOMEvents$().subscribe((evt: PointerEvent) => {
      console.log(evt.target);
    });
  }
}
