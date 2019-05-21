import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-category',
  templateUrl: './movies-category.component.html',
  styleUrls: ['./movies-category.component.scss'],
})
export class MoviesCategoryComponent implements OnInit {
  category: string;
  validCategories = ['top_rated', 'upcoming', 'popular'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params.category.replace('_', ' ');

      if (this.validCategories.includes(params.category)) {
        // get movies
      } else {
        // redirect to /movies/popular
        this.router.navigate(['/movies/popular'])
      }
    });
  }
}
