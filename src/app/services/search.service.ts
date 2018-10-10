import { Injectable } from '@angular/core';
import { Http , Jsonp, Response} from '@angular/http';
import {ItemsComponent} from '../classes/items/items.component'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  constructor(private http: Http, private jsonp: Jsonp) {}

  search(term: string): Observable<ItemsComponent[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL).pipe(
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
