import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private search_url = 'https://api.github.com/search/repositories?q=';
  private reponame: string;
  constructor(public _http: HttpClient) { }

  searchRepo(reponame: string) {
    this.reponame = reponame;

    // tslint:disable-next-line:max-line-length
    return this._http.get(`${this.search_url}${this.reponame}&per_page=5`);
  } // searchRepo() ends


}
