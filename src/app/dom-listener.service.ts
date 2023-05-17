import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DomListenerService {
  private click$: Observable<any> = fromEvent(document, 'click');
  private rightClick$: Observable<any> = fromEvent(document, 'auxclick');
  // private mouseOver$: Observable<any> = fromEvent(document, 'mouseover');

  public DOMEvents$() {
    return merge(this.click$, 
      // this.mouseOver$,
       this.rightClick$);
  }
}
