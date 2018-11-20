import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from './service/github-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  repo: string;      // binds repo input field
  search_repos: any; // stores search repositories data
  username: string;  // binds username input field
  user_profile: any; // stores github user api data
  repo_list: any;    // stores github user's repo data
  dataSource: any;
  displayedColumns= ["seqNo", "stars", "license", "forks"];

  constructor(public githubSearchService: GithubSearchService) { }

  ngOnInit() {
  }

  getRepo() {
    if (this.repo === '') {
      this.search_repos = false;
    }
    this.githubSearchService.searchRepo(this.repo).subscribe(data => {
      this.search_repos = data['items'] ;
      this.dataSource = data['items'];
       console.log(this.search_repos);
    });
  } // getRepo() ends
}
