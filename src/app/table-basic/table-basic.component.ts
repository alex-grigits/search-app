import {Component, Input} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import {HttpService} from '../http.service';
import {Repo} from '../models/repo.model';

@Component({
  selector: 'app-table',
  styleUrls: ['./table-basic.component.scss'],
  templateUrl: './table-basic.component.html',
})

export class TableBasicComponent {
  dataSource = new RepoDataSource(this.service);
  displayedColumns = ['name', 'forks', 'watchers', 'created_at']

  @Input() searchText: string = '';
  public searchUser = this.searchText;

  constructor(private service: HttpService) {}

  ngOnInit() {
  }
}


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class RepoDataSource extends DataSource<any> {
  constructor(private service: HttpService) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Repo[]> {
    return this.service.getRepos(this.service.username);
  }

  disconnect() {}
}
