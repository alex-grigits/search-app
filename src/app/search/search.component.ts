import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchStr: string = '';
  minLength: number = 4;

  isLoaded: boolean = false;
  user: string = '';
  repos = [];
  checkedField: string = 'User';

  checkedFields = [
    'User',
    'Repos'
  ];

  constructor(private service: HttpService) { }

  ngOnInit() {
  }

  handleChange(searchText) {
    if(this.checkedField === "User") {
      this.service.getUser(searchText)
        .subscribe(user => {
          this.user = user;
          this.isLoaded = true;
        });
    } else {
      this.service.getRepos(searchText)
        .subscribe(repos => {
          this.repos = repos;
          this.isLoaded = true;
          console.log(this.repos);
        })
    }
  }

}
