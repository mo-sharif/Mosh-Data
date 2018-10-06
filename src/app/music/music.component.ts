import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service'


@Component({
  selector: 'app-Music',
  templateUrl: './Music.component.html',
  styleUrls: ['./Music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor(private itunes:SearchService) { }

  ngOnInit() {
  }
  doSearch(term:string) {
    this.itunes.search(term)
}
}
