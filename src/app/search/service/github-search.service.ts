import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private search_url = 'https://api.github.com/search/repositories?q=';
  private reponame: string;
  private url = 'https://api.github.com/users/';
  private username: string;
  private client_id = 'CLIENT_ID';
  private client_secret = 'CLIENT_SECRET';

  constructor(public _http: HttpClient) { }

  searchRepo(reponame: string) {
    this.reponame = reponame;

    // tslint:disable-next-line:max-line-length
    //return this._http.get(this.search_url + this.reponame +  '&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&per_page=5');
    return this._http.get(`${this.search_url}${this.reponame}&client_id${this.client_id}&client_secret=${this.client_secret}&per_page=5`);
  } // searchRepo() ends


}
