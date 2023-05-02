import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent {
  subTitle = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((x) => {
      this.subTitle = `${this.subTitle}${x['subTitle']}`;
    });
  }
  click_basic() {
    console.log(this.subTitle);
  }
}
