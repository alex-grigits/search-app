import { Component, OnInit, Input } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() isLoaded: boolean = false;
  @Input() user: string = '';
  @Input() repos = [];
  @Input() checkedField: string = 'User';
  @Input() searchText: string = '';


  constructor() { }

  ngOnInit() {
  }

}
