import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: '<mat-toolbar color="primary">GitHub Search App</mat-toolbar>',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
