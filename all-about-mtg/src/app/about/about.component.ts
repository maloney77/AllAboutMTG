import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p class="about_title">
      Kyle did all of this thats what this is about yo
    </p>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
