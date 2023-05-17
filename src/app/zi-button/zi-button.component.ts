import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ComplexLogicService } from '../complex-logic.service';

@Component({
  selector: 'zi-button',
  templateUrl: './zi-button.component.html',
  styleUrls: ['./zi-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZiButtonComponent {
  @ViewChild('button', { read: MatButton }) button: MatButton;

  constructor(private logicService: ComplexLogicService){

  }
  click() {
    this.logicService.buildEventMessage('')
  }
}
