import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: '<mat-toolbar color="primary">{{title}}</mat-toolbar>',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit() {
  }

}
