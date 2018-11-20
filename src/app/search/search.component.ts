import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GithubSearchService } from './service/github-search.service';
import { RepoData } from './module/repo-data'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  repo: string;      // binds repo input field
  dataSource: MatTableDataSource<RepoData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns= ["name", "stars", "license", "forks"];

  constructor(public githubSearchService: GithubSearchService) {}
  ngOnInit() {}

  getRepo() {
    this.githubSearchService.searchRepo(this.repo).subscribe(data => {
      console.log(data['items'])
      this.dataSource = new MatTableDataSource(data['items']);
      this.dataSource.sort = this.sort;
    });
  } // getRepo() ends
}
