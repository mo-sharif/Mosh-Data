import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ItemsComponent} from '../classes/items/items.component'

@Injectable()
export class SearchService {

  apiRoot:string = 'https://itunes.apple.com/search';
  results:ItemsComponent[];
  loading:boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;

  }

  search(term:string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json().results.map(item => { 
              return new ItemsComponent(
                  item.trackName,
                  item.artistName,
                  item.trackViewUrl,
                  item.artworkUrl30,
                  item.artistId
              );
            });
          resolve();
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
  }


