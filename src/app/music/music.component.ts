import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service'
import { ItemsComponent } from '../classes/items/items.component'
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

@Component({
  selector: 'app-Music',
  templateUrl: './Music.component.html',
  styleUrls: ['./Music.component.scss']
})

export class MusicComponent implements OnInit {
  
  public loading: boolean = false;
  public results: Observable<ItemsComponent[]>;
  public searchField: FormControl;

  constructor(private itunes: SearchService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.search(term)),
      tap(_ => (this.loading = false))
    );
  }

  doSearch(term: string) {
    this.itunes.search(term);
  }
}


