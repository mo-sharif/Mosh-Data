import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ItemsComponent} from '../classes/items/items.component'
import { Observable } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  constructor(private http: Http) {}

  search(term: string): Observable<ItemsComponent[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL).pipe(
      map(res => {
        return res.json().results.map(item => {
          return new ItemsComponent(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}
