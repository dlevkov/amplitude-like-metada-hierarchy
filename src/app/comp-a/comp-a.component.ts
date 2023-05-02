import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
})
export class CompAComponent {
  subTitle = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe((x) => {
      this.subTitle = `${this.subTitle}${x['subTitle']}`;
    });
  }
  click_basic() {
    console.log(this.subTitle);
  }
  click_reroute() {
    this.router.navigateByUrl('b');
  }
}
