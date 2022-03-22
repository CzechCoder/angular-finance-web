import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoradceService } from 'src/app/Services/poradce.service';

@Component({
  selector: 'app-poradce',
  template: `
  <section class="section">
    <div class="container">

    <div class="card" *ngIf="user">
      <img [src]="user.avatar_url">
    </div>

  </div>
  </section>
  `,
  styles: [
    'img { width: 360px; }'
  ]
})
export class PoradceComponent implements OnInit {
  user=<any>[];

  constructor(
    private poradceService: PoradceService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {

    // fetch username
    this.route.params.subscribe(params => {
      const username = params['username'];

    // use the userservice to get the data
    this.poradceService
    .getUser(username)
    .subscribe(user => this.user = user);
    });
  }
}
