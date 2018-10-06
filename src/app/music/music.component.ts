import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service'


@Component({
  selector: 'app-Music',
  templateUrl: './Music.component.html',
  styleUrls: ['./Music.component.scss']
})

export class MusicComponent implements OnInit {
  
  private loading: boolean = false;

  constructor(private itunes:SearchService) { }

  ngOnInit() {
  }
  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term)
    .then(
      () => this.loading = false
    )
}
}
