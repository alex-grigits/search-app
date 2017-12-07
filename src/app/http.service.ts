import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { Repo } from './models/repo.model';

@Injectable()
export class HttpService {

  username: string

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    this.username = username;
    return this.http.get(`https://api.github.com/users/${username}`);
      // .map((response: Response) => response.json());
  }

  getRepos(username: string): Observable<Repo[]> {
    this.username = username;
    return this.http.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
      // .map((response: Response) => response.json());
  }
}
