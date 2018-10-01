import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  public name : string;
  public id: string;
  public maxlevel: number;
 cards: any[];
  fetchData() {

    fetch('https://api.clashroyale.com/v1/cards', {
      headers:{
        'authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImExNTQ0MzVjLTQzMjAtNDM3Yi1hZWY3LTQ4ZDUwNWI3NDllOCIsImlhdCI6MTUzODQxOTIwNCwic3ViIjoiZGV2ZWxvcGVyLzFkMjBiZWI3LWYxMjctNjVkMi03NzYyLTczZTkyMDhjYzZkZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzQuMjE0LjIuMTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.ZCTMgY6wQmTY0LAEaforUW4Qzm4RM0jak9o_nU88XeBxrGBfT_fAZNLUkRmcVcCJ1Ww2rE49RYx2nrY4kuPsSA',
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.items);
      //let image = json.data.image.url;
      this.cards = json.items;
    } ,
    err => console.log(err));

  }

  ngOnInit() {
this.fetchData();
  }

}
