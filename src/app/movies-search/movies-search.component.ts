import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss'],
})
export class MoviesSearchComponent implements OnInit {
  moviesFound: object[] = [];
  query: string = '';

  constructor(private api: ApiMoviesService) {}

  ngOnInit() {}


  search() {
    this.api.searchMovies(this.query).subscribe( (res: any) => {
      this.moviesFound = res.results;
    })
  }
}
