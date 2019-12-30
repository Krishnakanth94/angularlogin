import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: `<router-outlet></router-outlet>`,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
